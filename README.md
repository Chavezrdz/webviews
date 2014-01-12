# WebViews

Nothing here at the moment, move along now :)

## Contributing

Always make sure the master branch remains stable, so do work on branches and merge them with master once you're finished. Try to keep branches small and focused and name them sensibly with the type of branch, a slash and then the description. e.g:

    feature/styles
    enhancement/styles
    hotfix/styles

A quick guide on the Git flow of this system:

    (master) $ git checkout -b feature/styles
    // do your work here
    (feature/styles) $ git add -A
    (feature/styles) $ git commit -m "Make as many commits as necessary"
    // once your branch is considered feature complete, we merge it into master
    (feature/styles) $ git checkout master
    (master) $ git merge --no-ff feature/styles
    (master) $ git push
    (master) $ git push origin --delete feature/styles
    (master) $ git remote prune origin
    // Clean up your local branches
    (master) $ git branch -d feature/styles
    // Repeat this flow for a new feature/enhancement/hotfix
