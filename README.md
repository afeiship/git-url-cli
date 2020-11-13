# git-url-cli
> Get git http/https/ssh/git url.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]


## installation
```shell
# install
npm i -g @jswork/git-url-cli

# uninstall
npm uninstall -g @jswork/git-url-cli
```

## usage
```shell
guc
# https://github.com/afeiship/git-url-cli

# open the `url`
open `guc -u`
```
~~~
Options:
  --version      Show version number                                   [boolean]
  --url, -u      Github/gitlab url.                                    [boolean]
  --ssh, -s      Show `ssh` git url.                                   [boolean]
  --https, -h    Show `https` git url.                                 [boolean]
  --pages, -p    Show `gh_pages/pages` in github/gitlab.               [boolean]
  --mr, -m       Show `merge request url` in gitlab.                   [boolean]
  --actions, -a  Show `actions/piplines` in github/gitlab.             [boolean]
  --help         Show help                                             [boolean]
~~~

```shell
$ guc -u
# https://github.com/afeiship/git-url-cli

$ guc -h
# https://github.com/afeiship/git-url-cli.git

$ guc -s
# git@github.com:afeiship/git-url-cli.git

$ guc -p
# https://afeiship.github.io/git-url-cli/

$ guc -a
# https://github.com/afeiship/git-url-cli/actions/new
```

## resources
- https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

## license
Code released under [the MIT license](https://github.com/afeiship/git-url-cli/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/git-url-cli
[version-url]: https://npmjs.org/package/@jswork/git-url-cli

[license-image]: https://img.shields.io/npm/l/@jswork/git-url-cli
[license-url]: https://github.com/afeiship/git-url-cli/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/git-url-cli
[size-url]: https://github.com/afeiship/git-url-cli/blob/master/dist/git-url-cli.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/git-url-cli
[download-url]: https://www.npmjs.com/package/@jswork/git-url-cli
