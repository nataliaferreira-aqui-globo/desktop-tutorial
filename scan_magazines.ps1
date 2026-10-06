Add-Type -AssemblyName System.Drawing
$img1 = [System.Drawing.Bitmap]::FromFile("C:\Users\natalia.ferreira\.gemini\antigravity\brain\bafc74e1-c1fc-49dd-8744-65e0a8a006f5\.user_uploaded\media_1791297056229.png")

Write-Host "Scanning Image 1 (Width: $($img1.Width), Height: $($img1.Height))..."
# Let's inspect column 120 (middle of card 1) along Y
for ($y = 0; $y -lt 300; $y += 10) {
    $p = $img1.GetPixel(120, $y)
    Write-Host "Y=$y : R=$($p.R) G=$($p.G) B=$($p.B)"
}

# Let's inspect row 120 along X across all 4 cards
for ($x = 0; $x -lt 1024; $x += 30) {
    $p = $img1.GetPixel($x, 120)
    Write-Host "X=$x : R=$($p.R) G=$($p.G) B=$($p.B)"
}
$img1.Dispose()
