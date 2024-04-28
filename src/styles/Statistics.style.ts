import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 600px;
  margin: 20px auto;
`;

export const StatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticValue = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const StatisticLabel = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  color:#AB336B;
  margin-top: 5px;
  font-weight: bold;
`;

export const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #2E313F;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background-color: #D74F7A;
      
  }
`;
