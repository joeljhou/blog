import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "Lowrie's Blog",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  alias: {
    // 必应壁纸，一言描述
    "@theme-hope/modules/blog/components/BlogHero":
        path.resolve(__dirname, "./components/BlogHero.vue"),
  },
});
