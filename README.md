
## WeShield

This repository contains the source code for WeShield. Model weights are NOT included in this repo; they must be downloaded separately and placed into the `backend/models/` folder.

Summary
- Code: `backend/src/`, `frontend/` and other application code are tracked here.
- Models: heavy model weight files (e.g. `*.pth`, `*.pt`) are excluded to keep the repository small and fast to clone.

Models used (expected filenames and short descriptions)
- `yolov8n-face-lindevs.pt` — face detector used for face localization.
- `yolov8n-pose.pt` — pose detection model used for keypoint/pose estimation.
- `res34_fair_align_multi_4_20190809.pt` — face alignment / embedding model.
- `fairface_gender_resnet18_simple.pth` — gender classifier (FairFace-based) used by the backend.
- `gender_classifier.pth` — (optional) alternative gender classifier used by older code paths.

Where to place models
- Put the downloaded model files into `backend/models/` using the exact filenames listed above.

Example: after download your tree should include:
```
backend/models/yolov8n-face-lindevs.pt
backend/models/yolov8n-pose.pt
backend/models/res34_fair_align_multi_4_20190809.pt
backend/models/fairface_gender_resnet18_simple.pth
backend/models/gender_classifier.pth
```

Download options and links
- Option A — Host yourself / Cloud storage: Upload the model files to an S3 bucket, Google Drive, or other hosting and add the public URLs here.
- Option B — GitHub Releases: Attach model files to a GitHub Release and use the release asset download URLs.
- Option C — Git LFS: If you prefer to keep models inside the repo, enable Git LFS and track `*.pth`/`*.pt`. Note: LFS usage counts against storage/bandwidth quotas.

Placeholder links (replace with real URLs)
- yolov8n-face-lindevs.pt: https://example.com/models/yolov8n-face-lindevs.pt
- yolov8n-pose.pt: https://example.com/models/yolov8n-pose.pt
- res34_fair_align_multi_4_20190809.pt: https://example.com/models/res34_fair_align_multi_4_20190809.pt
- fairface_gender_resnet18_simple.pth: https://example.com/models/fairface_gender_resnet18_simple.pth
- gender_classifier.pth: https://example.com/models/gender_classifier.pth

Verifying downloads (recommended)
- Add SHA256 checksums for each file to `backend/models/checksums.txt` using the format used by `sha256sum` (or `shasum -a 256` on macOS):

```
<sha256sum>  yolov8n-face-lindevs.pt
<sha256sum>  yolov8n-pose.pt
```

- Verify files locally using `sha256sum` or `shasum`:
```bash
sha256sum -c backend/models/checksums.txt
# or on macOS
shasum -a 256 -c backend/models/checksums.txt
```

Adding or replacing models locally
- If you want to use a different model version or a locally-trained model, copy it into `backend/models/` and update `backend/models/checksums.txt` accordingly. Ensure filenames match what the code expects or update the code to reference the new filenames.

Git LFS (optional)
- To track models inside git with Git LFS:
```bash
git lfs install
git lfs track "*.pth" "*.pt"
git add .gitattributes
```
Collaborators must also install Git LFS to interact with tracked files.

Next steps (recommended)
- Host the model files on a cloud provider or Releases and record their SHA256 sums in `backend/models/checksums.txt`.
- Commit and push this repository (models remain excluded unless you enable LFS).

If you'd like, I can: update the README with real links (you provide), or prepare commit/push commands for you.
