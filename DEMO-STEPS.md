# Demo Script — Git Flow: Release Branch

> Jalankan satu per satu di terminal. **Screenshot setiap output.**
> Pastikan terminal berada di folder `dummy-project` ini.

---

## STEP 1 — Cek status di develop
```bash
git status
```

---

## STEP 2 — Buat release branch
```bash
git checkout -b release/v1.0
```

---

## STEP 3 — Update versi, lalu cek status
Buka file `VERSION`, ubah isi dari `0.9.0-dev` menjadi `1.0.0`, simpan.
```bash
git status
```

---

## STEP 4 — Commit update versi
```bash
git add VERSION
git commit -m "chore: bump version to 1.0.0"
```

---

## STEP 5 — Update CHANGELOG, lalu commit (bugfix)
Buka file `CHANGELOG.md`, ubah baris `## [Unreleased]` menjadi `## [1.0.0] - 2026-04-30`, simpan.
```bash
git add CHANGELOG.md
git commit -m "fix: update changelog for v1.0 release"
```

---

## STEP 6 — Push release branch ke GitHub
```bash
git push origin release/v1.0
```

---

## STEP 7 — Pull dari remote
```bash
git pull origin release/v1.0
```

---

## STEP 8 — Merge release ke master
```bash
git checkout master
git merge release/v1.0
git push origin master
```

---

## STEP 9 — Beri tag versi
```bash
git tag v1.0
git push origin v1.0
```

---

## STEP 10 — Sync balik ke develop
```bash
git checkout develop
git merge release/v1.0
git push origin develop
```

---

## STEP 11 — Simulasi revert
```bash
git revert HEAD --no-edit
```

---

## STEP 12 — Hapus release branch + status final
```bash
git branch -d release/v1.0
git push origin --delete release/v1.0
git status
```

---

> **Selesai!** Semua screenshot siap untuk PPT Slide 7 & 8.
