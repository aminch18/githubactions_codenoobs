import React from "react";
import { useForm } from "react-hook-form";
import { createTask } from "../services/tasksServices";
import { v4 as uuidv4 } from "uuid";

export const CreateTask = ({ taskCreated }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const task = { id: uuidv4(), ...data };
    createTask(task);
    taskCreated();
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mrgnbtm">
          <h2>Tasks List</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">Assignee</label>
                <input
                  type="text"
                  className="form-control"
                  name="AssignedTo"
                  id="AssignedTo"
                  aria-describedby="emailHelp"
                  ref={register}
                  placeholder="Name of worker"
                  data-testid="AssignedTo"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">Grop of Creation:</label>
                <select
                  className="form-control"
                  name="CreatedBy"
                  ref={register}
                  id="sel1"
                >
                  <option>Product Area</option>
                  <option>Support Department</option>
                  <option>UX/UI Department</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">Priority:</label>
                <select
                  className="form-control"
                  name="Priority"
                  ref={register}
                  id="sel1"
                >
                  <option>To do</option>
                  <option>In Progress</option>
                  <option>Blocked</option>
                  <option>Under Review</option>
                  <option>To be Integrated</option>
                  <option>To be Relased</option>
                  <option>Done - In Prod</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">Status:</label>
                <select
                  className="form-control"
                  name="State"
                  ref={register}
                  id="sel1"
                >
                  <option>Open</option>
                  <option>Wait for external</option>
                  <option>Resolved</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>
            <input type="submit" className="btn btn-danger" />
          </form>
        </div>
      </div>
    </div>
  );
};
