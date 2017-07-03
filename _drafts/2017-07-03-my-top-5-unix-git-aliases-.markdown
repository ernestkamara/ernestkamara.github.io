---
layout: post
title: "My Top 5 unix git aliases: "
date: "2017-07-03 12:35:15 +0200"
---



As a developer who code for a living, I rely on command line tools to make my daily development easier.
The commend line is very powerful tool with an absolute control over your system.


This post is assumed that you are familiar with Git and aliases and you have defined a few for yourself.

## 2 git commit
Run the following commend in you commend-line

$ git config --global alias.cm !git add -A && git commit -m

or

Open your gitconfig file with $ open ~/.gitconfig and add the line below under your alias block and save your changes.

[alias]
    // Add commit alias
    cm=!git add -A && git commit -m

## 1 Get your working directory up to date
I find this 
Fully update your working directory with the origin/master

I find this very useful and  since i work i a large team This is very handy when you are collaborating on a project or you have two or more working environments.


First, rewinding head to replay your work on top of it...

up=!git pull --rebase --prune $@ && git submodule update --init --recursive

git - the base command to perform any git command
    submodule - Inspects, updates and manages submodules.
        update - Update the registered submodules to match what the superproject
        expects by cloning missing submodules and updating the working tree of the
        submodules. The "updating" can be done in several ways depending on command
        line options and the value of submodule.<name>.update configuration variable.
            --init without the explicit init step if you do not intend to customize
            any submodule locations.
            --recursive is specified, this command will recurse into the registered
            submodules, and update any nested submodules within.


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
