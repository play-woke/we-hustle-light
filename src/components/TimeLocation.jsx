import { useState, useEffect } from 'react';

const TimeLocation = () => {
  const [timeData, setTimeData] = useState({
    date: '',
    time: '',
    city: '',
    zone: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Get timezone info
      const options = Intl.DateTimeFormat().resolvedOptions();
      const timezone = options.timeZone || 'UTC';

      // Extract city from timezone (e.g., "America/New_York" -> "NYC")
      const cityPart = timezone.split('/').pop() || 'UTC';
      const cityAbbreviations = {
        'New_York': 'NYC',
        'Los_Angeles': 'LA',
        'Chicago': 'CHI',
        'Atlanta': 'ATL',
        'Karachi': 'KHI',
        'London': 'LDN',
        'Paris': 'PAR',
        'Tokyo': 'TYO',
        'Dubai': 'DXB',
        'Sydney': 'SYD',
        'Mumbai': 'BOM',
        'Delhi': 'DEL',
        'Singapore': 'SIN',
        'Hong_Kong': 'HKG',
        'Toronto': 'YTO',
        'Vancouver': 'YVR',
        'Berlin': 'BER',
        'Amsterdam': 'AMS'
      };
      const city = cityAbbreviations[cityPart] || cityPart.substring(0, 3).toUpperCase();

      // Get timezone offset and convert to Roman numeral zone
      const offset = -now.getTimezoneOffset() / 60;
      const absOffset = Math.abs(offset);
      const romanNumerals = ['O', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
      const zone = romanNumerals[Math.floor(absOffset)] || absOffset.toString();

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
        time: `${hours}:${minutes} ${ampm}`,
        city,
        zone: `ZONE ${zone}`
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-location">
      {timeData.date} {timeData.time} {timeData.city} {timeData.zone}
    </div>
  );
};

export default TimeLocation;
