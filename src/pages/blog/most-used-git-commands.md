---
path: "/blog/most-used-git-commands"
title: "A List of the Most Used Git Commands"
date: 2019-09-08
quote: "In this post, I'l give you a list of the top Git Commands that you will be using frequently while you are working with Git."
thumbnail: '../../images/blog/git-commands.png'
---

So, let's get started now.

## Getting & Creating Projects:

Commands: init, clone

<table>
    <thead>
    <tr>
        <th>
        Command
        </th>
        <th>
        Description
        </th>
    </tr>
    </thead>
    <tr>
        <td>
            <code>git init</code>
        </td>
        <td>
            Initialize a local Git repository
        </td>
    </tr>
    <tr>
        <td>
            <code>git clone ssh://git@github.com/[username]/[repository-name].git	</code>
        </td>
        <td>
            Create a local copy of a remote repository
        </td>
    </tr>
</table>

## Basic Snapshotting:

Commands: status, add, commit, rm

<table>
    <thead>
    <tr>
        <th>
        Command
        </th>
        <th>
        Description
        </th>
    </tr>
    </thead>
    <tr>
        <td>
            <code>git status</code>
        </td>
        <td>
            Check status
        </td>
    </tr>
    <tr>
        <td>
            <code>git add [file-name.txt]</code>
        </td>
        <td>
            Add a file to the staging area
        </td>
    </tr>
    <tr>
        <td>
            <code>git add -A</code>
        </td>
        <td>
            	Add all new and changed files to the staging area
        </td>
    </tr>
        <tr>
        <td>
            <code>git commit -m "[commit message]"</code>
        </td>
        <td>
            Commit changes
        </td>
    </tr>
        <tr>
        <td>
            <code>git rm -r [file-name.txt]</code>
        </td>
        <td>
            Remove a file (or folder)
        </td>
    </tr>
</table>

## Branching & Merging

Commands: branch, push, checkout, merge, stash, rebase

<table>
    <thead>
    <tr>
        <th>
        Command
        </th>
        <th>
        Description
        </th>
    </tr>
    </thead>
    <tr>
        <td>
            <code>git branch</code>
        </td>
        <td>
            List branches (the asterisk denotes the current branch)
        </td>
    </tr>
    <tr>
        <td>
            <code>git branch -a</code>
        </td>
        <td>
            List all branches (local and remote)
        </td>
    </tr>
    <tr>
        <td>
            <code>git branch [branch name]</code>
        </td>
        <td>
            Create a new branch
        </td>
    </tr>
        <tr>
        <td>
            <code>git branch -d [branch name]</code>
        </td>
        <td>
            Delete a branch
        </td>
    </tr>
        <tr>
        <td>
            <code>git push origin --delete [branch name]</code>
        </td>
        <td>
            Delete a remote branch
        </td>
    </tr>
        <tr>
        <td>
            <code>git branch</code>
        </td>
        <td>
            Remove a file (or folder)
        </td>
    </tr>
        <tr>
        <td>
            <code>git checkout -b [branch name]</code>
        </td>
        <td>
            Create a new branch and switch to it
        </td>
    </tr>
        <tr>
        <td>
            <code>git checkout -b [branch name] origin/[branch name]</code>
        </td>
        <td>
            Clone a remote branch and switch to it
        </td>
    </tr>
        <tr>
        <td>
            <code>git branch -m [old branch name] [new branch name]</code>
        </td>
        <td>
            Rename a local branch
        </td>
    </tr>
        <tr>
        <td>
            <code>git checkout [branch name]</code>
        </td>
        <td>
            Switch to a branch
        </td>
    </tr>
        <tr>
        <td>
            <code>git checkout -</code>
        </td>
        <td>
            Switch to the branch last checked out
        </td>
    </tr>
        <tr>
        <td>
            <code>git checkout -- [file-name.txt]</code>
        </td>
        <td>
            Discard changes to a file
        </td>
    </tr>
        <tr>
        <td>
            <code>git merge [branch name]</code>
        </td>
        <td>
            Merge a branch into the active branch
        </td>
    </tr>
        <tr>
        <td>
            <code>git merge [source branch] [target branch]</code>
        </td>
        <td>
            Merge a branch into a target branch
        </td>
    </tr>
    <tr>
        <td>
            <code>git stash</code>
        </td>
        <td>
            Stash changes in a dirty working directory
        </td>
    </tr>
    <tr>
        <td>
            <code>git stash clear</code>
        </td>
        <td>
            Remove all stashed entries
        </td>
    </tr>
</table>

## Sharing & Updating Projects

Commands: push, pull, remote

<table>
    <thead>
    <tr>
        <th>
        Command
        </th>
        <th>
        Description
        </th>
    </tr>
        <tr>
        <td>
            <code>git push origin [branch name]</code>
        </td>
        <td>
            Push a branch to your remote repository
        </td>
    </tr>
        <tr>
        <td>
            <code>git push -u origin [branch name]</code>
        </td>
        <td>
            Push changes to remote repository (and remember the branch)
        </td>
    </tr>
        <tr>
        <td>
            <code>git push</code>
        </td>
        <td>
            Push changes to remote repository (to remembered branch)
        </td>
    </tr>
        <tr>
        <td>
            <code>git push origin --delete [branch name]</code>
        </td>
        <td>
            Delete a remote branch
        </td>
    </tr>
        <tr>
        <td>
            <code>git pull</code>
        </td>
        <td>
            Update local repository to the newest commit
        </td>
    </tr>
        <tr>
        <td>
            <code>git pull origin [branch name]</code>
        </td>
        <td>
            Pull changes from remote repository
        </td>
    </tr>
        <tr>
        <td>
            <code>git remote add origin ssh://git@github.com/[username]/[repository-name].git</code>
        </td>
        <td>
            Add a remote repository
        </td>
    </tr>
        <tr>
        <td>
            <code>git remote set-url origin ssh://git@github.com/[username]/[repository-name].git</code>
        </td>
        <td>
            Set a repository's origin branch to SSH
        </td>
    </tr>
    </thead>
</table>

## Inspection & Comparison

Commands: log, diff

<table>
    <thead>
    <tr>
        <th>
        Command
        </th>
        <th>
        Description
        </th>
    </tr>
    <tr>
        <td>
            <code>git log</code>
        </td>
        <td>
            View changes
        </td>
    </tr>
    <tr>
        <td>
            <code>git log --summary</code>
        </td>
        <td>
            View changes (detailed)
        </td>
    </tr>
    <tr>
        <td>
            <code>git diff [source branch] [target branch]</code>
        </td>
        <td>
            Preview changes before merging
    </td>
    </tr>
    </thead>
</table>