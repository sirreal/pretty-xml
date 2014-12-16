#!/usr/bin/env node

var pd = require('pretty-data').pd
  , concat = require('concat-stream');

var prettyxml = concat({'encoding': 'string'}, function(d) {
  process.stdout.write(pd.xml(d));
});

process.stdin.pipe(prettyxml);
