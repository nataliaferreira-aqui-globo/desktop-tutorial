@echo off
title Aqui Ads - Prototipo no Docker
cls
echo ===============================================================
echo   INICIANDO O PROTOTIPO DA LANDING PAGE AQUI ADS NO DOCKER
echo ===============================================================
echo.
echo 1. Construindo e iniciando o container...
docker compose up --build -d
echo.
echo ===============================================================
echo   CONTAINER SUBIDO COM SUCESSO!
echo   Abrindo o prototipo no seu navegador: http://localhost:3000
echo ===============================================================
start http://localhost:3000
echo.
echo Pressione qualquer tecla para parar e fechar o container...
pause > nul
docker compose down
