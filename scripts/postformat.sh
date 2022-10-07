#!/bin/bash

echo Add timestamp to envs...
NOW=$(date)
AUTHOR=$(git config --global user.name)
TIMESTAMP=VITE_TIMESTAMP=\""Updated at $NOW by $AUTHOR"\"
echo -e "$TIMESTAMP" > .env
echo 'Post-format is done'
