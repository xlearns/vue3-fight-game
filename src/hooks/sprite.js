import { ref } from "vue";
import { useRender } from "./render";
import { useCtx } from "./useCtx";
const { ctx, canvas } = useCtx();
const gravity = 0.2;

function useSprite() {
  const sprite = ref({
    width: 50,
    height: 150,
    position: {
      x: 0,
      y: 0,
    },
    velcoity: {
      y: 0,
      x: 0,
    },
  });
  function draw() {
    ctx.value.fillStyle = "red";
    ctx.value.fillRect(
      sprite.value.position.x,
      sprite.value.position.y,
      sprite.value.width,
      sprite.value.height
    );
  }
  function update() {
    draw();
    sprite.value.position.y += sprite.value.velcoity.y;
    sprite.value.position.x += sprite.value.velcoity.x;
    if (
      sprite.value.position.y + sprite.value.height + sprite.value.velcoity.y >=
      canvas.value.height
    ) {
      sprite.value.velcoity.y = 0;
    } else {
      sprite.value.velcoity.y += gravity;
    }
  }

  return {
    sprite,
    update,
  };
}

export default useSprite;
