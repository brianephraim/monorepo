# My monorepo
This repo contains various projects.  In the course development, modules are authored that can be useful to the larger developer community.  With the help of [Lerna](https://github.com/lerna/lerna), these moduels can be published as packages to NPM.  When another developer finds one of my packages useful from NPM but needs to report a bug or a pull request, I don't want them to do so via this monorepo's github project.  I want each of my packages to have its own Github repo project.  So I developed `herc` (contained within) to scatter the various packages into individual Github repo projects.  `herc` are provides a script to boilerplate new packages.

## Prereq: Setup Github OAUTH
[Guide from Github website](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)  
This will produce a token.  Assign it to an environment variable called `GITHUB_API_TOKEN`.

## Why are we using snake_case? 
We want consistent naming for js variables and npm packages.  
Naming a packages on npm cannot use uppercase, so camelCase is out.  
JS variables cannot use hyphens, so kebab-case is out.  
So we are left with snake_case.  Now we can write this:  
`import my_package from 'my_package';`  

