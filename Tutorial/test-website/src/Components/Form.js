import React from "react";

const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label text-white">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label text-white">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleUserID1" className="form-label text-white">
          User ID
        </label>
        <input type="text" className="form-control" id="exampleUserID1" />
      </div>
    </form>
  );
};

export default Form;
