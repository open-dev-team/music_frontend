#!/usr/bin/env sh
npm run lint --fix
current_branch=$(git branch --show-current);

# STOP error
set -e
git add .
git commit -m "$1"
git push -u origin "$current_branch"
