import { ref } from "vue";
import { useCtx } from "./useCtx";
import { useMap } from "./map";
import { useKeyBoard } from "./keyboard";
const { ctx, canvas } = useCtx();
const { map } = useMap();
const gravity = 0.2;
const bottomBox = ref({ x: 0, y: 0 });
const { keys } = useKeyBoard();
const total = ref(0);
const isc = ref(false);
function useSprite() {
  const sprite = ref({
    width: 50,
    height: 150,
    g: 0,
    position: {
      x: 45,
      y: 370,
    },
    velcoity: {
      y: 0,
      x: 0,
    },
  });
  function draw() {
    ctx.value.fillStyle = "red";
    ctx.value.beginPath();
    ctx.value.fillRect(
      sprite.value.position.x,
      sprite.value.position.y,
      sprite.value.width,
      sprite.value.height
    );
    ctx.value.fillStyle = "#fff";
    ctx.value.beginPath();
    ctx.value.fillRect(
      bottomBox.value.x,
      bottomBox.value.y,
      sprite.value.width,
      10
    );
  }
  function update() {
    draw();
    sprite.value.position.y += sprite.value.g;
    sprite.value.position.y += sprite.value.velcoity.y;
    sprite.value.position.x += sprite.value.velcoity.x;
    bottomBox.value.y = sprite.value.position.y + sprite.value.height - 10;
    bottomBox.value.x = sprite.value.position.x;

    if (bottomBox.value.y <= map.value.y && sprite.value.g == 0) {
      bottomBox.value.y = map.value.y;
      sprite.value.position.y = bottomBox.value.y - sprite.value.height + 10;
    }
    console.log(Math.ceil(bottomBox.value.y), Math.ceil(total.value));
    if (
      total.value == 0 ||
      Math.ceil(bottomBox.value.y) >= Math.ceil(total.value)
    ) {
      sprite.value.g = 0;
      total.value = 0;
      isc.value = false;
    } else {
      sprite.value.g += gravity;
    }
  }

  return {
    isc,
    sprite,
    update,
    total,
    bottomBox,
  };
}

export default useSprite;
