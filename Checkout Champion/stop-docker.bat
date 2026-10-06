@echo off
echo ========================================================
echo   Parando Checkout Champion no Docker...
echo ========================================================
cd /d "%~dp0"
echo.
docker compose down
echo.
echo Contêiner finalizado.
pause
