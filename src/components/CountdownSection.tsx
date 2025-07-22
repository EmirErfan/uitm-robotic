import React, { useState, useEffect } from 'react';

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const competitionDate = new Date();
    competitionDate.setDate(competitionDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = competitionDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-black/60 border border-purple-500/30 rounded-xl p-4 min-w-[80px] text-center backdrop-blur-md">
        <div className="text-2xl md:text-3xl font-bold text-yellow-400">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <span className="text-gray-300 text-sm mt-2 font-medium">{label}</span>
    </div>
  );

  return (
    <section id="countdown" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center justify-center">

          {/* Registration Timer */}
          <div className="w-full p-8 rounded-2xl border border-red-500/30 bg-white/5 backdrop-blur-md">
            <h3 className="text-2xl font-monoton text-white mb-6 text-center">Registration</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <TimeBox value={0} label="Days" />
              <TimeBox value={0} label="Hours" />
              <TimeBox value={0} label="Min" />
              <TimeBox value={0} label="Sec" />
            </div>
            <p className="text-center text-green-400 font-semibold text-lg">Registration Open</p>
          </div>

          {/* Competition Timer */}
          <div className="w-full p-8 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md">
            <h3 className="text-2xl font-monoton text-white mb-6 text-center">Competition</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Min" />
              <TimeBox value={timeLeft.seconds} label="Sec" />
            </div>
            <p className="text-center text-purple-400 font-semibold text-lg">Until Competition Starts</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
