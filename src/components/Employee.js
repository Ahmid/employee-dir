import React from 'react';

const Employee = props => {
  return (
    <li
      onClick={() => props.onSelect(props.employee)}
      className={props.employee === props.selectedEmployee ? 'selected' : ''}
    >
      <button
        className="delete-button"
        onClick={e => props.onDelete(e, props.employee)}
      >
        Delete
      </button>
      <div className="employee-element">
        <div className="badge">
          {props.employee.age}
        </div>
        <div className="name">
          {props.employee.name}
        </div>
        <div className="department">
          {props.employee.department}
        </div>
      </div>
    </li>
  );
};

export default Employee;
