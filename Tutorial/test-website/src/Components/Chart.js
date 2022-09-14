import React, { useState } from "react";
import Form from "./Form";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

const Chart = () => {
  const [toBeDisplay, setToBeDisplay] = useState(0);
  console.log(toBeDisplay);
  // All options to be displayed
  if (toBeDisplay === 0) {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-primary p-2 m-2"
              id="addUser"
              onClick={() => setToBeDisplay(toBeDisplay + 1)}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-person-plus pe-3"></i>Add User
              </span>
            </button>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-secondary p-2 m-2"
              id="deleteUser"
              onClick={() => setToBeDisplay(toBeDisplay + 2)}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-person-x pe-3"></i>Delete User
              </span>
            </button>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-success p-2 m-2"
              id="updateUser"
              onClick={() => setToBeDisplay(toBeDisplay + 3)}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-person-lines-fill pe-3"></i>Update User
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  // Add user
  if (toBeDisplay === 1) {
    return (
      <div>
        <Form />
        <div className="row">
          <div className="col-md-4 ">
            <button
              type="button"
              className="btn btn-primary pt-2 pb-2 ps-0 ms-0 disabled float-md-start"
              onClick={() => alert()}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-layer-forward pe-3"></i>Submit
              </span>
            </button>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-secondary pt-2 pb-2 pe-0 me-0 float-md-end"
              onClick={() => setToBeDisplay(toBeDisplay - 1)}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-layer-backward pe-3"></i>Go Back
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  // Delete User
  if (toBeDisplay === 2) {
    return (
      <div>
        <DeleteUser />
        <div className="row pt-5">
          <div className="col-md-4 ">
            <button
              type="button"
              className="btn btn-primary pt-2 pb-2 ps-0 ms-0 disabled float-md-start"
              onClick={() => alert()}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-layer-forward pe-3"></i>Submit
              </span>
            </button>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-secondary pt-2 pb-2 pe-0 me-0 float-md-end"
              onClick={() => setToBeDisplay(toBeDisplay - 2)}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-layer-backward pe-3"></i>Go Back
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  // Update User
  if (toBeDisplay === 3) {
    return (
      <div>
        <UpdateUser />
        <div className="row pt-5">
          <div className="col-md-4 ">
            <button
              type="button"
              className="btn btn-primary pt-2 pb-2 ps-0 ms-0 disabled float-md-start"
              onClick={() => alert()}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-layer-forward pe-3"></i>Submit
              </span>
            </button>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-secondary pt-2 pb-2 pe-0 me-0 float-md-end"
              onClick={() => setToBeDisplay(toBeDisplay - 3)}
            >
              <span className="fs-2 p-5">
                <i className="bi bi-layer-backward pe-3"></i>Go Back
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Chart;
