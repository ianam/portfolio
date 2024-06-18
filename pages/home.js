import Header from '../components/Header';

const Home = () => {
    return (
        <div className="flex">
            <Header />
            <div className="bg-gray-100 p-4 w-screen">
                <h1 className="text-2xl font-bold text-gray-800">Home Page</h1>
            </div>
        </div>        
    );
}

export default Home;