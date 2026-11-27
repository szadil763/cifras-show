// Service worker: guarda o app no aparelho para funcionar sem internet no bar.
// Ao publicar uma versão nova, mude VERSAO (o app avisa e se atualiza sozinho).
const VERSAO = "cifra-palco-v10";
const ARQUIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png", "./icons/apple-touch-icon.png", "./vendor/supabase-js-2.45.4.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO)
    .then((c) => c.addAll(ARQUIVOS.map((u) => new Request(u, { cache: "reload" }))))
    .then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Página: sempre pergunta ao servidor (sem cache do navegador); offline, usa a cópia guardada.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req, { cache: "no-cache" }).then((r) => {
      if (r.ok) { const c = r.clone(); caches.open(VERSAO).then((k) => k.put("./index.html", c)); }
      return r;
    }).catch(() => caches.match("./index.html").then((r) => r || caches.match("./"))));
    return;
  }
  // Fontes e arquivos do app: cache primeiro.
  if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => {
      if (r.ok || r.type === "opaque") { const c = r.clone(); caches.open(VERSAO).then((k) => k.put(req, c)); }
      return r;
    })));
  }
});
