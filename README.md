# employee-dir
Employee directory web application that's comprised of a front and back end built using modern tool.

## Prerequisites

[Node.js](https://nodejs.org/en/)


## Get Started

1. Clone this repository

```bash
git clone https://github.com/Ahmid/employee-dir.git
```

2. Change into the directory that was cloned and run `npm install`

```bash
cd employee-dir && npm install
```

3. Configure the CosmosDB Server Setting (Only if you wish to test with different database)

Open /env/environment.js and Change the `cosmosPort`, `dbName` and `key` to match your CosmosDB environment.

```javascript
// server/env/environment.js
const cosmosPort = 1234; // replace with your port
const dbName = 'your-cosmos-db-name-goes-here';
const key = 'your-key-goes-here';

module.exports = {
  cosmosPort,
  dbName,
  key
};
```

## Running The App

In development, the app runs via two separate processes...

### Start the Express Server

```bash
node server/server.js
```

### Start Create React App

In a different terminal tab...

```bash
npm start
```

Your entire application is now running on port 3001.

Everything in the `server` folder is what is needed in production. Those are all of the build assets. 
