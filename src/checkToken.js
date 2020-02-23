const { validToken } = require("@axioms/express-js");

const checkToken = validToken({
    axiomsDomain: process.env.AXIOMS_DOMAIN,
    axiomsAud: process.env.AXIOMS_AUDIENCE
});

module.exports = checkToken;