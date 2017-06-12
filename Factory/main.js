var Task = require('./task');
var repoFactory = require('./repoFactory');

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task({name: 'create a demo for modules'});
var task3 = new Task({name: 'create a demo for singleton'});
var task4 = new Task({name: 'create a demo for prototypes'});


//call to create object using factory
//var user = repoFactory.user.get(1);
//var project = repoFactory.project.get(1);


task1.complete();
task2.complete();
task2.save();
task3.save();
task4.save();