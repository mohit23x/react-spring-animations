import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { wobbly } from "../../config";

export default function DragAndBack() {
  const [{ x, y, scale }, set] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: wobbly,
  }));

  const bind = useDrag(({ down, movement: [mx, my], active }) => {
    set({ x: down ? mx : 0, y: down ? my : 0, scale: active ? 1.2 : 1 });
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
  },
};
