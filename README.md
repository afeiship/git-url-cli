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
| api     | short | description                               |
| ------- | ----- | ----------------------------------------- |
| url     | u     | Github/gitlab url.                        |
| ssh     | s     | Show `ssh` git url.                       |
| https   | h     | Show `https` git url.                     |
| pages   | p     | Show `gh_pages/pages` in github/gitlab.   |
| actions | a     | Show `actions/piplines` in github/gitlab. |

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
