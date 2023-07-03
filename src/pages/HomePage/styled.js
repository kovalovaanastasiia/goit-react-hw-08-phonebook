import styled from 'styled-components';


export const StyledMain = styled.div`
  min-height: 80vh;
  background-repeat: no-repeat;
  background-size: contain;
  align-items: center;


  .text-wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 250px;
    padding-top: 250px;
  }

  .main-text {
    color: #000;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;

  }

  .link {
    transition: margin-left 0.3s ease;

    :hover {
      margin-left: 50px;
    }
  }

  .main-title {
    transition: font-size 0.3s ease, color 0.3s ease;
    :hover {
      font-size: 2.4em;
      color: white;
    }
  }

`;
