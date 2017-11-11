#!/bin/bash

cat ./ascii.txt

quasar build

git subtree push --prefix dist live master

echo "Done!"