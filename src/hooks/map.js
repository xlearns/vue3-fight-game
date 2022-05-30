import { ref } from "vue";
import { useCtx } from "./useCtx";
const { ctx, canvas } = useCtx();
const map = ref({
  width: 50,
  height: 150,
  x: 0,
  y: 0,
  fillStyle: "red",
});
function useMap() {
  function draw() {
    ctx.value.fillStyle = map.value.fillStyle;
    ctx.value.fillRect(
      map.value.x,
      map.value.y,
      canvas.value.width,
      canvas.value.height
    );
  }
  function update() {
    map.value.y = map.value.y
      ? map.value.y
      : canvas.value.height - map.value.height;
    draw();
  }
  return {
    map,
    update,
  };
}
export { useMap };
