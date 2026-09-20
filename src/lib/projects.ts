export type Project = {
  title: string;
  details?: string[];
  slug?: string;
  description: string;
  /** Fallback single link (legacy) */
  link?: string;
  /** Preferred explicit links */
  liveLink?: string;
  githubLink?: string;
  image: string;
  technologies: string[];
};

export const projects: Project[] = [
    {
      title: 'yoke', slug: 'yoke',
      description: 'A Python coding-agent harness and SDK. Persistent sessions, context compaction and multi-agent orchestration for extended development work.',
      githubLink: 'https://github.com/dakixr/yoke', image: '',
      technologies: ['Python', 'LLM agents', 'MCP', 'Developer tools'],
      details: [
        'Built a coding-agent runtime with file, shell and web tools, MCP integration and interchangeable LLM providers.',
        'Implemented persistent sessions and context compaction so development tasks can continue across long conversations.',
        'Added reusable skills and multi-agent orchestration to coordinate separate tasks and share working instructions.',
        'Integrated yoke into T3 Code and run its tools through a remote MCP service.'
      ],
    },
    {
      title: 'Ionisium',
      slug: 'ionisium',
      details: ['Built the Django application and delivery workflows for personalized document distribution.', 'Used HTMX and htpy for the web interface, Celery for background work and AWS for document processing and delivery.'],
      description: 'Document distribution SaaS used by Spanish film companies including CaballoFilms. Automates personalized, watermarked delivery with tracking.',
      link: 'https://ionisium.es',
      image: '/projects/ionisium.jpg',
      technologies: ['Python', 'Django', 'HTMX', 'htpy', 'Celery', 'AWS', 'PostgreSQL', 'Docker', 'Pulumi'],
    },
    {
      title: 'TypedJinja',
      slug: 'typedjinja',
      details: ['Built Python stub generation and template analysis, connected to a VS Code language server.', 'Implemented completion, hover and go-to-definition so developers can inspect template context in their editor.'],
      description: 'Jinja2 template tooling with Python stub generation, completion, hover and go-to-definition. Published on PyPI and the VS Code Marketplace.',
      link: 'https://github.com/dakixr/TypedJinja',
      image: '/projects/typedjinja.jpg',
      technologies: ['Python', 'TypeScript', 'Jinja2', 'LSP', 'VS Code'],
    },
    {
      title: 'Development infrastructure', slug: 'development-infrastructure',
      description: 'Remote coding environments and self-hosted applications, with Python tooling to keep agent skills and SSH configuration in sync across machines.',
      image: '', technologies: ['Python', 'Linux', 'Docker Compose', 'Tailscale', 'Coolify'],
      details: [
        'Built cross-machine synchronization for agent skills and SSH configuration, with validation, backups and recovery procedures.',
        'Use Tailscale and SSH for private network access and fleet management, and T3 Connect for remote coding environments.',
        'Run self-hosted applications with Docker Compose and Coolify, with supervised services for persistent development tools.',
        'Keep shared configuration under version control and check for divergent or uncommitted work before synchronization.'
      ],
    },
    {
      title: 'htpy-uikit',
      description: 'Reusable HTML-in-Python components styled with Tailwind and Alpine.js. A CLI copies components into the application so developers can adapt them.',
      githubLink: 'https://github.com/dakixr/htpy-uikit', image: '',
      technologies: ['Python', 'htpy', 'Tailwind', 'Alpine.js', 'Developer tools'],
    },
    {
      title: 'isbtchot',
      description: 'Bitcoin analysis dashboard with live market data, a hotness index, power-law charts and a holdings calculator.',
      link: 'https://isbtchot.dakixr.dev', image: '',
      technologies: ['Python', 'Flask', 'Redis', 'Docker'],
    },
    {
      title: 'Software Catalog (SOCA)',
      description: 'A command-line tool for creating software catalogs from organization URLs.',
      githubLink: 'https://github.com/oeg-upm/soca', image: '',
      technologies: ['CLI', 'Open source'],
    },
    {
      title: 'AI Code Review',
      description: 'AI code review toolset with GitHub PR integration (GitHub App) plus a standalone local CLI (built on OpenCode) for repo-agnostic reviews.',
      liveLink: 'https://code-review.dakixr.dev/',
      githubLink: 'https://github.com/dakixr/code-review',
      image: '/projects/code-review.jpg',
      technologies: ['Python', 'Django', 'Celery', 'HTMX', 'htpy', 'GitHub', 'GitHub App', 'OpenCode', 'LLM', 'Docker'],
    },
    {
      title: 'OpenWhisper',
      description: 'Hold-to-talk transcription for macOS using OpenAI Whisper API. Press Fn to talk, release to insert text. Tracks usage + cost. Native menubar app with live waveform.',
      link: 'https://github.com/dakixr/open-whisper',
      image: '/projects/openwhisper.svg',
      technologies: ['Swift', 'macOS', 'OpenAI API', 'Whisper', 'Audio', 'Keychain', 'Accessibility'],
    },
    {
      title: 'wt',
      description: 'Git Worktree Toolkit - A CLI for managing git worktrees in feature-branch workflows with hooks, auto-setup, and PR integration.',
      link: 'https://github.com/dakixr/wt',
      image: '/projects/wt.jpg',
      technologies: ['Python', 'Git', 'CLI', 'Worktrees', 'Developer Tools'],
    },
    {
      title: 'ralph',
      description: 'CLI harness for running LLM agents on PRD-driven tasks, automating development workflows with AI assistance.',
      link: 'https://github.com/dakixr/ralph',
      image: '/projects/ralph.jpg',
      technologies: ['Python', 'LLM', 'CLI', 'AI Agents', 'Automation'],
    },
    {
      title: 'xpyxl',
      description: 'Create styled Excel reports with declarative Python. Tailwind-inspired utility classes for typography, colors, and layouts without manual coordinates.',
      link: 'https://github.com/dakixr/xpyxl',
      image: '/projects/xpyxl.jpg',
      technologies: ['Python', 'Excel', 'openpyxl', 'xlsxwriter', 'Declarative', 'Reporting'],
    },
    {
      title: 'htmx-extensions',
      description: 'Lightweight HTMX extensions: smart loading indicators, file downloads, and programmatic history restoration. No build step required.',
      link: 'https://github.com/dakixr/htmx-extensions',
      image: '/projects/htmx-extensions.jpg',
      technologies: ['JavaScript', 'HTMX', 'Extensions', 'Browser APIs', 'Loading states', 'History API'],
    },
    {
      title: 'FormCraftSuite',
      description: 'Toolkit for turning PDFs into structured, web-ready forms for data capture and workflows.',
      link: 'https://github.com/dakixr/FormCraftSuite',
      image: '/projects/formcraftsuite.jpg',
      technologies: ['Python', 'PDF processing', 'Form generation', 'HTML', 'Web forms'],
    },
    {
      title: 'Hackathon-AXA',
      description: 'AXA Hackathon winning application built with JHipster, Spring Boot and Angular.',
      link: 'https://github.com/dakixr/Hackathon-AXA',
      image: '/projects/hackathon-axa.jpg',
      technologies: ['JavaScript', 'JHipster', 'Spring Boot', 'Angular', 'Full-stack'],
    },
  ];

