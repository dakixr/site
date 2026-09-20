const skills = [
  { category: 'Languages & web', items: 'Python, SQL, JavaScript, Bash, Django, HTMX, REST APIs', evidence: 'Python frameworks, internal tools and web applications for financial services and my own projects.' },
  { category: 'Data & infrastructure', items: 'Pandas, Polars, AWS, Docker, Terraform, Pulumi, Git, CI/CD', evidence: 'Reporting automation, data transformation and self-hosted applications.' },
  { category: 'AI-assisted development', items: 'Codex, Claude Code, T3 Code', evidence: 'Coding agents in my development workflow, alongside hands-on implementation and review.' },
  { category: 'Agent engineering', items: 'Agent harnesses, context management, multi-agent orchestration, MCP', evidence: 'Built yoke, a Python coding-agent harness and SDK with persistent sessions and reusable skills.' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-light dark:bg-dark">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl mb-10">Technical skills</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map(skill => <div key={skill.category} className="border-t border-dark-300 dark:border-light-300 pt-5">
            <h3 className="text-xl mb-3">{skill.category}</h3>
            <p className="mb-3 leading-relaxed">{skill.items}</p>
            <p className="text-sm text-dark-500 dark:text-light-300 leading-relaxed">{skill.evidence}</p>
          </div>)}
        </div>
        <p className="mt-10 text-sm text-dark-500 dark:text-light-300">English, fluent. Spanish, native.</p>
      </div>
    </section>
  );
}
