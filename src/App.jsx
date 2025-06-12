import './styles/App.css'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Tools from './components/Tools';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';
const App = () => {
    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles loaded:", container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#f2f2f2",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    grab: {
                        distance: 200,
                        links: {
                            blink: false,
                            consent: false,
                            opacity: 1,
                        },
                    }
                },
            },
            particles: {
                color: {
                    value: "#8B5CF6",
                },
                links: {
                    color: "#655A7C",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        area: 800,
                    },
                },
                opacity: {
                    value: 0.2,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 4 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (!init) {
        return <div>Loading particles...</div>;
    }
    return (
        <>
            <NavBar />
            <div style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                    }}
                />
            </div>
            <Hero />
            <About />
            <Experience />
            <Tools />
            <Projects />
            <Footer />
        </>

    );
}
export default App;