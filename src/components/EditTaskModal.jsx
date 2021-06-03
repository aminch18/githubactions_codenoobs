import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { updateTask } from "../services/tasksServices";

export const EditTaskModal = ({ task, showEditModalHandler }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const { id, CreatedDateTime } = task;
    const updatedTask = {
      ...data,
      CreatedDateTime: CreatedDateTime,
      id: id,
    };

    const response = updateTask(updatedTask);
    showEditModalHandler(response);
    setShow(false);
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Assignee</label>
                <input
                  type="text"
                  className="form-control"
                  name="AssignedTo"
                  id="AssignedTo"
                  aria-describedby="emailHelp"
                  ref={register({ required: true })}
                  placeholder="Name of worker"
                  data-testid="AssignedTo"
                />
                {errors.AssignedTo && <p>This field is required ❗</p>}
              </div>
              <div className="form-group col-md-6">
                <label>Grop of Creation:</label>
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
                <label>Priority:</label>
                <select
                  className="form-control"
                  name="Priority"
                  ref={register}
                  id="sel1"
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Status:</label>
                <select
                  className="form-control"
                  name="State"
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
            </div>
            <input type="submit" className="btn btn-danger" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
