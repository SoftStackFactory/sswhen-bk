'use strict';

module.exports = function(Ssuser) {
    
    // hook that creates a token and logs in a new user
    Ssuser.observe('after save', function(ctx, next) {
        if (ctx.isNewInstance === true) {
            var instance = ctx.instance;
            
            instance.createAccessToken(1209600000, function(err, response) {
                if (err === null) {
                    ctx.instance["token"] = response.id;
                    next();
                }
            });
            
        } else {
            next();
        }
    });
    
};
