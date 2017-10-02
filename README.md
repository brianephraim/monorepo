I author modules in the course of developing an application.  These modules are often abstract, complete and worthy of opensourcing.  Opensourcing is valuable for various reasons, such as: it can get me free advise and contributions from the public to improve these modules.

I publish modules as packages hosted by NPM.  In order to maintain a package and receive feedback from the public I associate its NPM registration with a Github project repository.

Github allows the public to comment on the code and submit pull requests.

My application has a repository.  Each package I authored in the course of writing this application has a repository.

Those can be different repositories or they can share one, or they can do both.

The strategy where the application and each package use seperate repositories has challenges:
- maintance: sometimes packages I author have dependencies of one another, and coordinating versioning in that situation is a challange
- workflow: If you are working on your application involving the modification of one of the packages, you need a workflow that takes into account packages that have dependencies on one another.  When you update those packages I must take into account the changes from other packages, and how to import changes back into the application's repository and development environment.  I don't have a solution to this complexity.

The strategy where the application and each package share a respository has a Github communication problems. Let's say my application is a dating website.  And lets say in the course of developing this dating website I needed to develop an infinite scroll module, which I then published as an NPM package. Let's say some other developer finds myinfinite scroll package useful, and use it in their own application, but they found a bug in it. That developer would report the bug to the Github project shared by my dating app, infinite scroll, and a number of other packages. When they search the project's issues for a similar bug report, they would see a lot of issues unrelated to the infinite scroll.  If the infinite scroll package got popular, infinite scroll issues would flood the issues page for my dating app Github project.  I'd rather keep infinite scroll issues and dating app specific issues in separate Github projects.

And what if my dating app repository needs to be private?  I still want my infinite scroll code to be public.

This strategy of only a single repo for various pacakges is more appropriate for maintaing libraries with various plugins and loaders, like Babel, which has many Babel-related packages, and reporting a bug to the Babel monorepo Github project seems like an appropriate context.  It makes sense to report issues for the core Babel library or one of its loaders to the same Github project.

A tool called [Lerna](https://github.com/lerna/lerna) is used by Babel to manage the repos various packages by coordinating interdependecy versions and publishing.  To use Lerna, put each module in its own folder with an appropriate `package.json` file, and run `lerna publish` to get packages onto NPM.

You are reading a README.md in a Github repository that uses a strategy, where the packages and the application share a repository which I will call the *monorepo*, and simultaneously some of the packages, like inifinite scroll, can have their own Github repositories, which I will call the *scattered repos*.

This has the following advantages:
- The monorepo can be private, while the scattered repos can be public.
- Issues and pull requests for inifinte scroll will not clutter the workflow of the dating app.
- Versioning and publishing to NPM is managed with Lerna.

## My Monorepo

This monorepo contains a number of modules within its './packages' directory.  Each of these can be published to NPM via `lerna publish`, and as discussed earlier, Lerna manages the versioning complexity.

Each of those modules can be published to their own Github repos with `npm run scatter`.  If a Github repo doesn't exist for that module name, one will be created.  Otherwise, the repo will be checked out, deleted of its files, and a copy of the files from the module's folder will replace those files.  Then those files will be committed to that new module repo.

Now, developers can report bugs to appropriate Github repos. This monorepo could even be private.  The repos maintained via `npm run scatter` can then be public.

This monorepo also provides a script for initializing new modules.  `npm run new` will ask you some questions and generate a folder within '/packages/' with an appropriate set of files for authoring and publishing a module.

A development environment called `dev_env` is included as an NPM dependency of each module created.  `dev_env` is also the development environment for this monorepo.  `dev_env` helps you run a localhost server, bundle assets with webpack, and run tests with Jest.

This monorepo also contains a package called `profile-framer-frontend`, which is an application being built as a use case for monorepo, dev_env, and some other technologies.
