import { useKeyBoard } from "./keyboard";
import { ref } from "vue";
import { useCtx } from "./useCtx";
import Sprite from "./sprite";
import useSprite from "./sprite";

const { ctx, canvas } = useCtx();
const { keys } = useKeyBoard();

const { sprite: player, update } = useSprite();
let x = 0;
let y = 0;
function useRender() {
  function bg(
    config = {
      fillStyle: "#000",
    }
  ) {
    ctx.value.fillStyle = config.fillStyle;
    ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height);
  }
  function init(el) {
    const dom = document.querySelector(el);
    canvas.value = document.createElement("canvas");
    canvas.value.width = dom.clientWidth;
    canvas.value.height = dom.clientHeight;
    dom.appendChild(canvas.value);
    ctx.value = canvas.value.getContext("2d");
  }
  function render() {
    bg();
    if (keys.ArrowLeft.pressed) {
      player.value.velcoity.x = -5;
    } else if (keys.ArrowRight.pressed) {
      player.value.velcoity.x = 5;
    } else {
      player.value.velcoity.x = 0;
    }
    if (keys.c.pressed) {
      player.value.velcoity.y = -10;
    }
    update();
    window.requestAnimationFrame(render);
  }
  return {
    ctx,
    player,
    init,
    bg,
    render,
  };
}

export { useRender };
