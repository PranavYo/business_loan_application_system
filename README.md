## Getting Started

## Requirements
- Node.js 16.14 or later.
- npm. (npm install -g npm)
- Verify installs with "node -v" and "npm -v".

### Install all the requirements:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Connecting to MongoDB
- First create a MongoDb atlas account if not already.
- Deploy a free cluster. (Creating a cluster will automatically deploy it.)
- Create `Database access credentials`.
- Create a Database and collection in that cluster.
- Recommended to use Database name: `business-loan-app` and Collection name: `balance-sheet`. If you choose your own names then make sure you replace the `dbName` and `collectionName` with your respective names in `app/api/index.js`.
- Insert the sample data present in `data-1.json` and `data-2.json` directly into collection. There will be two objects for two different `Accounting Providers`, `paste and insert` them ``one after the other``.  Do not change any format, directly copy-paste the data, they will provide input for `json file`.
- After that click on `Connect`, to connect with cluster.
- Click on `Add Current IP Address`.
- Then choose `Drivers` method to connect with application.
- Choose `Node.js` driver and copy your `connection string`.
- Then in the file `app/api/index.js` replace with `url` present, and enter your password of `Database access credentials` by removing `<password>`, make sure to also remove `<>` in that string.

## Running local MongoDB server
- Go to `app/api/index.js` by using `cd app/api/index.js`.
- Execute `node index-express.js` command.
- `Successfully connected to Atlas` and `app listening on port http://localhost:5000` should be displayed in the terminal.
- If you are getting `time-out` error, then reload your cluster in MongoDB Atlas and re-add the IP Address by clicking on `Add Current IP Address`. Then try running command again. 

