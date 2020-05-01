#!/usr/bin/env sh
current_branch=$(git branch --show-current);
message="Добавил скрипт для коммита сообщения из скрипта, поправил ошибки еслинта поддерживаем чистый код 🤘";

#npm run lint --fix
# STOP error
set -e
git add .
git commit -am "$message"
git push -u origin "$current_branch"
