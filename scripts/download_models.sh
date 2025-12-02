#!/usr/bin/env bash
set -euo pipefail

# Simple downloader for model weights used by WeShield.
# Edit the URL variables below to point to the real hosted files.

mkdir -p backend/models

echo "Downloading models into backend/models/"

# PLACEHOLDER URLs - replace these with real download links
YOLO_FACE_URL="https://example.com/models/yolov8n-face-lindevs.pt"
YOLO_POSE_URL="https://example.com/models/yolov8n-pose.pt"
RES34_URL="https://example.com/models/res34_fair_align_multi_4_20190809.pt"
FAIRFACE_GENDER_URL="https://example.com/models/fairface_gender_resnet18_simple.pth"
GENDER_CLASSIFIER_URL="https://example.com/models/gender_classifier.pth"

download() {
  local url="$1"
  local out="$2"
  if [ -f "$out" ]; then
    echo "Skipping $out (already exists)"
    return
  fi
  if command -v curl >/dev/null 2>&1; then
    curl -L --progress-bar -o "$out" "$url"
  elif command -v wget >/dev/null 2>&1; then
    wget -O "$out" "$url"
  else
    echo "Neither curl nor wget found. Please install one or download files manually." >&2
    exit 1
  fi
}

download "$YOLO_FACE_URL" "backend/models/yolov8n-face-lindevs.pt"
download "$YOLO_POSE_URL" "backend/models/yolov8n-pose.pt"
download "$RES34_URL" "backend/models/res34_fair_align_multi_4_20190809.pt"
download "$FAIRFACE_GENDER_URL" "backend/models/fairface_gender_resnet18_simple.pth"
download "$GENDER_CLASSIFIER_URL" "backend/models/gender_classifier.pth"

echo "Download finished. You may verify checksums with: bash scripts/verify_models.sh"
