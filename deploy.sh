npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Ayuanzzz/Todo.git master:gh-pages
cd ../
# rm -rf dist
