import { useKeyBoard } from "./keyboard";
import { ref } from "vue";
import { useCtx } from "./useCtx";
import Sprite from "./sprite";
import useSprite from "./sprite";
import { useMap } from "./map";
const { ctx, canvas } = useCtx();
const { keys } = useKeyBoard();

const {
  sprite: player,
  update: playerUpdate,
  total,
  bottomBox,
  isc,
} = useSprite();

const { update: mapUpdate, map } = useMap();

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
    map.value.fillStyle = "blue";
    if (keys.a.pressed) {
      player.value.velcoity.x = -5;
    } else if (keys.d.pressed) {
      player.value.velcoity.x = 5;
    } else if (keys.w.pressed && !isc.value) {
      player.value.velcoity.y = -5;
    } else if (keys.s.pressed && !isc.value) {
      player.value.velcoity.y = 5;
    } else {
      player.value.velcoity.x = 0;
      player.value.velcoity.y = 0;
    }
    if (keys.c.pressed) {
      if (!isc.value) {
        isc.value = true;
        player.value.g = -10;
        total.value = bottomBox.value.y;
      }
    }
    mapUpdate();
    playerUpdate();
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
