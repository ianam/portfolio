import Header from '../components/Header';

const Home = () => {
    return (
        <div className="flex">
            <Header />
            <div className="p-4 w-screen h-screen">
                <section className="flex flex-row items-center h-1/2 my-10">
                    <img className="rounded-full border-8 border-amber-400" src="/images/IMG_4199.jpeg" width="300" height="300" />
                    <div className="p-5">
                    <h1 className="text-7xl font-bold mb-4 text-amber-400">Hi, I'm <span className="text-8xl font-thin cursive">iana</span></h1>
                    <p className="py-4">I’m a Vancouver-based web developer and designer, working with local businesses to cultivate their online presence through functional and beautiful websites. 
                    </p>
                    </div>
                </section>
                <section>
                    <h2 className="text-5xl font-bold my-4 text-amber-400">About me</h2>
                    <p>My journey into web development began when I was working for a small business, taking on the task of creating an e-commerce site for our extensive inventory. Immersing myself in the entire process - from web design, to photography, shipping logistics, copywriting, graphic design, and staff training -  I discovered a passion for project management and an itch to learn more about web development.
                    </p>
                    <p>Since then I’ve taught myself to code through courses and projects, and have worked with multiple clients, creating tailored web solutions for their online businesses. Creativity, problem-solving, and communication are at the core of my work, allowing me to offer comprehensive solutions that go beyond just web development. Whether you’re looking to enhance or renew your brand, expand your audience, open an e-commerce sales avenue, or create something entirely new - let’s talk about it!
                    </p>
                </section>
                <section>
                    <h2 className="text-5xl font-bold my-4 text-[#ffbe0b]">Check out my work!</h2>
                    <p>CV, Github, Portfolio, Services, Contact</p>
                </section>
            </div>
        </div>        
    );
}

export default Home;