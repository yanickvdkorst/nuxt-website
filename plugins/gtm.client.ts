export default defineNuxtPlugin((nuxtApp) => {
  const gtmKey = nuxtApp.$config.public.NUXT_PUBLIC_GTM_KEY;
  if (process.env.NODE_ENV === 'production' && gtmKey) {
    ;(function (w, d, s, l, i) {
      (w as any)[l] = (w as any)[l] || [];
      (w as any)[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      if (f.parentNode) {
        f.parentNode.insertBefore(j, f);
      }
    })(window, document, 'script', 'dataLayer', gtmKey);
  }
});
