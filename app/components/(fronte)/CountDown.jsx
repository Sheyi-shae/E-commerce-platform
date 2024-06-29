'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline }) => {
    const calculateTimeLeft = (targetDate) => {
        const now = Date.now();
        const difference = targetDate - now;
        return Math.max(difference, 0); // Ensure non-negative time
      };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  useEffect(() => {
    const timerId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(deadline);
      if (newTimeLeft <= 0) {
        clearInterval(timerId);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000); // Update every second

    return () => clearInterval(timerId);
  }, [deadline]); // Re-run effect when deadline changes

 

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days ? days + 'd ' : ''}${hours ? hours + 'h ' : ''}${minutes ? minutes + 'm ' : ''}${seconds}s`;
  };

  return (
    <div>
      {timeLeft > 0 ? (
        <div dangerouslySetInnerHTML={{ __html: ` ${formatTime(timeLeft)}` }}
         className='text-lg p-2 md:p-0 md:text-3xl flex justify-center font-semibold md:font-bold text-red-600'/>
      ) : (
        <div>Offer has ended</div>
      )}
    </div>
  );
};

export default CountdownTimer;
