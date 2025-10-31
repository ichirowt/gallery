<img src="https://i.imgur.com/ZG4gSnb.jpeg" alt="demo"/>

# Photography ![OpenCollective](https://opencollective.com/photography/tiers/backer/badge.svg?label=backer&color=brightgreen)
A jekyll website for photographers

## Highlights
1. Easy setup and you get a website of your own for __free__. No web hosting charges too.
2. To add new pictures, you need to just upload them. __No code__ changes required.
3. And, my favorite, you get to see EXIF data like __aperture, shutter speed, iso__ etc. when you click on any image, automagically. Moreover, you can customize this as per your needs.

## Feature Updates
- Support caption message above EXIF data
- Only show images with caption, random order each time building
- Simplify headers and footers, reduce gray edges
- Use squash presets to generate `full` and `thumb` images

## Workflow
- Generate `full` and `thumb` images with squash (resize, remove location, reserve EXIF, rename, compress 50% JPG, etc)
- Update `_data/caption.yml`
- Commit and push, Github Action runs `gulp` and `jekyll build`

## Quick Start

1.  **Fork the repository**: Click the "Fork" button at the top right corner.
2.  **Upload your photos**: Add your full-size images to the `images/fulls` directory and corresponding thumbnails to the `images/thumbs` directory.
3.  **Update captions**: Edit `_data/captions.yml` to add captions for your images. The filename of the image should be the key.
4.  **Configure for deployment**: See the "GitHub Pages Deployment" section below to configure your site for deployment.

## GitHub Pages Deployment

This repository is set up for automated deployment to GitHub Pages using GitHub Actions. The workflow will automatically build and deploy your site whenever you push changes to the `master` branch.

There are two ways to deploy your site:

### 1. Using the Default GitHub Pages URL

If you want to use the default URL (`<your-username>.github.io/<repository-name>`), make sure of the following:

*   **No `CNAME` file**: Ensure there is no `CNAME` file in the root of your repository.
*   **`_config.yml`**:
    *   `baseurl`: Set this to the name of your repository, with a leading slash (e.g., `"/blog-gallery"`).
    *   `url`: This can be left blank or set to your full GitHub Pages URL.

### 2. Using a Custom Domain

If you want to use a custom domain:

*   **`CNAME` file**: Create a `CNAME` file in the root of your repository containing your custom domain (e.g., `photography.example.com`).
*   **DNS Settings**: Configure your domain's DNS records to point to GitHub Pages.
*   **`_config.yml`**:
    *   `baseurl`: Set this to an empty string (`""`).
    *   `url`: Set this to your custom domain with the `https://` protocol (e.g., `"https://photography.example.com"`).

### Automated Build Process

The GitHub Actions workflow in this repository (`.github/workflows/jekyll.yml`) automates the following steps on every push:

1.  Sets up Node.js and Ruby.
2.  Installs npm and Bundler dependencies.
3.  Runs `npx gulp` to process assets (CSS, JS, images).
4.  Builds the Jekyll site.
5.  Deploys the site to GitHub Pages.

Because of this automation, you do not need to run `gulp` or build the site locally before pushing your changes.

## Running Locally

To test your site locally:

1.  `$ bundle install`
2.  `$ npm install`
3.  In `_config.yml`, set `baseurl` to `""`.
4.  `$ bundle exec jekyll serve --port 8000`

## ProTips

### Resize Images
I have made this as a [npm](https://www.npmjs.com) package with [gulp](http://gulpjs.com/) to __automate image resizing
and thumbnail generation__. So if you're lazy like me then you can just do the following before you push your images to github.

1. Fork and clone the project to your computer
2. Go inside the project `$ cd photography`
3. Install all dependencies by `$ npm install`
4. Copy all your pictures (possibly jpg, the largest size available, straight from your camera) and put it inside `images` directory
5. Run `$ gulp resize` to resize the images and to generate thumbnails automatically
6. Push your changes to github.com by `$ git add --all` and `$ git commit -m "a nice commit message"` and then finally `$ git push origin master`

### Contact Form
You can make the contact form work without the need of any server-side code. Just follow this [article on github](https://github.com/dwyl/html-form-send-email-via-google-script-without-server) which uses a simple google script to send emails or to upload to a google spreadsheet when someone submits the form.

## Credits
Thanks to [AJ](https://twitter.com/ajlkn) for the website template which I enhanced for [jekyll](http://jekyllrb.com/).

## Sponsors

Proudly sponsored by these awesome apps. Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://x.com/rampatra_)]

<table>
    <tr>
        <td>
            <a href="https://presentifyapp.com/" target="_blank"><img src="https://raw.githubusercontent.com/rampatra/assets/refs/heads/main/Presentify/Icons/icon_512.png" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://facescreenapp.com/" target="_blank"><img src="https://github.com/user-attachments/assets/b251b413-ccc4-48f1-a316-c2c2a71f959e" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://keyscreenapp.com" target="_blank"><img src="https://github.com/user-attachments/assets/4b75a739-b4b5-432c-a03c-a9bdd8309934" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://todobarapp.com/" target="_blank"><img src="https://todobarapp.com/assets/img/todobar/app-icon-512.png" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://simplefillapp.com/" target="_blank"><img src="https://github.com/user-attachments/assets/6c575d9c-b65b-4ce7-a468-30f74cfedf18" width="150" height="150"></a>
        </td>
    </tr>
</table>

---

_P.S. For any queries or concerns, you can reach out to me on [Twitter](https://twitter.com/rampatra_). I'll try my best to help 🙏._
