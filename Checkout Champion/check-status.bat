@echo off
title Checkout Champion - Logs e Status
cls
cd /d "%~dp0"
echo ========================================================
echo   STATUS DO DOCKER
echo ========================================================
docker compose ps
echo.
echo ========================================================
echo   ULTIMOS LOGS DO SERVIDOR
echo ========================================================
docker compose logs --tail=40
echo.
pause
