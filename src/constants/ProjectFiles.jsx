import React from 'react'
import Factory from '../assets/images/MFac.jpg'
import airbaloon from '../assets/images/airballoon.svg'
import restaurant from '../assets/images/restaurant.svg'
import store from '../assets/images/store.svg'
import crypto from '../assets/images/crypto.svg'
import ark from '../assets/images/ark.png'
import arki from '../assets/images/arki.webp'
import { crypto_images } from '../assets/images/cryptoShots'
import { fmpics } from '../assets/images/forbMemo'

export const project_files = [
{
    title: 'Fragile Memories',
    icon: airbaloon,
    description: 'A sweet journey to my own Neverland. A place in history where the most fragile memories live. Yellow house on a warm dusk and a flying stork. Storks have always been an important symbol for me. The scene itself sends us to the cozy and secluded place where noone grows old and never suffers. It is like drifting in a river of happiness and dreams.',
    link: '/',
    images: fmpics,
},
{
    title: 'Business Website',
    icon: restaurant,
    description: 'Welcome to our beautiful restaurant website! Experience simplicity and elegance while exploring our menu and vibrant atmosphere. Register now to unlock exclusive offers and make your dining experience even more delightful',
    link: '/restaurant',
    images: [],
},
{
    title: 'CryptoTracker',
    icon: crypto,
    description: `This is the app I made, and it's all about cryptocurrencies. Dive into the world of digital assets with various functionalities powered by APIs. Stay updated on real-time market trends, explore historical data, and enjoy interactive features. Whether you're a crypto expert or just getting started, this app is designed to make understanding and navigating the cryptocurrency landscape easy and enjoyable.`,
    link: '/crypto',
    images: crypto_images,
},
]

export const workExperiences = [
    {
        title: "Software QA Analyst",
        company_name: "Ark Ideas",
        icon: ark,
        iconBg: "#ace1af",
        date: "May 2020 - Present",
        points: [
            "Developing and maintaining tests using Laravel, PHP, Python, Angular, Vue and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software QA Analyst",
        company_name: "InVerita",
        icon: crypto,
        iconBg: "#accbe1",
        date: "Nov 2019 - April 2022",
        points: [
            "Performing black-box testing for Mobile and Web based applications",
            "Developing and executing test cases and test suits for various functionalities",
            "Reporting defects in Jira and monitoring defect status until resolved",
            "Running API tests using Postman",
        ],
    },
]
