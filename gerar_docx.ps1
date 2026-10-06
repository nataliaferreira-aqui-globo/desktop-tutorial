Add-Type -AssemblyName System.IO.Compression.FileSystem

$sourceDir = Join-Path $PSScriptRoot "docx_staging"
$destFile = Join-Path $PSScriptRoot "Central_de_Ajuda_Aqui_Ads_FAQs.docx"

if (Test-Path $destFile) {
    Remove-Item -Force $destFile
}

[System.IO.Compression.ZipFile]::CreateFromDirectory($sourceDir, $destFile)

if (Test-Path $destFile) {
    Write-Output "SUCESSO: Arquivo docx gerado com sucesso em $destFile"
} else {
    Write-Error "FALHA: Nao foi possivel gerar o arquivo docx."
}
