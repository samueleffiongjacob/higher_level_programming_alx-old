#!/usr/bin/node

const len = process.argv.length;

if (process.argv[2]) {
  console.log('No argument');
} else if (!process.argv[2]) {
  console.log('Argument found');
} else { console.log('Arguments found');
}
