import styled from 'styled-components';
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  gap: 16px;

  .label-name {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
  }
  .form-input {
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid black;
    border-radius: 10px;

    :hover, :focus, :active {
      border: 1px solid #1eb9d0;

    }
  }

`;
