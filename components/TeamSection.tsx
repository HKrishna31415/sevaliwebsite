import React from 'react';

const teamMembers = [
  {
    name: 'Yalchin Aliyev',
    title: 'President & Founder',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&auto=format&fit=crop',
    style: 'bg-[#0F4C5C]',
  },
  {
    name: 'Elnur Mustafayev',
    title: 'Chief Executive Officer',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    style: 'bg-gradient-to-r from-[#E8715A] to-[#F2B65D]',
  },
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <div className="text-center group">
    <div className="relative inline-block">
      <img
        src={member.imageUrl}
        alt={`Photo of ${member.name}`}
        className="w-full max-w-xs mx-auto h-auto object-cover"
      />
      <div className={`w-full text-white py-4 px-2 ${member.style}`}>
        <p className="font-semibold text-lg">{member.name} <span className="font-light text-red-200">{member.title}</span></p>
      </div>
    </div>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0F4C5C]">Our Team</h2>
        <div className="w-20 h-1 bg-[#E8715A] mx-auto my-4 rounded"></div>
        <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;