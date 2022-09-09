import React from "react";

const DeleteUser = () => {
  return (
    <form className="form-floating">
      <input
        type="text"
        className="form-control"
        id="floatingInputValue"
        placeholder="FS***"
        value="FS***"
      />
      <label for="floatingInputValue">Enter User Id</label>
    </form>
  );
};

export default DeleteUser;
