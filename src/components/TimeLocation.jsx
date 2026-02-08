import { useState, useEffect } from 'react';

const TimeLocation = () => {
  const [timeData, setTimeData] = useState({
    date: '',
    time: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format date (e.g., "JAN 19")
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const month = months[now.getMonth()];
      const day = now.getDate();

      // Format time (e.g., "8:38 PM")
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      setTimeData({
        date: `${month} ${day}`,
        time: `${hours}:${minutes} ${ampm}`
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-location">
      {timeData.date} {timeData.time} ATL ZONE IV
    </div>
  );
};

export default TimeLocation;
