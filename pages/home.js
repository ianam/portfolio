import Header from '../components/Header';

const Home = () => {
    return (
        <div className="flex">
            <Header />
            <div className="p-4 w-screen">
                <h1 className="text-8xl uppercase font-bold text-gray-200">Welcome</h1>
                <section className="pt-10">
                    <h2 className="text-4xl font-serif mb-4 text-[#ffbe0b]">Hi, I'm Iana</h2>
                    <p>I'm a Vancouver-based web designer and developer, cat-lover, perfectionist, and mom! I work with local businesses to cultivate their online presence through functional and beautiful websites.</p>
                    <h2>About Me</h2>
                    <p>In an unexpected turn of events, I discovered a passion for web development through a position in retail management. As all businesses eventually do, we came to the conclusion that we needed a website - and I decided to give it a go myself. After several failed attempts I found my footing and grew to love the process of bringing new life to a business in the digital world. Since then I've rounded out my skills through a development bootcamp, personal for-fun projects, and a multitude of websites for local individuals and businesses.</p>
                    <p>I pride myself on open and honest communication with clients - no technical babble (unless you're into that), and working closely with you to bring your vision to life. I want to support you in your venture - whether you need a website, graphic design, photography, copywriting, or staff training, I can help you plan your project and see it to completion.</p>
                </section>
                <section>
                    <h3>Check out my work!</h3>
                    <p>CV, Github, Portfolio, Services, Contact</p>
                </section>
            </div>
        </div>        
    );
}

export default Home;