import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsAuth,
  selectIsLoading
} from "../../redux/selectors";
import {getContactThunk} from "../../redux/auth/thunks";
import {ContactItem} from "../ContactItem/ContactItem";

import {StyledList} from './styled';


export const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isAuth = useSelector(selectIsAuth);

  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);


  useEffect(() => {
    if (!isAuth) return;

    dispatch(getContactThunk());
  }, [isAuth, dispatch]);

  return (
    <StyledList>
      {isLoading && <p className="alarm-text"> Please wait. Your contacts are loading...</p>}

      {items && Array.isArray(items) && items.length !== 0 ? (
        <StyledList>
          {items
            .filter(({name}) =>
              name.toLowerCase().includes(filter.value.toLowerCase())
            )
            .map((contact) => {
              return <ContactItem key={contact.id} contact={contact}/>;
            })}
        </StyledList>
      ) : (
        <p className="alarm-text">Unfortunately, your contact list is empty... Let's add new contact</p>
      )}
      {error && <h3 className="wrong-text">Oops... Something went wrong</h3>}
    </StyledList>
  );
};

