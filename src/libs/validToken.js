const fetch_jwkset = require("./fetchJwkset.js");
const jws = require("jws");
const jwktopem = require("jwk-to-pem");

module.exports = function(config) {
    if (!config) {
        throw new ReferenceError("A config must be provided");
    }
    if (!config.axiomsDomain) {
        throw new ReferenceError("A axiomDomain must be provided");
    }
    if (!config.axiomsAud) {
        throw new ReferenceError("A axiomsAud must be provided");
    }

    var jwksEndpoint = `https://${config.axiomsDomain}/oauth2/.well-known/jwks.json`;

    return function(req, res, next) {
        if (req.headers && req.headers.authorization) {
            var parts = req.headers.authorization.split(" ");
            if (parts.length == 2) {
                var bearer = parts[0];
                var token = parts[1];
                var unverified = jws.decode(token);
                var payload = JSON.parse(unverified.payload);
                var audience = payload.aud
                var alg = unverified.header.alg;
                var kid = unverified.header.kid;
                if (bearer.toLowerCase() == "bearer") {
                    let options = {
                        json: true,
                        uri: jwksEndpoint,
                        strictSsl: true
                    };
                    fetch_jwkset(options)
                        .then(keys => {
                            if (!keys || !keys.length) {
                                console.error("No public keys to verify token");
                                res.status(401).send("Token validation failed. Key not found.");
                            } else {
                                var key = keys.find(key => key.kty === "RSA" && key.kid == kid);
                                /* eslint-disable no-console */
                                // console.log(key);
                                /* eslint-enable no-console */
                                var is_valid_token = jws.verify(token, alg, jwktopem(key));
                                if (!is_valid_token || !audience.includes(config.axiomsAud)) {
                                    res.status(401).send("Invalid authorization token.");
                                } else {
                                    req.auth_payload = payload;
                                    /* eslint-disable no-console */
                                    // console.log(req.auth_jwt.aud);
                                    /* eslint-enable no-console */
                                    next();
                                }
                            }
                        })
                        .catch(function(err) {
                            console.error(err);
                        });
                } else {
                    res.status(401).send("Invalid authorization header, required format: Bearer Token");
                }
            } else {
                res.status(401).send("Invalid authorization header, required format: Bearer Token");
            }
        } else {
            res.status(401).send("Missing authorization header");
        }
    };
};