#!/usr/bin/env node
require('@jswork/next-pick-by');
require('@jswork/next-intersection');
require('@jswork/next-git-url');

const { execSync } = require('child_process');
const res = execSync('git config --get remote.origin.url');
const remoteUrl = res.toString().trim();
const yargs = require('yargs');
const parser = require('yargs-parser');
const gitUrl = new nx.GitUrl(remoteUrl);

const getter = function (value) {
  return function () {
    console.log(nx.get(gitUrl, value));
  };
};

yargs
  .option('url', {
    alias: 'u',
    type: 'boolean',
    describe: 'Github/gitlab url.'
  })
  .option('ssh', {
    alias: 's',
    type: 'boolean',
    describe: 'Show `ssh` git url.'
  })
  .option('https', {
    alias: 'h',
    type: 'boolean',
    describe: 'Show `https` git url.'
  })
  .option('pages', {
    alias: 'p',
    type: 'boolean',
    describe: 'Show `gh_pages/pages` in github/gitlab.'
  })
  .option('mr', {
    alias: 'm',
    type: 'boolean',
    describe: 'Show `merge request url` in gitlab.'
  })
  .option('actions', {
    alias: 'a',
    type: 'boolean',
    describe: 'Show `actions/piplines` in github/gitlab.'
  })
  .option('name', {
    alias: 'n',
    type: 'boolean',
    describe: 'Get github/gitlab git name.'
  })
  .coerce('url', getter('url'))
  .coerce('ssh', getter('ssh'))
  .coerce('https', getter('https'))
  .coerce('pages', getter('pages'))
  .coerce('mr', getter('mr'))
  .coerce('actions', getter('actions'))
  .coerce('name', getter('data.name'))
  .help().argv;

const aliases = yargs.parsed.aliases;
const target = nx.pickBy(parser(process.argv.slice(2)), function (key) {
  return key !== '_' && key !== '$0';
});

const inters = nx.intersection(Object.keys(aliases), Object.keys(target));

!inters.length && yargs.showHelp();
