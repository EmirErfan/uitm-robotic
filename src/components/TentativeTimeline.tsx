import React from 'react';
import { Clock } from 'lucide-react';

const TentativeTimeline: React.FC = () => {
  const day1Schedule = [
    { time: '8:00 - 9:00 am', program: 'Arrival and Registration' },
    { time: '9:00 - 9:30 am', program: 'Opening Ceremony' },
    { time: '9:30 - 10:30 am', program: 'Grouping Session / All Game Categories' },
    { time: '10:30 - 11:00 am', program: 'Tea Break' },
    { time: '11:00 - 12:30 pm', program: 'Grouping Session / All Game Categories' },
    { time: '12:30 - 2:00 pm', program: 'Lunch Break' },
    { time: '2:00 - 3:00 pm', program: 'Game Briefing' },
    { time: '3:00 - 5:30 pm', program: 'Round 1 Sessions' },
    { time: '5:30 pm', program: 'End' }
  ];

  const day2Schedule = [
    { time: '8:00 - 9:00 am', program: 'Arrival and Registration' },
    { time: '9:00 - 9:30 am', program: 'Game Briefing' },
    { time: '9:30 - 12:30 pm', program: 'Round 2 Sessions - Quarterfinal, Semi-final and Final Sessions' },
    { time: '12:30 - 2:00 pm', program: 'Lunch' },
    { time: '2:00 - 4:00 pm', program: 'Judge & Scoring, Promote Innovation, Tech Talk and Q&A Sessions' },
    { time: '4:00 - 4:30 pm', program: 'Prize Giving' },
    { time: '4:30 - 5:00 pm', program: 'Closing Ceremony for Day 2' },
    { time: '5:00 pm', program: 'End' }
  ];

  const day3Schedule = [
    { time: '8:00 - 9:00 am', program: 'Arrival and Registration' },
    { time: '9:00 - 9:30 am', program: 'Game Briefing' },
    { time: '9:30 - 12:30 pm', program: 'Round 2 Sessions - Quarterfinal, Semi-final and Final Sessions' },
    { time: '12:30 - 2:00 pm', program: 'Lunch' },
    { time: '2:00 - 4:00 pm', program: 'Judge & Scoring, Promote Innovation, Tech Talk and Q&A Sessions' },
    { time: '4:00 - 4:30 pm', program: 'Prize Giving' },
    { time: '4:30 - 5:00 pm', program: 'Closing Ceremony for Day 2' },
    { time: '5:00 pm', program: 'End' }
  ];

  const day4Schedule = [
    { time: '8:00 - 9:00 am', program: 'Arrival and Registration' },
    { time: '9:00 - 9:30 am', program: 'Game Briefing' },
    { time: '9:30 - 12:30 pm', program: 'Round 2 Sessions - Quarterfinal, Semi-final and Final Sessions' },
    { time: '12:30 - 2:00 pm', program: 'Lunch' },
    { time: '2:00 - 4:00 pm', program: 'Judge & Scoring, Promote Innovation, Tech Talk and Q&A Sessions' },
    { time: '4:00 - 4:30 pm', program: 'Prize Giving' },
    { time: '4:30 - 5:00 pm', program: 'Closing Ceremony for Day 2' },
    { time: '5:00 pm', program: 'End' }
  ];

  const ScheduleDay = ({ title, schedule }: { title: React.ReactNode; schedule: typeof day1Schedule }) => (
    <div className="p-8 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md hover:border-purple-400/50 transition-all duration-300">
      <h3 className="text-2xl font-bold text-yellow-400 mb-8 text-center flex items-center justify-center gap-2">
        <Clock size={24} />
        {title}
      </h3>

      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200"
          >
            <div className="text-purple-400 font-semibold text-sm sm:text-base min-w-[140px]">
              {item.time}
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              {item.program}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20" id="tentative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-monoton text-center text-white mb-16">
          Tentative <span className="text-yellow-400">Timeline</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScheduleDay title={<><span className="font-monoton">Day 1</span> </>} schedule={day1Schedule} />
          <ScheduleDay title={<><span className="font-monoton">Day 2</span> </>} schedule={day2Schedule} />
          <ScheduleDay title={<><span className="font-monoton">Day 3</span> </>} schedule={day3Schedule} />
          <ScheduleDay title={<><span className="font-monoton">Day 4</span> </>} schedule={day4Schedule} />
        </div>
      </div>
    </section>
  );
};

export default TentativeTimeline;
