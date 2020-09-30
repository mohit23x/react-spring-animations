import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

export default function BasicDrag() {
  const [{ x, y, scale }, set] = useSpring(() => ({ x: 0, y: 0, scale: 1 }));

  const bind = useDrag(({ offset: [mx, my], active }) => {
    set({ x: mx, y: my, scale: active ? 1.2 : 1 });
  });

  return (
    <div className="container">
      <animated.div
        {...bind()}
        style={{
          ...styles.box,
          x,
          y,
          scale,
        }}
      />
    </div>
  );
}

const styles = {
  box: {
    height: 100,
    width: 100,
    backgroundColor: "orange",
    borderRadius: 10,
    willChange: "transform",
  },
};
