import { _ as _export_sfc, u as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper/modules';
import { getDocs, collection } from 'firebase/firestore';
import { u as useAsyncData } from './asyncData-BBbM7BWL.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'vue-router';
import 'firebase/app';
import '@vercel/analytics/nuxt';
import '@vercel/speed-insights/nuxt';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const modules = [Pagination, Mousewheel];
    const { $db } = useNuxtApp();
    const db = $db;
    const activeIndex = ref(0);
    function onSlideChange(swiper) {
      activeIndex.value = swiper.activeIndex;
    }
    function serialize(obj) {
      if (obj === null || obj === void 0) return obj;
      if (typeof obj !== "object") return obj;
      if (obj.toDate) return obj.toDate().toISOString();
      if (Array.isArray(obj)) return obj.map(serialize);
      const out = {};
      for (const key in obj) {
        out[key] = serialize(obj[key]);
      }
      return out;
    }
    const { data: projects } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("projects", async () => {
      const querySnapshot = await getDocs(collection(db, "projecten"));
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...serialize(doc.data())
      }));
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative h-screen overflow-hidden" }, _attrs))} data-v-58a271dd><div class="image" data-v-58a271dd><!--[-->`);
      ssrRenderList(unref(projects), (project, i) => {
        _push(`<img${ssrRenderAttr("src", project.image_url)} alt="" class="${ssrRenderClass([{
          "opacity-100 z-20": i === activeIndex.value,
          "opacity-0 z-10": i !== activeIndex.value
        }, "absolute inset-0 w-full h-full object-cover transition-opacity duration-700"])}" data-v-58a271dd>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        direction: "vertical",
        mousewheel: { forceToAxis: true, releaseOnEdges: true, sensitivity: 1 },
        modules,
        class: "relative z-10 h-screen",
        speed: 700,
        onSlideChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(projects), (project, index2) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: project.id,
                class: "h-screen flex p-8 bg-transparent"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: `/projecten/${project.slug || project.id}`,
                      tabindex: "0",
                      "aria-label": "Bekijk project",
                      class: "absolute inset-0 z-30"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="max-w-4xl" data-v-58a271dd${_scopeId2}><h2 class="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg" data-v-58a271dd${_scopeId2}>${ssrInterpolate(project.title || project.id)}</h2><div class="text-xl drop-shadow-lg" data-v-58a271dd${_scopeId2}><!--[-->`);
                    ssrRenderList(project.tags, (tag, idx) => {
                      _push3(`<span class="mr-2" data-v-58a271dd${_scopeId2}>${ssrInterpolate(tag)} `);
                      if (idx !== project.tags.length - 1) {
                        _push3(`<span data-v-58a271dd${_scopeId2}>\u2022</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</span>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: `/projecten/${project.slug || project.id}`,
                        tabindex: "0",
                        "aria-label": "Bekijk project",
                        class: "absolute inset-0 z-30"
                      }, null, 8, ["to"]),
                      createVNode("div", { class: "max-w-4xl" }, [
                        createVNode("h2", { class: "text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg" }, toDisplayString(project.title || project.id), 1),
                        createVNode("div", { class: "text-xl drop-shadow-lg" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(project.tags, (tag, idx) => {
                            return openBlock(), createBlock("span", {
                              key: idx,
                              class: "mr-2"
                            }, [
                              createTextVNode(toDisplayString(tag) + " ", 1),
                              idx !== project.tags.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, "\u2022")) : createCommentVNode("", true)
                            ]);
                          }), 128))
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project, index2) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: project.id,
                  class: "h-screen flex p-8 bg-transparent"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: `/projecten/${project.slug || project.id}`,
                      tabindex: "0",
                      "aria-label": "Bekijk project",
                      class: "absolute inset-0 z-30"
                    }, null, 8, ["to"]),
                    createVNode("div", { class: "max-w-4xl" }, [
                      createVNode("h2", { class: "text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg" }, toDisplayString(project.title || project.id), 1),
                      createVNode("div", { class: "text-xl drop-shadow-lg" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(project.tags, (tag, idx) => {
                          return openBlock(), createBlock("span", {
                            key: idx,
                            class: "mr-2"
                          }, [
                            createTextVNode(toDisplayString(tag) + " ", 1),
                            idx !== project.tags.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, "\u2022")) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projecten/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-58a271dd"]]);

export { index as default };
//# sourceMappingURL=index-DazQlGWE.mjs.map
