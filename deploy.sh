
npm run docs:build

cd docs/.vuepress/dist

git init
git remote add origin git@github.com:wxkjtec/wxkj-design-docs.git
git add -A
git commit -m 'deploy page'


# git pull
git push -f origin main
# git push -f git@github.com:wxkjtec/wxkj-design-docs.git

cd -
