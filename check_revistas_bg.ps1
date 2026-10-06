Add-Type -AssemblyName System.Drawing
$dir = "globo-ads-lp\images\revistas\"
$files = Get-ChildItem $dir -Filter "*.png"

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    # Background color is at (10, 10)
    $bg = $bmp.GetPixel(10, 10)
    
    # In each image, the top ~32px had the pill tags 'display' (left ~10..60) and 'R$ 9,60/CPM' (right ~160..225)
    # Let's inspect if clearing top 35px with the solid background color keeps the logo completely intact
    # The logos are vertically centered between Y=40 and Y=145
    Write-Host "$($f.Name) : BG is R=$($bg.R) G=$($bg.G) B=$($bg.B)"
    $bmp.Dispose()
}
