# git-url-cli
> Get git http/https/ssh/git url.

## installation
```shell
# install
npm i -g @feizheng/git-url-cli

# uninstall
npm uninstall -g @feizheng/git-url-cli
```

## usage
```shell
guc
# https://github.com/afeiship/git-url-cli

# open the `url`
open `guc -u`
```

## options
| api   | short | description                        |
| ----- | ----- | ---------------------------------- |
| url   | u     | Github/gitlab url.                 |
| ssh   | s     | `ssh` git url.                     |
| https | h     | `https` git url.                   |
| pages | p     | `gh_pages/pages` in github/gitlab. |


```shell
$ guc -u
# https://github.com/afeiship/git-url-cli

$ guc -h
# https://github.com/afeiship/git-url-cli.git

$ guc -s
# git@github.com:afeiship/git-url-cli.git

$ guc -p
# https://afeiship.github.io/git-url-cli/
```

## resources
- https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
