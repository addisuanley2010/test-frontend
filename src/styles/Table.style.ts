import styled from "styled-components";

export const TableContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin: 15px auto;
  overflow-x: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px 10px 10px 10px;
    border: 1px solid #aaa;
    text-align: center;
  }

  th {
    background-color: #353739;
    color: #eeeeee;
  }
`;


