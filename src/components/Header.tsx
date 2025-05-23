import { Globe } from "lucide-react";
import  Link  from 'next/link';



export default function Header() {
    return (
        <div>
            <header className="max-w-7xl mx-auto flex justify-between py-6">
                <div className="text-2xl font-black text-white">
                    <h1>Rodsone bacela</h1>
                </div>
                <Link href="#">
                    <Globe size={24} color="white" />
                </Link>
            </header>
        </div>
    );
}