Add-Type -AssemblyName System.Drawing
$dir = "C:\Users\natalia.ferreira\.gemini\antigravity\brain\bafc74e1-c1fc-49dd-8744-65e0a8a006f5\.user_uploaded\"
$outDir = "globo-ads-lp\images\revistas\"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir }

$cardsX = @(
    @{ Name = "c1"; X = 5;   W = 233 },
    @{ Name = "c2"; X = 252; W = 233 },
    @{ Name = "c3"; X = 500; W = 233 },
    @{ Name = "c4"; X = 747; W = 233 }
)

# Helper function to crop and save
function Crop-Logo($bmp, $x, $y, $w, $h, $dest) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
}

# Image 1
$img1 = [System.Drawing.Bitmap]::FromFile($dir + "media_1791297056229.png")
Crop-Logo $img1 $cardsX[0].X 30 $cardsX[0].W 166 ($outDir + "auto-esporte.png")
Crop-Logo $img1 $cardsX[1].X 30 $cardsX[1].W 166 ($outDir + "casa-e-jardim.png")
Crop-Logo $img1 $cardsX[2].X 30 $cardsX[2].W 166 ($outDir + "crescer.png")
Crop-Logo $img1 $cardsX[3].X 30 $cardsX[3].W 166 ($outDir + "epoca-negocios.png")
$img1.Dispose()
Write-Host "Image 1 cropped (4 logos)!"

# Image 2
$img2 = [System.Drawing.Bitmap]::FromFile($dir + "media_1791297062935.png")
Crop-Logo $img2 $cardsX[0].X 30 $cardsX[0].W 166 ($outDir + "extra.png")
Crop-Logo $img2 $cardsX[1].X 30 $cardsX[1].W 166 ($outDir + "galileu.png")
Crop-Logo $img2 $cardsX[2].X 30 $cardsX[2].W 166 ($outDir + "globo-rural.png")
Crop-Logo $img2 $cardsX[3].X 30 $cardsX[3].W 166 ($outDir + "marie-claire.png")
$img2.Dispose()
Write-Host "Image 2 cropped (4 logos)!"

# Image 3
$img3 = [System.Drawing.Bitmap]::FromFile($dir + "media_1791297071311.png")
Crop-Logo $img3 $cardsX[0].X 30 $cardsX[0].W 166 ($outDir + "monet.png")
Crop-Logo $img3 $cardsX[1].X 30 $cardsX[1].W 166 ($outDir + "pegn.png")
Crop-Logo $img3 $cardsX[2].X 30 $cardsX[2].W 166 ($outDir + "quem.png")
Crop-Logo $img3 $cardsX[3].X 30 $cardsX[3].W 166 ($outDir + "techtudo.png")
$img3.Dispose()
Write-Host "Image 3 cropped (4 logos)!"
