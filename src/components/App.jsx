import {Phonebook} from './Phonebook';
import {nanoid} from 'nanoid';
import {Filter} from './Filter';
import {Contacts} from './Contacts';
import {useDispatch, useSelector} from 'react-redux';
import {
  addPhone,
  deletePhone,
  selectContactsDetails,
  selectFilterDetails,
  setFilter,
} from 'redux/reducer';

export const App = () => {
  const contacts = useSelector (selectContactsDetails);
  const filter = useSelector (selectFilterDetails);
  const dispath = useDispatch ();
  const toggle = (name, tel) => {
    let masName = [];
    contacts.forEach (date => {
      return masName.push (date.name);
    });
    if (masName.includes (name)) {
      return alert ('Rosie Simpson is already in contacts');
    }
    return dispath (
      addPhone ({
        name: name,
        id: nanoid (),
        tel: tel,
      })
    );
  };

  const changeFilter = value => {
    dispath (setFilter (value));
  };
  const deleteContact = id => {
    dispath (deletePhone (id));
  };
  return (
    <div>

      <h1 style={{textAlign: 'center'}}>Phonebook</h1>
      <Phonebook toggle={toggle} />
      <h2 style={{textAlign: 'center'}}>Contact</h2>
      <Filter changeFilter={changeFilter} />
      <Contacts
        allContacts={contacts}
        valueFilter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
};
