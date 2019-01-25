let {PythonShell} = require("python-shell");

let options = {
  mode: 'text',
  pythonPath: '/usr/bin/',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: './',
  args: ['value1', 'value2', 'value3']
};

exports.extract = (imageLink) => {
    return Promise.resolve({_id:1234,name:"Sai"});
};

exports.extract1 = (imageLink) => {
    PythonShell.run('my_script.py', options, function (err, results) {
   	if (err) throw err;
   	// results is an array consisting of messages collected during execution
  	console.log('results: %j', results);
        return Promise.resolve({_id:1234,name:"Sai",results});
    });
    return Promise.resolve({_id:1234,name:"Sai"});
};
