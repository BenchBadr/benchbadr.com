import { manifestData } from "../src/ctx/data/markNifest.js";
import fs from "fs";

function generateSitemap(manifest) {
    const baseUrl = "https://benchbadr.github.io";
    let urls = [];

    Object.entries(manifest).forEach(([path, [items]]) => {
        urls.push(`${baseUrl}${path}`);

        items.forEach(item => {
            if (typeof item === "string" && !item.startsWith("/")) {
                urls.push(`${baseUrl}${path}/${item}`);
            }
        });
    });

    
    const xmlUrls = urls.map(url => `
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