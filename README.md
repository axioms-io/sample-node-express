# sample-node-express
Express APIs sample using [Axioms](https://axioms.io). Secure your Express APIs using Axioms authentication and authorization.

For this sample we will use [@axioms/express-js](https://github.com/axioms-io/express-js) SDK.

## Prerequisite

* Node v10.16.0+
* An [Axioms](https://axioms.io) client which can obtain access token after user's authentication and authorization and include in `Authorization` header of all API request sent to Node/Express application server.

## Setup
Clone this repository,

```
git clone https://github.com/axioms-io/sample-node-express.git
cd sample-node-express
npm install
```

## Add Config
Create a `.env` file and add following configs (see `.sample-env`),

```
AXIOMS_DOMAIN=<your-axioms-slug>.axioms.io
AXIOMS_AUDIENCE=<your-axioms-resource-identifier>
```

## Run Dev Server

```
npm run dev
```

## Test using Postman
Postman collection is included in this repository. Import the collection in your Postman, setup environment variables `host` (i.e. localhost:5000) and `access_token` (you can obtain from your client) and test these APIs.