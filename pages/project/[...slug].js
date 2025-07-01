import { projects } from '@/data'; // Adjust import path as needed
import Image from 'next/image';
import Link from 'next/link';


export async function getServerSideProps(context) {
    const { slug } = context.params;
    return {
        props:{
            slug: slug[0],
        }
       
    }
}

const ProjectDetails = ({ slug }) => {
  
  const project = projects.find(p => p.link === slug);
 

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-white mb-4">404 Error</h1>
        <p className="text-gray-400">The project you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    
    <section className="py-20 bg-gradient-to-r from-black to-green-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/project" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>

          {/* Project header */}
          <div className="mb-8">
            <span className="inline-block bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full mb-4">
              {project.type}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-gray-400">{project.date}</p>
          </div>

          {/* Main image */}
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              {/* Additional content sections can go here */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-bold text-white mb-3">Features</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Responsive design for all devices</li>
                  <li>Secure payment integration</li>
                  <li>Admin dashboard for management</li>
                </ul>
              </div>
            </div>

            {/* Sidebar with tech stack and links */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded transition-colors"
                  >
                    Live Demo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>

                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    View Code
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;