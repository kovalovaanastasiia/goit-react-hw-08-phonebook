import {useDispatch} from "react-redux";

import {deleteContactThunk} from "../../redux/auth/thunks";

import {StyledItem} from "./styled";

export function ContactItem({contact}) {
  const dispatch = useDispatch();

  const deleteHandler = (contactId) => {
    dispatch(deleteContactThunk(contactId));

  };

  return (
    <StyledItem>
      <p className="text-field">{contact.name}</p>
      <span className="text-field">{contact.number}</span>
      <button
        type='button'
        className='delete-button'
        onClick={() => deleteHandler(contact.id)}
      >
        Delete
      </button>
    </StyledItem>
  );
}

