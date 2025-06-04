@echo off
rmdir /s /q .\dist 2>nul
mkdir .\dist

xcopy /E /I .\app\css .\dist\css
xcopy /E /I .\app\img .\dist\img
copy .\app\index.html .\dist
copy .\app\questions.json .\dist

mkdir .\dist\js
copy .\app\js\*.js .\dist\js\

call yarn run jsx --extension jsx ./app/js/ ./dist/js/ 