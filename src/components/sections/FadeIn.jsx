import useInView from "../sections/useInView";

const FadeIn = ({ children, delay = 0, direction = "up", style = {} }) => {
  const [ref, inView] = useInView();

  const dirs = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : dirs[direction],
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
