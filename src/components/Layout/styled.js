import styled from 'styled-components';
export const StyledContainer = styled.div`

  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  .app-bar {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 40px;
    padding-top: 20px;
    padding-bottom: 20px;

  }

  .app-bar-link {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: 500;

    :hover {
      color: #1eb9d0;

    }
  }
  .app-bar-link[aria-current='page'] {
    color: #1eb9d0;
  }

  .logOut-btn {
    font-size: 18px;
    background: #ffffff;
    padding: 10px;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #1eb9d0;

    :hover {
      background: #1eb9d0;
      color: #ffffff;

    }
  }
.footer-bar {
  background-color: rgba(30, 185, 208, 0.09);
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;

}

`;
