Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\natalia.ferreira\.gemini\antigravity\brain\bafc74e1-c1fc-49dd-8744-65e0a8a006f5\.user_uploaded\media_1791234635644.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# In media_1791234635644.png, width=649, height=586
# Card 1 TV image:
# Left margin of card is around x=20
# Top margin is around y=14
# Let's crop card 1 image (width ~282, height ~206)
$rect1 = New-Object System.Drawing.Rectangle(20, 14, 282, 207)
$crop1 = $bmp.Clone($rect1, $bmp.PixelFormat)
$crop1.Save("globo-ads-lp\images\globoplay-tv-mockup.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop1.Dispose()

# Card 2 TV image:
# Card 2 starts around x=318, y=14, width ~282, height ~207
$rect2 = New-Object System.Drawing.Rectangle(318, 14, 282, 207)
$crop2 = $bmp.Clone($rect2, $bmp.PixelFormat)
$crop2.Save("globo-ads-lp\images\globoplay-tv-mockup-2.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop2.Dispose()

$bmp.Dispose()
Write-Host "Cropping completed!"
