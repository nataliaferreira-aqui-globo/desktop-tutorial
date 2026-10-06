Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Bitmap]::FromFile("C:\Users\natalia.ferreira\.gemini\antigravity\brain\bafc74e1-c1fc-49dd-8744-65e0a8a006f5\.user_uploaded\media_1791234635644.png")

# Card 1 photo coordinates: X=20, Y=14, Width=282, Height=207
$rect1 = New-Object System.Drawing.Rectangle(20, 14, 282, 207)
$crop1 = $src.Clone($rect1, $src.PixelFormat)
$crop1.Save("globo-ads-lp\images\globoplay-video-15s.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop1.Dispose()

# Card 2 photo coordinates: X=318, Y=14, Width=282, Height=207
$rect2 = New-Object System.Drawing.Rectangle(318, 14, 282, 207)
$crop2 = $src.Clone($rect2, $src.PixelFormat)
$crop2.Save("globo-ads-lp\images\globoplay-video-180s.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop2.Dispose()

$src.Dispose()
Write-Host "Both Globoplay images cropped and saved successfully!"
