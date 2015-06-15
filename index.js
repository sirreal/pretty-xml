#!/usr/bin/env node

var pd = require('pretty-data').pd
  , concat = require('concat-stream');

var prettyxml = concat({'encoding': 'string'}, function(d) {
  process.stdout.write(pd.xml(d));
});

process.stdout.on('error', function(err){
	// been piped to a process that has closed stdout. e.g. more
	if (err.code === "EPIPE") {
		process.exit(0);
	}

  // something else, don't mask error
	process.stderr.write(JSON.stringify(err) + '\n');
	process.exit(1);
});

process.stdin.pipe(prettyxml);
