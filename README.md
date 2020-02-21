# sample-node-express
Express APIs sample using Axioms. Secure your Express APIs using Axioms Authentication and Authorization.

## Prerequisite

* Node v10.16.0+

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