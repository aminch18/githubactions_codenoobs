import React from "react";
import Table from "react-bootstrap/Table";

export const TasksTable = ({ tasks }) => {
  const TableHeader = () => (
    <tr>
      <th>Assigned to</th>
      <th>Priority</th>
      <th>CreatedBy</th>
      <th>Creation date</th>
      <th>State</th>
    </tr>
  );

  const TableRow = (task, index) => (
    <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
      <td>{task.AssignedTo}</td>
      <td>{task.Priority}</td>
      <td>{task.CreatedBy}</td>
      <td>{task.CreatedDateTime}</td>
      <td>
        <div className="row">
          <div className="col-md-8">{task.State}</div>
        </div>
      </td>
    </tr>
  );

  const tableBody = tasks.map((task, index) => TableRow(task, index));

  return (
    <div className="container">
      <Table striped responsive="lg">
        <thead>{TableHeader()}</thead>
        <tbody>{tableBody}</tbody>
      </Table>
    </div>
  );
};
