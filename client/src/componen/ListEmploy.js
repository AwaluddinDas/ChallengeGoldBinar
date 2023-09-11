import React, { Fragment, useEffect, useState } from "react";

import EditEmploy from "./EditEmploy";

const ListEmploy = () => {
  const [employees, setEmployees] = useState([]);

  //delete employees

  const deleteEmployee = async (id) => {
    try {
      const deleteEmployee = await fetch(
        `http://localhost:4000/employees/${id}`,
        {
          method: "DELETE",
        }
      );
      setEmployees(employees.filter((employee) => employee.id_employ !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getEmploy = async () => {
    try {
      const response = await fetch("http://localhost:4000/employees/list");
      const jsonData = await response.json();

      setEmployees(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEmploy();
  }, []);

  return (
    <Fragment>
      <h3 className="text-center">List Employees</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Addres</th>
            <th scope="col">Position</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
          {employees.map((employee) => (
            <tr key={employee.id_employ}>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.position}</td>
              <td>
                <EditEmploy employee={employee} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.id_employ)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListEmploy;
