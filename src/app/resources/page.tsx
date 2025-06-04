'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function Resources() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const resources = {
    cybersecurity: [
      {
        name: 'TryHackMe',
        description: 'Learn cybersecurity through hands-on labs and challenges',
        url: 'https://tryhackme.com',
        category: 'Training Platform'
      },
      {
        name: 'HackTheBox',
        description: 'Advanced penetration testing labs and challenges',
        url: 'https://www.hackthebox.com',
        category: 'Training Platform'
      },
      {
        name: 'PortSwigger Web Security Academy',
        description: 'Free web security training with detailed learning materials',
        url: 'https://portswigger.net/web-security',
        category: 'Web Security'
      },
      {
        name: 'OWASP',
        description: 'Open Web Application Security Project resources and guides',
        url: 'https://owasp.org',
        category: 'Web Security'
      },
      {
        name: 'Hack Tricks',
        description: 'Comprehensive hacking techniques and methodologies',
        url: 'https://book.hacktricks.xyz',
        category: 'Documentation'
      }
    ],
    programming: [
      {
        name: 'MDN Web Docs',
        description: 'Comprehensive web development documentation',
        url: 'https://developer.mozilla.org',
        category: 'Documentation'
      },
      {
        name: 'freeCodeCamp',
        description: 'Free coding tutorials and certification courses',
        url: 'https://www.freecodecamp.org',
        category: 'Learning Platform'
      },
      {
        name: 'GitHub',
        description: 'Version control and open source projects',
        url: 'https://github.com',
        category: 'Development Platform'
      },
      {
        name: 'Stack Overflow',
        description: 'Programming Q&A and problem-solving community',
        url: 'https://stackoverflow.com',
        category: 'Community'
      },
      {
        name: 'DevDocs',
        description: 'API documentation for multiple programming languages',
        url: 'https://devdocs.io',
        category: 'Documentation'
      }
    ],
    tools: [
      {
        name: 'Kali Linux',
        description: 'Security testing operating system with pre-installed tools',
        url: 'https://www.kali.org',
        category: 'Operating System'
      },
      {
        name: 'Wireshark',
        description: 'Network protocol analyzer for packet inspection',
        url: 'https://www.wireshark.org',
        category: 'Network Analysis'
      },
      {
        name: 'Metasploit',
        description: 'Penetration testing framework',
        url: 'https://www.metasploit.com',
        category: 'Security Testing'
      },
      {
        name: 'Burp Suite',
        description: 'Web vulnerability scanner and proxy tool',
        url: 'https://portswigger.net/burp',
        category: 'Web Security'
      },
      {
        name: 'Nmap',
        description: 'Network discovery and security auditing',
        url: 'https://nmap.org',
        category: 'Network Security'
      }
    ]
  };

  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-6" data-aos="fade-up">
            Security & Development Resources
          </h1>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Welcome to my curated collection of cybersecurity and programming resources. Whether you're just starting your journey or looking to expand your expertise, you'll find valuable tools, platforms, and learning materials here. I've personally used these resources throughout my career and continue to rely on them for staying current in the ever-evolving tech landscape.
            </p>
          </div>

          {/* Cybersecurity Resources */}
          <section className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-semibold mb-8">Cybersecurity Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.cybersecurity.map((resource, index) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold mb-2">{resource.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                    {resource.category}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Programming Resources */}
          <section className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-semibold mb-8">Programming Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.programming.map((resource, index) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold mb-2">{resource.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                    {resource.category}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Security Tools */}
          <section className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-semibold mb-8">Security Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.tools.map((resource, index) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold mb-2">{resource.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                    {resource.category}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 