---
layout: post
title: "My Top 5 unix git aliases: "
date: "2017-07-03 12:35:15 +0200"
---


This post is assumed that you are familiar with Git and aliases and you have defined a few for yourself.

Over the last 6 years as a full-time developer, using Git has been a every day routine. Git is great and offers a ton of cool features to make version controlling experience simpler and easier.

And the more you work with Git the more accustom you become with the commands you use in your projects.

Chances are, you are also familiar with simple commends like “git status, git checkout <branch>” and advance ones like squashing commits etc… Presumably, you have also

However, maybe you have some advanced commands are too long and sometimes complex that they produces error with a little typo. These typos can be sometime frustrating and takes time to fix. But with aliases, you can avoid typing your favorites commands over and over again.

In short, aliases are great and would save you some precious time. Once you stated using them, you would understand why you should definitely use them. In this post i would walk you through 5 powerful aliases i use on a daily basis and how to use them.

To add alias or aliases, run `$ git config -e --global` to edit your global ``gitignore` file in your favourite editor.
Add the alias under your alias block and save your changes. [alias]

Note: Vim would be used if no default git editor set

## 1 Get your working directory up to date
It is always a good idea to get your working directory up to date when working in a team.

I find this very useful and  since i work i a large team This is very handy when you are collaborating on a project or you have two or more working environments.
```
$ up=!git pull --rebase --prune $@ && git submodule update --init --recursive
```


## 2. Commit (git add . & git commit -m <message>)
The two commands are presumably the most used commands you and i have used when working with git. I bet you have have my back on that. Well, you can actually merge these two into a single command as an alias of your choice. And this is one powerful usage of alias.

```
$ cm=!git add -A && git commit -m
```

Bonus: I usually push my changes to a branch after several of a feature am working on, but sometimes you just want push some quick fix, for that i use the follow alias:
```
cmp = cm && git push
cmp = "!f() { git add -A && git commit -m \"$@\" && git push; }; f"

```
[alias]
    // commit
    cm=!git add -A && git commit -m
    // commit and push
    cmp = "!f() { git add -A && git commit -m \"$@\" && git push; }; f"


## 3 git cleanup
```
$ cleanup = "!git branch --merged | grep  -v '\\*\\|master\\|develop' | xargs -n 1 git branch -d"

```

## 4 ```$ git rebase -i```
```
$ git rebase -i
```
## 5 git log
```
l    = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short
l-no-merges    = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short --no-merges
l-merges    = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short --merges

```


```
lr   = log --pretty=format:"%C(yellow)%h%Cblue%>(12)%ad%Cgreen%<(7)%aN%Cred%d\\ %Creset%s"  --decorate --date=relative
lr-no-merges   = log --pretty=format:"%C(yellow)%h%Cblue%>(12)%ad%Cgreen%<(7)%aN%Cred%d\\ %Creset%s"  --decorate --all --date=relative --no-merges
```

```
ls = log --pretty=format:"%C(yellow)%h%Cblue%>(12)%ad%Cgreen%<(7)%aN%Cred%d\\ %Creset%s"  --decorate --date=short
ls-no-merges = log --pretty=format:"%C(yellow)%h%Cblue%>(12)%ad%Cgreen%<(7)%aN%Cred%d\\ %Creset%s"  --decorate --date=short --no-merges
ls-merges = log --pretty=format:"%C(yellow)%h%Cblue%>(12)%ad%Cgreen%<(7)%aN%Cred%d\\ %Creset%s"  --decorate --date=short --merges
```


```
lmr   = log --pretty=format:"%C(yellow)%h%Cblue%>(12)%ad%Cgreen%<(7)%aN%Cred%d\\ %Creset%s"  --decorate --date=relative --author="Ernest"
lrg   = log --pretty=format:"%C(yellow)%h%Cblue%>(12)%ad%Cgreen%<(7)%aN%Cred%d\\ %Creset%s"  --decorate --date=relative --grep
```

https://git.wiki.kernel.org/index.php/Aliases#Aliases_with_arguments
https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases
