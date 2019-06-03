var sys = require('sys'); 

var exec = require('child_process').exec; 

function puts(error, stdout, stderr){ 

sys.puts(stdout) 

} exec("ping -c 3 localhost", puts);
