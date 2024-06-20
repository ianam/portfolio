import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex flex-col h-screen">
            <nav className="border-r-2 border-slate-100 min-h-full w-64 p-4 flex flex-col items-start justify-between">
            <div className="flex flex-col justify-center grow">
                <Link href="/home" className="text-lg uppercase text-gray-500 hover:underline mb-4">Home</Link>
                <Link href="/about" className="text-lg uppercase text-gray-500 hover:underline mb-4">About</Link>
                <Link href="/portfolio" className="text-lg uppercase text-gray-500 hover:underline mb-4">Portfolio</Link>
                <Link href="/services" className="text-lg uppercase text-gray-500 hover:underline mb-4">Services</Link>
                <Link href="/contact" className="text-lg uppercase text-gray-500 hover:underline mb-4">Contact</Link>                    
            </div>
            <div>
                    <p className="text-sm text-gray-400">Copyright 2024</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;