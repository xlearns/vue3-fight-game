import { ref } from "vue";
const ctx = ref(null);
const canvas = ref(null);
function useCtx() {
  return {
    ctx,
    canvas,
  };
}
export { useCtx };
