var myrepo = require('./repo');


var taskHandler = function () {
    return {
        save: function () {
            myrepo.save('Hi from taskhandler');
        }
    }
}

module.exports = taskHandler();