import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import popTransition from "../../../transitions/pop.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <table className="centered striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Control</th>
          </tr>
        </thead>

        <TransitionGroup component="tbody">
          {contacts.map(contact => {
            return (
              <CSSTransition
                key={contact.id}
                timeout={250}
                classNames={popTransition}
              >
                <tr>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="waves-effect waves-light btn-small"
                    >
                      <i className="material-icons center">delete</i>
                    </button>
                  </td>
                </tr>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </table>
    </>
  );
};

export default ContactList;
