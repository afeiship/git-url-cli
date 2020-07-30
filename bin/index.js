#!/usr/bin/env node

const { execSync } = require('child_process');
const res = execSync('git config --get remote.origin.url');
const remoteUrl = res.toString().trim();
const NxGitUrl = require('@feizheng/next-git-url');
const yargs = require('yargs')
const gitUrl = new NxGitUrl(remoteUrl);

const getter = function (value) {
  return function () {
    console.log(gitUrl[value]);
  }
};

yargs
  .alias("u", "url")
  .alias("s", "ssh")
  .alias("h", "https")
  .alias("p", "pages")
  .coerce("url", getter('url'))
  .coerce("ssh", getter('ssh'))
  .coerce("https", getter('https'))
  .coerce("pages", getter('pages'))
  .argv;
