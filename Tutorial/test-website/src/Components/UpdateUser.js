import React from "react";

const UpdateUser = () => {
  return (
    <form class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInputValue"
        placeholder="name@example.com"
        value="test@example.com"
      />
      <label for="floatingInputValue">Input with value</label>
    </form>
  );
};

export default UpdateUser;
