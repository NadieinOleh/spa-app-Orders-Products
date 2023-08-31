import { memo, useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';

const daysOfWeekUkr = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П\'ятниця',
  'Субота',
];

const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень"
];

export const DateComponent = memo(() => {
  const currentDate = new Date();

  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000); 
    return () => {
      clearInterval(timerId); 
    };
  }, []);
  
  const dayIndex = date.getDay();
  const ukrainianDayOfWeek = daysOfWeekUkr[dayIndex];

  const monthIndex = currentDate.getMonth();
  const ukrainianMonth = months[monthIndex];

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();

  return (
    <Navbar.Brand as={'div'} className="NavMenu__brand">
      <span> {ukrainianDayOfWeek} </span>
      <span> {day < 10 ? '0' + day : day} </span>
      <span> {ukrainianMonth} </span>
      <span>
        {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}
      </span>
    </Navbar.Brand>
  );
});