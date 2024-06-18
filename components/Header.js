function Header() {
    return (
        <header className="flex flex-col h-screen">
            <nav className="bg-blue-100 w-64 min-h-full p-4 flex flex-col items-start">
                <h1 className="text-gray-500 text-2xl font-bold mb-6">Iana Design</h1>
                <a href="/home" className="text-gray-500 hover:underline mb-2">Home</a>
                <a href="/about" className="text-gray-500 hover:underline mb-2">About</a>
                <a href="/portfolio" className="text-gray-500 hover:underline mb-2">Portfolio</a>
                <a href="/services" className="text-gray-500 hover:underline mb-2">Services</a>
                <a href="/contact" className="text-gray-500 hover:underline mb-2">Contact</a>
            </nav>
        </header>
    );
}

export default Header;