#!/usr/bin/env bash
set -euo pipefail

if [ ! -f backend/models/checksums.txt ]; then
  echo "No checksum file found at backend/models/checksums.txt"
  echo "Create it with lines in the form: <sha256sum>  <filename>"
  exit 1
fi

pushd backend/models >/dev/null
echo "Verifying model checksums..."
if command -v sha256sum >/dev/null 2>&1; then
  sha256sum -c checksums.txt
elif command -v shasum >/dev/null 2>&1; then
  # macOS uses shasum -a 256
  shasum -a 256 -c checksums.txt
else
  echo "No sha256 checksum tool found. Install coreutils or use shasum." >&2
  exit 1
fi
popd >/dev/null
