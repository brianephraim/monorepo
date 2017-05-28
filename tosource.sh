containsGit () {
  count=`ls -a -1 .git 2>/dev/null | wc -l`
  if [ $count != 0 ]; then 
    echo "contains .git $PWD"
  else
     echo "does not contain .git $PWD"
  fi 
}