const { hasValidAccessToken } = require("@axioms/express-js");

const checkToken = hasValidAccessToken({
    axiomsDomain: process.env.AXIOMS_DOMAIN,
    axiomsAud: process.env.AXIOMS_AUDIENCE
});

module.exports = checkToken;