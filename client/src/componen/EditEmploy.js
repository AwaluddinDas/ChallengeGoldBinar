import React, { Fragment, useState } from "react";

const EditEmploy = ({ employee }) => {
  const [name, setname] = useState(employee.name);
  const [address, setAddress] = useState(employee.address);
  const [position, setPosition] = useState(employee.position);

  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      const body = { name, address, position };
      const response = await fetch(
        `http://localhost:4000/employees/${employee.id_employ}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${employee.id_employ}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${employee.id_employ}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Data Employee</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Addres"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              ></input>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateEmployee(e)}
              >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditEmploy;
