import { useEffect } from "react";
import { PAGE_SEO, SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "../constants/seo.js";

function setMeta(name, content, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Updates document title and meta tags when the active tab changes (SPA).
 */
export function usePageSEO(activeTab) {
  useEffect(() => {
    const seo = PAGE_SEO[activeTab] || PAGE_SEO.home;
    const title = seo.title || DEFAULT_TITLE;
    const description = seo.description || DEFAULT_DESCRIPTION;
    const canonical = `${SITE_URL}/`;

    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setCanonical(canonical);
  }, [activeTab]);
}
