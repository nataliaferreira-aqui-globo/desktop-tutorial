Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Bitmap]::FromFile("C:\Users\natalia.ferreira\.gemini\antigravity\brain\bafc74e1-c1fc-49dd-8744-65e0a8a006f5\.user_uploaded\media_1791234635644.png")

# Let's inspect column 150 (middle of card 1) along Y to find where the photo starts and ends
Write-Host "Scanning Y at X=150..."
for ($y = 0; $y -lt 300; $y += 5) {
    $p = $src.GetPixel(150, $y)
    Write-Host "Y=$y : R=$($p.R) G=$($p.G) B=$($p.B)"
}

# Let's inspect row 100 (middle of photo) along X to find where card 1 photo starts and ends
Write-Host "Scanning X at Y=100..."
for ($x = 0; $x -lt 640; $x += 20) {
    $p = $src.GetPixel($x, 100)
    Write-Host "X=$x : R=$($p.R) G=$($p.G) B=$($p.B)"
}

$src.Dispose()
