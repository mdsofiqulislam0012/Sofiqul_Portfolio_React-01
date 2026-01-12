import React from 'react'
import ThemeToggle from '../../components/ThemeToggle'
import StarBackground from '../../components/StarBackground'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import SkillsSection from '../../components/SkillsSection'

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* theme toggle */}
        <ThemeToggle></ThemeToggle>

        {/* Background Effects */}
        <StarBackground></StarBackground>

        {/* Navbar */}
        <Navbar></Navbar>
        {/* Main Content */}
        <HeroSection></HeroSection>
        <About></About>
        <SkillsSection></SkillsSection>

        {/* footer */}
    </div>
  )
}
