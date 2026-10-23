Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Collections.Generic;

public class ImageProcessor {
    private static void TryEnqueue(int x, int y, int w, int h, int stride, int threshold, byte[] rgbValues, bool[] visited, Queue<int> queue) {
        if (x < 0 || x >= w || y < 0 || y >= h) return;
        int idx = y * w + x;
        if (visited[idx]) return;
        int pIdx = y * stride + x * 4;
        byte b = rgbValues[pIdx];
        byte g = rgbValues[pIdx + 1];
        byte r = rgbValues[pIdx + 2];
        
        if (r >= threshold && g >= threshold && b >= threshold) {
            visited[idx] = true;
            queue.Enqueue(idx);
        }
    }

    public static void RemoveWhiteBackgroundBFS(string inputPath, string outputPath, int threshold) {
        using (Bitmap srcBmp = new Bitmap(inputPath)) {
            int w = srcBmp.Width;
            int h = srcBmp.Height;
            using (Bitmap outBmp = new Bitmap(w, h, PixelFormat.Format32bppArgb)) {
                Rectangle rect = new Rectangle(0, 0, w, h);
                BitmapData srcData = srcBmp.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
                BitmapData outData = outBmp.LockBits(rect, ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

                int stride = Math.Abs(srcData.Stride);
                int bytes = stride * h;
                byte[] rgbValues = new byte[bytes];
                System.Runtime.InteropServices.Marshal.Copy(srcData.Scan0, rgbValues, 0, bytes);

                bool[] visited = new bool[w * h];
                Queue<int> queue = new Queue<int>();

                for (int x = 0; x < w; x++) {
                    TryEnqueue(x, 0, w, h, stride, threshold, rgbValues, visited, queue);
                    TryEnqueue(x, h - 1, w, h, stride, threshold, rgbValues, visited, queue);
                }
                for (int y = 0; y < h; y++) {
                    TryEnqueue(0, y, w, h, stride, threshold, rgbValues, visited, queue);
                    TryEnqueue(w - 1, y, w, h, stride, threshold, rgbValues, visited, queue);
                }

                while (queue.Count > 0) {
                    int curr = queue.Dequeue();
                    int cx = curr % w;
                    int cy = curr / w;

                    TryEnqueue(cx - 1, cy, w, h, stride, threshold, rgbValues, visited, queue);
                    TryEnqueue(cx + 1, cy, w, h, stride, threshold, rgbValues, visited, queue);
                    TryEnqueue(cx, cy - 1, w, h, stride, threshold, rgbValues, visited, queue);
                    TryEnqueue(cx, cy + 1, w, h, stride, threshold, rgbValues, visited, queue);
                }

                for (int y = 0; y < h; y++) {
                    for (int x = 0; x < w; x++) {
                        int idx = y * w + x;
                        if (visited[idx]) {
                            int pIdx = y * stride + x * 4;
                            rgbValues[pIdx + 3] = 0;
                        }
                    }
                }

                System.Runtime.InteropServices.Marshal.Copy(rgbValues, 0, outData.Scan0, bytes);
                srcBmp.UnlockBits(srcData);
                outBmp.UnlockBits(outData);

                outBmp.Save(outputPath, ImageFormat.Png);
            }
        }
    }
}
"@

$img1Path = "C:/Users/VIKAS NAGAR/.gemini/antigravity/brain/2328d5af-0bb0-4b70-b578-4785888c84ca/.user_uploaded/media_1792741872911_b2804518.jpg"
$img2Path = "C:/Users/VIKAS NAGAR/.gemini/antigravity/brain/2328d5af-0bb0-4b70-b578-4785888c84ca/.user_uploaded/media_1792741907931_4fc302df.jpg"

# 1. Copy Image 1 (Cover Banner)
$destBanner = "public/assets/images/brand/captain-cover-banner.jpg"
Copy-Item -Path $img1Path -Destination $destBanner -Force
Write-Output "Image 1 copied to: $destBanner"

# 2. Copy Image 2 (Clean original with white background)
$destBagWhite = "public/assets/images/products/captain-dura-bond-bag-white.jpg"
Copy-Item -Path $img2Path -Destination $destBagWhite -Force
Write-Output "Image 2 (white bg) copied to: $destBagWhite"

# 3. Create Flood-Filled Transparent PNG of the Bag
$destBagPng = "public/assets/images/products/captain-dura-bond-bag.png"
[ImageProcessor]::RemoveWhiteBackgroundBFS($img2Path, $destBagPng, 238)
Write-Output "Transparent bag created at: $destBagPng"
