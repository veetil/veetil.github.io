# CLAUDE.md - Repository Summary

## Repository Overview
**Repository:** veetil.github.io  
**Type:** Personal/Academic Portfolio Website  
**URL:** https://veetil.github.io  
**Framework:** Jekyll with al-folio theme  
**Purpose:** Professional portfolio showcasing AI expertise, projects, and accomplishments  

## Owner Information
**Name:** Vineeth Veetil, PhD  
**Current Role:** Technology Executive at AppLovin  
**Previous:** University of Michigan (UMich), IIT Bombay  
**Expertise:**
- AI Strategy & Large Language Models (LLMs)
- Computer Vision & Generative AI
- Deep Learning & Business Development
- Startup environments

**Contact:**
- Email: tvvineeth@gmail.com
- LinkedIn: vineeth-veetil-8a08995
- Google Scholar: CE95VCIAAAAJ
- Medium: vineethveetil

## Technical Stack
- **Static Site Generator:** Jekyll 4.3.3
- **Theme:** al-folio (academic portfolio theme)
- **Styling:** SCSS/CSS with Bootstrap integration
- **JavaScript:** Custom scripts + third-party libraries
- **Deployment:** GitHub Pages
- **Container:** Docker support included
- **Dependencies:**
  - Ruby gems (via Gemfile)
  - Node packages (Prettier, Liquid Prettier Plugin)

## Content Structure

### Pages (`_pages/`)
- **about.md** - Main landing page with professional information
- **projects.md** - Project showcase page
- **dropdown.md** - Dropdown menu page
- **404.md** - Custom error page

### Projects (`_projects/`)
- 8 project files (1_project.md through 8_project.md)
- Features horizontal/vertical layouts
- Supports categorization and importance ordering
- Includes preview images in `assets/img/`

### Blog Posts (`_posts/`)
- 27 demonstration posts showcasing various features:
  - Code formatting and syntax highlighting
  - Mathematical equations (MathJax)
  - Image galleries and advanced image handling
  - Charts (Chart.js, ECharts, Vega-Lite)
  - Maps and GeoJSON support
  - Jupyter notebook integration
  - Audio/video embedding
  - Table formatting and table of contents
  - TikZ diagrams
  - Comments (Disqus/Giscus)

### Other Content
- **_bibliography/** - Academic publications (papers.bib)
- **_news/** - Announcements (3 sample entries)
- **_data/** - Structured data (CV, coauthors, venues, repositories)

## Key Features

### Enabled
✅ Dark mode support  
✅ Responsive design  
✅ Math typesetting (MathJax)  
✅ Image optimization (WebP, lazy loading)  
✅ Progress bar for scrolling  
✅ Image zoom functionality  
✅ Project categorization  
✅ Blog with pagination  
✅ Bibliography management  
✅ Multiple layout options  

### Disabled
❌ Google Analytics  
❌ Comments on about page  
❌ Social links in navbar  
❌ Latest posts on homepage  
❌ Announcements  

## Development Setup

### Local Development
```bash
# Using Docker
docker-compose up

# Using Jekyll directly
bundle install
bundle exec jekyll serve
```

### Key Files
- `_config.yml` - Main Jekyll configuration
- `Gemfile` - Ruby dependencies
- `package.json` - Node dependencies (minimal)
- `docker-compose.yml` - Container configuration
- `purgecss.config.js` - CSS optimization

### Recent Additions
- `mcp.json` - MCP configuration
- `claude-parallel.sh` - Parallel execution script
- `.env` - Environment variables (untracked)
- `tmp/` - Temporary directory (untracked)

## Directory Structure
```
veetil.github.io/
├── _bibliography/      # Academic references
├── _data/             # YAML data files
├── _includes/         # Reusable Liquid components
├── _layouts/          # Page layout templates
├── _news/             # Announcements
├── _pages/            # Static pages
├── _plugins/          # Ruby Jekyll plugins
├── _posts/            # Blog posts
├── _projects/         # Project showcases
├── _sass/             # SCSS stylesheets
├── assets/            # Static assets
│   ├── audio/         # Audio files
│   ├── bibliography/  # Bibliography files
│   ├── css/           # Compiled CSS
│   ├── fonts/         # Icon fonts
│   ├── img/           # Images
│   ├── js/            # JavaScript
│   ├── pdf/           # PDF documents
│   └── video/         # Video files
├── bin/               # Utility scripts
└── lighthouse_results/ # Performance tests
```

## Notes for Development
- The site uses Jekyll's Liquid templating engine
- Custom Ruby plugins extend Jekyll functionality
- Supports multiple project layouts and categorization
- Blog posts demonstrate all available content features
- Docker setup available for consistent development environment
- Performance monitoring via Lighthouse

## Current Status
- Main branch active with recent commits
- Untracked files: `.env`, `claude-parallel.sh`, `mcp.json`, `tmp/`
- Empty README.md file (may need updating)
- Full al-folio theme features available for customization