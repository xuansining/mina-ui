cd dist; 
git init; 
git remote remove origin; 
git remote add origin git@gitee.com:xuanxuan_coding/mina-ui-website.git;
git add . ; 
git commit -m "modify";
git push -f origin master && exit 0