!(function () {
  "use strict";
  var e = {
      913: function () {
        try {
          self["workbox:core:6.5.3"] && _();
        } catch (e) {}
      },
      550: function () {
        try {
          self["workbox:expiration:6.5.3"] && _();
        } catch (e) {}
      },
      977: function () {
        try {
          self["workbox:precaching:6.5.3"] && _();
        } catch (e) {}
      },
      80: function () {
        try {
          self["workbox:routing:6.5.3"] && _();
        } catch (e) {}
      },
      873: function () {
        try {
          self["workbox:strategies:6.5.3"] && _();
        } catch (e) {}
      },
    },
    t = {};
  function s(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} }),
      n = !0;
    try {
      e[r](i, i.exports, s), (n = !1);
    } finally {
      n && delete t[r];
    }
    return i.exports;
  }
  !(function () {
    var e;
    let t, r, a, i, n;
    s(913);
    let o = (e, ...t) => {
      let s = e;
      return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s;
    };
    class l extends Error {
      constructor(e, t) {
        let s = o(e, t);
        super(s), (this.name = e), (this.details = t);
      }
    }
    let c = new Set(),
      h = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" != typeof registration ? registration.scope : "",
      },
      u = (e) =>
        [h.prefix, e, h.suffix].filter((e) => e && e.length > 0).join("-"),
      f = (e) => {
        for (let t of Object.keys(h)) e(t);
      },
      d = {
        updateDetails: (e) => {
          f((t) => {
            "string" == typeof e[t] && (h[t] = e[t]);
          });
        },
        getGoogleAnalyticsName: (e) => e || u(h.googleAnalytics),
        getPrecacheName: (e) => e || u(h.precache),
        getPrefix: () => h.prefix,
        getRuntimeName: (e) => e || u(h.runtime),
        getSuffix: () => h.suffix,
      };
    function p(e, t) {
      let s = new URL(e);
      for (let r of t) s.searchParams.delete(r);
      return s.href;
    }
    async function g(e, t, s, r) {
      let a = p(t.url, s);
      if (t.url === a) return e.match(t, r);
      let i = Object.assign(Object.assign({}, r), { ignoreSearch: !0 }),
        n = await e.keys(t, i);
      for (let o of n) {
        let l = p(o.url, s);
        if (a === l) return e.match(o, r);
      }
    }
    class y {
      constructor() {
        this.promise = new Promise((e, t) => {
          (this.resolve = e), (this.reject = t);
        });
      }
    }
    async function w() {
      for (let e of c) await e();
    }
    let m = (e) => {
      let t = new URL(String(e), location.href);
      return t.href.replace(RegExp(`^${location.origin}`), "");
    };
    function b(e, t) {
      let s = t();
      return e.waitUntil(s), s;
    }
    async function v(e, s) {
      let r = null;
      if (e.url) {
        let a = new URL(e.url);
        r = a.origin;
      }
      if (r !== self.location.origin)
        throw new l("cross-origin-copy-response", { origin: r });
      let i = e.clone(),
        n = {
          headers: new Headers(i.headers),
          status: i.status,
          statusText: i.statusText,
        },
        o = s ? s(n) : n,
        c = !(function () {
          if (void 0 === t) {
            let e = new Response("");
            if ("body" in e)
              try {
                new Response(e.body), (t = !0);
              } catch (s) {
                t = !1;
              }
            t = !1;
          }
          return t;
        })()
          ? await i.blob()
          : i.body;
      return new Response(c, o);
    }
    let R = (e, t) => t.some((t) => e instanceof t),
      C = new WeakMap(),
      L = new WeakMap(),
      k = new WeakMap(),
      x = new WeakMap(),
      U = new WeakMap(),
      T = {
        get(e, t, s) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return L.get(e);
            if ("objectStoreNames" === t) return e.objectStoreNames || k.get(e);
            if ("store" === t)
              return s.objectStoreNames[1]
                ? void 0
                : s.objectStore(s.objectStoreNames[0]);
          }
          return (function e(t) {
            var s;
            if (t instanceof IDBRequest)
              return (function (t) {
                let s = new Promise((s, r) => {
                  let a = () => {
                      t.removeEventListener("success", i),
                        t.removeEventListener("error", n);
                    },
                    i = () => {
                      s(e(t.result)), a();
                    },
                    n = () => {
                      r(t.error), a();
                    };
                  t.addEventListener("success", i),
                    t.addEventListener("error", n);
                });
                return (
                  s
                    .then((e) => {
                      e instanceof IDBCursor && C.set(e, t);
                    })
                    .catch(() => {}),
                  U.set(s, t),
                  s
                );
              })(t);
            if (x.has(t)) return x.get(t);
            let i =
              "function" == typeof (s = t)
                ? s !== IDBDatabase.prototype.transaction ||
                  "objectStoreNames" in IDBTransaction.prototype
                  ? (
                      a ||
                      (a = [
                        IDBCursor.prototype.advance,
                        IDBCursor.prototype.continue,
                        IDBCursor.prototype.continuePrimaryKey,
                      ])
                    ).includes(s)
                    ? function (...t) {
                        return s.apply(E(this), t), e(C.get(this));
                      }
                    : function (...t) {
                        return e(s.apply(E(this), t));
                      }
                  : function (t, ...r) {
                      let a = s.call(E(this), t, ...r);
                      return k.set(a, t.sort ? t.sort() : [t]), e(a);
                    }
                : (s instanceof IDBTransaction &&
                    (function (e) {
                      if (L.has(e)) return;
                      let t = new Promise((t, s) => {
                        let r = () => {
                            e.removeEventListener("complete", a),
                              e.removeEventListener("error", i),
                              e.removeEventListener("abort", i);
                          },
                          a = () => {
                            t(), r();
                          },
                          i = () => {
                            s(
                              e.error ||
                                new DOMException("AbortError", "AbortError")
                            ),
                              r();
                          };
                        e.addEventListener("complete", a),
                          e.addEventListener("error", i),
                          e.addEventListener("abort", i);
                      });
                      L.set(e, t);
                    })(s),
                  R(
                    s,
                    r ||
                      (r = [
                        IDBDatabase,
                        IDBObjectStore,
                        IDBIndex,
                        IDBCursor,
                        IDBTransaction,
                      ])
                  ))
                ? new Proxy(s, T)
                : s;
            return i !== t && (x.set(t, i), U.set(i, t)), i;
          })(e[t]);
        },
        set: (e, t, s) => ((e[t] = s), !0),
        has: (e, t) =>
          (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
          t in e,
      },
      E = (e) => U.get(e),
      K = ["get", "getKey", "getAll", "getAllKeys", "count"],
      P = ["put", "add", "delete", "clear"],
      I = new Map();
    function D(e, t) {
      if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t))
        return;
      if (I.get(t)) return I.get(t);
      let s = t.replace(/FromIndex$/, ""),
        r = t !== s,
        a = P.includes(s);
      if (
        !(s in (r ? IDBIndex : IDBObjectStore).prototype) ||
        !(a || K.includes(s))
      )
        return;
      let i = async function (e, ...t) {
        let i = this.transaction(e, a ? "readwrite" : "readonly"),
          n = i.store;
        return (
          r && (n = n.index(t.shift())),
          (await Promise.all([n[s](...t), a && i.done]))[0]
        );
      };
      return I.set(t, i), i;
    }
    function q(e) {
      return "string" == typeof e ? new Request(e) : e;
    }
    (T = {
      ...(e = T),
      get: (t, s, r) => D(t, s) || e.get(t, s, r),
      has: (t, s) => !!D(t, s) || e.has(t, s),
    }),
      s(550),
      s(873);
    class N {
      constructor(e, t) {
        for (let s of ((this._cacheKeys = {}),
        Object.assign(this, t),
        (this.event = t.event),
        (this._strategy = e),
        (this._handlerDeferred = new y()),
        (this._extendLifetimePromises = []),
        (this._plugins = [...e.plugins]),
        (this._pluginStateMap = new Map()),
        this._plugins))
          this._pluginStateMap.set(s, {});
        this.event.waitUntil(this._handlerDeferred.promise);
      }
      async fetch(e) {
        let { event: t } = this,
          s = q(e);
        if (
          "navigate" === s.mode &&
          t instanceof FetchEvent &&
          t.preloadResponse
        ) {
          let r = await t.preloadResponse;
          if (r) return r;
        }
        let a = this.hasCallback("fetchDidFail") ? s.clone() : null;
        try {
          for (let i of this.iterateCallbacks("requestWillFetch"))
            s = await i({ request: s.clone(), event: t });
        } catch (n) {
          if (n instanceof Error)
            throw new l("plugin-error-request-will-fetch", {
              thrownErrorMessage: n.message,
            });
        }
        let o = s.clone();
        try {
          let c;
          for (let h of ((c = await fetch(
            s,
            "navigate" === s.mode ? void 0 : this._strategy.fetchOptions
          )),
          this.iterateCallbacks("fetchDidSucceed")))
            c = await h({ event: t, request: o, response: c });
          return c;
        } catch (u) {
          throw (
            (a &&
              (await this.runCallbacks("fetchDidFail", {
                error: u,
                event: t,
                originalRequest: a.clone(),
                request: o.clone(),
              })),
            u)
          );
        }
      }
      async fetchAndCachePut(e) {
        let t = await this.fetch(e),
          s = t.clone();
        return this.waitUntil(this.cachePut(e, s)), t;
      }
      async cacheMatch(e) {
        let t;
        let s = q(e),
          { cacheName: r, matchOptions: a } = this._strategy,
          i = await this.getCacheKey(s, "read"),
          n = Object.assign(Object.assign({}, a), { cacheName: r });
        for (let o of ((t = await caches.match(i, n)),
        this.iterateCallbacks("cachedResponseWillBeUsed")))
          t =
            (await o({
              cacheName: r,
              matchOptions: a,
              cachedResponse: t,
              request: i,
              event: this.event,
            })) || void 0;
        return t;
      }
      async cachePut(e, t) {
        let s = q(e);
        await new Promise((e) => setTimeout(e, 0));
        let r = await this.getCacheKey(s, "write");
        if (!t) throw new l("cache-put-with-no-response", { url: m(r.url) });
        let a = await this._ensureResponseSafeToCache(t);
        if (!a) return !1;
        let { cacheName: i, matchOptions: n } = this._strategy,
          o = await self.caches.open(i),
          c = this.hasCallback("cacheDidUpdate"),
          h = c ? await g(o, r.clone(), ["__WB_REVISION__"], n) : null;
        try {
          await o.put(r, c ? a.clone() : a);
        } catch (u) {
          if (u instanceof Error)
            throw ("QuotaExceededError" === u.name && (await w()), u);
        }
        for (let f of this.iterateCallbacks("cacheDidUpdate"))
          await f({
            cacheName: i,
            oldResponse: h,
            newResponse: a.clone(),
            request: r,
            event: this.event,
          });
        return !0;
      }
      async getCacheKey(e, t) {
        let s = `${e.url} | ${t}`;
        if (!this._cacheKeys[s]) {
          let r = e;
          for (let a of this.iterateCallbacks("cacheKeyWillBeUsed"))
            r = q(
              await a({
                mode: t,
                request: r,
                event: this.event,
                params: this.params,
              })
            );
          this._cacheKeys[s] = r;
        }
        return this._cacheKeys[s];
      }
      hasCallback(e) {
        for (let t of this._strategy.plugins) if (e in t) return !0;
        return !1;
      }
      async runCallbacks(e, t) {
        for (let s of this.iterateCallbacks(e)) await s(t);
      }
      *iterateCallbacks(e) {
        for (let t of this._strategy.plugins)
          if ("function" == typeof t[e]) {
            let s = this._pluginStateMap.get(t),
              r = (r) => {
                let a = Object.assign(Object.assign({}, r), { state: s });
                return t[e](a);
              };
            yield r;
          }
      }
      waitUntil(e) {
        return this._extendLifetimePromises.push(e), e;
      }
      async doneWaiting() {
        let e;
        for (; (e = this._extendLifetimePromises.shift()); ) await e;
      }
      destroy() {
        this._handlerDeferred.resolve(null);
      }
      async _ensureResponseSafeToCache(e) {
        let t = e,
          s = !1;
        for (let r of this.iterateCallbacks("cacheWillUpdate"))
          if (
            ((t =
              (await r({
                request: this.request,
                response: t,
                event: this.event,
              })) || void 0),
            (s = !0),
            !t)
          )
            break;
        return !s && t && 200 !== t.status && (t = void 0), t;
      }
    }
    class M {
      constructor(e = {}) {
        (this.cacheName = d.getRuntimeName(e.cacheName)),
          (this.plugins = e.plugins || []),
          (this.fetchOptions = e.fetchOptions),
          (this.matchOptions = e.matchOptions);
      }
      handle(e) {
        let [t] = this.handleAll(e);
        return t;
      }
      handleAll(e) {
        e instanceof FetchEvent && (e = { event: e, request: e.request });
        let t = e.event,
          s = "string" == typeof e.request ? new Request(e.request) : e.request,
          r = "params" in e ? e.params : void 0,
          a = new N(this, { event: t, request: s, params: r }),
          i = this._getResponse(a, s, t),
          n = this._awaitComplete(i, a, s, t);
        return [i, n];
      }
      async _getResponse(e, t, s) {
        let r;
        await e.runCallbacks("handlerWillStart", { event: s, request: t });
        try {
          if (!(r = await this._handle(t, e)) || "error" === r.type)
            throw new l("no-response", { url: t.url });
        } catch (i) {
          if (i instanceof Error) {
            for (let a of e.iterateCallbacks("handlerDidError"))
              if ((r = await a({ error: i, event: s, request: t }))) break;
          }
          if (r);
          else throw i;
        }
        for (let n of e.iterateCallbacks("handlerWillRespond"))
          r = await n({ event: s, request: t, response: r });
        return r;
      }
      async _awaitComplete(e, t, s, r) {
        let a, i;
        try {
          a = await e;
        } catch (n) {}
        try {
          await t.runCallbacks("handlerDidRespond", {
            event: r,
            request: s,
            response: a,
          }),
            await t.doneWaiting();
        } catch (o) {
          o instanceof Error && (i = o);
        }
        if (
          (await t.runCallbacks("handlerDidComplete", {
            event: r,
            request: s,
            response: a,
            error: i,
          }),
          t.destroy(),
          i)
        )
          throw i;
      }
    }
    s(80);
    let W = (e) => (e && "object" == typeof e ? e : { handle: e });
    class B {
      constructor(e, t, s = "GET") {
        (this.handler = W(t)), (this.match = e), (this.method = s);
      }
      setCatchHandler(e) {
        this.catchHandler = W(e);
      }
    }
    class S extends B {
      constructor(e, t, s) {
        let r = ({ url: t }) => {
          let s = e.exec(t.href);
          if (s && (t.origin === location.origin || 0 === s.index))
            return s.slice(1);
        };
        super(r, t, s);
      }
    }
    class O {
      constructor() {
        (this._routes = new Map()), (this._defaultHandlerMap = new Map());
      }
      get routes() {
        return this._routes;
      }
      addFetchListener() {
        self.addEventListener("fetch", (e) => {
          let { request: t } = e,
            s = this.handleRequest({ request: t, event: e });
          s && e.respondWith(s);
        });
      }
      addCacheListener() {
        self.addEventListener("message", (e) => {
          if (e.data && "CACHE_URLS" === e.data.type) {
            let { payload: t } = e.data,
              s = Promise.all(
                t.urlsToCache.map((t) => {
                  "string" == typeof t && (t = [t]);
                  let s = new Request(...t);
                  return this.handleRequest({ request: s, event: e });
                })
              );
            e.waitUntil(s),
              e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
          }
        });
      }
      handleRequest({ request: e, event: t }) {
        let s;
        let r = new URL(e.url, location.href);
        if (!r.protocol.startsWith("http")) return;
        let a = r.origin === location.origin,
          { params: i, route: n } = this.findMatchingRoute({
            event: t,
            request: e,
            sameOrigin: a,
            url: r,
          }),
          o = n && n.handler,
          l = e.method;
        if (
          (!o &&
            this._defaultHandlerMap.has(l) &&
            (o = this._defaultHandlerMap.get(l)),
          !o)
        )
          return;
        try {
          s = o.handle({ url: r, request: e, event: t, params: i });
        } catch (c) {
          s = Promise.reject(c);
        }
        let h = n && n.catchHandler;
        return (
          s instanceof Promise &&
            (this._catchHandler || h) &&
            (s = s.catch(async (s) => {
              if (h)
                try {
                  return await h.handle({
                    url: r,
                    request: e,
                    event: t,
                    params: i,
                  });
                } catch (a) {
                  a instanceof Error && (s = a);
                }
              if (this._catchHandler)
                return this._catchHandler.handle({
                  url: r,
                  request: e,
                  event: t,
                });
              throw s;
            })),
          s
        );
      }
      findMatchingRoute({ url: e, sameOrigin: t, request: s, event: r }) {
        let a = this._routes.get(s.method) || [];
        for (let i of a) {
          let n;
          let o = i.match({ url: e, sameOrigin: t, request: s, event: r });
          if (o)
            return (
              Array.isArray((n = o)) && 0 === n.length
                ? (n = void 0)
                : o.constructor === Object && 0 === Object.keys(o).length
                ? (n = void 0)
                : "boolean" == typeof o && (n = void 0),
              { route: i, params: n }
            );
        }
        return {};
      }
      setDefaultHandler(e, t = "GET") {
        this._defaultHandlerMap.set(t, W(e));
      }
      setCatchHandler(e) {
        this._catchHandler = W(e);
      }
      registerRoute(e) {
        this._routes.has(e.method) || this._routes.set(e.method, []),
          this._routes.get(e.method).push(e);
      }
      unregisterRoute(e) {
        if (!this._routes.has(e.method))
          throw new l("unregister-route-but-not-found-with-method", {
            method: e.method,
          });
        let t = this._routes.get(e.method).indexOf(e);
        if (t > -1) this._routes.get(e.method).splice(t, 1);
        else throw new l("unregister-route-route-not-registered");
      }
    }
    let j = () => (
      i || ((i = new O()).addFetchListener(), i.addCacheListener()), i
    );
    s(977);
    class A {
      constructor() {
        (this.updatedURLs = []),
          (this.notUpdatedURLs = []),
          (this.handlerWillStart = async ({ request: e, state: t }) => {
            t && (t.originalRequest = e);
          }),
          (this.cachedResponseWillBeUsed = async ({
            event: e,
            state: t,
            cachedResponse: s,
          }) => {
            if (
              "install" === e.type &&
              t &&
              t.originalRequest &&
              t.originalRequest instanceof Request
            ) {
              let r = t.originalRequest.url;
              s ? this.notUpdatedURLs.push(r) : this.updatedURLs.push(r);
            }
            return s;
          });
      }
    }
    class F {
      constructor({ precacheController: e }) {
        (this.cacheKeyWillBeUsed = async ({ request: e, params: t }) => {
          let s =
            (null == t ? void 0 : t.cacheKey) ||
            this._precacheController.getCacheKeyForURL(e.url);
          return s ? new Request(s, { headers: e.headers }) : e;
        }),
          (this._precacheController = e);
      }
    }
    class H extends M {
      constructor(e = {}) {
        (e.cacheName = d.getPrecacheName(e.cacheName)),
          super(e),
          (this._fallbackToNetwork = !1 !== e.fallbackToNetwork),
          this.plugins.push(H.copyRedirectedCacheableResponsesPlugin);
      }
      async _handle(e, t) {
        let s = await t.cacheMatch(e);
        return (
          s ||
          (t.event && "install" === t.event.type
            ? await this._handleInstall(e, t)
            : await this._handleFetch(e, t))
        );
      }
      async _handleFetch(e, t) {
        let s;
        let r = t.params || {};
        if (this._fallbackToNetwork) {
          let a = r.integrity,
            i = e.integrity;
          (s = await t.fetch(
            new Request(e, {
              integrity: "no-cors" !== e.mode ? i || a : void 0,
            })
          )),
            a &&
              (!i || i === a) &&
              "no-cors" !== e.mode &&
              (this._useDefaultCacheabilityPluginIfNeeded(),
              await t.cachePut(e, s.clone()));
        } else
          throw new l("missing-precache-entry", {
            cacheName: this.cacheName,
            url: e.url,
          });
        return s;
      }
      async _handleInstall(e, t) {
        this._useDefaultCacheabilityPluginIfNeeded();
        let s = await t.fetch(e),
          r = await t.cachePut(e, s.clone());
        if (!r)
          throw new l("bad-precaching-response", {
            url: e.url,
            status: s.status,
          });
        return s;
      }
      _useDefaultCacheabilityPluginIfNeeded() {
        let e = null,
          t = 0;
        for (let [s, r] of this.plugins.entries())
          r !== H.copyRedirectedCacheableResponsesPlugin &&
            (r === H.defaultPrecacheCacheabilityPlugin && (e = s),
            r.cacheWillUpdate && t++);
        0 === t
          ? this.plugins.push(H.defaultPrecacheCacheabilityPlugin)
          : t > 1 && null !== e && this.plugins.splice(e, 1);
      }
    }
    (H.defaultPrecacheCacheabilityPlugin = {
      cacheWillUpdate: async ({ response: e }) =>
        !e || e.status >= 400 ? null : e,
    }),
      (H.copyRedirectedCacheableResponsesPlugin = {
        cacheWillUpdate: async ({ response: e }) =>
          e.redirected ? await v(e) : e,
      });
    class $ {
      constructor({
        cacheName: e,
        plugins: t = [],
        fallbackToNetwork: s = !0,
      } = {}) {
        (this._urlsToCacheKeys = new Map()),
          (this._urlsToCacheModes = new Map()),
          (this._cacheKeysToIntegrities = new Map()),
          (this._strategy = new H({
            cacheName: d.getPrecacheName(e),
            plugins: [...t, new F({ precacheController: this })],
            fallbackToNetwork: s,
          })),
          (this.install = this.install.bind(this)),
          (this.activate = this.activate.bind(this));
      }
      get strategy() {
        return this._strategy;
      }
      precache(e) {
        this.addToCacheList(e),
          this._installAndActiveListenersAdded ||
            (self.addEventListener("install", this.install),
            self.addEventListener("activate", this.activate),
            (this._installAndActiveListenersAdded = !0));
      }
      addToCacheList(e) {
        let t = [];
        for (let s of e) {
          "string" == typeof s
            ? t.push(s)
            : s && void 0 === s.revision && t.push(s.url);
          let { cacheKey: r, url: a } = (function (e) {
              if (!e)
                throw new l("add-to-cache-list-unexpected-type", { entry: e });
              if ("string" == typeof e) {
                let t = new URL(e, location.href);
                return { cacheKey: t.href, url: t.href };
              }
              let { revision: s, url: r } = e;
              if (!r)
                throw new l("add-to-cache-list-unexpected-type", { entry: e });
              if (!s) {
                let a = new URL(r, location.href);
                return { cacheKey: a.href, url: a.href };
              }
              let i = new URL(r, location.href),
                n = new URL(r, location.href);
              return (
                i.searchParams.set("__WB_REVISION__", s),
                { cacheKey: i.href, url: n.href }
              );
            })(s),
            i = "string" != typeof s && s.revision ? "reload" : "default";
          if (
            this._urlsToCacheKeys.has(a) &&
            this._urlsToCacheKeys.get(a) !== r
          )
            throw new l("add-to-cache-list-conflicting-entries", {
              firstEntry: this._urlsToCacheKeys.get(a),
              secondEntry: r,
            });
          if ("string" != typeof s && s.integrity) {
            if (
              this._cacheKeysToIntegrities.has(r) &&
              this._cacheKeysToIntegrities.get(r) !== s.integrity
            )
              throw new l("add-to-cache-list-conflicting-integrities", {
                url: a,
              });
            this._cacheKeysToIntegrities.set(r, s.integrity);
          }
          if (
            (this._urlsToCacheKeys.set(a, r),
            this._urlsToCacheModes.set(a, i),
            t.length > 0)
          ) {
            let n = `Workbox is precaching URLs without revision info: ${t.join(
              ", "
            )}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
            console.warn(n);
          }
        }
      }
      install(e) {
        return b(e, async () => {
          let t = new A();
          for (let [s, r] of (this.strategy.plugins.push(t),
          this._urlsToCacheKeys)) {
            let a = this._cacheKeysToIntegrities.get(r),
              i = this._urlsToCacheModes.get(s),
              n = new Request(s, {
                integrity: a,
                cache: i,
                credentials: "same-origin",
              });
            await Promise.all(
              this.strategy.handleAll({
                params: { cacheKey: r },
                request: n,
                event: e,
              })
            );
          }
          let { updatedURLs: o, notUpdatedURLs: l } = t;
          return { updatedURLs: o, notUpdatedURLs: l };
        });
      }
      activate(e) {
        return b(e, async () => {
          let e = await self.caches.open(this.strategy.cacheName),
            t = await e.keys(),
            s = new Set(this._urlsToCacheKeys.values()),
            r = [];
          for (let a of t) s.has(a.url) || (await e.delete(a), r.push(a.url));
          return { deletedURLs: r };
        });
      }
      getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
      }
      getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
      }
      getCacheKeyForURL(e) {
        let t = new URL(e, location.href);
        return this._urlsToCacheKeys.get(t.href);
      }
      getIntegrityForCacheKey(e) {
        return this._cacheKeysToIntegrities.get(e);
      }
      async matchPrecache(e) {
        let t = e instanceof Request ? e.url : e,
          s = this.getCacheKeyForURL(t);
        if (s) {
          let r = await self.caches.open(this.strategy.cacheName);
          return r.match(s);
        }
      }
      createHandlerBoundToURL(e) {
        let t = this.getCacheKeyForURL(e);
        if (!t) throw new l("non-precached-url", { url: e });
        return (s) => (
          (s.request = new Request(e)),
          (s.params = Object.assign({ cacheKey: t }, s.params)),
          this.strategy.handle(s)
        );
      }
    }
    let G = () => (n || (n = new $()), n);
    class V extends B {
      constructor(e, t) {
        let s = ({ request: s }) => {
          let r = e.getURLsToCacheKeys();
          for (let a of (function* (
            e,
            {
              ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
              directoryIndex: s = "index.html",
              cleanURLs: r = !0,
              urlManipulation: a,
            } = {}
          ) {
            let i = new URL(e, location.href);
            (i.hash = ""), yield i.href;
            let n = (function (e, t = []) {
              for (let s of [...e.searchParams.keys()])
                t.some((e) => e.test(s)) && e.searchParams.delete(s);
              return e;
            })(i, t);
            if ((yield n.href, s && n.pathname.endsWith("/"))) {
              let o = new URL(n.href);
              (o.pathname += s), yield o.href;
            }
            if (r) {
              let l = new URL(n.href);
              (l.pathname += ".html"), yield l.href;
            }
            if (a) {
              let c = a({ url: i });
              for (let h of c) yield h.href;
            }
          })(s.url, t)) {
            let i = r.get(a);
            if (i) {
              let n = e.getIntegrityForCacheKey(i);
              return { cacheKey: i, integrity: n };
            }
          }
        };
        super(s, e.strategy);
      }
    }
    let Y = ["/"];
    self.skipWaiting(),
      self.addEventListener("activate", () => self.clients.claim());
    let J = [
      {
        revision: "7ff0485cee1f7099162a18fe12b8b8a3",
        url: "/OneSignal-Web-SDK-HTTPS-Integration-Files/OneSignalSDKUpdaterWorker.js",
      },
      {
        revision: "7ff0485cee1f7099162a18fe12b8b8a3",
        url: "/OneSignal-Web-SDK-HTTPS-Integration-Files/OneSignalSDKWorker.js",
      },
      {
        revision: "7ff0485cee1f7099162a18fe12b8b8a3",
        url: "/OneSignalSDKWorker.js",
      },
      {
        revision: "0bae6f3e6f71bb9f",
        url: "/_next/static/chunks/373-0bae6f3e6f71bb9f.js",
      },
      {
        revision: "1b4479b4462ded63",
        url: "/_next/static/chunks/664-1b4479b4462ded63.js",
      },
      {
        revision: "2c47d5ff2cc4804c",
        url: "/_next/static/chunks/6814153d-2c47d5ff2cc4804c.js",
      },
      {
        revision: "114634acb84f8baa",
        url: "/_next/static/chunks/framework-114634acb84f8baa.js",
      },
      {
        revision: "28f68c2652c32d55",
        url: "/_next/static/chunks/main-28f68c2652c32d55.js",
      },
      {
        revision: "729ca39c9021c108",
        url: "/_next/static/chunks/pages/Products-729ca39c9021c108.js",
      },
      {
        revision: "60b90f27dcf9d389",
        url: "/_next/static/chunks/pages/_app-60b90f27dcf9d389.js",
      },
      {
        revision: "8353112a01355ec2",
        url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js",
      },
      {
        revision: "f864d330db7bd15a",
        url: "/_next/static/chunks/pages/_offline-f864d330db7bd15a.js",
      },
      {
        revision: "f7543b08be8b5c5c",
        url: "/_next/static/chunks/pages/charity-f7543b08be8b5c5c.js",
      },
      {
        revision: "05f5242c26da4fb6",
        url: "/_next/static/chunks/pages/checkout-05f5242c26da4fb6.js",
      },
      {
        revision: "62dcd36c75661fe6",
        url: "/_next/static/chunks/pages/index-62dcd36c75661fe6.js",
      },
      {
        revision: "837c0df77fd5009c9e46d446188ecfd0",
        url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
      },
      {
        revision: "b8f8d6679aaa5f42",
        url: "/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",
      },
      {
        revision: "a1cfabf0076c0fef75cdcde99833146d",
        url: "/_next/static/ptohtJosfjAPNf_jsKygA/_buildManifest.js",
      },
      {
        revision: "b6652df95db52feb4daf4eca35380933",
        url: "/_next/static/ptohtJosfjAPNf_jsKygA/_ssgManifest.js",
      },
      { revision: "ptohtJosfjAPNf_jsKygA", url: "/_offline" },
      { revision: "c30c7d42707a47a3f4591831641e50dc", url: "/favicon.ico" },
      {
        revision: "1960cce97558cb92f56e590dd0eb26e1",
        url: "/icon-192x192.png",
      },
      {
        revision: "a54df31f1dac073f70cbbe009448ad6c",
        url: "/icon-256x256.png",
      },
      {
        revision: "616a5c716756216caefea5c308cbe2ec",
        url: "/icon-384x384.png",
      },
      {
        revision: "3643c9a81440bc4f59b69f0f95bd7ac9",
        url: "/icon-512x512.png",
      },
      { revision: "f2a5344262d3d94bc9f4acbbdc01512b", url: "/icon.ico" },
      { revision: "410b053c7bd96315d26fe0a4f74867c6", url: "/manifest.json" },
      { revision: "8e061864f388b47f33a1c3780831193e", url: "/next.svg" },
      {
        revision: "7a3a94a8d475f45716bc29dd84d9d32e",
        url: "/products/_document.js",
      },
      {
        revision: "417029da40a093e5a83f0237aa55e1c1",
        url: "/products/airpods.png",
      },
      {
        revision: "9caf80c52df35ba279442dd379cd2773",
        url: "/products/freebuds.png",
      },
      {
        revision: "accf9746638d89a64465687c2beac19f",
        url: "/products/galaxy.png",
      },
      {
        revision: "3424edf1a97f0df0c5e58de7e8e4dff8",
        url: "/products/headset.png",
      },
      {
        revision: "3163c44ecd230b8515989f87f72dd0f6",
        url: "/products/iphone.png",
      },
      {
        revision: "d9353e8869299a007680aa672691c261",
        url: "/products/macbook.png",
      },
      {
        revision: "910327ff1b14d234ee132e719804dbf9",
        url: "/products/msi.png",
      },
      {
        revision: "df3a704fda6fc2747b92ded596c46701",
        url: "/products/redmi.png",
      },
      {
        revision: "fa0be49e7d0829e93f51e605082724a4",
        url: "/products/rog.png",
      },
      {
        revision: "7ff0485cee1f7099162a18fe12b8b8a3",
        url: "/push/onesignal/OneSignalSDKUpdaterWorker.js",
      },
      {
        revision: "7ff0485cee1f7099162a18fe12b8b8a3",
        url: "/push/onesignal/OneSignalSDKWorker.js",
      },
      { revision: "d275604729c9a0e3a4a814e854c46a24", url: "/sw.js" },
      { revision: "53f96b8290673ef9d2895908e69b2f92", url: "/thirteen.svg" },
      { revision: "61c6b19abff40ea7acd577be818f3976", url: "/vercel.svg" },
    ];
    J.push({ url: "/fallback", revision: "1234567890" }),
      (function (e) {
        let t = G();
        t.precache(e);
      })(J),
      (function (e) {
        let t = G(),
          s = new V(t, e);
        !(function (e, t, s) {
          let r;
          if ("string" == typeof e) {
            let a = new URL(e, location.href);
            r = new B(({ url: e }) => e.href === a.href, t, s);
          } else if (e instanceof RegExp) r = new S(e, t, s);
          else if ("function" == typeof e) r = new B(e, t, s);
          else if (e instanceof B) r = e;
          else
            throw new l("unsupported-route-type", {
              moduleName: "workbox-routing",
              funcName: "registerRoute",
              paramName: "capture",
            });
          let i = j();
          i.registerRoute(r);
        })(s);
      })(void 0),
      self.addEventListener("install", (e) => {
        e.waitUntil(
          caches.open("site-static-v1").then((e) => {
            console.log("caching shell assets"), e.addAll(Y);
          })
        );
      }),
      self.addEventListener("fetch", (e) => {
        navigator.onLine
          ? console.log("You currently online!")
          : console.log("Your are Offline now!");
      });
  })();
})();
