const baseAPI = '/api';

const employeeService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/employees`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  search (employee) {
    return new Promise ((resolve, reject) => {
      if (employee) {
        fetch(`${baseAPI}/employee/search/${employee}`)
          .then(response => response.json())
          .then(json => resolve(json))
          .catch(err => {
            reject(err);
          });
      }
      else {
        fetch(`${baseAPI}/employees`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
      }
    });
  },

  create(employee) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/employee`, {
        method: 'POST',
        body: JSON.stringify(employee),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(employee) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/employee`, {
        method: 'PUT',
        body: JSON.stringify(employee),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(employee) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/employee/${employee._id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default employeeService;
