// GitHub Pages は SPA のルーティングに対応していないため、
// 各ページ用に index.html をコピーして /kityou などへ直接アクセスしても表示できるようにする。
import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const routes = ["kityou", "kityou/price", "syataku", "privacy-policy", "scta", "register", "thanks", "inquiry"];

for (const route of routes) {
  mkdirSync(join(dist, route), { recursive: true });
  copyFileSync(join(dist, "index.html"), join(dist, route, "index.html"));
}
// 存在しないURLは 404.html（= アプリ側の NotFound ページ）で表示
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
// Jekyll 処理を無効化
writeFileSync(join(dist, ".nojekyll"), "");
console.log(`postbuild: ${routes.length} routes + 404.html generated`);
