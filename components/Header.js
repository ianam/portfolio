function Header() {
    return (
        <header className="flex flex-col h-screen">
            <nav className="bg-blue-100 w-64 min-h-full p-4 flex flex-col items-start">
                <h1 className="text-gray-500 text-2xl font-bold mb-6">Iana Design</h1>
                <a href="/" className="text-gray-500 hover:underline mb-2">Home</a>
                <a href="/" className="text-gray-500 hover:underline mb-2">Projects</a>
            </nav>
        </header>
    );
}

export default Header;