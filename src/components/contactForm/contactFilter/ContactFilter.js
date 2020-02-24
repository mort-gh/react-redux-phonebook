import React from "react";
import { CSSTransition } from "react-transition-group";
import popTransition from "../../../transitions/pop.module.css";

const ContactFilter = ({ contacts, onFilterContacts }) => {
  return (
    <>
      <CSSTransition
        classNames={popTransition}
        in={contacts.length > 1}
        unmountOnExit
        timeout={250}
      >
        <div className="filter">
          <h5>Find contact</h5>

          <input
            onChange={e => onFilterContacts(e.target.value)}
            type="search"
            autoComplete="off"
            placeholder="Start type to search ..."
            name="filter"
          />
        </div>
      </CSSTransition>
    </>
  );
};

export default ContactFilter;
