
npm run docs:build

cd docs/.vuepress/dist

git init
git remote add origin git@github.com:Dm-China/Dm-China.github.io.git
git add -A
git commit -m 'deploy page'


# git pull
git push -f origin main
# git push -f git@github.com:Dm-China/Dm-China.github.io.git master

cd -
