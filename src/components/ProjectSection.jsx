import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Islamic Knowledge Platform",
        description:
            "A modern Islamic educational platform providing Hadith, Quran, scholars profiles, and authentic Islamic knowledge in Bangla with a clean and responsive UI.",
        image: "/public/Projects/islamic_knowledge.png",
        tags: ["React", "TailwindCss", "Supabase"],
        demoUrl: "https://islamic-knowledge-project.netlify.app/",
        githubUrl: "https://github.com/mdsofiqulislam0012"
    },

    {
        id: 2,
        title: "Dragon News Related Website",
        description:
            "A feature-rich news portal with category-based filtering, authentication system, social login, and responsive layout inspired by professional news websites.",
        image: "/public/Projects/dragon_news.png",
        tags: ["React", "TailwindCss", "Firebase"],
        demoUrl: "https://dragon-news-big-project.netlify.app/",
        githubUrl: "https://github.com/mdsofiqulislam0012"
    },

    {
        id: 3,
        title: "Responsive Website",
        description:
            "A personal portfolio website showcasing projects, skills, and contact information with smooth animations and modern UI design.",
        image: "/public/Projects/super_client.png",
        tags: ["React", "TailwindCss", "Framer Motion"],
        demoUrl: "https://personal-portfolio-00dgfdssd.netlify.app/",
        githubUrl: "https://github.com/mdsofiqulislam0012"
    },

    {
        id: 4,
        title: "Like YouTube Related Site",
        description:
            "A visually engaging testimonial section designed to showcase client feedback with gradient backgrounds, card animations, and fully responsive layout.",
        image: "/public/Projects/like_youtube.png",
        tags: ["React", "TailwindCss"],
        demoUrl: "https://ph-m35-rps-youtube-project.netlify.app/",
        githubUrl: "https://github.com/mdsofiqulislam0012"
    }
];


export default function ProjectSection() {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Feature <span className='text-primary'>Projects</span>
                </h2>

                <p className='text-center text-primary-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully crafted with
                    attention to details, performance, and use experience
                </p>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                    {
                        projects.map((project, key) => (
                            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                                <div className='h-48 overflow-hidden'>
                                    <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />

                                </div>

                                <div className='p-6'>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            project.tags.map((tag, key) => (
                                                <span key={key} className='px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border '>{tag}</span>
                                            ))
                                        }

                                    </div>
                                    <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                                    <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>

                                    <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <ExternalLink size={20}></ExternalLink>
                                        </a>
                                        <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <Github size={20}></Github>
                                        </a>

                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='text-center mt-12'>
                    <a className='cosmic-button flex w-fit items-center cursor-pointer mx-auto gap-2' href='https://github.com/mdsofiqulislam0012' target='_blank'>
                        Check My Github <ArrowRight size={20}></ArrowRight>
                    </a>

                </div>

            </div>

        </section>
    )
}
