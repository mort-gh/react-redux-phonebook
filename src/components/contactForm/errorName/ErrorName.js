import React from "react";
import css from "./ErrorName.module.css";

const ErrorName = ({ name }) => {
  return (
    <div className={css.block}>
      <i class="material-icons left">error_outline</i> "{name}" is already in
      contacts
    </div>
  );
};

export default ErrorName;
