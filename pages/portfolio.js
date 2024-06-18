import Header from '../components/Header';

function Portfolio() {
    return (
        <div>
            <Header />
            <div className="bg-gray-100 p-8">
                <h1 className="text-2xl font-bold text-gray-800">Portfolio Page</h1>
                <p className="text-orange-500">This is a paragraph.</p>
            </div>
        </div>        
    )
}

export default Portfolio;