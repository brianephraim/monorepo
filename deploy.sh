if git status --porcelain | grep . -qs; then
    echo 'DEPLOY SCIPT: Cannot deploy until changes committed.'
else
    echo 'DEPLOY SCIPT: Repo is clean. Deploy proceeding.'
    commitHash=$(git log --pretty=format:'%h' -n 1)
    branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
    echo "DEPLOY SCIPT: DEPLOYING HASH: $commitHash"
    echo "DEPLOY SCIPT: ORIGINAL BRANCH: $branch"
    # create `staging` branch if it doesn't exist
    echo "DEPLOY SCIPT: CREATE DEPLOY BRANCH IF IT DOES NOT EXIST"
    git checkout staging 2>/dev/null || git checkout -b staging
    # checkout the branch where you started
    git checkout $branch
    echo "DEPLOY SCIPT: CREATE/CHECKOUT CLEAN DEPLOY-TEMP BRANCH"
    git branch -D staging-temp
    git checkout -b staging-temp
    # move your commit over to the staging branch with message referring to the commit's original hash
    echo "DEPLOY SCIPT: RESET CURRENT FILES ON TOP OF DEPLOY BRANCH HISTORY"
    git reset staging
    # collect all the deps in all nested folders, and use to create master deps list for package.json
    # necessary because deploy bundle has external references to node_modules contents
    echo "DEPLOY SCIPT: AGGREGATE NESTED PACKAGE.JSON DEPS INTO ROOT LEVEL PACKAGE.JSON"
    ./packages/npm-deps/bin/npm-deps < package.json > package-combined.json --silent
    node ./packages/npm-deps/transfer-deps.js ./package-combined.json ./package.json
    rm ./package-combined.json
    # compile the bundle
    echo "DEPLOY SCIPT: BUNDLING IN DEPLOY-TEMP... ORIGNAL BRANCH WAS: $branch"
    ./packages/dev_env/bin/devenv.js --servers='bernieserver,junk-express' --isDev=false --isUniversal=true --isDeploy=true
    # b_NO_IGNORE_buildClient
    # b_NO_IGNORE_buildServer
    echo "DEPLOY SCIPT: MODIFYING GITIGNORE TO ALLOW COMMIT OF BUNDLES TO DEPLOY-TEMP / DEPLOY BRANCHES"
    sed -i '' -e 's/buildClient/b_NO_IGNORE_uildClient/g' ./.gitignore
    sed -i '' -e 's/buildServer/b_NO_IGNORE_uildServer/g' ./.gitignore
    echo "DEPLOY SCIPT: COMMITTING BUNDLE AND GITIGNORE TO DEPLOY-TEMP"
    git add -A .
    git commit -m "deployed $commitHash"
    echo "DEPLOY SCIPT: REBASING DEPLOY-TEMP ONTO DEPLOY"
    git checkout staging
    git rebase staging-temp
    echo "DEPLOY SCIPT: DELETING DEPLOY-TEMP"
    git branch -D staging-temp
    echo "DEPLOY SCIPT: PUSHING DEPLOY"
    git push -u origin staging
    echo "DEPLOY SCIPT: DONE DEPLOYING, RETURNING TO BRANCH: $branch"
    git checkout $branch
    echo "DEPLOY SCIPT: WATCHING HEROKU TAIL FOR DEPLOYMENT"
    echo "---"
    echo "---"
    heroku logs --app berniereact --tail
fi