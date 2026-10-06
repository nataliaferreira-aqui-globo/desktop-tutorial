Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Bitmap]::FromFile("C:\Users\natalia.ferreira\.gemini\antigravity\brain\bafc74e1-c1fc-49dd-8744-65e0a8a006f5\.user_uploaded\media_1791230020185.png")

# Let's crop the TV photo inside the card:
# The mockup image is between X=25 and X=335 (width ~310), Y=155 and Y=325 (height ~170)
$rect = New-Object System.Drawing.Rectangle(25, 155, 310, 170)
$crop = $src.Clone($rect, $src.PixelFormat)
$crop.Save("globo-ads-lp\images\globoplay-pausa-interativa.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose()
$src.Dispose()
Write-Host "Pausa Interativa cropped successfully!"
