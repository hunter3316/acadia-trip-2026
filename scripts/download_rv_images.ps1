$assets = "c:\Users\dmsmithphd\OneDrive\Documents\Obsidian\DSmith\Personal\2026 acadia trip\trip-webapp\assets"

$downloads = @(
    @{ url = "https://coachmenrv.com/ImageHandler/314295/2026-CM-Freedom%20Express%20Select-29SE-Ext-1%20copy.webp"; name = "rv_ext.webp" },
    @{ url = "https://coachmenrv.com/ImageHandler/313714/2026-CM-Freedom%20Express%20Select-29SE-01%20copy.webp"; name = "rv_kitchen.webp" },
    @{ url = "https://coachmenrv.com/ImageHandler/313715/2026-CM-Freedom%20Express%20Select-29SE-02%20copy.webp"; name = "rv_living.webp" },
    @{ url = "https://coachmenrv.com/ImageHandler/313717/2026-CM-Freedom%20Express%20Select-29SE-04%20copy.webp"; name = "rv_storage.webp" },
    @{ url = "https://coachmenrv.com/ImageHandler/313722/2026-CM-Freedom%20Express%20Select-29SE-09%20copy.webp"; name = "rv_bedroom.webp" },
    @{ url = "https://coachmenrv.com/ImageHandler/313726/2026-CM-Freedom%20Express%20Select-29SE-13%20copy.webp"; name = "rv_bunkhouse.webp" },
    @{ url = "https://coachmenrv.com/ImageHandler/319692/2026_FreedomExpressSelect-29SE-2026-WEB%20copy.webp";    name = "rv_floorplan.webp" }
)

$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120" }

foreach ($item in $downloads) {
    $outPath = Join-Path $assets $item.name
    try {
        Invoke-WebRequest -Uri $item.url -OutFile $outPath -Headers $headers -TimeoutSec 30
        $size = (Get-Item $outPath).Length
        Write-Host "OK: $($item.name) ($size bytes)"
    } catch {
        Write-Host "FAIL: $($item.name) - $($_.Exception.Message)"
    }
}
Write-Host "Done."
