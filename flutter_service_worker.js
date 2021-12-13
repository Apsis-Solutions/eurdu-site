'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b229b18a4b59f691ef7c5552eabacbde",
"assets/assets/fonts/Jameel%2520Noori%2520Nastaleeq%2520Kasheeda.ttf": "0feabd6c9714cc4bb922bfb16e1ef20f",
"assets/assets/images/accept_suggestion.png": "371beeb6d6597309be52de5d4c24e3f9",
"assets/assets/images/app_title.png": "95affa74c0deac823678d6ca1169f73e",
"assets/assets/images/arrow.png": "217e2479c788cc7343cb1ff21f987a73",
"assets/assets/images/back_2.png": "10e4e4498c81bcc820bd7d9fc7319814",
"assets/assets/images/container_bottom.png": "4ed7a7fe84621efa97b20a26564c5772",
"assets/assets/images/copy.png": "d963d48d8d04805deb11d580d57f8942",
"assets/assets/images/dots.png": "40b7e6406fa52d8b743a61bbd119a7c2",
"assets/assets/images/download.png": "c2dd9554433760546b61d4682c29200f",
"assets/assets/images/drawer_image.png": "1a135ba67d173df8d7e9a1042b53cafa",
"assets/assets/images/edit.png": "330f593ecd145e8f8a1623829a3b7e8b",
"assets/assets/images/exapnsion_image.png": "3ade054c92a1a5efef3af60b071f74c7",
"assets/assets/images/facebook.png": "8c2145c7cb36f5f72591cfe5c88fe7cf",
"assets/assets/images/full_screen.png": "7c95ca679069502fbbe04b2e5db4731a",
"assets/assets/images/google.png": "ca8fd21d209d8008e882b7e7c1542c61",
"assets/assets/images/google2.png": "6db25c0b918d04750c801c5991f83d4a",
"assets/assets/images/Hamburger.png": "cd8fa6109340a0e91c4400c64fc73a54",
"assets/assets/images/header_five.png": "da31df33cde583f0ea88bfacb827e505",
"assets/assets/images/header_four.png": "f95ce4b7cfe70d6564dc8ac71e6f02dc",
"assets/assets/images/header_one.png": "4e9c44e2f339a38d52a5545f2653d88d",
"assets/assets/images/header_three.png": "ee31124ab84d1b2871f4d410bcc04d46",
"assets/assets/images/header_two.png": "949bd576a380174061f4d32f6d31d6b9",
"assets/assets/images/home_image.png": "7ffad92cb9edf0e0aca66a9713c73bbc",
"assets/assets/images/intro_1.png": "8e535bb809cd76eaf0ebfb642476a261",
"assets/assets/images/intro_2.png": "e7eeae624676c185fb7b96c0223ed1ce",
"assets/assets/images/intro_3.png": "16476a4582a5f84f05d79e3e97293486",
"assets/assets/images/intro_4.png": "396ec65f293529c733cccf811405db50",
"assets/assets/images/lock.png": "e98095e1f2ef7287bdb6a272a2bf523a",
"assets/assets/images/login.png": "0695bdaad3e9cb50c013278a63744c0b",
"assets/assets/images/mail.png": "977a041750004607b1889d1522495905",
"assets/assets/images/newarrow.png": "48f4722d50c1aa537afd42933b61e354",
"assets/assets/images/ploygondown.png": "efb62bb9314e9509a056c3531655894c",
"assets/assets/images/polygoandown.png": "efb62bb9314e9509a056c3531655894c",
"assets/assets/images/Polygonright.png": "a07a49e896ff805dc0f6fb221aba32de",
"assets/assets/images/settings.png": "64ac4d9ce37df2b4a038e53fb13f3394",
"assets/assets/images/share.png": "0024f77ade9289c9aa88461bb555c677",
"assets/assets/images/sound.png": "1627cbb48abfdb4eed2b0e1c76abaa62",
"assets/assets/images/submit.png": "73b9e86ebe91789962e07911a6b68f5e",
"assets/assets/images/toggle.png": "0b3ab6a90b8df5c584f3fcda6f06db82",
"assets/assets/images/toggle_web.png": "6dee06f7b83c40ab511501ed52747569",
"assets/assets/images/web_home.png": "6b37bf9768378fc55ae1f4fbd8f23308",
"assets/assets/images/whatsapp.png": "922d03d6c6a8835b7cf5563480360b5d",
"assets/FontManifest.json": "a8823257d2e3b9d391ba0c833157d67c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "989ac3b50f7bce9a0cc52f4c4b43fa49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "09d4b97a1c2dc68f8313dc80a512cdfb",
"/": "09d4b97a1c2dc68f8313dc80a512cdfb",
"main.dart.js": "caab643d77ae9b5a0c19b3c31814dabd",
"manifest.json": "fc09389f39c6683b800b779340554e93",
"version.json": "5f5bbf4e5fe57f28e9fa302318d966a1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
