# Managing the portfolios

The Software Development and Music Production pages each show a portfolio grid.
Software cards link directly to live websites and apps; placeholders have no
link and display "Coming soon." Music cards show an audio player;
their artwork and title start playback with JavaScript, and native player
controls remain available without it. The grid is rendered by Hugo.

For software, set `external_url` to the live site or app URL. Optionally set
`link_text` to customize the call to action. Set `placeholder: true` when a
project has no destination yet. For a music track, set `audio` to the MP3
filename in the bundle. Use
`build: {render: never, list: always, publishResources: true}` to keep the track
in the portfolio and publish its assets without generating a story page.
Do not add aliases or story content to these portfolio bundles.

For a video demo, set `video` to the MP4 filename in its bundle and add a
`featured.jpg` poster frame. The tile shows native video controls instead of
a linked image. Galaxim demonstrates this setup. Use a web-sized video;
full-resolution originals can be retained in the ignored `.local-media/`
directory outside the published content.

## Add a project

Create a project bundle in the appropriate service folder:

```sh
hugo new content --kind project software-development/my-project
# Or:
hugo new content --kind project music-production/my-project
```

The project archetype creates an `index.md` page and a placeholder `cover.svg`.
Edit the title, summary, date, and image description in `index.md`, remove the
sample story body, and add the build settings and destination described above.
Replace the placeholder illustration with your own picture. Use
`featured.jpg`, `featured.png`, or `featured.webp` for a photo or screenshot;
Hugo creates optimized images and uses the featured image for sharing metadata.
Remove the placeholder when you add the replacement. SVG illustrations should
use `cover.svg` (the upstream theme's sharing metadata expects raster featured
images). Landscape images around 1600 × 1000 pixels work well.
For application screenshots, set `image.fit: contain` to show the full image
inside the card without cropping its controls or charts.

Set `draft: false` to publish the page in a normal build. New projects appear
automatically in their service's portfolio, ordered by `weight` (lowest first),
then newest first. Omitted weights default to zero; Retired Thinker uses `-1`
to appear first. External portfolio links open in a new tab. Keep `type: project`:
this is how the grid distinguishes project overviews from supporting pages.
The `example: true` flag adds an Example project label; remove it or set it to
`false` for real work. Illustrative projects should be clearly labeled.

```text
content/
  software-development/
    _index.md                      # Service page and its portfolio grid
    my-project/
      index.md                     # Project story
      featured.jpg                 # Card and project image
      screenshot.png               # Optional additional image
  music-production/
    _index.md
    my-recording/
      index.md
      featured.jpg
      listening-sample.mp3          # Optional audio
```

Reference additional images in the story with relative Markdown paths, such as
`![Booking screen](screenshot.png)`. The theme also supports audio shortcodes,
as demonstrated in the existing blog content.

## Give a project multiple pages

Use a branch bundle instead of a leaf bundle: rename `index.md` to `_index.md`
and add supporting Markdown pages in the same directory. Keep the overview's
`type: project`, and give every supporting page `type: project-detail`.
Supporting pages automatically appear under "More about this project" on the
overview and include links back to the overview and portfolio. They do not
create extra portfolio cards.

```text
software-development/my-project/
  _index.md                        # Overview, type: project
  featured.jpg
  implementation.md                # type: project-detail
  walkthrough.md                   # type: project-detail
```

A supporting page needs only front matter and a Markdown body:

```yaml
---
title: Design and implementation
type: project-detail
weight: 10
summary: How the application was designed and built.
---
```

The `weight` controls supporting-page order, lowest first. A cascade on the overview can also supply `type: project-detail` to child
pages as a default.

## Templates and preview

- `layouts/_partials/hbx/blocks/portfolio/block.html` selects project overviews
  within each configured service folder and renders the cards.
- `layouts/_partials/project-page.html` is the shared project-page layout,
  including the image, story, supporting-page links, and back navigation.
- `layouts/project/` handles both single-page and multi-page overviews.
- `layouts/project-detail/` handles supporting pages.
- `archetypes/project/` supplies the reusable starter bundle.
- `assets/css/custom.css` controls the responsive cards and page layout.

The service-page front matter configures the portfolio source in
`content.filters.folders`. `count: 0` shows every project. The layout uses two
columns on larger screens and one on small screens.

Preview drafts with `hugo server --buildDrafts`. Before publishing, run:

```sh
hugo --minify
node_modules/.bin/pagefind --site public
```

Project titles, summaries, and stories are marked for Pagefind search.
