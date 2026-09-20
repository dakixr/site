'use client';



interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  missions: Array<{
    name: string;
    description: string[];
    techStack?: string[];
  }>;
}

const experiences: Experience[] = [
  {
    title: 'Senior Consultant', company: 'Deloitte', location: 'Luxembourg', period: 'April 2026 to present',
    missions: [{ name: 'Technical leadership & regulatory reporting', description: [
      'Automate regulatory reporting for major clients, reducing report preparation from several hours to minutes.',
      'Lead three developers: set technical direction, assign work and coordinate delivery while contributing code.',
      'Lead code reviews, mentor developers and improve team development workflows.'
    ], techStack: ['Python', 'Regulatory reporting', 'Technical leadership'] }]
  },
  {
    title: 'Senior Software Engineer',
    company: 'TMC',
    location: 'Luxembourg',
    period: 'March 2023 to March 2026',
    missions: [
      {
        name: 'Deloitte (second mission)',
        description: [
          'Developed Sirius, a Python framework for institutional data transformation with automated documentation',
          'Built a decision-tree DSL so non-engineers could update client logic',
          'Delivered a VS Code extension featuring live diagrams, code actions, and CLI tools',
          'Established unit and snapshot testing to prevent regressions across framework updates'
        ],
        techStack: ['Python', 'VS Code Extension', 'Metaprogramming', 'Testing']
      },
      {
        name: 'Bank of Luxembourg Investments (BLI)',
        description: [
          'Automated manual processes, saving 100+ hours per quarter',
          'Replaced slow file scans with an indexed, cached query service, with monitoring, alerting and operational runbooks',
          'Built PDF mining and analysis tools for regulatory compliance',
          'Built internal tools with Django, HTMX and REST APIs'
        ],
        techStack: ['Python', 'Data Mining', 'Web Tools', 'Automation']
      },
      {
        name: 'Internal TMC Projects',
        description: [
          'Built a web application to convert unstructured CVs into a standardized format',
          'Developed an AI-assisted meeting note system'
        ],
        techStack: ['GenAI', 'Web Development', 'Automation']
      },
      {
        name: 'Deloitte (first mission)',
        description: [
          'Engineered Stelar, a Python library to enrich investment portfolios with Duration and SCR',
          'Contributed to shared commons tools repository for code reusability',
          'Implemented Python ETL toolkit with configuration-driven data mapping',
          'Contributed CI/CD and test suites to the shared engineering tools'
        ],
        techStack: ['Python', 'ETL', 'CI/CD', 'Finance']
      }
    ]
  },
  {
    title: 'Business Intelligence & Software Engineer',
    company: 'Amazon',
    location: 'Luxembourg',
    period: 'August 2022 to February 2023',
    missions: [
      {
        name: 'Operational Planning',
        description: [
          'Launched first ML forecasting solution for $60M+ operational plan',
          'Built new KPI tracking/warehousing tools for improved reporting',
          'Operated analytics services with AWS CloudWatch logging, metrics and alerts'
        ],
        techStack: ['ML', 'AWS', 'Data Warehousing', 'KPIs']
      }
    ]
  },
  {
    title: 'Business Intelligence & Software Engineer Intern', company: 'Amazon', location: 'Luxembourg', period: 'February to July 2022',
    missions: [{ name: 'Analytics tools', description: ['Built KPI tracking and data warehousing tools for the team.'], techStack: ['Data warehousing', 'KPIs'] }]
  },
  {
    title: 'Junior Full-Stack Software Engineer',
    company: 'Vector ITC Group / Santander Bank',
    location: 'Spain',
    period: 'June to July 2019',
    missions: [
      {
        name: 'Mobile Banking',
        description: [
          'Developed and deployed mobile app modules for Santander Bank',
          'Built secure backend systems within an Agile team'
        ],
        techStack: ['Java', 'Kotlin', 'Backend', 'Mobile']
      }
    ]
  }
  ,{
    title: 'IT Teacher', company: 'Fundación Alas', location: 'Spain', period: 'September 2017 to May 2019',
    missions: [{ name: 'IT education', description: ['Taught IT fundamentals to more than 15 older adults and people with disabilities, adapting lessons to individual learning needs.'] }]
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-20 bg-light dark:bg-dark">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl mb-10">Experience</h2>
        <div className="space-y-12">
          {experiences.map(experience => <article key={`${experience.company}-${experience.period}`} className="grid md:grid-cols-[240px_1fr] gap-5 md:gap-10 border-t border-dark-300 dark:border-light-300 pt-6">
            <header>
              <h3 className="text-xl mb-2">{experience.company}</h3>
              <p className="text-sm text-dark-500 dark:text-light-300">{experience.period}</p>
              <p className="text-sm text-dark-500 dark:text-light-300 mt-1">{experience.location}</p>
            </header>
            <div>
              <h4 className="text-lg mb-5">{experience.title}</h4>
              {experience.missions.map(mission => <div key={mission.name} className="mb-6 last:mb-0">
                {experience.missions.length > 1 && <h5 className="mb-2">{mission.name}</h5>}
                <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-dark-500 dark:text-light-300">
                  {mission.description.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>)}
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
