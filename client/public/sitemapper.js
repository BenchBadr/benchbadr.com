import { manifestData } from "../src/ctx/data/markNifest.js";
import fs from "fs";

function encodeUrl(url) {
    const [base, ...parts] = url.split('/');
    return [base, ...parts.map(encodeURIComponent)].join('/');
}

function generateSitemap(manifest) {
    const baseUrl = "https://benchbadr.com";
    const urls = new Set();

    Object.entries(manifest).forEach(([path, [items]]) => {
        urls.add(encodeUrl(`${baseUrl}${path}`));
        items.forEach(item => {
            if (typeof item === "string" && !item.startsWith("/")) {
                urls.add(encodeUrl(`${baseUrl}${path}/${item}`));
            }
        });
    });

    const xmlUrls = Array.from(urls).map(url => `
    <url>
        <loc>${url}</loc>
    </url>`).join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
}

const sitemapXml = generateSitemap(manifestData);
fs.writeFileSync("./sitemap.xml", sitemapXml);
