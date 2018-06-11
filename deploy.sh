#!/bin/bash
set -e
lein clean
lein cljsbuild once min
cd resources/public
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://github.com/jakegny/jakegny.github.io.git" master:master
rm -fr .git
