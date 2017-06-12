var Repo = require('../Module/taskRepository');

var Task = function (data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completeing task: ' + this.name)
    this.completed = true;
}


Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
    Repo.save(this);
}



module.exports = Task;