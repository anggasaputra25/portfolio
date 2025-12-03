import { Mail, MapPinHouse } from "lucide-react";

export default function ContactComponent() {
    return (
        <div>
            <h2 className="font-medium text-3xl mb-4">CONTACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <p className="bg-gray-100 dark:bg-neutral-800 p-4 flex items-center gap-2 rounded-sm"><MapPinHouse size={20} /> Bali, Indonesia</p>
                <p className="bg-gray-100 dark:bg-neutral-800 p-4 flex items-center gap-2 rounded-sm"><Mail size={20} /> anggasaputra2st@gmail.com</p>
            </div>
        </div>
    )
}