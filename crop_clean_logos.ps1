Add-Type -AssemblyName System.Drawing
$dir = "C:\Users\natalia.ferreira\.gemini\antigravity\brain\bafc74e1-c1fc-49dd-8744-65e0a8a006f5\.user_uploaded\"
$outDir = "globo-ads-lp\images\revistas\"

# Card X positions in the 1024-wide screenshots:
# Card 1: X=10..235 (center ~122)
# Card 2: X=258..483 (center ~370)
# Card 3: X=505..730 (center ~618)
# Card 4: X=752..977 (center ~865)

$cards = @(
    @{ Name = "c1"; X = 12;  W = 224 },
    @{ Name = "c2"; X = 260; W = 224 },
    @{ Name = "c3"; X = 508; W = 224 },
    @{ Name = "c4"; X = 756; W = 224 }
)

function Crop-Clean-Logo($srcBmp, $x, $y, $w, $h, $dest) {
    # Create target bitmap 240x160 with clean white background
    $target = New-Object System.Drawing.Bitmap 240, 160
    $g = [System.Drawing.Graphics]::FromImage($target)
    $g.Clear([System.Drawing.Color]::FromArgb(250, 250, 252))
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

    # Crop inner logo area (Y from 52 to 175, height 123)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = $srcBmp.Clone($rect, $srcBmp.PixelFormat)

    # Draw centered in target
    $destX = [int]((240 - $w) / 2)
    $destY = [int]((160 - $h) / 2)
    $g.DrawImage($cropped, $destX, $destY, $w, $h)

    $target.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    $g.Dispose()
    $target.Dispose()
}

# Image 1 (Auto Esporte, Casa e Jardim, Crescer, Época Negócios)
$img1 = [System.Drawing.Bitmap]::FromFile($dir + "media_1791297056229.png")
Crop-Clean-Logo $img1 $cards[0].X 54 $cards[0].W 122 ($outDir + "auto-esporte.png")
Crop-Clean-Logo $img1 $cards[1].X 54 $cards[1].W 122 ($outDir + "casa-e-jardim.png")
Crop-Clean-Logo $img1 $cards[2].X 54 $cards[2].W 122 ($outDir + "crescer.png")
Crop-Clean-Logo $img1 $cards[3].X 54 $cards[3].W 122 ($outDir + "epoca-negocios.png")
$img1.Dispose()

# Image 2 (Extra, Galileu, Globo Rural, Marie Claire)
$img2 = [System.Drawing.Bitmap]::FromFile($dir + "media_1791297062935.png")
Crop-Clean-Logo $img2 $cards[0].X 54 $cards[0].W 122 ($outDir + "extra.png")
Crop-Clean-Logo $img2 $cards[1].X 54 $cards[1].W 122 ($outDir + "galileu.png")
Crop-Clean-Logo $img2 $cards[2].X 54 $cards[2].W 122 ($outDir + "globo-rural.png")
Crop-Clean-Logo $img2 $cards[3].X 54 $cards[3].W 122 ($outDir + "marie-claire.png")
$img2.Dispose()

# Image 3 (Monet, PEGN, Quem, Techtudo)
$img3 = [System.Drawing.Bitmap]::FromFile($dir + "media_1791297071311.png")
Crop-Clean-Logo $img3 $cards[0].X 54 $cards[0].W 122 ($outDir + "monet.png")
Crop-Clean-Logo $img3 $cards[1].X 54 $cards[1].W 122 ($outDir + "pegn.png")
Crop-Clean-Logo $img3 $cards[2].X 54 $cards[2].W 122 ($outDir + "quem.png")
Crop-Clean-Logo $img3 $cards[3].X 54 $cards[3].W 122 ($outDir + "techtudo.png")
$img3.Dispose()

Write-Host "All 12 logos cleanly cropped without CPM or display pills!"
