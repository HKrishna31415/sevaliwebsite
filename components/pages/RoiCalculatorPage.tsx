import React, { useState, useEffect, useRef } from 'react';
import { RoiIllustration } from '../RoiIllustration';
import PageHero from '../PageHero';

// Animated number component to make results more dynamic
const AnimatedNumber: React.FC<{ value: number; formatter: (val: number) => string; }> = ({ value, formatter }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    const startValue = prevValueRef.current;
    const endValue = value;
    const duration = 1500; // ms
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = startValue + progress * (endValue - startValue);
      setDisplayValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
        prevValueRef.current = endValue;
      }
    };

    requestAnimationFrame(animate);

    // Store the final value for the next animation's start
    return () => { prevValueRef.current = value };
  }, [value]);

  return <span>{formatter(displayValue)}</span>;
};


const RoiCalculatorPage: React.FC = () => {
  const [inputs, setInputs] = useState({
    dailyVolume: '10000',
    fuelPrice: '3.50',
    unitCost: '70000',
  });
  const [unitSystem, setUnitSystem] = useState<'gallons' | 'liters'>('gallons');
  const [results, setResults] = useState({
    annualSavings: 0,
    roiMonths: 0,
  });
  const [isCalculated, setIsCalculated] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const { dailyVolume, fuelPrice, unitCost } = inputs;
    const volume = parseFloat(dailyVolume);
    const price = parseFloat(fuelPrice);
    const cost = parseFloat(unitCost);

    if (isNaN(volume) || isNaN(price) || isNaN(cost) || volume <= 0 || price <= 0 || cost <= 0) {
      alert("Please enter valid positive numbers for all fields.");
      return;
    }
    
    // Convert inputs to gallons for consistent calculation
    const volumeInGallons = unitSystem === 'liters' ? volume / 3.78541 : volume;
    const pricePerGallon = unitSystem === 'liters' ? price * 3.78541 : price;

    const VAPOR_LOSS_FACTOR = 0.0015; // Assumed average loss factor (0.15%)
    const RECOVERY_EFFICIENCY = 0.99; // 99% recovery rate

    const dailyRecoveredVolume = volumeInGallons * VAPOR_LOSS_FACTOR * RECOVERY_EFFICIENCY;
    const dailySavings = dailyRecoveredVolume * pricePerGallon;
    const annualSavings = dailySavings * 365;
    const roiMonths = (cost / annualSavings) * 12;

    setResults({
      annualSavings,
      roiMonths,
    });
    setIsCalculated(true);
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }
  
  const formatMonths = (value: number) => {
      return value.toFixed(1);
  }

  const volumeUnitLabel = unitSystem === 'gallons' ? 'Gallons' : 'Liters';
  const priceUnitLabel = unitSystem === 'gallons' ? 'Gallon' : 'Liter';

  return (
    <>
      <PageHero
        title="ROI Calculator"
        subtitle="Estimate your potential savings and see how quickly a Sevali Energy VRU can pay for itself."
        backgroundImageUrl="https://images.unsplash.com/photo-1640653799824-a7457551c9c0?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            {/* Form Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Calculate Your Savings</h2>
              <p className="text-gray-500 mb-6">Enter your facility's details to get a personalized estimate.</p>
              
              <div className="flex justify-center mb-6">
                <div className="bg-gray-200 rounded-full p-1 flex">
                    <button onClick={() => setUnitSystem('gallons')} className={`px-4 py-1 text-sm font-semibold rounded-full transition-colors ${unitSystem === 'gallons' ? 'bg-amber-500 text-white shadow' : 'text-gray-600'}`}>
                        Gallons
                    </button>
                    <button onClick={() => setUnitSystem('liters')} className={`px-4 py-1 text-sm font-semibold rounded-full transition-colors ${unitSystem === 'liters' ? 'bg-amber-500 text-white shadow' : 'text-gray-600'}`}>
                        Liters
                    </button>
                </div>
              </div>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <label htmlFor="dailyVolume" className="block text-sm font-medium text-gray-700 mb-1">Average Daily Fuel Volume ({volumeUnitLabel})</label>
                  <div className="flex items-center space-x-4">
                    <input type="number" name="dailyVolume" id="dailyVolume" value={inputs.dailyVolume} onChange={handleInputChange} className="w-32 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
                    <input type="range" name="dailyVolume" value={inputs.dailyVolume} onChange={handleInputChange} min={unitSystem === 'gallons' ? 1000 : 4000} max={unitSystem === 'gallons' ? 50000 : 75000} step={unitSystem === 'gallons' ? 100 : 500} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="fuelPrice" className="block text-sm font-medium text-gray-700 mb-1">Price Per {priceUnitLabel} ($)</label>
                   <div className="flex items-center space-x-4">
                    <input type="number" name="fuelPrice" id="fuelPrice" step="0.01" value={inputs.fuelPrice} onChange={handleInputChange} className="w-32 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
                    <input type="range" name="fuelPrice" value={inputs.fuelPrice} onChange={handleInputChange} min={unitSystem === 'gallons' ? 1 : 0.25} max={unitSystem === 'gallons' ? 10 : 2} step="0.01" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="unitCost" className="block text-sm font-medium text-gray-700 mb-1">Estimated VRU Investment ($)</label>
                   <div className="flex items-center space-x-4">
                    <input type="number" name="unitCost" id="unitCost" value={inputs.unitCost} onChange={handleInputChange} className="w-32 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
                    <input type="range" name="unitCost" value={inputs.unitCost} onChange={handleInputChange} min="50000" max="500000" step="1000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                  Calculate ROI
                </button>
              </form>
            </div>

            {/* Results & Illustration Section */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-900 text-white p-8 rounded-lg flex flex-col justify-between items-center text-center">
                <div className="w-full">
                    <div className="min-h-[280px] flex flex-col justify-center">
                        {!isCalculated && (
                            <div className="text-gray-400 animate-fade-in">
                                <h3 className="text-2xl font-bold text-white mb-4">Your Potential Return</h3>
                                <p>Enter your facility's details and click "Calculate ROI" to see your personalized estimate.</p>
                            </div>
                        )}
                        {isCalculated && (
                            <div className="space-y-4 animate-fade-in">
                                <div>
                                    <p className="text-sm uppercase tracking-wider text-amber-300 mb-2">Estimated Annual Savings</p>
                                    <p className="text-5xl font-bold text-white">
                                        <AnimatedNumber value={results.annualSavings} formatter={formatCurrency} />
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <p className="text-sm uppercase tracking-wider text-amber-300 mb-2">Projected ROI</p>
                                    <p className="text-5xl font-bold text-white">
                                        <AnimatedNumber value={results.roiMonths} formatter={formatMonths} />
                                        <span className="text-3xl font-normal ml-2">months</span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="w-full mt-auto">
                    <div className="w-full mt-6 flex items-center justify-center h-full">
                        <RoiIllustration className="max-w-[250px] mx-auto" annualSavings={results.annualSavings} />
                    </div>
                    <p className="text-xs text-gray-400 mt-6">
                        *Estimates are based on an average vapor loss factor of 0.15% and 99% VRU efficiency. Actual results may vary based on specific operational conditions.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </>
  );
};

export default RoiCalculatorPage;