# stacks-cli ![openSource](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)

<p align="center">
  <a target="_blank" href="https://github.com/WeiChiaChang/stacks-cli">
    <img alt="stacks-cli" src="https://i.imgur.com/e1dg1Lv.gif">
  </a>
</p>
<p align=center>
  <a target="_blank" href="https://npmjs.org/package/stacks-cli" title="NPM version"><img src="https://img.shields.io/npm/v/stacks-cli.svg"></a>
  <a target="_blank" href="https://npmjs.org/package/stacks-cli" title="Build Status"><img src="https://travis-ci.org/WeiChiaChang/stacks-cli.svg?branch=master"></a>
  <a target="_blank" href="http://nodejs.org/download/" title="Node version"><img src="https://img.shields.io/badge/node.js-%3E=_7.0-green.svg"></a>
  <a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
  <a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</p>


> Check website stack from the terminal.

In fact I know there's already a pretty good Chrome extension called Wappalyzer, but I still wanna make a CLI tool for myself. There's 2 major reasons why:

- I've already installed too many extensions so far.
- I'm a CLI lover, it's just that simple.

OMMGGGGGGG

<p align="center">
  <a target="_blank" href="https://github.com/WeiChiaChang/stacks-cli">
    <img alt="stacks-cli" src="https://i.imgur.com/j2tlZq0.png">
  </a>
</p>

Based on these demands, I started working on fixing these issues.

## Install

```shell
$ npm install stacks-cli -g
```

## Usage

Type the following command in your terminal:
```shell
$ stacks-cli
```

And the scripts will ask you:
```shell
? Which website stack do you wanna browse ?
```

Copy & Paste the URL of the website you want to analyze:
```shell
https://www.cloudflare.com/
```

Here's a screenshot of the result:
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

## Docker

### Compile image locally

```shell
$ docker build -t stacks-cli .
```

### Use compiled image locally

```shell
$ docker run --rm -ti stacks-cli -h
```

### Use already compiled image

```shell
$ docker run --rm -ti femtopixel/stacks-cli
```

## License
MIT © [WeiChiaChang](https://github.com/WeiChiaChang)
