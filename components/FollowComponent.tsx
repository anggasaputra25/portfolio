import { Github, Instagram, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function FollowComponent() {
    return (
        <div>
            <h2 className="font-medium text-3xl mb-4">FOLLOW ME</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href={'https://www.instagram.com/angga.site'} target="_blank" className="bg-gray-100 dark:bg-neutral-800 p-4 flex items-center gap-2 rounded-sm"><Instagram size={20} /> angga.site</Link>
                <Link href={'https://www.tiktok.com/@anggatime'} target="_blank" className="bg-gray-100 dark:bg-neutral-800 p-4 flex items-center gap-2 rounded-sm"><FontAwesomeIcon icon={faTiktok} className="max-w-5 max-h-5" /> anggatime</Link>
                <Link href={'https://www.linkedin.com/in/anggasaputra07'} target="_blank" className="bg-gray-100 dark:bg-neutral-800 p-4 flex items-center gap-2 rounded-sm"><Linkedin size={20} /> anggasaputra07</Link>
                <Link href={'https://github.com/anggasaputra25'} target="_blank" className="bg-gray-100 dark:bg-neutral-800 p-4 flex items-center gap-2 rounded-sm"><Github size={20} /> anggasaputra25</Link>
            </div>
        </div>
    )
}