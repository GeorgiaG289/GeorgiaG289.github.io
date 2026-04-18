// ==================== 数据配置区 ====================
// 在这里配置你的所有资源，按关键词分类
// 每个关键词下可以有多个网站链接

const RESOURCES_DATA = {
    "代码编写": {
        icon: "💻",
        description: "编程学习与应用",
        links: [
            { name: "GitHub Copilot", url: "https://github.net.cn/zh/copilot/getting-started-with-github-copilot", description: "功能：实时代码补全、函数生成、单元测试、注释生成、代码重构。支持几乎所有主流语言。n特点：与VSCode深度集成，行级/块级补全极快；基于海量开源代码训练，贴合工程习惯；支持多IDE。n局限：偶尔生成冗余/错误代码；需联网；付费订阅。使用技巧：1.	写清晰注释引导生成：n如生成一个校验手机号的函数，返回布尔值.n2.	用指令词：如重构为Stream API、生成单元测试.n3.	复杂需求分步骤提，避免一次性生成大段代码." },
            { name: "codegeex", url: "https://www.trae.cn/", description: "功能：代码补全、多种编程语言间代码翻译、单元测试生成（自动为函数生成覆盖多种场景的测试代码）、代码库问答（理解整个项目，回答业务逻辑或函数调用问题）、注释生成、项目地图（自动分析项目结构并绘制时序图、流程图等）。\n优点：\n1.完全免费使用\n2.对中文注释和提示理解更准确、功能高度集成，一站式覆盖编码到测试全流程\n3.支持企业私有化部署，保障数据安全\n4.兼容VSCode、JetBrains等主流IDE\n缺点：\n1.生成内容偶尔不够准确，可能需要人工修正\n2.标准插件需联网使用，无法完全离线\n3.极少数环境下（如SSH远程开发）可能因配置问题出现性能波动\n使用技巧：\n1． 用 Tab 键快速采纳自动补全，用 Ctrl+Enter 查看多个候选方案\n2． 写清晰的中文注释，引导模型生成更准确的代码\n3． 使用 @workspace 提问，快速理解大型项目结构\n4． 阅读复杂代码时开启\"幽灵注释\"功能，加速理解" },
            { name: "讯飞星火", url:"https://xinghuo.xfyun.cn/", description:"功能：根据自然语言描述生成代码、解释代码、调试、提供优化建议。\n特点：作为通用大模型，对中文编程需求的理解自然，适合教学和轻量级开发场景。\n缺点：处理复杂项目架构和深度调试的能力不如专用编程助手。\n使用技巧：用口语化描述编程意图，并可要求其分步骤解释生成代码的逻辑。"}
        ]
    },

    "图像生成": {
        icon: "🎨",
        description: "图像灵感与素材",
        links: [
            { name: "Dribbble", url: "https://dribbble.com/", description: "全球设计师作品展示" },
            { name: "Pexels", url: "https://www.pexels.com/zh-cn/", description: "免费高质量图片" },
            { name: "6pen art",url:"", description:"功能：文生图、图生图，支持多种绘画风格选择。\n特点：界面简洁，对新手友好，部分功能可免费使用，拥有创作者社区。\n缺点：免费生成次数有限，高分辨率或特定模型需付费。\n使用技巧：先从其预设的风格模型（如“二次元”、“写实”）中选择基础风格，再输入具体描述词。"},
            { name: "文心一格",url:"", description:"功能：通过文本描述生成绘画、插画、设计等各类图像。\n特点：百度出品，对中文提示词理解准确，尤其在生成国风、传统文化元素方面有特色。\n缺点：在极端写实细节和全球顶尖艺术风格的模仿上仍有进步空间。\n使用技巧：在描述中具体说明艺术风格（如“水墨画”、“赛博朋克”）和构图细节，更容易获得理想效果。"}
        ]
    },
    "视频生成":{
        icon:"📽️",
        description: "智能视频生成工具",
        links: [
            { name:"可灵AI",url: "https://klingai.com/cn/", description: "功能：从文本或图片生成短视频，支持视频风格扩展与编辑。\n特点：在生成视频的物理合理性和动态连贯性上表现较好，可生成较长时长视频。\n缺点：作为新兴工具，生成结果的稳定性和对提示词的精准响应仍在持续优化。\n使用技巧：在提示词中详细描述镜头运动、视角和主体动作，有助于生成更具动感的视频。"},
            { name:"腾讯云智影",url: "https://ai-bot.cn/sites/360.html", description: "功能：数字人播报、文本转视频、文章转视频、智能字幕、肖像动漫化等。\n特点：强于快速将图文内容转化为视频，集成腾讯云生态，适合企业级内容生产。\n缺点：更偏向实用型视频制作工具，在纯AI艺术视频生成方面功能相对较弱。\n使用技巧：利用其“文本转视频”功能，为营销文案、新闻稿自动匹配素材库内容生成视频。"}
        ]
    },

    
    "办公效率": {
        icon: "⚙️",
        description: "提升工作效率的在线工具",
        links: [
            { name: "熊猫办公", url: "https://art.tukuppt.com/", description:"功能：提供海量PPT、Word、Excel模板下载，并集成AI写作、智能排版、AIPPT一键生成、在线协作及素材库等功能。\n特点：模板资源覆盖全行业且每日更新；AI能根据关键词智能推荐模板和生成文稿框架；支持多人在线实时编辑与云端同步。\n缺点：部分高级模板、素材和AI功能需要开通会员才能使用；作为综合性平台，其在垂直领域的AI深度（如专业代码生成或艺术创作）可能不及专用工具。\n使用技巧：利用“一键生成PPT”功能，输入主题后让AI自动生成大纲并匹配模板；对于公文、报告等文本，使用“AI写作”助手快速生成初稿；在团队项目中充分利用其在线协作功能提升效率。"},
            { name: "ProcessOn", url: "https://www.processon.com/", description: "在线流程图思维导图" },
            { name: "Canva", url: "https://www.canva.cn/", description: "在线设计工具" }
        ]
    },
    "学术资源": {
        icon: "📖",
        description: "论文、文献与学习资料",
        links: [
            { name: "Google Scholar", url: "https://scholar.google.com/", description: "学术搜索引擎" },
            { name: "知网", url: "https://www.cnki.net/", description: "中国学术资源库" }
        ]
    }
};

// ==================== 以下代码无需修改 ====================

// 当前页面URL参数处理
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 首页逻辑
if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/")) {
    // 生成关键词按钮
    const keywordsGrid = document.getElementById("keywordsGrid");
    if (keywordsGrid) {
        Object.keys(RESOURCES_DATA).forEach(keyword => {
            const data = RESOURCES_DATA[keyword];
            const card = document.createElement("div");
            card.className = "keyword-card";
            card.innerHTML = `
                <h3>${data.icon || "📁"} ${keyword}</h3>
                <p>${data.description || "点击查看资源"}</p>
            `;
            card.onclick = () => {
                window.location.href = `category.html?keyword=${encodeURIComponent(keyword)}`;
            };
            keywordsGrid.appendChild(card);
        });
    }

    // 搜索功能
    const searchInput = document.getElementById("searchInput");
    const searchTips = document.getElementById("searchTips");
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            if (searchTerm === "") {
                searchTips.innerHTML = "";
                // 显示所有关键词
                document.querySelectorAll(".keyword-card").forEach(card => {
                    card.style.display = "block";
                });
                return;
            }
            
            const matchedKeywords = Object.keys(RESOURCES_DATA).filter(keyword => 
                keyword.toLowerCase().includes(searchTerm)
            );
            
            if (matchedKeywords.length > 0) {
                searchTips.innerHTML = `找到 ${matchedKeywords.length} 个相关资源：${matchedKeywords.join("、")}`;
                // 高亮匹配的关键词卡片
                document.querySelectorAll(".keyword-card").forEach(card => {
                    const title = card.querySelector("h3").innerText;
                    const isMatch = matchedKeywords.some(kw => title.includes(kw));
                    card.style.display = isMatch ? "block" : "none";
                });
            } else {
                searchTips.innerHTML = "未找到匹配的关键词，请尝试其他词";
                document.querySelectorAll(".keyword-card").forEach(card => {
                    card.style.display = "none";
                });
            }
        });
    }
}

// 分类页面逻辑
if (window.location.pathname.includes("category.html")) {
    const keyword = getUrlParam("keyword");
    const categoryTitle = document.getElementById("categoryTitle");
    const linksList = document.getElementById("linksList");
    
    if (keyword && RESOURCES_DATA[keyword]) {
        const data = RESOURCES_DATA[keyword];
        categoryTitle.innerHTML = `${data.icon || "📁"} ${keyword}`;
        
        // 生成链接卡片
        data.links.forEach(link => {
            const linkCard = document.createElement("a");
            linkCard.className = "link-card";
            linkCard.href = link.url;
            linkCard.target = "_blank";
            linkCard.rel = "noopener noreferrer";
            linkCard.innerHTML = `
                <h3>🔗 ${link.name}</h3>
                <p>${link.description || "点击访问"}</p>
            `;
            linksList.appendChild(linkCard);
        });
    } else if (keyword) {
        categoryTitle.innerHTML = "❌ 未找到该资源分类";
        linksList.innerHTML = '<div style="text-align:center;padding:40px;">抱歉，没有找到对应的资源库，请返回首页重试。</div>';
    }
}