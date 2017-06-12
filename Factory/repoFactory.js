var repoFactory = function () {
    var repos = this;
    var reposList = [
        {name: 'task', source: './taskRepository'}
        //{name: 'user', source: './userRepository'},
        //{name: 'project', source: './projectRepository'},
    ];
    
    reposList.forEach(function(repo){
        repos[repo.name] = require(repo.source);
    })
};

module.exports = new repoFactory;