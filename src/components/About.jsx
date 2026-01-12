import { Briefcase, Code, User } from 'lucide-react'
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
                        <h3 className='text-2xl font-semibold'>Pasionate Web Developer & Tech Creator</h3>
                        <p className='text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Delectus animi debitis nostrum qui quo voluptatibus!</p>
                        <p className='text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Delectus animi debitis nostrum qui quo voluptatibus!</p>

                         <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href='#contact' className='cosmic-button'>
                            Get In Touch
                        </a>
                        <a href='#contact' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                            Download
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
                                    <h4 className='text-semibold text-lg'>Web Development</h4>
                                    <p className='text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.</p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-6 w-6 text-primary'></User>
                                </div>
                                <div className='text-left'>
                                    <h4 className='text-semibold text-lg'>UI/UX Design</h4>
                                    <p className='text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.</p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='h-6 w-6 text-primary'></Briefcase>
                                </div>
                                <div className='text-left'>
                                    <h4 className='text-semibold text-lg'>Projects Manage</h4>
                                    <p className='text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
