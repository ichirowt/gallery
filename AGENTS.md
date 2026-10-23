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
   - `images/thumbs/photo-<id>.jpg` (max 500px, original aspect ratio)
   - `captions.yml` (JSON-formatted YAML with earliest story text keyed by photo filename)
3. Review the candidate images and captions privately.
4. Manually copy approved images into `images/fulls/` and `images/thumbs/`, and merge entries into `_data/captions.yml`.
5. Run `node scripts/shuffle_captions.js` after merging captions, then test the site locally before committing to `ichirowt/gallery`. The homepage lists `_data/shuffled_captions.yml`; Jekyll alone does not regenerate it. The default gulp task also runs this shuffle. Portfolio images already have derivatives, so no resize is needed for this hand-off.

### Bug diagnosis

Gulp errors go to stderr; deployed builds are logged in GitHub Actions → Deploy Jekyll site to Pages → Run gulp. Reproduce resize input preservation locally with `npm test` (requires the existing npm dependencies and ImageMagick `convert`/`identify`); the test uses a temporary image directory and leaves gallery content untouched.
