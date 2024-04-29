import styled from "styled-components";

export const TableContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin: 15px auto;
  padding: 20px 50px;
  border-radius: 10px;
  overflow-x: auto;
  background-color: #f2f2f2;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 12px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;

  th,
  td {
    padding: 10px 10px 10px 10px;
    border: 1px solid #aaa;
    text-align: center;
    border-radius: 5px;
  }

  th {
    background-color:#ff4081;
    color: #eeeeee;
  }
`;


