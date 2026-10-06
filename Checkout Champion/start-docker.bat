@echo off
setlocal
title Checkout Champion - Docker
mode con: cols=120 lines=40
cls

:: Garante que o diretorio atual eh o diretorio onde o script esta localizado
cd /d "%~dp0"

echo ==============================================================================================
echo   CHECKOUT CHAMPION - INICIALIZADOR DOCKER
echo   Diretorio atual: %CD%
echo ==============================================================================================
echo.

echo [1/3] Verificando Docker...
docker --version
if errorlevel 1 (
    echo.
    echo ==========================================================================================
    echo   [ERRO] O comando 'docker' nao foi encontrado!
    echo ==========================================================================================
    echo O Docker Desktop precisa estar instalado na sua maquina.
    echo.
    pause
    exit /b 1
)

echo.
echo [2/3] Verificando conexao com o Docker Desktop...
docker info >nul 2>&1
if errorlevel 1 (
    echo.
    echo ==========================================================================================
    echo   [ATENCAO] O Docker Desktop esta fechado!
    echo ==========================================================================================
    echo Por favor, abra o aplicativo Docker Desktop e aguarde o icone verde 'Engine running'.
    echo Depois, execute este script novamente.
    echo.
    pause
    exit /b 1
)
echo Docker Desktop ativo e conectado!

echo.
echo Limpando eventuais conteineres anteriores...
docker compose down >nul 2>&1

echo.
echo [3/3] Construindo e subindo os conteineres no Docker...
docker compose up -d --build

if errorlevel 1 (
    echo.
    echo ==========================================================================================
    echo   [ERRO] Falha ao iniciar os conteineres.
    echo ==========================================================================================
    pause
    exit /b 1
)

echo.
echo ==============================================================================================
echo   SUCESSO! O checkout esta rodando no Docker.
echo   Local: http://localhost:3000
echo ==============================================================================================
echo.
echo Aguardando geracao do link publico seguro de compartilhamento...
timeout /t 6 /nobreak >nul

docker logs checkout_tunnel 2>&1 | findstr /I "trycloudflare.com" > "%~dp0LINK_COMPARTILHAMENTO.txt"

echo.
echo ==============================================================================================
echo   SEU LINK PUBLICO DE COMPARTILHAMENTO:
type "%~dp0LINK_COMPARTILHAMENTO.txt"
echo.
echo   (Esse link tambem foi salvo no arquivo: LINK_COMPARTILHAMENTO.txt)
echo ==============================================================================================
echo.

start http://localhost:3000

echo Exibindo logs (pressione Ctrl+C para fechar visualizacao dos logs sem desligar o servidor):
docker compose logs -f
