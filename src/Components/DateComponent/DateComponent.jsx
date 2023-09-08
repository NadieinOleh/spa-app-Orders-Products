import { memo, useEffect, useState } from 'react';
import { Badge, Navbar } from 'react-bootstrap';
import socketIOClient from 'socket.io-client';

import './index.scss';

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
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

export const DateComponent = memo(() => {
  const [activeSessions, setActiveSessions] = useState(0);
  const currentDate = new Date();

  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3000');

    socket.on('connect', () => {
      // eslint-disable-next-line no-console
      console.log('Подключено к серверу WebSocket');
    });

    socket.on('activeSessions', (count) => {
      setActiveSessions(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
  const ukrainianMonth = months[monthIndex].slice(0, 3);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDate();
  const year = date.getFullYear();

  day = day < 10 ? '0' + day : day;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  const time = `${hours}:${minutes}`;
  const dayAndMonth = `${day} ${ukrainianMonth}, ${year}`;

  return (
    <Navbar.Brand className="Date">
      <div className="Date__format">{ukrainianDayOfWeek}</div>

      <div className="Date__block">
        <span className="Date__format">{dayAndMonth}</span>

        <span className="Date__format Date__format--clock">
          {time}

          <Badge pill bg="success" className="m-1">
            {activeSessions}
          </Badge>
        </span>
      </div>
    </Navbar.Brand>
  );
});
