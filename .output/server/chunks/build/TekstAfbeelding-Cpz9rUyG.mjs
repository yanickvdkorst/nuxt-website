import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TekstAfbeelding",
  __ssrInlineRender: true,
  props: {
    blok: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-6 flex flex-col mb-20 mt-20 md:flex-row gap-8 items-center animate-fade-in-up" }, _attrs))}>`);
      if (_ctx.blok.image) {
        _push(`<img${ssrRenderAttr("src", _ctx.blok.image)} alt="images" class="w-full md:w-1/3 rounded-xl shadow-md">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1 md:ml-16"><h2 class="text-2xl font-bold text-white">${ssrInterpolate(_ctx.blok.title)}</h2><p class="mt-2 text-white">${ssrInterpolate(_ctx.blok.text)}</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/TekstAfbeelding.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TekstAfbeelding-Cpz9rUyG.mjs.map
