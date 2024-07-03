import Header from '../components/Header';

const Home = () => {
    return (
        <div className="flex bg-custom">
            <Header />
            <div className="p-4 max-w-screen-lg mx-auto">
                <div className="h-[350px] flex items-center">
                <section className="flex flex-row items-center bg-[#f7f2eb] rounded shadow-lg">
                    <img className="rounded-full shadow-xl border-8 border-[#f9f8f8] -my-6 ml-4" src="/images/IMG_4199.jpeg" width="300" height="300" />
                    <div className="p-5">
                        <h1 className="text-6xl font-bold text-[#736271]">Hi, I'm <span className="text-7xl font-thin cursive">iana</span></h1>
                        <p className="text-stone-700 py-6">I’m a Vancouver-based web developer and project manager, working with local businesses to cultivate their online presence through functional and beautiful websites. 
                        </p>
                    </div>
                </section>
                </div>
                <section className="flex flex-row items-center">
                <svg className="w-[50px] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/></svg>
                </section>
                <section className="bg-[#f7f2eb] rounded shadow-lg mt-8">
                    <h2 className="text-4xl font-light uppercase px-6 pt-6 text-[#736271]">About me</h2>
                    <p className="text-stone-700 p-6">My journey into web development began when I was working for a small business, taking on the task of creating an e-commerce site for our extensive inventory. Immersing myself in the entire process - from web design, to photography, shipping logistics, copywriting, graphic design, and staff training -  I discovered a passion for project management and an itch to learn more about web development.
                    </p>
                    <p className="text-stone-700 pb-6 px-6">Since then I’ve taught myself to code through courses and projects, and have worked with multiple clients, creating tailored web solutions for their online businesses. Creativity, problem-solving, and communication are at the core of my work, allowing me to offer comprehensive solutions that go beyond just web development. Whether you’re looking to enhance or renew your brand, expand your audience, open an e-commerce sales avenue, or create something entirely new - let’s talk about it!
                    </p>
                </section>
                <section className="bg-[#736271] rounded shadow-lg mt-8 p-6">
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