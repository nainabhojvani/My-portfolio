import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -10 },
        background: { color: "#0f172a" }, // Dark background
        particles: {
          number: { value: 40 },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.5,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
        },
      }}
    />
  );
};

export default BackgroundParticles;
