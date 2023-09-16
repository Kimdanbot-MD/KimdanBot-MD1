#!bin/bash


clear 

sleep 2

echo "eliminando archivos"

rm -rf KimdanBot-MD

sleep 2

echo "clonando github"

git clone https://github.com/Kimdanbot-MD/KimdanBot-MD1

cd KimdanBot-MD

sleep 2

echo "instalando yarn"

yarn install

sleep 2

echo "preparate para escanear el QR"

npm start
