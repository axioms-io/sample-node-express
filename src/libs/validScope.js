module.exports = function(requiredScopes, options) {

    if (!Array.isArray(requiredScopes)) {
        throw new Error(
            'Parameter expectedScopes must be an array of strings representing the scopes assigned to resources.'
        );
    }

    return function(req, res, next) {
        if (req.auth_payload.scope) {
            const tokenScopes = req.auth_payload.scope.split(" ");
            var hasScope = false
            for (const scope of requiredScopes) {
                if (tokenScopes.includes(scope)) {
                    hasScope = true;
                }
            }
            if (hasScope) {
                next()
            } else {
                res.status(401).send("Unauthorized access")
            }
        } else {
            res.status(401).send("Unauthorized access")
        }
    }
}