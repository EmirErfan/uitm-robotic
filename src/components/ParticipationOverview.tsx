import React from 'react';
import { Users, Building, Trophy } from 'lucide-react';

const ParticipationOverview: React.FC = () => {
  const stats = [
    { icon: Trophy, number: '524', label: 'Total Teams', color: 'text-yellow-400' },
    { icon: Building, number: '227', label: 'Total Schools/Affiliations', color: 'text-purple-400' },
    { icon: Users, number: '1,653', label: 'Total Participants', color: 'text-blue-400' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Participation <span className="text-yellow-400">Overview</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md hover:border-purple-400/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center border border-purple-500/50 group-hover:border-purple-400/70 transition-all duration-300">
                    <IconComponent size={28} className={`${stat.color} group-hover:scale-110 transition-transform duration-200`} />
                  </div>
                </div>

                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>

                <p className="text-gray-300 font-semibold text-lg">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25">
            Participant List and Invitation Letter
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParticipationOverview;
