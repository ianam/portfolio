import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex flex-col h-screen">
            <nav className="bg-blue-100 w-64 min-h-full p-4 flex flex-col items-start">
                <h1 className="text-gray-500 text-2xl font-bold mb-6">Iana Design</h1>
                <Link href="/home" className="text-gray-500 hover:underline mb-2">Home</Link>
                <Link href="/about" className="text-gray-500 hover:underline mb-2">About</Link>
                <Link href="/portfolio" className="text-gray-500 hover:underline mb-2">Portfolio</Link>
                <Link href="/services" className="text-gray-500 hover:underline mb-2">Services</Link>
                <Link href="/contact" className="text-gray-500 hover:underline mb-2">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;