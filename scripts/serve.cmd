@echo off
yarn run build
start /B cmd /c "yarn run onchange ./app -- yarn run build"
start /B cmd /c "yarn run live-server --port=9200 ./dist" 