#!/usr/bin/env node

const { execSync } = require('child_process');
const gitUrlParse = require('git-url-parse');
const res = execSync('git config --get remote.origin.url');
const remoteUrl = res.toString().trim();
const data = gitUrlParse(remoteUrl);

console.log(
  `https://${data.resource}/${data.full_name}`
);
