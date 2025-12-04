'use client'
import ContactComponent from "@/components/ContactComponent";
import FollowComponent from "@/components/FollowComponent";
import ProjectComponent from "@/components/ProjectComponent";
import SkillComponent from "@/components/SkillComponent";
import { BriefcaseBusiness, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme"; // Import hook
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {
    const { setThemeMode, isDark, mounted } = useTheme();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    // Refresh AOS when theme changes
    useEffect(() => {
        if (mounted) {
            AOS.refresh();
        }
    }, [isDark, mounted]);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="bg-neutral-900 text-black min-h-screen">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${isDark ? 'dark' : ''} bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen duration-200 ease-linear`}>
            {/* Theme Toggle Buttons */}
            <div className="py-10 flex justify-center">
                <div className="flex w-fit gap-2 bg-gray-200 dark:bg-neutral-800 rounded-full p-1" data-aos="fade-down">
                    <button
                        onClick={() => setThemeMode('light')}
                        className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${!isDark
                                ? 'bg-white text-black shadow-sm'
                                : 'hover:bg-neutral-700 text-neutral-400 hover:text-white'
                            }`}
                        aria-label="Light mode"
                    >
                        <Sun size={20} />
                    </button>
                    <button
                        onClick={() => setThemeMode('dark')}
                        className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${isDark
                                ? 'bg-neutral-600 text-white shadow-sm'
                                : 'hover:bg-gray-300 text-gray-600 hover:text-black'
                            }`}
                        aria-label="Dark mode"
                    >
                        <Moon size={20} />
                    </button>
                </div>
            </div>

            <main className="px-10 lg:px-0 lg:w-2/3 mx-auto flex flex-col gap-20">
                {/* Hero Section */}
                <div className="flex gap-8 flex-col items-center md:flex-row md:items-end">
                    <div>
                        <BriefcaseBusiness width={60} height={60} className="mx-auto md:mx-0" data-aos="fade-down" />
                        <h1 className="text-6xl font-bold text-center my-3 md:my-8 md:text-left overflow-y-hidden">
                            {'ANGGA'.split('').map((letter, index) => (
                                <span
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="inline-block"
                                >
                                    {letter}
                                </span>
                            ))}
                        </h1>
                        <div className="overflow-y-hidden">
                            <h2 data-aos="fade-up" className="font-medium text-center mb-8 md:mb-2 md:text-left md:text-2xl">Designer & Developer (Website)</h2>
                            <p data-aos="fade-up" className="hidden lg:block mb-2">Hello! I&apos;m a Web Developer passionate about creating modern, responsive, and functional websites. I have experience working with Next.js, Tailwind, Laravel, Supabase, and more, specializing in building user-friendly systems with clean designs and optimized performance.</p>
                            <p data-aos="fade-up" className="hidden lg:block">I&apos;m open to <strong>freelance collaborations</strong> as well as opportunities to <strong>join the tech industry</strong>. If you&apos;re looking for someone who can build a professional website that supports your business or organization, I&apos;d be glad to help bring your vision to life.</p>
                            <p data-aos="fade-up" className="hidden sm:block lg:hidden">Hello! I&apos;m a Web Developer passionate about creating modern, responsive, and functional websites.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <Image
                            src="/images/profile.jpg"
                            alt="Profile"
                            width={500}
                            height={500}
                            className="object-cover max-w-70 max-h-70 rounded-md lg:grayscale hover:grayscale-0 transition-all duration-200 ease-linear"
                        />
                    </div>
                    <p className="sm:hidden">Hello! I&apos;m a Web Developer passionate about creating modern, responsive, and functional websites.</p>
                </div>

                {/* Dividers and Components */}
                <div className="w-full h-0.5 bg-neutral-400 dark:bg-neutral-700"></div>
                <SkillComponent />
                <div className="w-full h-0.5 bg-neutral-400 dark:bg-neutral-700"></div>
                <ProjectComponent />
                <div className="w-full h-0.5 bg-neutral-400 dark:bg-neutral-700"></div>
                <ContactComponent />
                <div className="w-full h-0.5 bg-neutral-400 dark:bg-neutral-700"></div>
                <FollowComponent />
                <p className="text-center mb-10">Created by ANGGA</p>
            </main>
        </div>
    );
}