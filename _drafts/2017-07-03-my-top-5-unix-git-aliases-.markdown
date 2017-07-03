---
layout: post
title: "My Top 5 unix git aliases: "
date: "2017-07-03 12:35:15 +0200"
---


Aliases were added back in Git version 1.4.0, with the aim to s

You can add all the examples below to the [alias] section of your .gitconfig.

Perquisite:
Git installed!

~/.zshrc

~/.gitconfig

Insert cleanup under alias:
[alias]

or

$ git config --global alias.st status

https://git.wiki.kernel.org/index.php/Aliases#Aliases_with_arguments
https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases

up=!git pull --rebase --prune $@ && git submodule update --init --recursive


ls=log --pretty=format:%C(yellow)%h%Cred%d\ %Creset%s%Cblue\ [%cn] --decorate


cleanup=!f() { branches=$(git branch --merged ${1-develop} | grep -v  ${1-develop}$); [ -z "$branches" ] || git branch -d $branches; }; f


hist=log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short


cm=!git add -A && git commit -m

$ git config -e --global

Insert cleanup under alias:
[alias]
    cleanup = "!git branch --merged | grep  -v '\\*\\|master\\|develop' | xargs -n 1 git branch -d"

    git config --global alias.cleanup !git branch --merged | grep  -v '\\*\\|master\\|develop' | xargs -n 1 git branch -d



resetZedge='adb shell pm clear net.zedge.android && adb shell am start -n net.zedge.android/.Main'
