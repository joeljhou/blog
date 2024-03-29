import {getDirname, path} from "@vuepress/utils";
import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/blog/",

    lang: "zh-CN",
    title: "Lowrie's Blog",
    description: "vuepress-theme-hope 的博客演示",

    theme,

    plugins: [
        // 搜索插件
        searchProPlugin({
            indexContent: true,     // 索引全部内容
            customFields: [         // 为分类和标签添加索引
                {
                    formatter: "分类：$content",
                    getter: (page) => toArray(page.frontmatter.category),
                },
                {
                    formatter: "标签：$content",
                    getter: (page) => toArray(page.frontmatter.tags),
                },
            ],
            // 热键
            hotKeys: [
                // 按下 ⌘ 加 s 聚焦搜索框
                {meta: true, key: "k",},
            ],
        }),
    ],

    // Enable it with pwa
    // shouldPrefetch: false,

    alias: {
        // 必应壁纸，一言描述
        "@theme-hope/modules/blog/components/BlogHero":
            path.resolve(__dirname, "./components/BlogHero.vue"),
    },
});

function toArray(value: any) {
    return Array.isArray(value) ? value : [value].filter(Boolean);
}
