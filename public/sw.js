if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>a(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bJyjPme-KB9Co4Ulti0aA/_buildManifest.js",revision:"c5f17930a62cbeeb1aeb4f70619dcb61"},{url:"/_next/static/bJyjPme-KB9Co4Ulti0aA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-0747ee38cdc4cb03.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/117-70d139759ca95e1e.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/250-5bdf49e69a8b36b3.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/468-b410842cf3f78c5b.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/683-e3287e57a2e27a7e.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/749-e6627a1f2b20a897.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/789-4e502b0ba1095f1e.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/app/_not-found-bdcc162fb8ba8215.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/app/clubs/page-0253f4b8e9d8a510.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/app/concession/page-84fdba88ace04e5f.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/app/events/page-dd83dde429db6f02.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/app/layout-fe26fcd0640876db.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/app/login/page-581235dd2d4c7d2e.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/app/page-4f84aeb8344421b2.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/app/zephyr/page-34975771645b08ec.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/fd9d1056-51ce143802e36bbf.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/main-702e320d089e6be8.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/main-app-2116458c17391123.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7a6ced7af9235523.js",revision:"bJyjPme-KB9Co4Ulti0aA"},{url:"/_next/static/css/9de0d6fc74bb46bc.css",revision:"9de0d6fc74bb46bc"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/1.a25fa0ac.png",revision:"d3b773fa5d41f853cb623bd0b35713e0"},{url:"/_next/static/media/2.18025f8f.jpg",revision:"118e8ba74ea4c107bb9cd8fb5010b5d5"},{url:"/_next/static/media/2.2b56820b.png",revision:"2ab058818471cc90fcad03293b1707f4"},{url:"/_next/static/media/3.33665c60.png",revision:"b1ac81b1a0842202dad9c0bddfd61d77"},{url:"/_next/static/media/3.80fdf5dd.jpg",revision:"9c3b36ec29822aedf94c4d386ffe4c19"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/testimonial.e8aba875.png",revision:"9fa28c665635616d84ddd805a014c0e4"},{url:"/icons/android-chrome-192x192.png",revision:"62ad98ff0b7e9f737e3423204126225e"},{url:"/icons/android-chrome-384x384.png",revision:"52a1af0ed5e5b01eeded7fc244178653"},{url:"/icons/icon-512x512.png",revision:"a905d732285a3040cb6c2967844be681"},{url:"/manifest.json",revision:"11fd65861be1c1af574147f284d29862"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
