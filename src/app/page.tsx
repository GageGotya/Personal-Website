'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50/30 dark:to-gray-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center" data-aos="fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Gage Ayala</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Cyber Security Specialist and Tech Enthusiast
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6" data-aos="fade-right">
                <h3 className="text-2xl font-semibold mb-4">On a Professional Note</h3>
                <section className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                  <p>
                    I’m a Cybersecurity graduate with hands-on experience in both offensive and defensive security. 
                    My work spans vulnerability assessment, exploit development, threat detection, and infrastructure hardening. 
                    I’m driven by solving complex security challenges with precision, efficiency, and automation.
                  </p>
              
                  <h4 className="text-xl font-semibold">🔐 Technical Expertise</h4>
                  <p>
                    I specialize in penetration testing, scripting, security monitoring, and incident response. 
                    My toolkit includes industry standards like Burp Suite, Nmap, Metasploit, Elastic SIEM, and Wazuh, 
                    alongside custom-built Python and Bash scripts for automation. I also have experience securing cloud platforms (AWS, AD) 
                    and hardening enterprise networks and endpoints.
                  </p>
              
                  <h4 className="text-xl font-semibold">🧠 Red Team & CTF Experience</h4>
                  <p>
                    I’ve built a strong foundation in Capture the Flag competitions, sharpening skills in crypto, exploitation, forensics, 
                    and reverse engineering. Highlights include manual SQL injection testing, buffer overflow development, 
                    PCAP and memory analysis, and static/dynamic reversing using Ghidra and other tooling.
                  </p>
              
                  <h4 className="text-xl font-semibold">💡 Core Strengths</h4>
                  <ul className="grid grid-cols-2 gap-2 list-disc pl-6">
                    <li>Penetration Testing (Web, Network, Host)</li>
                    <li>Security Automation & Scripting</li>
                    <li>Threat Detection & Incident Response</li>
                    <li>Exploit Development & Reverse Engineering</li>
                    <li>Network & Endpoint Hardening</li>
                    <li>Cloud & Directory Security (AWS, AD)</li>
                    <li>Packet Analysis & Forensics</li>
                    <li>Vulnerability Research & Reporting</li>
                  </ul>
                </section>
              </div>
              <div className="space-y-6" data-aos="fade-left">
                <h3 className="text-2xl font-semibold mb-4">On a Personal Note</h3>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    I was born and raised in Austin, Texas. Though Austin is home, I spend a lot of time in Colorado with family.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    I've always had a deep love for tech, sparked by my passion for gaming. Titles like God of War and CS:GO pulled me in early, and that curiosity naturally grew into a broader interest in software and emerging technology.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    When I'm not diving into tech or gaming, you'll probably find me exploring new foodie spots around town, playing poker at local card houses, climbing, or skateboarding for fun and fitness.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    My latest interest is researching emerging A.I and Hologram tech.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Created a CTF section for a local Hackathon and helped judge the event.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    At my college I was President of the CyberSec Club and Captain of the CTF team.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'AWS', description: 'Cloud Security & Infrastructure' },
                { name: 'Python', description: 'Security Automation & Scripting' },
                { name: 'BurpSuite', description: 'Web App Security Testing' },
                { name: 'Metasploit', description: 'Penetration Testing Framework' },
                { name: 'Nessus', description: 'Vulnerability Assessment' },
                { name: 'Hydra', description: 'Password Cracking & Testing' },
                { name: 'Wireshark', description: 'Network Protocol Analysis' },
                { name: 'Technical Reports', description: 'Security Documentation' },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="bg-white/90 dark:bg-gray-700/90 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-center mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cyber Scripts Project Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105" data-aos="fade-up">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Cyber Scripts Collection</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive collection of cybersecurity scripts for automation, reconnaissance, and system tasks. Includes port scanners, network mappers, VPN tools, and more.
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                        Bash
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                        PowerShell
                      </span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm">
                        Security
                      </span>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href="https://github.com/GageGotya/Cyber-Scripts" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* G.E.N.G.A.R Project Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105" data-aos="fade-up">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Project G.E.N.G.A.R</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Gage's Enhanced Next-Gen AI Responder - An advanced AI assistant running on a dedicated Mini PC with Ubuntu Server, designed for security operations and automation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">
                        Ubuntu Server
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                        AI/ML
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                        Security
                      </span>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href="https://github.com/GageGotya/G.E.N.G.A.R-AI-Assistant" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Public Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Website Project Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105" data-aos="fade-up">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Personal Portfolio Website</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A modern, responsive portfolio website showcasing my expertise in cybersecurity and technical skills. Features dark mode, animations, and optimized performance.
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                        Next.js 14
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 rounded-full text-sm">
                        Tailwind CSS
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                        Vercel
                      </span>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href="https://github.com/GageGotya/Personal-Website" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mr-4"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* EZPost Project Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105" data-aos="fade-up">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">EZPost (Coming Soon)</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    An AI-powered social media management platform helping small and medium-sized businesses automate and optimize their social media presence across multiple platforms.
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                        Next.js 14
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm">
                        OpenAI
                      </span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm">
                        Supabase
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                        Vercel
                      </span>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href="https://github.com/GageGotya/EZPost" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTF Writeups Project Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105" data-aos="fade-up">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">CTF Challenge Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive collection of Capture The Flag (CTF) challenge solutions, demonstrating practical offensive security skills, attack methodologies, and detailed technical documentation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm">
                        Web Exploitation
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm">
                        Privilege Escalation
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                        OSINT
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                        Scripting
                      </span>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href="https://github.com/GageGotya/CTF-Writeups" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Get In Touch</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    name: 'GitHub',
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    ),
                    href: 'https://github.com/GageGotya',
                    color: 'hover:text-gray-600 dark:hover:text-gray-300',
                  },
                  {
                    name: 'LinkedIn',
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    href: 'https://www.linkedin.com/in/gage-ayala-0207b42ab/',
                    color: 'hover:text-blue-600 dark:hover:text-blue-400',
                  },
                  {
                    name: 'TryHackMe',
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 4.76 6.52h.78a.625.625 0 0 0 .625-.625c0-2.881 2.34-5.22 5.22-5.22 2.064 0 3.852 1.203 4.688 2.947a.625.625 0 0 0 .834.29 4.517 4.517 0 0 1 6.33 4.173 4.525 4.525 0 0 1-4.52 4.52.625.625 0 1 0 0 1.25 5.777 5.777 0 0 0 5.77-5.77c0-2.846-2.07-5.212-4.791-5.66C18.077 1.023 14.616 0 10.705 0zm4.87 13.647a.625.625 0 0 0-.625.625v8.365L13.324 21a.625.625 0 1 0-.884.884l2.5 2.5a.625.625 0 0 0 .884 0l2.5-2.5a.625.625 0 1 0-.884-.884l-1.625 1.636v-8.364a.625.625 0 0 0-.625-.625zm-10 1.25a.625.625 0 0 0-.44 1.068l1.625 1.636v8.364a.625.625 0 1 0 1.25 0v-8.365l1.626 1.637a.625.625 0 1 0 .884-.884l-2.5-2.5a.625.625 0 0 0-.884 0l-2.5 2.5a.625.625 0 0 0-.06.044z"/>
                      </svg>
                    ),
                    href: 'https://tryhackme.com/p/GageGotya',
                    color: 'hover:text-red-600 dark:hover:text-red-400',
                  },
                  {
                    name: 'Email',
                    icon: (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    href: 'mailto:gageatx95@gmail.com',
                    color: 'hover:text-green-600 dark:hover:text-green-400',
                  },
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="flip-up"
                    data-aos-delay={index * 100}
                    className={`flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/90 dark:bg-gray-700/90 shadow-sm hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-lg font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
              <p className="text-center mt-8 text-gray-600 dark:text-gray-300" data-aos="fade-up">
                Feel free to reach out through any of these platforms!
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 
