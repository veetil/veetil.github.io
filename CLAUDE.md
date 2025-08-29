# CLAUDE.md - Repository Summary

## Repository Overview
**Repository:** veetil.github.io  
**Type:** Personal/Academic Portfolio Website + AI Project Development Hub  
**URL:** https://veetil.github.io  
**Framework:** Jekyll with al-folio theme  
**Purpose:** 
- Professional portfolio showcasing AI expertise, projects, and accomplishments
- Development environment for AI/ML projects with automation tools
- Integration hub for multiple AI services via MCP (Model Context Protocol)  

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

### Portfolio Website
- **Static Site Generator:** Jekyll 4.3.3
- **Theme:** al-folio (academic portfolio theme)
- **Styling:** SCSS/CSS with Bootstrap integration
- **JavaScript:** Custom scripts + third-party libraries
- **Deployment:** GitHub Pages
- **Container:** Docker support included
- **Dependencies:**
  - Ruby gems (via Gemfile)
  - Node packages (Prettier, Liquid Prettier Plugin)

### Development Tools & Integrations
- **Automation:** claude-parallel.sh - Parallel-first development system
- **MCP Servers:** 5 configured services via mcp.json
  - **Puppeteer** - Browser automation and UI testing
  - **GitHub** - Repository and issue management
  - **PerplexityAI** - AI-powered research assistance
  - **Supabase** - Database and backend services
  - **Firecrawl** - Web scraping and data extraction
- **AI Integration:** Claude CLI with SDK support
- **Testing:** Comprehensive TDD with 100% coverage targets

## Content Structure

### Pages (`_pages/`)
- **about.md** - Main landing page with professional information
- **projects.md** - Project showcase page
- **dropdown.md** - Dropdown menu page
- **404.md** - Custom error page

### Projects
**Portfolio Entries (`_projects/`)**
- 9 project showcase files (0_project.md through 8_project.md)
- Featured project: Interactive Research Ideation v2.0 (0_project.md)
- Features horizontal/vertical layouts
- Supports categorization and importance ordering
- Includes preview images in `assets/img/`

**Source Code (`projects/`)**
Active AI/ML projects with full implementations:
- **agent_symphony** - Multi-agent orchestration framework with Redis and Claude CLI
- **interactive_research_ideation_v2.0** - AI-powered research automation platform
- **openevolve_sw** - Multi-agent system with evolutionary algorithms
- **top_papers_agentic-2** - Research paper discovery with Elo rating system

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

### Development Infrastructure (Untracked)
- **claude-parallel.sh** - Comprehensive parallel-first development automation system
  - Orchestrates complete software development cycles
  - Enforces parallel execution with up to 10 concurrent tasks
  - Integrates TDD methodology with 100% coverage targets
  - Includes UI testing framework with Puppeteer MCP
- **mcp.json** - Model Context Protocol configuration for 5 AI services
- **.env** - Environment variables for service authentication
- **projects/** - Active AI/ML project source code repository
- **tmp/** - Temporary files and development artifacts
- **todo3.md** - Project migration instructions for portfolio updates

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
├── _projects/         # Project showcases (Jekyll entries)
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
├── lighthouse_results/ # Performance tests
├── projects/          # AI/ML project source code
│   ├── agent_symphony/
│   ├── interactive_reseach_ideation_v2.0/
│   ├── openevolve_sw/
│   └── top_papers_agentic-2/
├── tmp/               # Temporary development files
├── claude-parallel.sh # Development automation script
├── mcp.json          # MCP server configurations
└── todo3.md          # Project migration tasks
```

## Development Workflow

### Project to Portfolio Pipeline
1. **Development Phase**: Projects are developed in the `projects/` directory
   - Full source code, documentation, and testing
   - Uses claude-parallel.sh for automated development
   - MCP integrations for various AI services
2. **Analysis Phase**: Project functionality is analyzed and documented
   - CLAUDE.md created/updated in project folder
   - explanation.md generated for detailed documentation
3. **Portfolio Entry**: Projects are converted to Jekyll entries
   - Markdown file created in `_projects/` with appropriate numbering
   - Hero image selected and added to `assets/img/`
   - Project writeup created in project's `writeup/` folder
4. **Publication**: Jekyll builds and deploys to GitHub Pages

## Notes for Development
- The site uses Jekyll's Liquid templating engine
- Custom Ruby plugins extend Jekyll functionality
- Supports multiple project layouts and categorization
- Blog posts demonstrate all available content features
- Docker setup available for consistent development environment
- Performance monitoring via Lighthouse
- Parallel development workflow via claude-parallel.sh
- MCP servers provide external service integrations

## Current Status
- Main branch active with recent commits
- Featured project: Interactive Research Ideation v2.0 (recently added)
- Untracked files: `.env`, `claude-parallel.sh`, `mcp.json`, `projects/`, `tmp/`, `todo3.md`
- Active development of AI/ML projects in progress
- Portfolio updates pending for additional projects (per todo3.md)
- Full al-folio theme features available for customization