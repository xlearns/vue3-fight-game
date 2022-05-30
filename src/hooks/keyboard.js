import { reactive, ref } from "vue";

const keys = reactive({
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  ArrowDown: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  c: {
    pressed: false,
  },
});

window.addEventListener("keydown", (event) => {
  let { key } = event;

  switch (key) {
    case "w" || "ArrowUp":
      keys.ArrowUp.pressed = true;
      keys.w.pressed = true;
      break;
    case "s" || "ArrowDown":
      keys.ArrowDown.pressed = true;
      keys.s.pressed = true;
      break;
    case "a" || "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      keys.a.pressed = true;
      break;
    case "d" || "ArrowRight":
      keys.ArrowRight.pressed = true;
      keys.d.pressed = true;
      break;
    case "c":
      keys.c.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  let { key } = event;
  switch (key) {
    case "w" || "ArrowUp":
      keys.ArrowUp.pressed = false;
      keys.w.pressed = false;
      break;
    case "s" || "ArrowDown":
      keys.ArrowDown.pressed = false;
      keys.s.pressed = false;
      break;
    case "a" || "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      keys.a.pressed = false;
      break;
    case "d" || "ArrowRight":
      keys.ArrowRight.pressed = false;
      keys.d.pressed = false;
      break;
    case "c":
      keys.c.pressed = false;
      break;
  }
});

function useKeyBoard() {
  return {
    keys,
  };
}
export { useKeyBoard };
