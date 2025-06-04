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

  const [selectedCategory, setSelectedCategory] = useState('trivia');

  const challenges = {
    trivia: [
      {
        title: 'Web Security Basics',
        difficulty: 'Easy',
        description: 'What port does HTTPS use?',
        hint: 'This is the standard port for secure web traffic.',
        points: 25,
        flag: '443',
        category: 'Trivia'
      },
      {
        title: 'Malware Types',
        difficulty: 'Easy',
        description: 'What kind of malware demands payment?',
        hint: 'Think about recent cyber attacks on hospitals and businesses.',
        points: 25,
        flag: 'Ransomware',
        category: 'Trivia'
      },
      {
        title: 'Network Services',
        difficulty: 'Easy',
        description: 'What port does DNS use?',
        hint: 'This is the standard port for Domain Name System queries.',
        points: 25,
        flag: '53',
        category: 'Trivia'
      },
      {
        title: 'Security Tools',
        difficulty: 'Easy',
        description: 'What tool is used to map open ports?',
        hint: 'This popular tool name starts with "N".',
        points: 25,
        flag: 'Nmap',
        category: 'Trivia'
      },
      {
        title: 'Linux Security',
        difficulty: 'Medium',
        description: 'What file stores Linux user passwords?',
        hint: 'This file is in the /etc directory and has a spooky name.',
        points: 25,
        flag: '/etc/shadow',
        category: 'Trivia'
      }
    ],
    crypto: [
      {
        title: 'Hash of the River',
        difficulty: 'Easy',
        description: 'A data packet was intercepted mid-transmission. The payload below appears to contain a name. Can you crack it?\n\ncml2ZXJiYXRz',
        hint: 'This looks like base64 encoding. Try an online decoder!',
        points: 100,
        flag: 'riverbats',
        category: 'Cryptography'
      },
      {
        title: 'Signal in the Static',
        difficulty: 'Medium',
        description: 'You intercepted a weak signal from a satellite. This looks encoded, not encrypted. Can you decode the message?\n\nMFWGSZLOONQXEZLSMVQWY===',
        hint: 'This is base32 encoded. Look for an online base32 decoder.',
        points: 100,
        flag: 'aliensarereal',
        category: 'Cryptography'
      },
      {
        title: "Caesar's Favorite Movie",
        difficulty: 'Easy',
        description: 'The emperor encoded this text with a classic cipher. Shift it back to uncover a dystopian cult classic.\n\nCqtCqn',
        hint: 'Julius Caesar used a simple shift cipher. Try different shifts!',
        points: 100,
        flag: 'MadMax',
        category: 'Cryptography'
      },
      {
        title: "The Zookeeper's Secret",
        difficulty: 'Medium',
        description: 'An encrypted message was found scratched into the side of a crate labeled "Primate Intelligence Division." The zookeeper says it is just a name. Can you decrypt it?\n\n50 65 6e 67 75 69 6e 73',
        hint: 'These look like hexadecimal values. Try converting them to ASCII.',
        points: 100,
        flag: 'Penguins',
        category: 'Cryptography'
      }
    ],
    osint: [
      {
        title: 'Ransomware Investigation',
        difficulty: 'Medium',
        description: 'You will be finding intel on ransomware groups behind healthcare based attacks. Which healthcare company was attacked by BlackCat/ALPHV?',
        hint: 'Look for recent news articles about BlackCat/ALPHV ransomware attacks on healthcare companies.',
        points: 150,
        flag: 'Change Healthcare',
        category: 'OSINT'
      },
      {
        title: 'MITRE ATT&CK Knowledge',
        difficulty: 'Hard',
        description: 'What MITRE ATT&CK Framework ID is used in the technique phishing for information?',
        hint: 'Check the MITRE ATT&CK Framework website under Initial Access techniques.',
        points: 150,
        flag: 'T1598',
        category: 'OSINT'
      },
      {
        title: 'Crypto Transaction Analysis',
        difficulty: 'Hard',
        description: 'Reference this Ethereum transaction hash: 0x7fda3c06d2eec7c3d26c1b373cc3f1e648b51556fd7e95944d31861758936626\n\nWhat is the wallet address of the sender?',
        hint: 'Use a blockchain explorer like Etherscan to look up the transaction.',
        points: 150,
        flag: '0x7dCC00d0Da47e6982672CB1C2481A6943737af45',
        category: 'OSINT'
      }
    ],
    web: [
      {
        title: 'HTTP Status Codes',
        difficulty: 'Easy',
        description: 'What HTTP response code means "Forbidden"?',
        hint: 'This is a common status code when access is denied.',
        points: 25,
        flag: '403',
        category: 'Web'
      },
      {
        title: 'Web Security Protocols',
        difficulty: 'Easy',
        description: 'Which protocol secures websites with encryption?',
        hint: 'This protocol is indicated by the padlock in your browser.',
        points: 25,
        flag: 'HTTPS',
        category: 'Web'
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
                <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line">
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