import styled from "styled-components";

export const Table = styled.table`
display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns: 
    minmax(100px, 0.9fr)
    minmax(100px, 0.7fr)
    minmax(100px, 0.6fr)
    minmax(100px, 0.9fr)
    minmax(100px, 0.6fr)
    minmax(100px, 1fr)
`;

export const TableHead = styled.thead`
  background-color: azure;
  display: contents;
`;


export const TableBody = styled.tbody`
  display: contents;
`;
export const TableHeadCell = styled.th`
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  position: sticky;
  top: 0;
  background: #6c7ae0;
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;

  &:last-child {
    border: 0;
  }
`;

export const TableRowEl = styled.tr`
  display: contents;
  cursor: pointer;
  background-color: azure;

  &:nth-child(even) td {
    background: #f8f6ff;
  }

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: azure;
    transform: scale(1);
    font-weight: bold;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const TableDataCell = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
  /* padding: 15px; */
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

 

  
`;

export const ButtonWrap = styled.div`
display:inline-flex;
margin-right: 15px;

`