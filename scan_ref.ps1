Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Bitmap]::FromFile("C:\Users\natalia.ferreira\.gemini\antigravity\brain\bafc74e1-c1fc-49dd-8744-65e0a8a006f5\.user_uploaded\media_1791230020185.png")
Write-Host "Width: $($src.Width), Height: $($src.Height)"

# In media_1791230020185.png, let's find the inner photo boundaries
for ($y = 0; $y -lt 300; $y += 10) {
    $p = $src.GetPixel(180, $y)
    Write-Host "Y=$y : R=$($p.R) G=$($p.G) B=$($p.B)"
}
$src.Dispose()
