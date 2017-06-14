In the course developing an application, modules are authored that can be useful to the larger developer community.  You could remove them from the application's repo into entirely separate repos and re-import them as dependencies with `NPM install`.  But this would be a nightmare to maintain.  If you edited one of these modules to accomodate your application, you would have to publish it to NPM, then update that module's package version in your application.  Your various externalized modules might depend on one another, and keeping their versions in harmony would be very tedious.  

At this point, we turn to [Lerna](https://github.com/lerna/lerna).  Lerna will let us publish our various modules to NPM from a monorepo (we can consider our application's repo a monorepo).  Lerna will manage versioning and dependency complexity for us.  You just need to put each module in its own folder with an appropriate `package.json` file, and run `lerna publish`.

Great.  But what happens when another developer discovers one the modules your published on NPM, integrates it in their application, and finds a bug?  Typically, they would go the Github project association with the module and report the bug there.  In this case it would be your application's monorepo.

But in some cases, your application's repo on Github might not be an appropriate place to report a bug.  What if your application repo is private?  What if your application is focused on something seemingly unrelated to the module of concern, and reporting a bug to the application repo seems like the wrong context.  

Lerna is typically used by public projects like Babel, which has many Babel-related packages, and reporting a bug to the Babel monorepo Github project seems like an appropriate context.  But if I'm writing a kitten-themed-blog application and publish a generic debounce module from it via Lerna, it doesn't seem appropriate to report a bug for the debounce module to a kitten-themed-blog project.



## My Monorepo

This project for which you are reading the README.md for, I will refer to as *my-monorepo*.

*my-monorepo* contains a number of modules within its './packages' directory.  Each of these can be published to NPM via `lerna publish`, and as discussed earlier, Lerna manages the versioning complexity.

Each of those modules can be published to their own Github repos with `npm scatter`.  If a Github repo doesn't exist for that module name, one will be created.  Otherwise, the existing Github repo will be hard reset to the contents of the module's folder.

Now, developers can report bugs to appropriate Github repos.  *my-monorepo* could even be private.  The repos the `npm scatter` maintains will always be public.

*my-monorepo* also provides a script for initializing new modules.  `npm run new` will ask you some questions and generate a folder within '/packages/' with an appropriate set of files for authoring and publishing a module.

A development environemnt called `dev_env` is included as an NPM dependency of each module created.  `dev_env` is also the development environment for *my-monorepo*.  `dev_env` helps you run a localhost server, bundle assets with webpack, and run test with Jest.
