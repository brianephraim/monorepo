

function g () {
  echo 'ggggggggg'
}



qqq='ddd'
aa='echo $qqq'

g

echo 'asdf'
( cd packages/stimulate ; git status )
# lerna exec -- containsGit
# lerna exec -- pwd && git status --porcelain && containsGit
# lerna exec -- bash -c 'aa'
lerna exec -- 'source /Users/brianephraim/Sites/todos-tacos/tosource.sh && containsGit'
