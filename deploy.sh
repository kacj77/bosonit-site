#!/usr/bin/env bash
set -euo pipefail

# Usage: STACK_USER=bosonit.org ./deploy.sh
: "${STACK_USER:?Environment variable STACK_USER not set}"

REMOTE="${STACK_USER}@ssh.us.stackcp.com"
TARGET="~/public_html/bosonit.org"

echo "🔄  Building site locally…"
npm ci
npm run build

echo "🚀  Deploying to ${REMOTE}:${TARGET}"
rsync -avz --delete           --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r           dist/ "${REMOTE}:${TARGET}/"

echo "✅  Deploy complete."
