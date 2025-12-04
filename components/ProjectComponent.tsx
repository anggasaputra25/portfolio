'use client'
import { Github, Instagram, LayoutTemplate, Link2, Paintbrush2, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectComponent() {
    const [activeTab, setActiveTab] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4); // tampilkan 4 data awal

    const tabs = [
        { icon: LayoutTemplate, label: "Website" },
        { icon: Smartphone, label: "Application" },
        { icon: Paintbrush2, label: "Design" },
    ];

    const tabContents = [
        [
            {
                imgUrl: '/images/projects/project-13.png',
                label: "Studia",
                description: "Studia is a web-based learning platform. Studia simplifies the material, provides automated quizzes, and delivers interactive discussions powered by AI.",
                github: 'https://github.com/anggasaputra25/studia',
                instagram: '',
                tags: ["Tailwind", "NextJS", "Supabase", "Gemini API"],
            },
            {
                imgUrl: '/images/projects/project-12.png',
                label: "AnFlix",
                description: "AnFlix is a responsive and modern movie database web app inspired by IMDb. This app allows users to search for movies and explore various titles using the OMDb API.",
                website: 'https://anflix-film.vercel.app',
                github: 'https://github.com/anggasaputra25/anflix',
                instagram: '',
                tags: ["Tailwind", "ReactJS"],
            },
            {
                imgUrl: '/images/projects/project-11.png',
                label: "Greenify",
                description: "Website for the InvoFest Competition in the web design branch. A website designed to help individuals effectively care for and maintain their plants.",
                website: 'https://greenifynature.vercel.app',
                github: 'https://github.com/anggasaputra25/greenify',
                instagram: '',
                tags: ["Tailwind"],
            },
            {
                imgUrl: '/images/projects/project-10.png',
                label: "Safezone",
                description: "Website for the ITCC Competition in the web design branch. An e-commerce platform specializing in the sale of cybersecurity products.",
                website: 'https://safezone-cyber.vercel.app',
                github: 'https://github.com/anggasaputra25/safezone',
                instagram: '',
                tags: ["HTML", "CSS", "JS"],
            },
            {
                imgUrl: '/images/projects/project-9.png',
                label: "Supachat",
                description: "A real-time chatting application that enables seamless and instant communication between users.",
                website: 'https://supachat-app.vercel.app',
                github: 'https://supachat-app.vercel.app',
                instagram: '',
                tags: ["Tailwind", "NextJS", "Supabase"],
            },
            {
                imgUrl: '/images/projects/project-8.png',
                label: "LocalAI",
                description: "An AI-powered chat website built using the Gemini API. All data is securely stored on the user's local storage instead of a database, ensuring privacy and control.",
                website: 'https://localstorage-ai.vercel.app',
                github: 'https://github.com/anggasaputra25/LocalAI',
                instagram: '',
                tags: ["Tailwind", "NextJS", "Gemini API"],
            },
            {
                imgUrl: '/images/projects/project-6.png',
                label: "Savings",
                description: 'This website functions as a savings tracker, allowing users to record their finances by adding and subtracting savings amounts.',
                website: 'https://savings-coins.vercel.app',
                github: 'https://github.com/anggasaputra25/savings',
                instagram: '',
                tags: ["Tailwind", "NextJS"],
            },
            {
                imgUrl: '/images/projects/project-2.png',
                label: "ResumeFIT",
                description: 'This website is designed to assist job seekers in securing employment by providing support in the CV creation process.',
                website: 'https://resume-fit.vercel.app',
                github: 'https://github.com/anggasaputra25/ResumeFit',
                instagram: '',
                tags: ["Tailwind", "NextJS", "Laravel"],
            },
            {
                imgUrl: '/images/projects/project-1.png',
                label: "MyShoes",
                description: 'This is a demo website that provides online shoe sales services. It is intended for testing purposes only and does not represent a real business.',
                website: '',
                github: 'https://github.com/anggasaputra25/myshoes',
                instagram: 'https://www.instagram.com/p/DJy_gBavQvf/?img_index=1',
                tags: ["Bootstrap", "Laravel"],
            },
            {
                imgUrl: '/images/projects/project-3.png',
                label: "AnimeList",
                description: 'This website was developed to enhance my skills in working with APIs. It also demonstrates the use of local storage, allowing users to save their favorite anime.',
                website: 'https://anime-list-app-one.vercel.app',
                github: 'https://github.com/anggasaputra25/anime-list',
                instagram: '',
                tags: ["Bootstrap", "ReactJS"],
            },
            {
                imgUrl: '/images/projects/project-7.png',
                label: "To Do List",
                description: "The To-Do List is a note-taking application in the form of a website. All data is securely stored on the user's local storage instead of a database, ensuring privacy and control.",
                website: 'https://to-do-list-ten-blush.vercel.app',
                github: 'https://github.com/anggasaputra25/to-do-list',
                instagram: '',
                tags: ["Bootstrap", "ReactJS"],
            },
            {
                imgUrl: '/images/projects/project-4.png',
                label: "Bali Island",
                description: 'This website provides information about Bali Island and was developed as part of a project assignment from Dicoding.',
                website: 'https://bali-island.vercel.app',
                github: 'https://github.com/anggasaputra25/dicoding-task',
                instagram: '',
                tags: ["HTML", "CSS", "JS"],
            },
            {
                imgUrl: '/images/projects/project-5.png',
                label: "Gamers",
                description: 'This website was created with the purpose of improving my Bootstrap skills.',
                website: 'https://anggasaputra25.github.io/genshin',
                github: 'https://github.com/anggasaputra25/genshin',
                instagram: '',
                tags: ["Bootstrap"],
            },
        ],
        [
            {
                imgUrl: '/images/projects/app-1.png',
                label: "EdiBuk",
                description: 'An application designed to assist students in completing school assignments. Edibuk is a companion app that allows users to listen to books.',
                website: '',
                github: 'https://github.com/anggasaputra25/edibuk',
                instagram: '',
                tags: ["Flutter", "Supabase"],
            },
        ],
        [
            {
                imgUrl: '/images/designs/design-5.png',
                label: "LocalAI",
                description: '',
                website: '',
                github: '',
                instagram: 'https://www.instagram.com/p/DLh-PjlP7Hh/?img_index=1',
                tags: ["Figma", "Artificial Intelligence"],
            },
            {
                imgUrl: '/images/designs/design-4.png',
                label: "Genshin Impact",
                description: '',
                website: '',
                github: '',
                instagram: 'https://www.instagram.com/p/DLXez4VPhWd/?img_index=1',
                tags: ["Figma", "Video Game"],
            },
            {
                imgUrl: '/images/designs/design-3.png',
                label: "Anflix",
                description: '',
                website: '',
                github: '',
                instagram: 'https://www.instagram.com/p/DKy1tYlv29X/?img_index=1',
                tags: ["Figma", "Movie", "John Wick"],
            },
            {
                imgUrl: '/images/designs/design-2.png',
                label: "Savings",
                description: '',
                website: '',
                github: '',
                instagram: 'https://www.instagram.com/p/DJ112voP7E1/?img_index=1',
                tags: ["Figma", "Money"],
            },
            {
                imgUrl: '/images/designs/design-1.png',
                label: "Shoes",
                description: '',
                website: '',
                github: '',
                instagram: 'https://www.instagram.com/p/DJy_gBavQvf/?img_index=1',
                tags: ["Figma", "Product"],
            },
        ]
    ];

    const currentData = tabContents[activeTab].slice(0, visibleCount);

    return (
        <div>
            <h2 className="font-medium text-3xl mb-4 overflow-y-hidden">
                {'PROJECTS'.split('').map((letter, index) => (
                    <span
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="inline-block"
                    >
                        {letter}
                    </span>
                ))}
            </h2>
            <div className="hidden md:flex w-fit" data-aos="fade-up">
                {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveTab(index);
                                setVisibleCount(4);
                            }}
                            className={`flex gap-2 p-2 cursor-pointer transition-colors duration-200 flex-1 justify-center relative ${activeTab === index
                                ? 'dark:text-white'
                                : 'text-neutral-600 dark:text-neutral-500 hover:text-black dark:hover:text-neutral-300'
                                }`}
                        >
                            <Icon size={20} />
                            {tab.label}
                            {activeTab === index && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"></div>
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="flex md:hidden w-fit" data-aos="fade-up">
                {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveTab(index);
                                setVisibleCount(4);
                            }}
                            className={`flex gap-2 p-2 cursor-pointer transition-colors duration-200 flex-1 justify-center relative ${activeTab === index
                                ? 'dark:text-white'
                                : 'text-neutral-600 dark:text-neutral-500 hover:text-black dark:hover:text-neutral-300'
                                }`}
                        >
                            <Icon size={20} />
                            {activeTab === index && tab.label}
                            {activeTab === index && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"></div>
                            )}
                        </button>
                    );
                })}
            </div>

            <div className={`grid gap-4 mt-3 grid-cols-1 md:grid-cols-2`} data-aos="fade-up">
                {currentData.map((item, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-neutral-800 rounded-sm overflow-x-hidden h-full flex flex-col">
                    {/* <div key={index} className="flex flex-col h-full bg-gray-100 dark:bg-neutral-800 rounded-sm overflow-x-hidden"> */}
                        <Image 
                            src={item.imgUrl} 
                            alt={item.label} 
                            width={1000} 
                            height={1000} 
                            className="w-full" 
                        />
                        <div className="flex-1 p-4 flex flex-col justify-between gap-3">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className="font-medium text-xl">{item.label}</p>
                                    <div className="flex gap-2">
                                        {item.instagram &&
                                            <Link target="_blank" href={item.instagram}>
                                                <Instagram size={20} />
                                            </Link>
                                        }
                                        {item.website &&
                                            <Link target="_blank" href={item.website}>
                                                <Link2 size={20} />
                                            </Link>
                                        }
                                        {item.github &&
                                            <Link target="_blank" href={item.github}>
                                                <Github size={20} />
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <p>{item.description}</p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {item.tags.map((tag, idx) => (
                                    <p key={idx} className="py-0.5 px-2 rounded-sm border border-neutral-700 text-sm">
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < tabContents[activeTab].length && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => setVisibleCount(prev => prev + 4)}
                        className="px-4 py-2 rounded-sm border dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black w-full cursor-pointer mt-4 ease-linear duration-100"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
