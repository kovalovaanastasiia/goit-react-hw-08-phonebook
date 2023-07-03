import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {selectIsAuth} from "../../redux/selectors";
import {logOutThunk} from "../../redux/auth/thunks";

import {StyledContainer} from "./styled";

export const Layout = ({children}) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <StyledContainer>
      <header className="app-bar">

        <NavLink className="app-bar-link" to="/home">Home</NavLink>
        {isAuth ? (
          <button className="logOut-btn" onClick={handleLogOut}>LogOut</button>
        ) : (
          <>
            <NavLink className="app-bar-link" to="/registration">
              {" "}
              Registration
            </NavLink>
            <NavLink className="app-bar-link" to="/logIn">
              {" "}
              LogIn
            </NavLink>
          </>
        )}
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="footer-bar">
          <p className="footer-text">Copyright © 2023. Created by Anastasiia Kovalova.</p>
        </div>
      </footer>
    </StyledContainer>
  );
}
