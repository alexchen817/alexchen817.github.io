import './styles/App.css'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Tools from './components/Tools';
import About from './components/About';
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
                    value: "#253237",
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
                    value: ["#333333", "#444444", "#555555"],
                },
                links: {
                    color: "#E0FBFC",
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
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 50,
                    },
                    value: 180,
                },
                opacity: {
                    value: 0.6,
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
            <Tools />
        </>

    );
}
export default App;