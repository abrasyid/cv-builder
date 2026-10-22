import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Steps from "../components/home/Steps";
import Features from "../components/home/Features";
import GetStarted from "../components/home/GetStarted";
import Feedback from "../components/home/Feedback";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Steps />
                <Features />
                <GetStarted />
                <Feedback />
            </main>
            <Footer />
        </>
    );
}

export default Home;
