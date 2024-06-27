// components/CountdownTimer.js
'use client'
import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date().getTime();
    const final = 90
    const distance = new Date(targetDate).getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      final: final
    };
  }

  return (
    <div className="flex items-center justify-center m-4 bg-transparent">
      <div className="text-center bg-slate-900 dark:bg-gray-200 text-white dark:text-black  p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4"> OPT Countdown Timer</h1>
        <div className="text-2xl font-mono">
        <span className="px-4">Days</span><span className="px-4">Hrs</span><span className="px-4">Min</span><span className="px-4">Secs</span>
            </div> 
        <div className="text-4xl font-mono">
          <span className="px-2">{timeLeft.days}</span>:<span className="px-2">{timeLeft.hours}</span>:<span className="px-2">{timeLeft.minutes}</span>:<span className="px-2">{timeLeft.seconds}</span>
        </div>
        <div className='text-gray-400 pt-3 text-center '>
          <h4 className=' ease-in duration-250 hover:text-white'>Days elapsed {timeLeft.final-timeLeft.days}</h4>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;