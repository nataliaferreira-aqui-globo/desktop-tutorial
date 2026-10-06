@echo off
chcp 65001 > nul
cd /d "%~dp0"
echo ===================================================================
echo             SEU LINK PÚBLICO PARA COMPARTILHAR
echo ===================================================================
echo.
echo Consultando o link gerado pelo Docker...
echo.
docker logs checkout_tunnel 2>&1 | findstr /I "trycloudflare.com"
echo.
if exist "%~dp0LINK_COMPARTILHAMENTO.txt" (
    echo Link salvo no arquivo:
    type "%~dp0LINK_COMPARTILHAMENTO.txt"
)
echo.
echo ===================================================================
echo Esse link pode ser enviado para qualquer pessoa acessar.
echo ===================================================================
pause
