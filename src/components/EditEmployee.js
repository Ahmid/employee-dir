import React from 'react';

const EditEmployee = props => {
  if (props.selectedEmployee) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>name: </label>
            <input
              name="name"
              value={props.selectedEmployee.name}
              placeholder="name"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>age: </label>
            <input
              type="number"
              name="age"
              value={props.selectedEmployee.age}
              placeholder="age"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>department: </label>
            <input
              name="department"
              value={props.selectedEmployee.department}
              placeholder="department"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>title: </label>
            <input
              name="title"
              value={props.selectedEmployee.title}
              placeholder="title"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>location: </label>
            <input
              name="location"
              value={props.selectedEmployee.location}
              placeholder="location"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditEmployee;
