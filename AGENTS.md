## Agent notes

This is the **public** photography portfolio (`ichirowt/gallery`, GitHub Pages).
It is the public output of photo-memories; read `../photo-memories/CONTEXT.md`
(GitHub: `ichirowt/photo-memories`) for goals, definitions and the data flow.

- Never commit photos or captions from the private family-albums or photo-memories repos here
  without the owner reviewing them. Portfolio hand-off is always a human step.
- Photos go in `images/fulls` and `images/thumbs`; captions in `_data/captions.yml`
  keyed by filename. Strip GPS before adding a photo; camera EXIF may stay.

### Portfolio Hand-off Workflow

1. In Telegram, tag candidate photos using the 📷 button (`reactions` kind `portfolio`).
2. Run the export CLI in `photo-memories` to an empty private review directory outside Git checkouts:
   ```bash
   python3 -m memories portfolio --db <path-to-db> --out /path/to/private/review
   ```
   This generates:
   - `images/fulls/photo-<id>.jpg` (max 2560px, GPS stripped, camera EXIF preserved)
   - `images/thumbs/photo-<id>.jpg` (max 500px, 1:1 format)
   - `captions.yml` (JSON-formatted YAML with earliest story text keyed by photo filename)
3. Review the candidate images and captions privately.
4. Manually copy approved images into `images/fulls/` and `images/thumbs/`, and merge entries into `_data/captions.yml`.
5. Test the site locally before committing to `ichirowt/gallery`.
