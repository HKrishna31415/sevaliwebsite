
import React, { useState } from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { MaintenanceDiagram } from '../MaintenanceDiagram';
import PageHero from '../PageHero';

const maintenanceData = [
  {
    id: 'filtration',
    title: 'Primary Filtration System',
    description: 'The filtration system removes impurities from the vapor stream to protect downstream components and ensure product purity.',
    tasks: [
      'Monitor pressure drop across the filter to detect blockages.',
      'Replace filter media according to the manufacturer\'s schedule.',
      'Drain any accumulated liquids from the filter housing weekly.',
      'Inspect seals and gaskets during media replacement.',
    ],
  },
  {
    id: 'condenser',
    title: 'Condenser Coil Maintenance',
    description: 'The condenser cools the compressed vapor, turning it back into liquid. Clean coils are crucial for effective heat exchange.',
    tasks: [
      'Inspect coils for dirt and debris buildup monthly.',
      'Gently clean coils with a soft brush and approved cleaner quarterly.',
      'Ensure condenser fan is operating smoothly and quietly.',
      'Check for any signs of refrigerant leaks.',
    ],
  },
  {
    id: 'panel',
    title: 'Control Panel & Sensors',
    description: 'The electronic control system monitors and manages the entire process. Accurate sensor readings are vital for optimal performance.',
    tasks: [
      'Verify sensor readings against manual gauges quarterly.',
      'Check for any error codes or alarms on the display.',
      'Ensure the panel enclosure is sealed and free from moisture.',
      'Test emergency shut-off functionality annually.',
    ],
  },
  {
    id: 'vacuum-pump',
    title: 'Vacuum Pump Maintenance',
    description: 'The vacuum pump is essential for creating the pressure differential needed to draw vapors into the system efficiently.',
    tasks: [
      'Check and change vacuum pump oil as per the schedule.',
      'Inspect inlet filters and clean or replace them monthly.',
      'Verify ultimate vacuum level to ensure performance.',
      'Check for oil leaks around seals and fittings.',
    ],
  },
  {
    id: 'oil-pump',
    title: 'Oil Circulation Pump',
    description: 'This pump circulates lubricating and cooling oil throughout the system, primarily for the compressor and other moving parts.',
    tasks: [
      'Listen for abnormal pump noise, such as cavitation or bearing wear.',
      'Check oil pressure to ensure it is within the specified range.',
      'Inspect for leaks at the pump shaft seal and connections.',
      'Take regular oil samples for analysis to monitor for contamination.',
    ],
  },
  {
    id: 'compressor',
    title: 'Compressor Unit Maintenance',
    description: 'The compressor is the heart of the VRU, responsible for pressurizing the vapor. Regular checks ensure its longevity and efficiency.',
    tasks: [
      'Check and top up oil levels monthly.',
      'Listen for unusual noises or vibrations during operation.',
      'Inspect drive belts for wear and tension quarterly.',
      'Clean intake filters weekly.',
    ],
  },
];

const scheduleData = [
    { frequency: 'Daily', task: 'General visual inspection for leaks or damage.' },
    { frequency: 'Daily', task: 'Check system pressure and temperature readings on control panel.' },
    { frequency: 'Weekly', task: 'Clean compressor intake filters.' },
    { frequency: 'Weekly', task: 'Drain liquids from filtration system housing.' },
    { frequency: 'Weekly', task: 'Conduct a detailed leak inspection on all piping and valves.' },
    { frequency: 'Monthly', task: 'Check compressor oil levels.' },
    { frequency: 'Monthly', task: 'Inspect condenser coils for debris.' },
    { frequency: 'Monthly', task: 'Test automated valve actuation.' },
    { frequency: 'Quarterly', task: 'Clean condenser coils thoroughly.' },
    { frequency: 'Quarterly', task: 'Inspect compressor belts for wear and tension.' },
    { frequency: 'Quarterly', task: 'Calibrate pressure and temperature sensors.' },
    { frequency: 'Annually', task: 'Perform emergency shut-off test.' },
    { frequency: 'Annually', task: 'Test pressure relief valves.' },
    { frequency: 'Annually', task: 'Full system diagnostic by a certified technician.' },
];

const MaintenancePage: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string>('vacuum-pump');
  const activePartData = maintenanceData.find(p => p.id === selectedPart) || maintenanceData[0];

  return (
    <>
      <PageHero
        title="VRU Maintenance Guide"
        subtitle="Proper maintenance is key to ensuring your vapor recovery system operates at peak efficiency, safety, and reliability."
        backgroundImageUrl="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1920&auto=format&fit=crop"
      />
      <div className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Maintenance Diagram</h2>
            <p className="leading-relaxed text-gray-600">
              Select a component on the diagram below to view its specific maintenance tasks and requirements.
            </p>
          </div>

          {/* Interactive Diagram Section */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg mb-24">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                      <MaintenanceDiagram activePart={selectedPart} onPartSelect={setSelectedPart} />
                  </div>
                  <div className="bg-white p-6 rounded-lg min-h-[350px]">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{activePartData.title}</h3>
                      <p className="mb-6">{activePartData.description}</p>
                      <ul className="space-y-3">
                          {activePartData.tasks.map((task, index) => (
                              <li key={index} className="flex items-start">
                                  <CheckIcon className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                                  <span>{task}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>

          {/* Maintenance Schedule Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preventative Maintenance Schedule</h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                      <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Frequency
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                              Task
                          </th>
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {scheduleData.map((item, index) => (
                      <tr key={index} className={ index % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'}>
                          <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  item.frequency === 'Daily' ? 'bg-blue-100 text-blue-800' :
                                  item.frequency === 'Weekly' ? 'bg-green-100 text-green-800' :
                                  item.frequency === 'Monthly' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                              }`}>
                                  {item.frequency}
                              </span>
                          </td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">
                              {item.task}
                          </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
