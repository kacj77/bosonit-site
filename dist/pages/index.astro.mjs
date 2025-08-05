import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_DA6CYs1G.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Home;
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-4">Welcome to Bosonit.org</h1> <p class="text-lg mb-4">
This site is generated with Astro and deployed automatically to StackCP.
</p> </div>`;
}, "/Users/kennethjones/bosonit.org/src/pages/index.astro", void 0);

const $$file = "/Users/kennethjones/bosonit.org/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
