import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.filter(project => project.slug).map(project => ({ slug: project.slug! }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  return { title: `${project?.title ?? 'Project'} | Daniel Rodríguez Mariblanca`, description: project?.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  return <main className="max-w-3xl mx-auto px-6 py-16 min-h-screen">
    <Link href="/#projects" className="underline underline-offset-4">Back to projects</Link>
    <article className="mt-12">
      <h1 className="text-3xl sm:text-4xl mb-6 break-words">{project.title}</h1>
      <p className="text-lg leading-relaxed mb-8">{project.description}</p>
      <h2 className="text-xl mb-4">What I built</h2>
      <ul className="list-disc pl-5 space-y-4 leading-relaxed text-dark-500 dark:text-light-300">
        {project.details?.map(detail => <li key={detail}>{detail}</li>)}
      </ul>
      <h2 className="text-xl mt-10 mb-4">Technology</h2>
      <p className="leading-relaxed">{project.technologies.join(', ')}</p>
      <div className="flex flex-wrap gap-6 mt-10 underline underline-offset-4">
        {(project.githubLink || project.link) && <a href={project.githubLink || project.link} target="_blank" rel="noopener noreferrer">{(project.githubLink || project.link)?.includes('github.com') ? 'Source code' : 'Visit project'}</a>}
        <a href="/projects.md">Read project notes as Markdown</a>
      </div>
    </article>
  </main>;
}
