import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

import {Form} from "../../components/AddContactForm/Form";
import {Filter} from "../../components/Filter/Filter";
import {ContactList} from "../../components/ContactList/ContactList";

import {selectIsAuth} from "../../redux/selectors";

import {ToastContainer} from "react-toastify";

const Contacts = () => {
  const navigate = useNavigate();
  const isLoading = useSelector((store) => store.contacts.contacts.loading);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    !isAuth && navigate("/logIn");
  }, [isAuth, navigate]);

  return (
    <div>
      <Form/>
      <Filter/>
      {isLoading && <h3> Please wait. Contacts are downloading</h3>}
      <ContactList/>
      <ToastContainer/>
    </div>
  );
}
export default Contacts;
