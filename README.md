# stacks-cli ![openSource](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)

<p align="center">
  <a target="_blank" href="https://github.com/WeiChiaChang/stacks-cli">
    <img alt="stacks-cli" src="https://i.imgur.com/gOWAhqT.gif">
  </a>
</p>
<p align=center>
  <a target="_blank" href="https://npmjs.org/package/stacks-cli" title="NPM version"><img src="https://img.shields.io/npm/v/stacks-cli.svg"></a>
  <a target="_blank" href="https://npmjs.org/package/stacks-cli" title="Build Status"><img src="https://travis-ci.org/WeiChiaChang/stacks-cli.svg?branch=master"></a>
  <a target="_blank" href="http://nodejs.org/download/" title="Node version"><img src="https://img.shields.io/badge/node.js-%3E=_6.0-green.svg"></a>
  <a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
  <a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</p>


> Check website stack from the terminal.

In fact I know there's already a pretty good one of Chrome extension called Wappalyzer, but I still wanna make a CLI tool for myself. There's 2 major reasons:

- I've already installed too much extensions so far.
- I'm a CLI lover, just that simple.

OMMGGGGGGG

<p align="center">
  <a target="_blank" href="https://github.com/WeiChiaChang/stacks-cli">
    <img alt="stacks-cli" src="https://i.imgur.com/j2tlZq0.png">
  </a>
</p>

Based on these demands, I start working on fixing these issues.

## Install

```shell
$ npm install stacks-cli -g
```

## Usage

Type the following command in you terminal:
```shell
$ stacks-cli
```

And the scripts will ask you:
```shell
? Which website stack do you wanna browse ?
```

Copy & Paste the URL of the webiste you wanna analyze:
```shell
https://www.cloudflare.com/
```

Here's the result screenshot:
<p align="center">
  <a target="_blank" href="https://github.com/WeiChiaChang/stacks-cli">
    <img alt="stacks-cli" src="https://i.imgur.com/WX6QnMV.png">
  </a>
</p>

## Helper

```shell
Examples
$ stacks-cli


Helpers
$ stacks-cli -h


Show current version
$ stacks-cli -v


Source code of this side project
$ stacks-cli -s
```

## License
MIT © [WeiChiaChang](https://github.com/WeiChiaChang)