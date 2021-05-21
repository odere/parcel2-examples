module.exports = {
    method: '*',
    path: '/{any*}',
    handler: function (request, h) {
        return h.response('404 Error! Page Not Found!').code(404)
    }
};
