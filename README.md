# monorepo

## concept

I author modules in the course of developing an application.  These modules are often abstract, complete and worthy of opensourcing.  Opensourcing is valuable for various reasons, such as: it can get me free advise and contributions from the public to improve these modules, and it's good for my career and status as an engineer.

I publish modules as packages hosted by NPM.  I receive comments and pull requests about the packages in Github.  Each NPM package is linked to a Github repository.

I can take the following repository strategies for managing the various packages along with the application code:

<ol type="A">
  <li>There can be different repositories for each NPM package, and a different repository for the application</li>
  <li>Various packages can share share a repository (which is called a *monorepo*), and the application can also share this repository.</li>
  <li> Both <em>A</em> and <em>B</em> simultaneously.  Various packages and application share a repository, and various packages simultaneously have their own repositories.</li>
</ol>

### Problems with the *A* strategy
(where the application and each package use seperate repositories)
- **problem 1, maintance:** sometimes I author multiple packages with dependencies amongst various sets of one another, which makes keeping various packages versions up to date amongst one another challenging.  I don't have an automated solution for this and it seems complicated.  Versioning manually sucks.
- **problem 2, application workflow:** when I'm working on an application that incorperates these packages, if the application development requires a modification to a package, I would have to make the change to package, publish it to NPM, update it's version in the application's `package.json`, run `npm update`, and test the package changes in the application.  This workflow would be tedious.  I could instead use a strategy involving `npm link` but this wouldn't give me an accurate development environment when compared to production, and scaling such a workflow out to team members would be difficult.

### Problems with the *B* strategy
(where the application and various packages share a respository as a monorepo)
- **problem1, Github communication:** Let's say my application is a dating website.  And lets say in the course of developing this dating website I needed to develop an infinite scroll module, which I then published as an NPM package. Let's say some other developer finds my infinite scroll package useful, and uses it in their own application, but they found a bug in it. That developer would report the bug to the Github repository project shared by my dating app, the infinite scroll package, and a number of other packages. When they search the project's issues for a similar bug report, they would see a lot of issues unrelated to the infinite scroll.  If the infinite scroll package got popular, infinite scroll issues would flood the issues page for my dating app Github project.  I'd rather keep infinite scroll issues and dating app specific issues in separate Github projects.
- **problem2, private application repos:** what if my dating app repository needs to be private?  I still want my infinite scroll code to be public. 

This strategy of only a single repo for various pacakges is more appropriate for maintaing libraries with various plugins and loaders, like Babel, which has many Babel-related packages, and reporting a bug to the Babel monorepo Github project seems like an appropriate context.  It makes sense to report issues for the core Babel library or one of its loaders to the same Github project.

A tool called [Lerna](https://github.com/lerna/lerna) is used by Babel to manage the repo's various packages by coordinating interdependecy versions and publishing.  To use Lerna, put each module in its own folder with an appropriate `package.json` file, and run `lerna publish` to get packages onto NPM.  Make edits to a package, run `lerna publish` again, and that package's version will get bumped before being published, and various packages that depend on that edited package will both get their `package.json` files updated with the edited package's new version, and they'll get their own versions bumped up, and also get published.  This can lead to cascade of other packages being updated and published when they have a dependency with that last set of updated pacakge.  

### This repo uses the C strategy
(a combination of strategyies *A* and *B*, where the packages and the application share a repository (a *monorepo*), and simultaneously some of the packages, like inifinite scroll, can have their own Github repositories, which I call the *scattered repos*.

This has the following advantages:
- The monorepo can be private, while the scattered repos can be public.
- Issues and pull requests for inifinte scroll will not clutter the workflow of the dating app.
- Versioning packages and publishing them to NPM is managed with Lerna.

The challenge with this strategy is accepting pull requests on the scattered repositories transfering those changes back to the monorepo.  This will be accomplished by replacing the content of the package's folder in the monorepo with the content of the package's scattered repo's content of its master branch's head.  What are the implications on git practice with this relationship between scattered repos and a monorepo?  The time travel ability of each repo is still usable I think...  Where would this get me in trouble?  I think it's ok, or maybe worth the tradeoff.

This monorepo does not actually contain a dating app and an infinte scroll package.  Those things as simple to understand examples.  Instead, the application within this monorepo is a photo-mashup web app called bernieselfie.com, and there a number of publishable packages alongside the application code in the `packages/` directory.

This repository currently serves as a functioning development environment for bernieselfie.com, but it does not currently seriously maintain any NPM packages or scattered repositories.  I've developed the functionality for this  but I haven't groomed any packages to publishing level yet.  I've been focusing on the application aspect instead. To do.

## Scattering Repos

This monorepo contains a number of modules within its 'packages/' directory.  Each of these can be published to NPM via `lerna publish`, and as discussed earlier, Lerna manages the versioning complexity.

Each of those packages can be published to their own Github repos with `npm run scatter`.  If a Github repo doesn't exist for that package name, one will be created.  Otherwise, the repo will be checked out, deleted of its files (`rm -rf`), and a copy of the files from the packages's folder will be placed into the repo.  Then those files will be committed to that new package repo.

Now, developers can report bugs to appropriate Github repos. This monorepo could even be private.  The repos maintained via `npm run scatter` can then be public.

This monorepo also provides a script for initializing new modules.  `npm run new` will ask you some questions and generate a folder within '/packages/' with an appropriate set of boilerplate files related to authoring and publishing a package, such as `package.json`,`readme.md`, `packagename.test.js`, and `packagename.js`.
A development environment called `dev_env` is included as an NPM dependency of each module created.  `dev_env` is also the development environment for this monorepo.  `dev_env` helps you run a localhost server, bundle assets with webpack, and run tests with Jest.

This monorepo also contains a package called `profile-framer-frontend`, which is an application being built as a use case for monorepo, dev_env, React and Redux, and some other technologies.

This monorepo hosts more than one application.  
