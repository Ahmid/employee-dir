import React, { Component } from 'react';

import EditEmployee from './EditEmployee';
import Employee from './Employee';
import api from '../api';
import SearchEmployee from './SearchEmployee';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    Header: 'Department',
    accessor: 'department'
  }, {
    Header: 'Title',
    accessor: 'title'
  }, {
    Header: 'Location',
    accessor: 'location'
  }
]


class Employees extends Component {
  constructor() {
    super();

    this.state = {
      employees: [],
      creatingEmployee: false
    };

    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    api.get().then(json => this.setState({ employees: json }));
  }

  handleSearch (event) {
    api.search(event.target.value).then(json => this.setState({ employees: json }));
  }
  
  handleSelect(employee) {
    this.setState({ selectedEmployee: employee });
  }

  handleDelete(event, employee) {
    event.stopPropagation();
    api.destroy(employee).then(() => {
      let employees = this.state.employees;
      employees = employees.filter(h => h !== employee);
      this.setState({ employees: employees });

      if (this.selectedEmployee === employee) {
        this.setState({ selectedEmployee: null });
      }
    });
  }

  handleEnableAddMode() {
    this.setState({
      addingEmployee: true,
      selectedEmployee: { name: '', age: '', department: '', title: '', location: '' }
    });
  }

  handleCancel() {
    this.setState({ addingEmployee: false, selectedEmployee: null });
  }

  handleSave() {
    let employees = this.state.employees;

    if (this.state.addingEmployee) {
      api
        .create(this.state.selectedEmployee)
        .then(result => {
          console.log('Successfully created!');
          
          employees.push(this.state.selectedEmployee);
          this.setState({
            employees: employees,
            selectedEmployee: null,
            addingEmployee: false
          });
          this.componentDidMount();
          this.state.employees=employees;
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(this.state.selectedEmployee)
        .then(() => {
          this.setState({ selectedEmployee: null });
        })
        .catch(err => {});
    }
  }

  handleOnChange(event) {
    let selectedEmployee = this.state.selectedEmployee;
    selectedEmployee[event.target.name] = event.target.value;
    this.setState({ selectedEmployee: selectedEmployee });
  }

  render() {
    return (
      <div className="div1">
        <ul className="employees">
          {this.state.employees.map(employee => {
            return (
              <Employee
                //key={employee.name}
                employee={employee}
                onSelect={this.handleSelect}
                onDelete={this.handleDelete}
                selectedEmployee={this.state.selectedEmployee}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddMode}>Add New Employee</button>
          <EditEmployee
            addingEmployee={this.state.addingEmployee}
            onChange={this.handleOnChange}
            selectedEmployee={this.state.selectedEmployee}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
          />
        </div>
        <div className="div3">
          <SearchEmployee 
            onSearch={this.handleSearch}/>
        </div>
        <div className="div2">
          <ReactTable
            data={this.state.employees}
            columns={columns}
            defaultPageSize={10}
          /> 
        </div>
      </div>
    );
  }
}

export default Employees;
