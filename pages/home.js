import Header from '../components/Header';

const Home = () => {
    return (
        <div className="flex">
            <Header />
            <div className="p-4 w-screen">
                <h1 className="text-5xl uppercase font-bold text-gray-200">Welcome</h1>
            </div>
        </div>        
    );
}

export default Home;