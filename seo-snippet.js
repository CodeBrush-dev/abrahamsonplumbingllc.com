// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.abrahamsonplumbingllc.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.abrahamsonplumbingllc.com/","title_tag":"Stevens Point Plumbing Services | Abrahamson Plumbing","meta_description":"Husband and wife plumbing team in Stevens Point. Specializing in water heater repairs, replacement and residential plumbing at reasonable prices."},{"page_url":"https://www.abrahamsonplumbingllc.com/water-heaters","title_tag":"Stevens Point Water Heaters | Abrahamson Plumbing","meta_description":"Water heater repairs, replacement and maintenance in Stevens Point. Gas, electric, tank and tankless water heaters installed with minimal mess."},{"page_url":"https://www.abrahamsonplumbingllc.com/plumbing-services","title_tag":"Plumbing Services Stevens Point | Abrahamson Plumbing","meta_description":"Full-service residential plumbing in Stevens Point, including toilets, faucets, water heaters, drains, sewer clearing and more."},{"page_url":"https://www.abrahamsonplumbingllc.com/about-us","title_tag":"Residential Plumbing Experts | Abrahamson Plumbing","meta_description":"Master plumber husband and wife team in Stevens Point providing honest, high-quality residential plumbing and water heater services."},{"page_url":"https://www.abrahamsonplumbingllc.com/contact","title_tag":"Plumbing Repairs Stevens Point | Contact Abrahamson","meta_description":"Need plumbing repairs in Stevens Point? Contact Abrahamson Plumbing for residential plumbing, water heater repairs and replacement."},{"page_url":"https://www.abrahamsonplumbingllc.com/portfolio","title_tag":"Residential Plumbing Projects | Abrahamson Plumbing","meta_description":"View photos of Abrahamson Plumbing’s residential plumbing and water heater projects in Stevens Point and surrounding areas."}],"keywords":["Stevens Point plumbing","water heater repairs","plumbing services Stevens Point","residential plumbing","water heater replacement","Stevens Point water heaters","plumbing repairs Stevens Point","toilet installation Stevens Point","tankless water heaters","plumbing maintenance Stevens Point"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://www.abrahamsonplumbingllc.com/#plumber",
  "name": "Abrahamson Plumbing",
  "url": "https://www.abrahamsonplumbingllc.com/",
  "image": [
    "https://static.wixstatic.com/media/6e1490_4b9c9f4f2d1547b29d53853a5427884a%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/6e1490_4b9c9f4f2d1547b29d53853a5427884a%7Emv2.jpg",
    "https://static.wixstatic.com/media/11062b_d22ebfb88cb7430fa4d90d79bac5f765~mv2.jpeg/v1/crop/x_110,y_0,w_4780,h_3333/fill/w_479,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Plumber%20.jpeg"
  ],
  "description": "Abrahamson Plumbing is a husband and wife master plumbing team in Stevens Point, WI, specializing in water heater repair and replacement and residential plumbing repairs.",
  "telephone": "+1-715-600-1421",
  "email": "rjabrahamson@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "509 Green Avenue",
    "addressLocality": "Stevens Point",
    "addressRegion": "WI",
    "postalCode": "",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Stevens Point and surrounding areas"
  },
  "priceRange": "$$",
  "founder": [
    {
      "@type": "Person",
      "name": "Ryan Abrahamson",
      "jobTitle": "Master Plumber"
    },
    {
      "@type": "Person",
      "name": "Joanna Abrahamson"
    }
  ],
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Heater Maintenance and Flush",
          "serviceType": "Water Heater Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Heater Repairs",
          "serviceType": "Water Heater Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Heater Replacement",
          "serviceType": "Water Heater Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Natural Gas Water Heaters",
          "serviceType": "Water Heater Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electric Water Heaters",
          "serviceType": "Water Heater Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Propane Water Heaters",
          "serviceType": "Water Heater Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tank Style Water Heaters",
          "serviceType": "Water Heater Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tankless Water Heaters",
          "serviceType": "Water Heater Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Instant Water Heaters",
          "serviceType": "Water Heater Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hot Water Recirculating Pumps",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Toilet Plumbing",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathroom Sinks and Faucets",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathtubs and Showers",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tub and Shower Faucets",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Sinks and Faucets",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garbage Disposals",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Instant Hot Water Dispensers",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reverse Osmosis Filter Systems",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outside Hose Faucets",
          "serviceType": "Plumbing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gas Piping",
          "serviceType": "Gas Piping Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Small Drain Clearing",
          "serviceType": "Drain Clearing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Building Sewer Clearing",
          "serviceType": "Sewer Clearing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Building Sewer Root Cutting",
          "serviceType": "Sewer Root Cutting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Softeners",
          "serviceType": "Water Softener Service"
        }
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Russ S."
      },
      "reviewBody": "Knowledgeable, attention to detail, and very organized. They were my main contact for plumbing needs prior to them moving to Stevens Point and I highly recommend Abrahamson Plumbing. I'm a realtor and have referred their services for many years to my clients, friends and other realtors. They're responsive, professional, efficient, and completed the work flawlessly. Highly recommend them.",
      "reviewLocation": {
        "@type": "Place",
        "name": "DePere"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jason T."
      },
      "reviewBody": "The Abrahamson's were very professional and did a great job with our water heater install. We would recommend their services to anyone looking for an honest, hardworking couple.",
      "reviewLocation": {
        "@type": "Place",
        "name": "Green Bay"
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
