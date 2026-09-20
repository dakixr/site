import { projects } from '@/lib/projects';

export const dynamic = 'force-static';

export function GET() {
  const markdown = '# Daniel Rodríguez Mariblanca: project notes\n\nSoftware engineer and team lead in Luxembourg.\n\n' + projects.map(project =>
    `## ${project.title}\n\n${project.description}\n\n` +
    (project.details?.map(detail => `- ${detail}\n`).join('') ?? '') +
    `\nTechnology: ${project.technologies.join(', ')}\n` +
    (project.githubLink || project.link ? `\nProject: ${project.githubLink || project.link}\n` : '')
  ).join('\n');
  return new Response(markdown, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
