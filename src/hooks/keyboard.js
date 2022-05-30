import { reactive, ref } from "vue";

const keys = reactive({
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  c: {
    pressed: false,
  },
});

window.addEventListener("keydown", (event) => {
  let { key } = event;
  switch (key) {
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    case "c":
      keys.c.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  let { key } = event;
  switch (key) {
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
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
