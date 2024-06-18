import Header from '../components/Header';

const About = () => {
    return (
        <div className="flex">
            <Header />
            <div className="bg-gray-100 p-4 w-screen">
                <h1 className="text-2xl font-bold text-gray-800">About Page</h1>
            </div>
        </div>        
    );
}

export default About;