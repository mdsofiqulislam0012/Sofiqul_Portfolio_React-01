import { Facebook, Instagram, Linkedin, Locate, Mail, MapPin, Phone, PhoneCall, Send, Twitter } from 'lucide-react'
import React from 'react'
import { cn } from './lib/utility'
import Toast from './ui/Toast';
import { toast } from 'react-toastify';
export default function ContactSection() {

    // input validation
    const validateForm = (e) => {
        let isValid = true;


        // Get values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();


        // Error elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");


        // Reset errors
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";


        // Name validation
        if (name === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        } else if (name.length < 3) {
            nameError.textContent = "Name must be at least 3 characters";
            isValid = false;
        }


        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email address";
            isValid = false;
        }


        // Message validation
        if (message === "") {
            messageError.textContent = "Message is required";
            isValid = false;
        } else if (message.length < 10) {
            messageError.textContent = "Message must be at least 10 characters";
            isValid = false;
        }
        // ❗ এখানে magic
        if (!isValid) {
            e.preventDefault(); // ❌ ভুল হলে submit বন্ধ
        } else {
            // ✅ সব ঠিক থাকলে submit হবে
            e.preventDefault();
            toast.success("Message Send Successfull")

            // ✅ form reset
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }

        return isValid;
    }

    // input validation

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container max-w-5xl mx-auto'>
                <h2 className='text-3xl md:text-4xl mb-4 text-center font-bold'>Get In <span className='text-primary'>Touch</span></h2>
                <p className='text-center text-primary-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussion new opportunities.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                        <div className='space-y-6 justify-center'>
                            {/* contact email */}
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary'></Mail>
                                </div>
                                <div>
                                    <h4 className='text-start'>Email</h4>
                                    <a href='mailto:md.sofiqul672islam@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>
                                        md.sofiqul672islam@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* contact phone */}
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <PhoneCall className='h-6 w-6 text-primary'></PhoneCall>
                                </div>
                                <div>
                                    <h4 className='text-start'>Phone</h4>
                                    <a href='tel:+8801319535122' className='text-muted-foreground hover:text-primary transition-colors'>
                                        +88 01319535122
                                    </a>
                                </div>
                            </div>
                            {/* contact location */}
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary'></MapPin>
                                </div>
                                <div>
                                    <h4 className='text-start'>Location</h4>
                                    <a href='mailto:md.sofiqul672islam@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>
                                        Dhaka Kollayanpur, Mirpur Road
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='https://www.facebook.com/mdsofiqulislam21' target='_blank'>
                                    <Facebook size={20}></Facebook>
                                </a>
                                <a href='https://www.linkedin.com/in/mdshofiqulshams/' target='_blank'>
                                    <Linkedin size={20}></Linkedin>
                                </a>
                                <a href='https://x.com/sofiqul672islam' target='_blank'>
                                    <Twitter size={20}></Twitter>
                                </a>
                                <a href='https://www.instagram.com/mdsofiqulislam0012/?hl=en' target='_blank'>
                                    <Instagram size={20}></Instagram>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form onSubmit={validateForm} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2 text-start'>Your Name</label>
                                <input type="text" id='name' name='name' className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Enter your name' />
                                <p id='nameError' className='text-red-400 text-start'></p>
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2 text-start'>Your Email</label>
                                <input type="email" id='email' name='email' className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='sofiqul@.com' />
                                <p id='emailError' className='text-red-400 text-start'></p>
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2 text-start'>Message</label>
                                <textarea type="text" id='message' name='message' className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Hello, I`d like to talk about... ' />
                                <p id='messageError' className='text-red-400 text-start'></p>
                            </div>

                            <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>Send Message <Send size={16}></Send></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
