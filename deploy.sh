#!/usr/bin/env sh

# abort on errors

set -e

# build
npm run build

# navigate into output dir

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:DevChromium/chromium.git master:gh-pages

PAUSE
PAUSE

cmd /k
