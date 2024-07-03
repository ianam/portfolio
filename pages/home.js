import Header from '../components/Header';

const Home = () => {
    return (
        <div className="flex">
            <Header />
            <div className="p-4 w-screen bg-custom pt-8">
                <section className="flex flex-row items-center bg-[#EFF1F0] rounded shadow-lg">
                    <img className="rounded-full shadow-xl border-8 border-[#A4AEBA] -my-6 ml-4" src="/images/IMG_4199.jpeg" width="300" height="300" />
                    <div className="p-5">
                        <h1 className="text-7xl font-bold text-[#A4AEBA]">Hi, I'm <span className="text-8xl font-thin cursive">iana</span></h1>
                        <p className="text-lg text-stone-700 py-4">I’m a Vancouver-based web developer and designer, working with local businesses to cultivate their online presence through functional and beautiful websites. 
                    </p>
                    </div>
                </section>
                <section className="bg-[#EFF1F0] rounded shadow-lg mt-8">
                    <h2 className="text-5xl font-bold px-6 pt-6 text-[#A4AEBA]">About me</h2>
                    <p className="text-stone-700 p-6">My journey into web development began when I was working for a small business, taking on the task of creating an e-commerce site for our extensive inventory. Immersing myself in the entire process - from web design, to photography, shipping logistics, copywriting, graphic design, and staff training -  I discovered a passion for project management and an itch to learn more about web development.
                    </p>
                    <p className="text-stone-700 px-6">Since then I’ve taught myself to code through courses and projects, and have worked with multiple clients, creating tailored web solutions for their online businesses. Creativity, problem-solving, and communication are at the core of my work, allowing me to offer comprehensive solutions that go beyond just web development. Whether you’re looking to enhance or renew your brand, expand your audience, open an e-commerce sales avenue, or create something entirely new - let’s talk about it!
                    </p>
                    <button className="bg-[#3C4251] text-[#EFF1F0] p-4 m-6 rounded">Get in touch</button>
                </section>
                <section className="bg-[#746975] rounded shadow-lg mt-8 p-6">
                    <h2 className="text-4xl font-light uppercase text-[#EFF1F0] pb-6">Technologies</h2>
                    <div className="flex space-x-6">
                        <div className="w-1/3 bg-[#EFF1F0] rounded shadow-lg p-6">
                            <h3 className="text-sm uppercase text-stone-700 pb-3">Frontend</h3>
                            <ul className="list-none text-stone-700">
                                <li>HTML 5</li>
                                <li>JavaScript</li>
                                <li>CSS 3</li>
                                <li>React</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                        <div className="w-1/3 bg-[#EFF1F0] rounded shadow-lg p-6">
                            <h3 className="text-sm uppercase text-stone-700 pb-3">Backend</h3>
                            <ul className="list-none text-stone-700">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className="w-1/3 bg-[#EFF1F0] rounded shadow-lg p-6">
                            <h3 className="text-sm uppercase text-stone-700 pb-3">Design</h3>
                            <ul className="list-none text-stone-700">
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>        
    );
}

export default Home;