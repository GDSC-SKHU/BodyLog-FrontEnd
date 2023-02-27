import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import styled from 'styled-components';
import RenderHeader from '@/components/RenderHeader';
import RenderDays from '@/components/RenderDays';
import RenderCells from '@/components/RenderCells';

function Calender() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day: React.SetStateAction<Date>) => {
    setSelectedDate(day);
  };

  return (
    <StyledCalendar>
      <RenderHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
      <RenderDays />
      <RenderCells currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick} />
    </StyledCalendar>
  );
}

export default Calender;

const StyledCalendar = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
`;
