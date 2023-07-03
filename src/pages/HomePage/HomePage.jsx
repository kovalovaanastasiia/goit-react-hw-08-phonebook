import {Link} from "react-router-dom";

import {StyledMain} from "./styled";

import background from '../../images/main_bckg.jpg';


const HomePage = () => {

  return (
    <StyledMain
      style={{backgroundImage: `url(${background})`}}>
      <div className="text-wrap">
        <p className="main-text">Application for saving phone numbers</p>
        <h1 className="main-title">Quick contact</h1>
        <Link className="main-text link" to="/registration">Save your important contacts in a few clicks ➜</Link>
      </div>

    </StyledMain>
  );
}
export default HomePage;
