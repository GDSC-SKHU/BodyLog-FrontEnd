import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { format } from 'date-fns';
import styled from 'styled-components';

interface CProps {
  currentMonth: any;
  selectedDate: any;
  onDateClick: any;
}

function RenderCells({ currentMonth, selectedDate, onDateClick }: CProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push(
        <StyledColCell className={`col cell ${!isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day, selectedDate) ? 'selected' : format(currentMonth, 'M') !== format(day, 'M') ? 'not-valid' : 'valid'}`} key={day} onClick={() => onDateClick()}>
          <StyledSpan className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid' : ''}>{formattedDate}</StyledSpan>
        </StyledColCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<StyledRow key={day}>{days}</StyledRow>);
    days = [];
  }
  return <StyledBody>{rows}</StyledBody>;
}

export default RenderCells;

const StyledBody = styled.body`
  width: 100%;
  height: 89%;
  flex-direction: column;
`;

const StyledRow = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledColCell = styled.div`
  width: 13.5%;
  height: 93%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  //? transparent 사용법?
  border: 0.4px solid transparent(gray, 0.4);
  border-radius: 3px;
  font-size: 0.8em;

  &:hover {
    box-shadow: 1.5px darkgray;
    transform: scale(1.01);
    border: none;

    background: transparent(gray, 0.5);
  }
`;

const StyledSpan = styled.span`
  margin: 4px 0 0 4px;
`;

//? img(opacity: 0.1)가 어디있지
//TODO col-cell에서 비활시, 선택시, 유효시? 마다 스타일 다르게
