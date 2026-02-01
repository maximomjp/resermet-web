'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "41419dfeca65bc46a336c239a40f273b",
".git/config": "2f56920378ab68dd63ec56bec9b73b44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "13cdf6e71fe82f3a8c3557416ea6bdfb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae199bad7d24137e48832d638a579972",
".git/logs/refs/heads/main": "5c76e88d009df2d719e49ebe42eaca7b",
".git/logs/refs/remotes/origin/main": "c6d7e2124534d53cd0916277c5b7d787",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/44622f42a6dd89ef377157ef199c186c5a8dde": "4f3b9494f6063c095cb926cdd3c78a27",
".git/objects/05/0258b7fb8e211cd81ec731931cd398340af064": "54910ac18483502386b245ba89ece6fa",
".git/objects/1e/087ff61c9f69d99759c898de954f56de9c22bc": "a804aa8c0b61af7bf991d7e4a14a664c",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/25/3f69cfe10042fbe445a9df417b2ccad137ce3f": "582867520ade10973eb9a14281eca0a2",
".git/objects/25/626febbc1ea31ac3b7933acb79429f46c5bef1": "ff134bfd9a08fa8e203a76a5e49ba2a6",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/234364b84a4426d03abf4b023280630ee29cef": "d9b8df048746c4b00a59b506f0cee2ae",
".git/objects/32/7bd0a5222018625f414623fdc1086c3ec67434": "875e03d235047c9f4f443da80259d607",
".git/objects/35/8dd4e47dcf84b89d7c262e5e1eeed533647dbf": "05373b48bbd02b3a4c6b800b468a883c",
".git/objects/42/fc0af221e2fcde7929bda88bd9d4f0f0604536": "8289425d82036a4c374c6bf23fe7e85e",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/c8213fbd64aedf3f70ef9f6d599e852fd03285": "6edb22117f9813ccb19f88be8a41469e",
".git/objects/4e/31335df34768e50d87c2c428f99efe95a53a37": "694f7fe62e1349286a2b30585ee1075b",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/59/a086c89b63f6f4d952ae0c36b9b4871a61c06e": "0d8fe0746dcd8b55d3de799b9ee2b2a1",
".git/objects/5f/5f232a2961934180538494c7d4910f2841eb4a": "c01a5da4b94bff181839e19eff9c0231",
".git/objects/61/01424437e0fb4ecf44d4df8f3db13a9d1df0c8": "18fd351dd7672999ab65047a61f01183",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/6ea32e71fd8e72b90541ee93eb96b73bbd6796": "fc373aa19b6f7f1275e513691e7fda65",
".git/objects/75/d8a60626127965c8a606bc2d9e58f06eb03c7d": "27d76c6892c091b7f74b582e7f8ea248",
".git/objects/79/f5787625330ef78969fcaafa80668e28d8bca5": "6c7a964ff5a9a69c2dbc6708d5c3c91b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/afa4389def349ad4b9fe78992c25e24cf3edfa": "f99b2e5397c494ba55f7169f13dc113a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/1c06bdac1d092ad3b65cd6df8058b75138861f": "8cb23194a98790bcfb8f2e6c6c43c928",
".git/objects/97/51f8d6fbd87c2e5f1eb968fc8573147a90aec9": "341dbb4b60ee4f6a095e6a495ab6eb84",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a2/0197a9db9d721eb213c1de7daf314dfaa02af1": "df2e4191064aa9679906ea55522d2e23",
".git/objects/aa/86541cd6ba6b99ecd6c74428c1e561321aa239": "e83a89bee2051f8789a684d37d8ccebd",
".git/objects/ad/5f555f15c657820c36c84ea90984dda80e0749": "935bbbbfd3fdb72046c45cd2167d0728",
".git/objects/ad/edf8e0a3be15b35e58f323043c4778338acfd5": "ad22c332f9aecad47ae77daafe52d793",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/71d8d208594c2589ea9964e63fc48f061d2ffe": "884b56e0104047042417fa30d6d84c04",
".git/objects/bf/000aa6593af99f7df1893b2e05b800c77858b0": "baab1eea97d1fe30882223be002faa02",
".git/objects/c3/dd6b81eb1bd4a1dd25bdce477441695a4b6118": "2a761c3c4c92d0f8eea4565b5ff0d743",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/599b2c272c9f1787bd8e467fc16bdbf7e21a70": "d236b7d0278686d0372ea3c70ebc3eb5",
".git/objects/c8/f9251cf71ec04affa4312db7c075ed46cb1907": "8729b9e401ffe29b9f8b37dbbfd07968",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/b7c4511ae2489f522376addb86d8841fdee5c6": "2fbbdb7c2d4ff225b118df7575471da2",
".git/objects/cc/fd4362d16b2fa3a0dbcfb65ea63c97a8e30ab5": "b975d67eb0ef5993c35ac8f7430916a4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/93388ac21cf05fb53fe937175c6941b68e9063": "abd52bb5a776b12bccebf40b2c129523",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/a32c0063694e5de54d038a1a73be90e41ab6e1": "42a0053f3c4948530e9d60b07b3b2df8",
".git/objects/f5/f629cb68446f994e3ed17a78e3242201a4e365": "2104e9e4dafa4904fc4995206be23dc8",
".git/objects/f6/2a839c26974efac8189e8b546a988c62bef3db": "f3a23bcb3a245bd927cb83beb61c7d02",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "096a162970c844985906490000c6d4a9",
".git/refs/remotes/origin/main": "096a162970c844985906490000c6d4a9",
"assets/AssetManifest.bin": "3d2761cc1171c7d6984503bd84bb8cfa",
"assets/AssetManifest.bin.json": "355372ce432f349ed534d955cb245a60",
"assets/AssetManifest.json": "9a84e1333533bc89646d4a1cf7520d04",
"assets/assets/images/logo_resermet_azul.png": "fbc4a61935801b013850aaade0dd6c58",
"assets/assets/images/logo_resermet_azul_claro.png": "fb967cc1a97cb33d85d9264185d96643",
"assets/assets/images/logo_resermet_con_texto.png": "ffe42ab2f7a008c872d2391cc0255c26",
"assets/assets/images/logo_resermet_naranja.png": "0b5d44520cbd8ad81d788a026f41528e",
"assets/assets/images/logo_resermet_titulo.png": "4b1bcdcb35bbf0d1cf25a5b92d4c6213",
"assets/assets/images/universidad_metropolitana.png": "c67200c23cff71bbaf7d2884e3d29d74",
"assets/FontManifest.json": "aed2b02323ee1c15e32a18f07088b8e3",
"assets/fonts/MaterialIcons-Regular.otf": "a43a8d2c863e06dfe7cdcdb77465446c",
"assets/NOTICES": "20df4d9d9f284ce7abe612366ff4e277",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "087f344ca1e181cf72ce0cd8a45e96d3",
"icons/Icon-192.png": "97da70448b6a0ab188f0ba89a6eeba55",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bcafdd616f1e38666165c388b09c0488",
"/": "bcafdd616f1e38666165c388b09c0488",
"main.dart.js": "0b9c2df0a7dfc7e65a2d410b43f1b980",
"manifest.json": "bb9a518008b6f08c8ae2d0dd39103125",
"version.json": "6f2edda2bd74eaad0fb8b2b03d4e1741"};
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
