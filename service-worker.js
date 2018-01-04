/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2014/03/22/vuejs-010-release/index.html","5cd1521b0392bd4652817ce37aa83fb7"],["/2014/07/29/vue-next/index.html","13a4ab17c83bbedacc64c19d55fc03c7"],["/2014/11/09/vue-011-release/index.html","561066c0f0b18fa6f49ccfac6c8033cf"],["/2014/12/08/011-component/index.html","9ce7a4cb5bcc4de513ee0e8b61397877"],["/2015/06/11/012-release/index.html","a3cb3a219793c763ffee7823013e95d5"],["/2015/10/26/1.0.0-release/index.html","fcf9b6648052ace68f58c37423b48fcb"],["/2015/10/28/why-no-template-url/index.html","698bfa630ef490fe8f6eef8ed794a19c"],["/2015/12/28/vue-cli/index.html","a9394f7d5aa2ee30764daee93dd4c217"],["/2016/02/06/common-gotchas/index.html","e7311b028303cc7f12ffd6139218329f"],["/2016/03/14/march-update/index.html","bbca05dc006222920b8916bfbc44439b"],["/2016/04/27/announcing-2.0/index.html","255b9f35abee3eeee5e3446820c2ff0d"],["/about/index.html","8442154cddd07b9a8532be192b601ae0"],["/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["/archives/2014/03/index.html","a080660a1dbddc76f53e62a9d70f0e72"],["/archives/2014/07/index.html","7616204a2c9cf023d827b01f404b4377"],["/archives/2014/11/index.html","dd6510d43b9bbd28a1fe9f3887004a1a"],["/archives/2014/12/index.html","72161b1215bae187633b5b4147df8eaf"],["/archives/2014/index.html","ccc498134f2cb467cfd532770eafd3d3"],["/archives/2015/06/index.html","0a9830742c8c62cc227d0d20c996fc36"],["/archives/2015/10/index.html","de4bf46da81386aab117d5ee3bbdfb2a"],["/archives/2015/12/index.html","596220218a65de3fe83efa5988999402"],["/archives/2015/index.html","f361fc5a33f48b25b38e137b31725632"],["/archives/2016/02/index.html","395d8755e31f2f3c111d4c055d2c6de8"],["/archives/2016/03/index.html","9d45d7cfd5ba32db804860bbc34210fa"],["/archives/2016/04/index.html","7bed71268af5ed52dfd3f14a878933bd"],["/archives/2016/index.html","b3a6480a9f455c7bc92b677920d90605"],["/archives/index.html","ab6695f29f6dbcacc7a3bcc787ac2766"],["/archives/page/2/index.html","38a2d7a0f76c8f93e1d64361b1782f2f"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","205e1c25d4db18853cc1750720834877"],["/css/page.css","24206463fa96eb3745025d1f653f1f89"],["/css/search.css","e4e6c1e2a49dfe73bd8f10ca3409c040"],["/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["/guide/deployment.html","be96515c673712671d042337366ddf63"],["/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["/guide/instance.html","61021765831307e8278d034c23502dd6"],["/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["/guide/list.html","772e05d65b4587501785906a4b681efd"],["/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["/guide/transitions.html","4513c62165ee217697830a40e1795365"],["/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["/images/100offer.png","5fc04cb5266c2171ce5cc68ca6be8ea4"],["/images/2mhost.png","4b8d618675f5ae2e25873930e0f1a33b"],["/images/actualize.png","caed3eca0208a349140a95b354d07382"],["/images/anymod.png","f85debec44ea29dd53d2e4f19eb889b4"],["/images/chaitin.png","2e90c7e1644d533624b59194544aab8b"],["/images/check.png","1ab55a9d7d368f9e185314b4ee3e108a"],["/images/coin-bch.png","e9634e36f11c3f176b39b58e0820d049"],["/images/coin-btc.png","8047fc21916eb3615d0a4efe57f1c432"],["/images/coin-eth.png","cd0db0d4bc0a7bdd0663f4d01bdf1afd"],["/images/coin-ltc.png","933d3713c8ac395d46df6cc4557a63e6"],["/images/components.png","7769fd61a903797e4273c74888ed8b9b"],["/images/conf.png","122b20796747d08484fc2cdfefcba97a"],["/images/data.png","2fdee1ad51c9b990ca186769cbc92dc4"],["/images/dom-tree.png","7ed63c53d0fe7e8e1c0a74332f6eb775"],["/images/down.png","39cee69a29f44c5ae8acacf0c7c0c9fe"],["/images/famebroker.png","50c05f70a13a6ccf44ebc50d6b97263c"],["/images/feed.png","fc48422363785bd7645699a57c9c9660"],["/images/frontend-love.png","13f1e90195ff2a1fa94aee3f84b79121"],["/images/frontend-meetups.png","4d67ea5944cde49c38173b904fff492b"],["/images/hn-architecture.png","2414356400811f80a25178bad519927e"],["/images/hn.png","907b2c671bfe609f3bbf7b4e51480c0b"],["/images/htmlburger.png","3c838f6dbddb1361e6019f521578171f"],["/images/icons.png","24c9ea5274c732f8ec0ee13fb2361313"],["/images/icons/android-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/android-icon-192x192.png","ad7d1af025254f7fb6c45917d26c0486"],["/images/icons/android-icon-36x36.png","005fffcd0a3cce3dacf8856645501213"],["/images/icons/android-icon-48x48.png","e898ac737b264364a216e2007b1fd7da"],["/images/icons/android-icon-72x72.png","ad659ec7e8eae4a50b73145c69772d42"],["/images/icons/android-icon-96x96.png","90c13bf806fb3b3749ef1f60cc5dc34c"],["/images/icons/apple-icon-114x114.png","69c4653429d7ac74ef8b968ad0676a19"],["/images/icons/apple-icon-120x120.png","3bb7b09526b130a7713f247e7db6b835"],["/images/icons/apple-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/apple-icon-152x152.png","6f0e515bd57131a7e9c584c0a99492c6"],["/images/icons/apple-icon-180x180.png","91bc1dd313b750413e8e54349d2d7feb"],["/images/icons/apple-icon-57x57.png","d322b29db86a269ca682d6d54450a6d1"],["/images/icons/apple-icon-60x60.png","99b633995d668a30d869843d322cb2d5"],["/images/icons/apple-icon-72x72.png","ad659ec7e8eae4a50b73145c69772d42"],["/images/icons/apple-icon-76x76.png","293bd080883b88e811ec54fd1d17f04c"],["/images/icons/apple-icon-precomposed.png","8366f4f77f84f5945d37c8b6b5e85466"],["/images/icons/apple-icon.png","8366f4f77f84f5945d37c8b6b5e85466"],["/images/icons/favicon-16x16.png","b0fb918340bdb38c3f82934c3b83da28"],["/images/icons/favicon-32x32.png","495a42102231b5a1e1999b969fe59ca9"],["/images/icons/favicon-96x96.png","90c13bf806fb3b3749ef1f60cc5dc34c"],["/images/icons/ms-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/ms-icon-150x150.png","81b31836aa22a0861e979c3f798c2257"],["/images/icons/ms-icon-310x310.png","dc00a74758f465cf5545d759a7fc26fc"],["/images/icons/ms-icon-70x70.png","e20d096831d0fe142137fb69fd7c5915"],["/images/infinitynewtab.png","1137f7c599e5f5ff6a4bc393a7bb3b3a"],["/images/itunescn.png","ca4a777f3e67fda2fc0c703e5a0f3845"],["/images/jsfiddle.png","cdaaf61398b8ccde5fbfb28daab02dc2"],["/images/juejin.png","f8a801162a92753a9f69ee528ea72d81"],["/images/laravel.png","854ba2a1472cff4b73bbb98cc2bf6e74"],["/images/lifecycle.png","1d3dae65499d59846dfbfaaa7daae963"],["/images/logged-proxied-data.png","72b84d29d68b46cb4772b225aaf581e9"],["/images/logo.png","c2a605fbc0e687b2e1b4b90a7c445cdd"],["/images/menu.png","f97c6cafce76896f725f56d22c33dc5d"],["/images/monterail.png","a1b2c43f5834a30140acf56a56ee3d7e"],["/images/mvvm.png","9ef4a737380c1e72d3c1a5fae8480533"],["/images/onsen-ui.png","c9c5c8fc38c7121ca4d5b83438d1ce9e"],["/images/patreon.png","c55a20c3dface37cde7d1534e243c9fe"],["/images/paypal.png","70c8748866c09556ef5abb1a32496f25"],["/images/props-events.png","a18498cd0176946ccee943d2fec4f420"],["/images/search.png","57bde6918157195ab105e3c5d0967dec"],["/images/someline.png","2e05b0cfb1eaa734666dab9e5f92cea1"],["/images/state.png","ca9bd676c6d66f5f0797ec6ad35eb2b4"],["/images/stdlib.png","0c3292d4d501cfb819cf38e8324d9220"],["/images/strikingly.png","c220cba956cba87d47c972340ef872d1"],["/images/tde.png","dfd1f4c2d07907d379fc26e890827f14"],["/images/tmvuejs2.png","260af8aecb932915b0aff029550a80a4"],["/images/tooltwist.png","52e2b2bb7c5278b564bf30ffaca782b1"],["/images/transition.png","ca34aef3910abf105dc112aa23026d54"],["/images/typescript-type-error.png","ac1a1aa8c51a40565dc603917925a14e"],["/images/umoon.png","844f09da5ca82b56a1824b68591cff16"],["/images/upyun-large.png","cd66170a5022b5c9444119e3fa5cb83a"],["/images/upyun-main-2.jpg","f388a2ba0e0b004e15a7684485fff486"],["/images/upyun-main-3.jpg","e618981c7f191cd1fd84905e03538f47"],["/images/upyun-main.jpg","1c36d062540e5d97a2ca993776fb7016"],["/images/upyun-small.png","7a42625327e1495cec13cbe25c7a200d"],["/images/vue-component-with-preprocessors.png","f1bdf44c793758fc8576724406014986"],["/images/vue-component.png","91752852891f91a4afd27d95bb00b22d"],["/images/vuejobs.png","e050f9a94eb0f893093529fcce61d707"],["/images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["/images/vuejsadmin.png","dd05607d35642239837fff531f3c4a09"],["/images/vuetify.png","40e87e078618e137638baebe188029ad"],["/images/xfive.png","016402e334a83e4af9ff0958d39a7b0e"],["/index.html","e2c7550f211883b454f1d9d3aa329f44"],["/js/common.js","269cd2133b102f50b4dc99fbb61167a4"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","440e570c372631aa20b9c778ad9e7273"],["/js/vue.min.js","9cfa1585246355bf21ba3980f5843cdb"],["/js/vuefe-min.fe7c4b3c46a9ec32c769.js","679ef4b54f690beffb8558fa255a3602"],["/js/vuefe.js","22207a432bbe9b1fbf998e24191cc27b"],["/menu/index.html","d3c8b80154ff9c97f1affb8cca952007"],["/page/2/index.html","df356427463bcd5a55dbdae2d7ad42f1"],["/support-vuejs/index.html","543c247750a47cd4f3b74efe9b8cd3fd"],["/v2/api/index.html","1d0a02a784b5a70f82811b80fdc4880d"],["/v2/cookbook/adding-instance-properties.html","d9a3edb466621a040d403433dc87caa4"],["/v2/cookbook/cookbook-contributions.html","d77d53c2efbe5377caf15909978453f5"],["/v2/cookbook/index.html","d04644735c0a99a774ae13905e6f2a75"],["/v2/examples/commits.html","c69ae4f398297ece5f7912067b1dd792"],["/v2/examples/deepstream.html","701793ab95d64eece7e2685046b9517c"],["/v2/examples/elastic-header.html","b9b773b0b880c0b49cb46c8e8e46bd5f"],["/v2/examples/firebase.html","a340fd8f00b5af34c18a9d95a9a1e392"],["/v2/examples/grid-component.html","8390174853289ec5ce2a2718983e1f48"],["/v2/examples/hackernews.html","ec3c98d6c3e28b59ab1ea4848926ba3c"],["/v2/examples/index.html","bb17a6e0b85173b974f97023639e4434"],["/v2/examples/modal.html","b2fab37bf3c83f69cac0d57aaba21d0e"],["/v2/examples/select2.html","a5b7d48ba25e999394c3e7827d21ec8a"],["/v2/examples/svg.html","dfbd76d8d6432d303fe27f7228782bc7"],["/v2/examples/todomvc.html","520642e0babe2d7ad87e6f6e7fa4f593"],["/v2/examples/tree-view.html","dc017b86d6549cfa0e37f90eaad4303c"],["/v2/guide/class-and-style.html","34ba6cd3fd670e64209e5c80cef9b7e2"],["/v2/guide/comparison.html","cb50eaecaccd635a20e70f9ede0a7445"],["/v2/guide/components.html","960bed9bbcff9454910f9ac2c1af034e"],["/v2/guide/computed.html","608823ec5fcc5088a34d4d398678a65e"],["/v2/guide/conditional.html","534eb83753ef2b0e787c42a94cbfe9e6"],["/v2/guide/custom-directive.html","b944907911a2d45aabfb16b52d131cb5"],["/v2/guide/deployment.html","67c2c1281902d75db716f3f9530a8a98"],["/v2/guide/events.html","c085dbca1b0e75433e9449672c7776c6"],["/v2/guide/filters.html","7a618adebcdbe30189afe93bf749b7e9"],["/v2/guide/forms.html","827bdb4498ff8cbe881e56fc4168acef"],["/v2/guide/index.html","e69da9a45b033fd056cf9273b8836fa4"],["/v2/guide/installation.html","44d1c0c5fbf2f66b58a0e7222c3cae02"],["/v2/guide/instance.html","a871373e458c215a58fb4d1f5ea9d758"],["/v2/guide/join.html","cc73ebd74fb112735e24f0fdc4a5db7c"],["/v2/guide/list.html","56954a5b9490f46bac3edb348892d2e9"],["/v2/guide/migration-vue-router.html","4235430ab740ad17c14f80f9361b9668"],["/v2/guide/migration-vuex.html","a0188bbf432d3881a27d80f198d0f3ae"],["/v2/guide/migration.html","3f927b7610874613ae9f0c2d076617a9"],["/v2/guide/mixins.html","e7e2b22528b5324bb7a1cabad391a8d1"],["/v2/guide/plugins.html","3813dfc1dc00dd1cbfaff727cfe1eb89"],["/v2/guide/reactivity.html","a8e80634b6630fffa58cc27c14d2a6dd"],["/v2/guide/render-function.html","dfa0ad52fcde76ce5301ad992ccff9ac"],["/v2/guide/routing.html","feb274d4b9add96c4209948713366df4"],["/v2/guide/single-file-components.html","2ad04672784ccd95450031e49c0c5f1b"],["/v2/guide/ssr.html","1ab94b54e0af4ec6fcc0e7273b6073cc"],["/v2/guide/state-management.html","1c0035fe92ef11c6dbe96c6ae4271c13"],["/v2/guide/syntax.html","1580629a62fddc57b30d0740e7f52394"],["/v2/guide/team.html","2bca1be20730415d9e00c03b609cc248"],["/v2/guide/transitioning-state.html","a6fcc6771aed69c14c72a2e9627f7f44"],["/v2/guide/transitions.html","9c12a32b17a4fa57af8a7264023623ac"],["/v2/guide/typescript.html","c1dda705558ad2af44b43bde3ec8732d"],["/v2/guide/unit-testing.html","8f2f60a3a43d03e007166a45261626e9"],["/v2/style-guide/index.html","22fcf294f5b40d620ef997bdbb8d8acb"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







