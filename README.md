# Captain Americano

> In coffee we trust. Brewed for justice. No decaf allowed.

A single-page tribute site featuring Captain Americano — the brewing hero — with a scripted chat persona, coffee-themed Avengers roast menu, lore, and wisdom. Designed for GitHub Pages hosting.

## Local preview

No build step. Just open `index.html` in a browser, or run any static server:

```bash
# Python
python -m http.server 8000

# Node (if npx is available)
npx serve .
```

Then visit `http://localhost:8000`.

## Project structure

```
.
├── index.html           # single-page markup
├── css/
│   └── styles.css       # all styles
├── js/
│   ├── persona.js       # scripted persona + catchphrase library
│   └── app.js           # chat UI logic
├── assets/
│   └── captain-americano-poster.png   # hero image
├── .nojekyll            # tells GitHub Pages to skip Jekyll processing
└── README.md
```

## Deploying to GitHub Pages

1. Create a new repo on GitHub (public for free-tier Pages).
2. In this folder, initialize and push:
   ```bash
   git init
   git add .
   git commit -m "Initial Captain Americano site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. In the GitHub repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Choose branch `main`, folder `/ (root)`. Save.
6. Wait a minute, then your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

## Adding the poster

Drop your poster image at `assets/captain-americano-poster.jpg` before pushing. The site references it in the hero section.

## Credits

A tribute site. Not affiliated with Marvel or any coffee roaster.
