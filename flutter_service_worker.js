'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "63797f8698ea1e94abfb543fdd22929d",
".git/config": "a7eb0b3681e8acd07fd7abf8c907ff37",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3297867d05c2251d9d076bc909450b10",
".git/gk/config": "89e6d1f6f5a6bf0c31f89d31243303d3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "510dd8fb3fc0a395d4fff046349f7e67",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9847010dafab8abe6a91df0e07a6e480",
".git/logs/refs/heads/main": "a1b5f9d0897faab8438dbe2e01ccd0d9",
".git/logs/refs/remotes/origin/main": "dd1bb6cc1e6fbb0141cc6e6b533f9cac",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/1b/31f82265b6f3c2aad93fb89bba11d7e2d5715c": "693cd676afe3d629c2d63b33fb4831c5",
".git/objects/1d/17fbb519139bebafc76031bb53bb6faa7b70b7": "4b494da69db38e3cb3c8a23ce2de6f7d",
".git/objects/23/00153547732a83b81fc30bcb529d768a7cd746": "c67ff9b40d614734e42534f8e1422bab",
".git/objects/27/fc5a38c7331b78881ef1a05242ad3633adb36f": "0c17e6118c7f73f80cbbb387efa1368e",
".git/objects/36/2a6ed8d939fedd90a77e93439d2f01c67a9ac5": "94397f934188d30457b8b9ac5840be60",
".git/objects/36/4b6166ac2aa310aab3f656a1dd9dc5ba116a6b": "adb0f463119b04c0b2568e7542199152",
".git/objects/38/d283493b380d5e85a9f4ce365648a6936a77cf": "5e20375ef9fe2f04fdf052cc0428c88a",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/43/591fb3a844cb678e3d60b06a785ae30262b9cd": "d6a63cde4eeb31dc4e8f68b9d5c74bd5",
".git/objects/4a/fcfc9c5465a29dfb51de20098bb7758185fb09": "46b159e44c1c9ffac1f9730248820ade",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/b397e4b8975ae3fd926cca3730767087f6304e": "f4016831c0608c1bedd60e25a5e85a36",
".git/objects/54/a0d44f50f30bdb22f2c56c3d710b7e33cc941c": "bf099ea1138795b3cf24e01927e2f7c5",
".git/objects/58/f0174269aa68851772b66137d22fc347a798b5": "cd91ec5ff384df5813fec15fd97d87a9",
".git/objects/5b/f6172c70054fa8ab4fa007945fb9436e7043de": "dbbae407646e4c2e1ddee8d203bf4f6c",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/8f8dad1e6f4dc80f02a9f3393ee8803c194410": "293487d89c11df1184a2ce5b275e0ee1",
".git/objects/6a/72d27b22dc7a505996842f57d17363859aa2e5": "68dc3c7f35f933a66c392cb7a4d07b7c",
".git/objects/6b/086d4dd68ce944f5ce74507cdda15d93817151": "9dcfb9a70b4ac6f7c0d05a21bdc5cf2e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7b/5f810b9b75008aa42dcccd4e60a818e2fb611f": "b5c2cdd39a7ab8414fc159685c9a717c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/83/6956b6d975814fc758df134fb2b2914274df09": "18172a7a5c682c055d9651aa45a44100",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/aa19d870df3b744509f6da9109683b593e75d8": "17ce37f1b02b0a5a85de7ba89453fbb6",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/97/1ebc6ec22c81ebf642e787a32404f6998f0aa6": "7447a1f770a922fd0cacbeaea035661e",
".git/objects/9c/bf3063a40bac22b1ba2a47fa1deebf40299bab": "8839f216f477bf0a0d5056321d3b285f",
".git/objects/9c/f63be2c536930867649747c8d7a7a3d3c6f4bc": "8841484cd9e8140b7295cd0b4bcbcd9a",
".git/objects/9f/bf47bd17f2155b3ff7f64c47d08c4148934f80": "6b2e3bd0a3c169bd5d1df9bd58ec8ab6",
".git/objects/a0/d0eba212e0defa5dc325bfd30be337781e4f96": "799bc42d13bbdb875f4b0c1b5ff57445",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/21e0c8690094d584fb731c89cfd34cef7babd2": "4413f6d25d052ec027de32f9f2ec7ee7",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/6e12ab929cd5852ac12dfdbb8bf522a1808122": "f0f83c1d7a333da3fb89f1c57208a9c3",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c11c44804aea2225da429a975c24b6ad908ca9": "d70210d59fa112e0e29d38ed1f7c9750",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/235aac12ae6a38fb4209679159a96c84e57566": "d5f4e9db97778694f50628dfd56bbdc9",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/cef598db0bad2d851a0dd977061a4d97d8e3fd": "72295476c636139c5d9479edf77695ae",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e1/5106494f31550f6a353ab69ab2d2b7aba39101": "02b0e014a48c2256037b150f89b82d3b",
".git/objects/e2/b82ba387bf70fe312423bf37085a73a2603e0c": "b4b5742fcf259c36ad3c2a28e91774e3",
".git/objects/e5/1325abb72f7a7cef5d8cf430c851808cf0f1fc": "12c60ac02f1314760d2132e3feae4e47",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/5c5b3749eaae829678bab39239cded26d43edb": "181251d62ebd081ee19ff83bc9fb0495",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "f0540d29f9de7b8b2c778a6ec14d8193",
".git/refs/remotes/origin/main": "f0540d29f9de7b8b2c778a6ec14d8193",
"assets/AssetManifest.bin": "9641356427effcdfa95ba88cf6029189",
"assets/AssetManifest.bin.json": "2c0e38544ecf0e1685d1bd95306e6a2c",
"assets/assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/images/facebook.png": "f9ffe7a2f9b99179d795c5713ea35956",
"assets/assets/images/github.png": "63de5479e8eb4676570c49e2579cab01",
"assets/assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/my_photo.jpeg": "2a9641ff3909851707d5bc3761d44ea0",
"assets/assets/images/my_photo_transparent.png": "db5b4f12c14969bb33ca2e4228c61b44",
"assets/assets/images/profile_photo.jpeg": "35e91224581980e3065c755691343ef2",
"assets/assets/images/whatsapp.png": "1aa80beced508dbc8357acd5c5a85b08",
"assets/FontManifest.json": "e9d01fc5db98aaba27746aa339807985",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "302b312a3835217597ab076df5860c00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "7669ef9e07f84ffae70f51eeeb8a9c96",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "967bb6a2fa5f18a64f4f50f64ad7131c",
"/": "967bb6a2fa5f18a64f4f50f64ad7131c",
"main.dart.js": "cb2a66907ee5a770bab70ac459a2bc8c",
"manifest.json": "2a3f395b54fcfafdf6cced21d229096a",
"version.json": "d282f112f2b7a5c66e43a207de22184c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
