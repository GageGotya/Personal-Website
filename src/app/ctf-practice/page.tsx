'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function CTFPractice() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('web');

  const challenges = {
    web: [
      {
        title: 'Hidden in Plain Sight',
        difficulty: 'Easy',
        description: 'Can you find the hidden flag in the source code of this page?',
        hint: 'Sometimes developers leave sensitive information in HTML comments...',
        points: 10,
        flag: 'FLAG{hidden_in_plain_sight}',
        category: 'Web'
      },
      {
        title: 'Cookie Monster',
        difficulty: 'Medium',
        description: 'The admin cookie holds the key. Can you figure out how to decode it?',
        hint: 'Base64 encoding is commonly used for cookie values...',
        points: 20,
        flag: 'FLAG{cookie_monster_strikes_again}',
        category: 'Web'
      }
    ],
    crypto: [
      {
        title: 'Caesar\'s Secret',
        difficulty: 'Easy',
        description: 'Decrypt this ancient message: "SYNT{pnrfne_pvcure_vf_jrnx}"',
        hint: 'Julius Caesar used a simple shift cipher...',
        points: 10,
        flag: 'FLAG{caesar_cipher_is_weak}',
        category: 'Crypto'
      },
      {
        title: 'Hash Cracker',
        difficulty: 'Medium',
        description: 'Crack this MD5 hash: 5f4dcc3b5aa765d61d8327deb882cf99',
        hint: 'This is a commonly used password...',
        points: 20,
        flag: 'FLAG{password}',
        category: 'Crypto'
      }
    ],
    osint: [
      {
        title: 'Digital Footprint',
        difficulty: 'Easy',
        description: 'Find my first GitHub repository. The flag is in the initial commit message.',
        hint: 'GitHub profile URLs follow a standard format...',
        points: 15,
        flag: 'FLAG{first_commit_found}',
        category: 'OSINT'
      },
      {
        title: 'Social Sleuth',
        difficulty: 'Medium',
        description: 'Find my LinkedIn profile and locate the flag hidden in plain sight.',
        hint: 'Check the background image metadata...',
        points: 25,
        flag: 'FLAG{linkedin_sleuth}',
        category: 'OSINT'
      }
    ],
    forensics: [
      {
        title: 'Metadata Mystery',
        difficulty: 'Easy',
        description: 'Download the image and find the flag hidden in its metadata.',
        hint: 'ExifTool is your friend...',
        points: 15,
        flag: 'FLAG{exif_expert}',
        category: 'Forensics'
      },
      {
        title: 'Packet Detective',
        difficulty: 'Hard',
        description: 'Analyze the network capture file to find the exfiltrated flag.',
        hint: 'Look for unusual DNS queries...',
        points: 30,
        flag: 'FLAG{packet_master}',
        category: 'Forensics'
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
            CTF Practice Challenges
          </h1>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Welcome to my CTF (Capture The Flag) practice area! Here you'll find a collection of hands-on cybersecurity challenges designed to test and improve your skills. Each challenge simulates real-world scenarios across different security domains from web exploitation to cryptography. Whether you're preparing for CTF competitions or just want to sharpen your security skills, these challenges offer a safe, legal environment to practice. Select a category below to get started!
            </p>
          </div>

          {/* Category Selection */}
          <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up">
            {Object.keys(challenges).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges[selectedCategory as keyof typeof challenges].map((challenge, index) => (
              <div
                key={challenge.title}
                className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      challenge.difficulty === 'Easy'
                        ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
                        : challenge.difficulty === 'Medium'
                        ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300'
                    }`}>
                      {challenge.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      {challenge.points} pts
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {challenge.description}
                </p>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      Show Hint
                    </summary>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                      {challenge.hint}
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                      Show Flag
                    </summary>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4 font-mono">
                      {challenge.flag}
                    </p>
                  </details>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-12 bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 backdrop-blur-sm" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">How to Submit Flags</h2>
            <p className="text-gray-600 dark:text-gray-300">
              These are practice challenges to help you learn various cybersecurity concepts. The flags are provided for learning purposes. In real CTF competitions, you would typically submit flags to a scoring server. Feel free to try solving these challenges and compare your answers with the provided flags.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 