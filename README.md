# MoveIt landing page and public app support

Public site: https://metosapps.github.io/moveit-galaxy-config/

This is a buildless HTML/CSS/JavaScript site for MoveIt Galaxy (`com.moveit.app.gx`).
The repository root is published by GitHub Pages on the main branch. There are no
build dependencies, external fonts, visitor-analytics scripts, forms or accounts.

Pages: index.html, privacy.html, terms.html, help.html, support.html (same content,
canonical help.html), licenses.html. Existing app-facing policy paths are preserved.

The official Samsung badge and original MoveIt icon are unmodified. The screenshot
gallery separates five authentic UI captures from six generated promotional posters.
Original assets are copied without pixel edits. The featured banner supplies social metadata.
Screenshots are from the existing release-preparation evidence, not a claim of new device QA.

Website-only download destination: edit storeUrl in site-config.js. The HTML fallback
links and SoftwareApplication structured data use the same package-based Galaxy Store URL:
https://galaxystore.samsung.com/detail/com.moveit.app.gx

The user requested an active download presentation before store publication. The site
therefore displays the standard “Available on Galaxy Store” badge and active package link.
This presentation does not prove that the app listing or IAP item is approved or live.
No review scores, download counts, testimonials or production-purchase claims are invented.

The app-facing config.json is byte-for-byte preserved. It is separate from site-config.js.
Advertising, release availability, update gates and Pro entitlement are not activated by
this website. Do not change galaxy_release_available until a real Galaxy release exists;
never force updates to an unavailable binary. Keep app-specific identifiers and signing
material outside this public website. Advertising approval and consent controls remain
subject to the Android release workflow, independent of the visible download badge.

Support: chennoufo11@gmail.com

Local preview: python3 -m http.server 8766 --bind 127.0.0.1

Badge source: https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png
Asset provenance: the task's MoveIt-Galaxy-Marketing-EN-2026-10-25 package.
