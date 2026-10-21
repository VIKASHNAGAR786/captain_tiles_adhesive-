Add-Type -AssemblyName System.Drawing

$srcPath = Resolve-Path "public/assets/images/brand/captain-mascot.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Source mascot loaded: $($src.Width)x$($src.Height)"

function New-CaptainFavicon {
    param(
        [int]$Dimension,
        [string]$OutputPath
    )

    $bmp = New-Object System.Drawing.Bitmap($Dimension, $Dimension, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $pad = [int]($Dimension * 0.03)
    $badgeW = $Dimension - (2 * $pad)

    # Clean, vibrant gold badge circle
    $goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 215, 169, 76))
    $g.FillEllipse($goldBrush, $pad, $pad, $badgeW, $badgeW)
    $goldBrush.Dispose()

    # Outer deep gold accent ring
    $ringPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 169, 110, 22), [Math]::Max(1.0, [float]($Dimension * 0.03)))
    $g.DrawEllipse($ringPen, $pad, $pad, $badgeW, $badgeW)
    $ringPen.Dispose()

    # Inner circular soft highlight ring for depth
    $innerPad = $pad + [int]($Dimension * 0.035)
    $innerW = $Dimension - (2 * $innerPad)
    $innerPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 255, 240, 180), [Math]::Max(1.0, [float]($Dimension * 0.015)))
    $g.DrawEllipse($innerPen, $innerPad, $innerPad, $innerW, $innerW)
    $innerPen.Dispose()

    # Centered Captain Mascot with safe circular margins
    $targetW = [int]($Dimension * 0.68)
    $targetH = [int]($targetW * $src.Height / $src.Width)
    $posX = [int](($Dimension - $targetW) / 2)
    $posY = [int](($Dimension - $targetH) / 2)

    $g.DrawImage($src, $posX, $posY, $targetW, $targetH)

    $bmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Successfully created: $OutputPath ($($Dimension)x$($Dimension))"
}

# Generate Google-required and standard icon sizes
New-CaptainFavicon -Dimension 512 -OutputPath "public/assets/images/brand/captain-logo-square.png"
New-CaptainFavicon -Dimension 192 -OutputPath "public/assets/images/brand/favicon-192x192.png"
New-CaptainFavicon -Dimension 180 -OutputPath "public/assets/images/brand/apple-touch-icon.png"
New-CaptainFavicon -Dimension 144 -OutputPath "public/assets/images/brand/favicon-144x144.png"
New-CaptainFavicon -Dimension 96  -OutputPath "public/assets/images/brand/favicon-96x96.png"
New-CaptainFavicon -Dimension 48  -OutputPath "public/assets/images/brand/favicon-48x48.png"
New-CaptainFavicon -Dimension 32  -OutputPath "public/assets/images/brand/favicon-32x32.png"
New-CaptainFavicon -Dimension 16  -OutputPath "public/assets/images/brand/favicon-16x16.png"

$src.Dispose()
Write-Output "All square favicons generated with zero errors!"
