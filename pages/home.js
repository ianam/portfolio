import Header from '../components/Header';

const Home = () => {
    return (
        <div className="flex">
            <Header />
            <div className="p-4 w-screen">
                <h1 className="text-2xl font-bold text-gray-800">Home Page</h1>
            </div>
        </div>        
    );
}

export default Home;