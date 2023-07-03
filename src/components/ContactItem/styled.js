import styled from 'styled-components';
export const StyledItem = styled.li`
  max-width: 700px;
  width: 100%;
  display: flex;
  gap: 50px;
  align-items: center;
  font-size: 20px;
  line-height: 1.2;
  margin: 16px auto;

  .text-field {
    font-size: 20px;
    font-weight: 400;
  }

  .delete-button {
    background: #ffffff;
    color: #0c0303;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #1eb9d0;
    cursor: pointer;

    :hover {
      border: 1px solid #f80707;
    }
`;
