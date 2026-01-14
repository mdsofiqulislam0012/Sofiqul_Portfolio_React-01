import { Briefcase, Code, Download, User } from 'lucide-react'
import React from 'react'
export default function About() {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'>Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>Web Developer & Tech Creator</h3>
                        <p className='text-muted-foreground'>I’m a passionate web developer and tech creator with a strong focus on building modern,
                             responsive, and user-friendly web applications. I enjoy turning ideas into functional digital</p>
                        <p className='text-muted-foreground'>products through clean code, thoughtful design, and efficient problem-solving. I’m always eager to learn new 
                            technologies and create meaningful experiences that add real value.</p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className='cosmic-button'>
                                Get In Touch
                            </a>
                            <a href='#contact' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary'></Code>
                                </div>
                                <div className='text-left'>
                                    <h4 className='text-semibold font-bold text-lg'>Web Development</h4>
                                    <p className='text-muted-foreground'>Building fast, responsive, and scalable modern web applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-6 w-6 text-primary'></User>
                                </div>
                                <div className='text-left'>
                                    <h4 className='text-semibold font-bold text-lg'>UI/UX Design</h4>
                                    <p className='text-muted-foreground'>Designing clean, intuitive, and user-focused digital experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='h-6 w-6 text-primary'></Briefcase>
                                </div>
                                <div className='text-left'>
                                    <h4 className='text-semibold font-bold text-lg'>Projects Manage</h4>
                                    <p className='text-muted-foreground'>Planning, organizing, and delivering projects efficiently on time</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
