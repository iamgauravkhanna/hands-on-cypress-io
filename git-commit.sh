echo "Which Git Repo ?"

git config --get remote.origin.url 

ls -ltr

git status

git add .

git status

foo="changes-"$(date +%Y-%m-%d-%H-%M-%S)

git commit -m $foo

git push