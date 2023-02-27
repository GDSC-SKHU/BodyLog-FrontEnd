import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

interface HProps {
  currentMonth: any;
  prevMonth: any;
  nextMonth: any;
}

function RenderHeader({ currentMonth, prevMonth, nextMonth }: HProps) {
  return (
    <StyledHeaderRow>
      <StyledColStart>
        <StyledText>
          <StyledTextMonth>{format(currentMonth, 'M')}월</StyledTextMonth>
          {format(currentMonth, 'yyyy')}
        </StyledText>
      </StyledColStart>
      <StyledColEnd>
        <Icon icon='bi:arrow-left-circle-fill' onClick={prevMonth} />
        <Icon icon='bi:arrow-right-circle-fill' onClick={nextMonth} />
      </StyledColEnd>
    </StyledHeaderRow>
  );
}

export default RenderHeader;

const StyledHeaderRow = styled.div`
  width: 100%;
  height: 7%;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: baseline;
`;

const StyledColStart = styled.div`
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  /* flex-column(center, flex-start?) */
  margin-left: 1%;
`;

const StyledText = styled.div`
  font-size: 0.8em;
`;

const StyledTextMonth = styled.span`
  margin-right: 5px;
  font-size: 1.6em;
  font-weight: 600;
`;

const StyledColEnd = styled.div`
  width: 20%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;

  &:svg {
    size: 11%;
    width: fit-content;
    margin-left: 5%;
    color: transparent(gray, 0.2);
    &:hover {
      transform: scale(1.15);
      color: darkgray;
    }
  }
  //? svg 사용법..!?
`;
