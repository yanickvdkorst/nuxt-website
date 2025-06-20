import { _ as _export_sfc, b as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$6 } from './ButtonBlue-BT5tqFZN.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, resolveDynamicComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderVNode } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { getDocs, collection } from 'firebase/firestore';
import { _ as _sfc_main$7 } from './TekstAfbeelding-Cpz9rUyG.mjs';
import { u as useAsyncData } from './asyncData-Di0FUC4_.mjs';
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
import 'firebase/app';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'perfect-debounce';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProjectOverview",
  __ssrInlineRender: true,
  props: {
    blok: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-detail-overview mb-20 mt-20 animate-fade-in-up" }, _attrs))} data-v-0096ba77><h2 class="text-3xl max-w-7xl mx-auto text-white md:text-4xl font-bold text-indigo-800" data-v-0096ba77>${ssrInterpolate(_ctx.blok.title)}</h2><div class="content-container flex flex-col max-w-7xl mx-auto mt-8 p-8 rounded-2xl shadow-2xl" data-v-0096ba77><p class="text-white text-lg" data-v-0096ba77>${ssrInterpolate(_ctx.blok.text || "Geen overzicht beschikbaar")}</p><div class="text-white text-lg mt-6" data-v-0096ba77><span class="font-bold" data-v-0096ba77>Date: </span><span data-v-0096ba77>${ssrInterpolate(new Date(_ctx.blok.date).toLocaleDateString("nl-NL", { year: "numeric" }))}</span></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/ProjectOverview.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProjectOverview = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0096ba77"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ImageBlock",
  __ssrInlineRender: true,
  props: {
    blok: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image mb-20 mt-20" }, _attrs))}><div class="image-container w-full mx-auto aspect-[2/1] rounded-lg overflow-hidden shadow-lg"><img${ssrRenderAttr("src", _ctx.blok.image_url)}${ssrRenderAttr("alt", _ctx.blok.tag)} class="w-full h-full object-cover"></div><p class="mt-2 text-white">${ssrInterpolate(_ctx.blok.tag)}</p></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/ImageBlock.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "imagesMultiple",
  __ssrInlineRender: true,
  props: {
    blok: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-multiple mb-20 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.blok.image_url, (img, idx) => {
        _push(`<div class="image-container w-full mx-auto aspect-[2/3] rounded-lg overflow-hidden shadow-lg"><img${ssrRenderAttr("src", img)} alt="images" class="w-full h-full object-cover"></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/imagesMultiple.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModelBlock",
  __ssrInlineRender: true,
  props: {
    blok: {}
  },
  setup(__props) {
    const container = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "model w-full h-300 rounded-xl"
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/ModelBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VideoBlock",
  __ssrInlineRender: true,
  props: {
    blok: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "video-block" }, _attrs))}><div class="video-container mt-40 mb-40 w-full mx-auto aspect-video rounded-lg overflow-hidden shadow-lg"><video controls><source${ssrRenderAttr("src", _ctx.blok.video_url)} type="video/mp4"> Your browser does not support the video tag. </video></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/VideoBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $db } = useNuxtApp();
    const db = $db;
    const route = useRoute();
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
    const { data: project } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("project", async () => {
      const querySnapshot = await getDocs(collection(db, "projecten"));
      const allProjects = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...serialize(doc.data())
      }));
      const slug = route.params.slug;
      return allProjects.find((p) => p.slug === slug || p.id === slug) || null;
    })), __temp = await __temp, __restore(), __temp);
    function resolveComponent(type) {
      switch (type) {
        case "tekst_afbeelding":
          return _sfc_main$7;
        case "overview_text":
          return ProjectOverview;
        case "image":
          return _sfc_main$4;
        case "images":
          return _sfc_main$3;
        case "model":
          return _sfc_main$2;
        case "video":
          return _sfc_main$1;
        // Voeg hier meer bloktypen toe, bijvoorbeeld:
        // case "text":
        //   return TextBlock;
        default:
          return null;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ButtonBlue = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-24 pb-16 px-4 flex" }, _attrs))} data-v-dac364b7>`);
      if (unref(project)) {
        _push(`<div class="project-detail" data-v-dac364b7><div class="project-detail-banner w-full bg-white/90 rounded-2xl shadow-2xl p-10 border border-white/40 animate-fade-in-up flex flex-col md:flex-row gap-10" data-v-dac364b7><div class="w-full flex-1 flex flex-col gap-4 justify-center relative" data-v-dac364b7>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projecten",
          class: "inline-block px-0 py-2 text-indigo-700 bg-transparent rounded-none font-semibold shadow-none transition hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u2190 Terug naar projecten `);
            } else {
              return [
                createTextVNode(" \u2190 Terug naar projecten ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="text-4xl md:text-5xl font-extrabold text-indigo-800 drop-shadow-lg" data-v-dac364b7>${ssrInterpolate(unref(project).title)}</h1><p class="text-gray-700 text-lg" data-v-dac364b7>${ssrInterpolate(unref(project).description)}</p><div class="flex flex-wrap gap-2" data-v-dac364b7><!--[-->`);
        ssrRenderList(unref(project).tags, (tag, idx) => {
          _push(`<span class="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow" data-v-dac364b7>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><div class="flex gap-4 items-center" data-v-dac364b7><a class="group flex items-center rounded-full text-indigo-600 bg-transparent font-semibold transition relative"${ssrRenderAttr("href", unref(project).github_link || "#")} target="_blank" rel="noopener" data-v-dac364b7><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none" data-v-dac364b7><path d="..." fill="#4F39F6" data-v-dac364b7></path></svg><span class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-700 whitespace-nowrap typewriter" data-v-dac364b7> Open GitHub </span></a></div></div><div class="flex-1 flex items-center justify-center" data-v-dac364b7>`);
        if (unref(project).image_url) {
          _push(`<img${ssrRenderAttr("src", unref(project).image_url)} alt="Project afbeelding" class="rounded-2xl shadow-lg object-cover h-full" data-v-dac364b7>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (unref(project).fieldgroups) {
          _push(`<div class="mt-16 max-w-7xl mx-auto space-y-10" data-v-dac364b7><!--[-->`);
          ssrRenderList(unref(project).fieldgroups, (blok, index) => {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(resolveComponent(blok.type)), {
              key: index,
              blok: blok.value
            }, null), _parent);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="mt-16 text-white text-center" data-v-dac364b7><p data-v-dac364b7>Geen blokken beschikbaar voor dit project.</p></div>`);
        }
        if (unref(project).footer == true) {
          _push(`<div class="mt-20 flex flex-col items-center text-center text-white" data-v-dac364b7><h3 class="text-2xl font-bold mb-2" data-v-dac364b7>Interested in this project?</h3><p class="mb-6 text-gray-100" data-v-dac364b7>Explore the source code on GitHub</p>`);
          _push(ssrRenderComponent(_component_ButtonBlue, {
            to: unref(project).github_link || "#",
            target: "_blank",
            rel: "noopener"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Open GitHub `);
              } else {
                return [
                  createTextVNode(" Open GitHub ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="w-full max-w-2xl bg-red-50 text-red-700 rounded-2xl shadow-2xl p-10 border border-red-200 flex items-center justify-center" data-v-dac364b7><p data-v-dac364b7>Project niet gevonden.</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projecten/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dac364b7"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-oTdvcIMr.mjs.map
