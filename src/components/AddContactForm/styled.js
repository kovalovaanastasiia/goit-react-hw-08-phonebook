import styled from 'styled-components';
export const StyledForm = styled.form`

  max-width: 700px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;


  .form-title {
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
  .form-label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .label-name {
    color: #000;
    font-size: 18px;
    font-weight: 500;
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

  .form-btn {
    background: #ffffff;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #1eb9d0;

    :hover {
      background: #1eb9d0;
      color: #ffffff;

    }
  }
`;
