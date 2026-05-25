# CSES-01 local setup helper
# Run from inside the cloned repository.

Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install

Write-Host "Starting Docusaurus local dev server..." -ForegroundColor Cyan
npm run start
