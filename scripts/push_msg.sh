#!/usr/bin/env sh
echo "🤘✈"
current_branch=$(git branch --show-current);
message="откорректировал скрипты push ✈";

#npm run lint --fix
# STOP error
set -e
git add .
git commit -am "$message"
git push -u origin "$current_branch"
