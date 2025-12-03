'use client'
import { AppWindow, Brain, Briefcase, CloudCog, Database, Earth, Figma, File, Github, Gitlab, Globe, NotepadText, Paintbrush, Palette, Users } from "lucide-react";
import { useState } from "react";

export default function SkillComponent() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { icon: Briefcase, label: "Expertise" },
        { icon: AppWindow, label: "Software" },
        { icon: Globe, label: "Framework" },
        { icon: Earth, label: "Language" },
    ];

    const tabContents = [
        [
            { icon: Palette, label: "Web Design" },
            { icon: Globe, label: "Web Development" },
            { icon: Paintbrush, label: "Graphic Design" },
            { icon: Users, label: "Team Collaboration" },
            { icon: Brain, label: "Problem Solving" },
            { icon: Database, label: "Database" },
        ],
        [
            { icon: Github, label: "Github" },
            { icon: Gitlab, label: "Gitlab" },
            { icon: Figma, label: "Figma" },
            { icon: AppWindow, label: "Visual Studio Code" },
            { icon: NotepadText, label: "Notion" },
            { icon: Paintbrush, label: "Canva" },
            { icon: Database, label: "XAMPP" },
            { icon: Database, label: "Supabase" },
            { icon: CloudCog, label: "Postman" },
            { icon: File, label: "Google Workspace" },
        ],
        [
            { icon: Globe, label: "Bootstrap" },
            { icon: Globe, label: "Tailwind" },
            { icon: Globe, label: "React" },
            { icon: Globe, label: "Next.js" },
            { icon: Globe, label: "Laravel" },
            { icon: Globe, label: "Flutter" },
        ],
        [
            { icon: Earth, label: "HTML" },
            { icon: Earth, label: "CSS" },
            { icon: Earth, label: "JavaScript" },
            { icon: Earth, label: "PHP" },
            { icon: Earth, label: "Python" },
            { icon: Earth, label: "Java" },
            { icon: Earth, label: "C++" },
            { icon: Earth, label: "Dart" },
            { icon: Earth, label: "SQL" },
        ],
    ];

    return (
        <div>
            <h2 className="font-medium text-3xl mb-4">SKILLS</h2>
            <div className="hidden md:flex w-fit">
                {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
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
            
            <div className="flex md:hidden w-fit">
                {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
                {tabContents[activeTab].map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="bg-gray-100 dark:bg-neutral-800 flex items-center gap-2 p-4 rounded-sm">
                            <Icon size={16} />
                            {item.label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}