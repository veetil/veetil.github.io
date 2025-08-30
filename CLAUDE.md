# CLAUDE.md - Repository Summary

*Last Updated: 2025-08-30*

## Summary of Latest Updates
- Portfolio now features **10 projects** (previously 9) with the addition of LLM Evaluation Project
- **LinkedIn Post Evaluator MCP** - New custom MCP server implementation in deep-post-claude-cli
- **OpenEvolve SW** has evolved into a 200+ file framework with multi-agent integration
- Active development continues across all 5 source projects with enhanced documentation
- Multiple todo files (todo.md through todo6.md) tracking systematic project-to-portfolio migration

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
- **MCP Servers:** 5+ configured services
  - **Core Services (via mcp.json):**
    - **Puppeteer** - Browser automation and UI testing
    - **GitHub** - Repository and issue management
    - **PerplexityAI** - AI-powered research assistance
    - **Supabase** - Database and backend services
    - **Firecrawl** - Web scraping and data extraction
  - **Project-Specific MCPs:**
    - **LinkedIn Post Evaluator MCP** - Custom MCP server in deep-post-claude-cli for evaluating LinkedIn post quality
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
- 10 project showcase files (0_project.md through 9_project.md)
- Featured projects:
  - Interactive Research Ideation v2.0 (0_project.md)
  - Elo Rating System for Academic Papers (1_project.md)
  - Agent Symphony Multi-agent Framework (2_project.md)
  - LLM Evaluation Project (9_project.md) - Using LLMs to evaluate other LLMs
- Features horizontal/vertical layouts
- Supports categorization and importance ordering
- Includes preview images in `assets/img/`

**Source Code (`projects/`)**
Active AI/ML projects with full implementations (5 total):
- **agent_symphony** - Multi-agent orchestration framework with Redis and Claude CLI (includes CLAUDE.md documentation and architecture diagrams)
- **deep-post-claude-cli** - LinkedIn post generation and evaluation system featuring a custom MCP server for post quality assessment
- **interactive_research_ideation_v2.0** - AI-powered research automation platform with React/Next.js frontend and Python backend
- **openevolve_sw** - Evolutionary algorithm framework evolved from AlphaEvolve implementation, now with 200+ files and Claude SDK integration
- **top_papers_agentic-2** - Research paper discovery with Elo rating system and phase-based implementation structure

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
❌ ImageMagick (temporarily disabled to fix Jekyll build errors)  

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
- `package-lock.json` - Locked Node dependencies
- `docker-compose.yml` - Container configuration
- `docker-compose-slim.yml` - Lightweight Docker configuration
- `purgecss.config.js` - CSS optimization
- `robots.txt` - Search engine crawler instructions

### Development Infrastructure
**Untracked Files:**
- **claude-parallel.sh** - Comprehensive parallel-first development automation system (44,958+ tokens)
  - Orchestrates complete software development cycles with multiple workflow modes (SPARC, iterative, hybrid)
  - Enforces parallel execution with up to 10 concurrent tasks using BatchTool patterns
  - Integrates TDD methodology with 100% coverage targets (no mocks allowed)
  - Includes aggressive UI testing framework with Puppeteer MCP integration
  - Features: Agent SDK integration, session resumption, cross-browser/device testing
  - Mandates: specs.md generation, architecture.md with Mermaid diagrams, risk assessment
- **mcp.json** - Model Context Protocol configuration for 5 AI services
- **.env** - Environment variables for service authentication
- **projects/** - Active AI/ML project source code repository
- **tmp/** - Temporary files and development artifacts (todo.md, todo2.md, todo3.md, todo4.md, todo5.md, todo6.md, task.md)
- **broken.png** - Image file
- **portfolio-page.png** - Portfolio page screenshot

**Hidden Configuration Files:**
- **.all-contributorsrc** - All Contributors bot configuration
- **.dockerignore** - Docker ignore patterns
- **.git-blame-ignore-revs** - Git blame ignore revisions
- **.gitignore** - Git ignore patterns
- **.pre-commit-config.yaml** - Pre-commit hooks configuration
- **.prettierignore** - Prettier ignore patterns
- **.prettierrc** - Prettier configuration

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
│   ├── cibuild        # CI build script
│   ├── deploy         # Deployment script
│   └── entry_point.sh # Entry point script
├── lighthouse_results/ # Performance tests
├── plan-improve-look/ # Portfolio improvement planning
│   ├── 1.md through 5.md     # Step-by-step plans
│   ├── changes-summary.md    # Summary of changes
│   └── step1-findings.md     # Initial findings
├── projects/          # AI/ML project source code
│   ├── agent_symphony/
│   ├── deep-post-claude-cli/
│   ├── interactive_reseach_ideation_v2.0/
│   ├── openevolve_sw/
│   └── top_papers_agentic-2/
├── readme_preview/    # README preview images
│   └── [various preview images]
├── tmp/               # Temporary development files
├── .github/           # GitHub configuration
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/     # GitHub Actions workflows
│   │   ├── axe.yml                      # Accessibility testing
│   │   ├── broken-links-site.yml        # Check site for broken links
│   │   ├── broken-links.yml             # Check repository for broken links
│   │   ├── deploy-docker-tag.yml        # Docker tag deployment
│   │   ├── deploy-image.yml             # Image deployment
│   │   ├── deploy.yml                   # Main deployment workflow
│   │   ├── docker-slim.yml              # Slim Docker build
│   │   ├── lighthouse-badger.yml        # Lighthouse performance badges
│   │   ├── prettier-comment-on-pr.yml   # Prettier formatting comments
│   │   └── prettier.yml                 # Prettier formatting checks
│   ├── release.yml    # Release configuration
│   └── stale.yml      # Stale issue management
├── claude-parallel.sh # Development automation script
├── mcp.json          # MCP server configurations
└── Other key files listed above
```

## Project Details

### Agent Symphony (`projects/agent_symphony/`)
Multi-agent orchestration system featuring:
- **src/** - Core source code
  - **agents/** - Coder and PE (Process Evaluation) agents
  - **core/** - Redis utils, Claude utils, task management, JSON enforcement
  - **models/** - Task data models
  - **monitoring/** - Flow tracking, session capture, debugging tools
  - **parallel_orchestrator/** - Main orchestration logic
  - **polling/** - Agent polling wrapper implementation
- **configs/** - YAML configuration files for agents
- **writeup/** - Project documentation and review

### Deep Post Claude CLI (`projects/deep-post-claude-cli/`)
LinkedIn post generation and evaluation system with custom MCP integration:
- **eval/** - Post evaluation samples (post1.md through post6.md)
- **guide/** - Writing guides for persuasive articles
- **research/** - AI and supply chain research documents
  - AI research papers and analyses
  - Supply chain management insights
  - Technology trend documentation
- **linkedin-post-eval-mcp/** - Custom MCP server implementation
  - **evaluators/** - Claude-based evaluation modules
  - **schemas/** - Evaluation schemas for post quality metrics
  - **tools/** - Basic metrics tools
  - **utils/** - JSON parsing, validation, session management
  - Full MCP protocol implementation for post assessment

### Interactive Research Ideation v2.0 (`projects/interactive_reseach_ideation_v2.0/`)
Comprehensive AI research automation platform with:
- **components/** - React/Next.js components
- **contexts/** - React context providers
- **generate_ideas/** - Idea generation modules
- **modal/** - Modal AI integration
- **novelty-check/** - Novelty checking algorithms
- **pages/** - Next.js pages
- **python_backend/** - Python backend services
- **screening_ui/** - UI for screening research ideas
- **structured_output/** - Structured data output modules
- **templates/** - Research templates
- Multiple setup scripts for different environments (Mac, Ubuntu, remote)

### OpenEvolve SW (`projects/openevolve_sw/`)
Advanced evolutionary algorithm framework (200+ files) with multi-agent integration:
- **openevolve/** - Core evolution engine with advanced optimization algorithms
- **claude-python-sdk/** - Deep integration with Claude SDK for AI-assisted evolution
- **configs/** - Evolution configuration files for various optimization scenarios
- **examples/** - Example implementations demonstrating framework capabilities
- **tests/** - Comprehensive test suite with coverage targets
- **benchmarks/** - Performance benchmarks and optimization metrics
- **docs/** - Extensive documentation including API references
- **Enhanced Features:**
  - Multi-agent orchestration for parallel evolution
  - Integration architectures for external AI services
  - Advanced mutation strategies and fitness functions
  - Numerous planning and implementation documents
  - Multiple evolution output directories with experimental results

### Top Papers Agentic-2 (`projects/top_papers_agentic-2/`)
Academic paper discovery and ranking system:
- **claude-agent-system/** - Claude agent integration
- **phase5/** - Latest implementation phase
- **papers/** - Downloaded papers directory
- **cache/** - Paper caching system
- **tools/** - Utility tools
- **workspace/** - Working directory
- **writeup/** - Project documentation
- Extensive testing and debugging infrastructure

## Development Workflow

### Project to Portfolio Pipeline
1. **Development Phase**: Projects are developed in the `projects/` directory
   - Full source code, documentation, and testing
   - Uses claude-parallel.sh for automated development
   - MCP integrations for various AI services
2. **Analysis Phase**: Project functionality is analyzed and documented
   - CLAUDE.md created/updated in project folder
   - explanation.md generated for detailed documentation
   - Project-specific writeup folders created for portfolio content
3. **Portfolio Entry**: Projects are converted to Jekyll entries
   - Markdown file created in `_projects/` with appropriate numbering
   - Hero image selected and added to `assets/img/`
   - Project writeup created in project's `writeup/` folder
   - Cross-references maintained between source and portfolio
4. **Publication**: Jekyll builds and deploys to GitHub Pages

## Additional Documentation
- **CONTRIBUTING.md** - Guidelines for contributing to the project
- **CUSTOMIZE.md** - Instructions for customizing the al-folio theme
- **FAQ.md** - Frequently asked questions
- **INSTALL.md** - Detailed installation instructions
- **LICENSE** - MIT License
- **README.md** - Main repository documentation
- **proposal-improve-look.md** - Proposal for improving site appearance

## Notes for Development
- The site uses Jekyll's Liquid templating engine
- Custom Ruby plugins extend Jekyll functionality
- Supports multiple project layouts and categorization
- Blog posts demonstrate all available content features
- Docker setup available for consistent development environment
- Performance monitoring via Lighthouse
- Parallel development workflow via claude-parallel.sh
- MCP servers provide external service integrations
- GitHub Actions workflows for CI/CD (deploy, tests, prettier, lighthouse)
- Pre-commit hooks configured for code quality

## Current Status
- Main branch active with recent commits (last update: d019a0a - "Disable ImageMagick to fix Jekyll build error")
- Featured projects (4 total): 
  - Interactive Research Ideation v2.0 (0_project.md)
  - Elo Rating System for Academic Papers (1_project.md)
  - Agent Symphony Multi-agent Framework (2_project.md)
  - LLM Evaluation Project (9_project.md)
- Untracked files: `.env`, `broken.png`, `claude-parallel.sh`, `mcp.json`, `portfolio-page.png`, `projects/`, `tmp/`
- Active development of 5 AI/ML projects in progress
- Multiple todo files (todo.md through todo6.md) tracking project migration to portfolio entries
- Recent activity: 
  - Fixed Jekyll build errors by disabling ImageMagick
  - Fixed broken project grid layout and image 404 errors
  - Improved projects page layout with 2-column design
  - Added Agent Symphony as third featured project
  - Expanded MCP integration with custom LinkedIn Post Evaluator
  - Significant evolution of OpenEvolve SW to 200+ file framework
- Full al-folio theme features available for customization