import { connect } from "react-redux";
import {
  addContact,
  filterContacts,
  deleteContact
} from "../redux/contacts/formActions";
import ContactForm from "../components/contactForm/ContactForm";

const mSTP = state => state;

export default connect(mSTP, { addContact, filterContacts, deleteContact })(
  ContactForm
);
