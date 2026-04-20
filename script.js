// ==================== 数据配置区 ====================
// 在这里配置你的所有资源，按关键词分类
// 每个关键词下可以有多个网站链接

const RESOURCES_DATA = {
    "代码编写": {
        icon: "💻",
        description: "编程学习与应用",
        links: [
            { name: "GitHub Copilot", url: "https://github.net.cn/zh/copilot/getting-started-with-github-copilot", description: "功能：实时代码补全、函数生成、单元测试、注释生成、代码重构。支持几乎所有主流语言。\n特点：与VSCode深度集成，行级/块级补全极快；基于海量开源代码训练，贴合工程习惯；支持多IDE。\n局限：偶尔生成冗余/错误代码；需联网；付费订阅。\n使用技巧：\n1. 写清晰注释引导生成：如生成一个校验手机号的函数，返回布尔值。\n2. 用指令词：如重构为Stream API、生成单元测试。\n3. 复杂需求分步骤提，避免一次性生成大段代码。" },
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
            { name: "智谱清言",url:"https://chatglm.cn/", description:"功能：国内首个面向C端开放的AI视频通话，能实时识别摄像头中的物体并对话；支持文生视频（清影）和图片生成。还支持长文写作、编程代码、多语言翻译、数学解题及PPT生成等功能。特有“沉思”模式。AutoGLM智能体可接收语音指令，自动替你操作微信、浏览器等App（如自动发朋友圈）\n特点：免费且门槛低；集写作、编程、数据分析、PPT制作于一体，无需在多个工具间切换；任务自动化程度高。\n缺点：准确性存疑：识别物体时常翻车（如把丁真认成演员），生成视频时动作逻辑混乱，甚至出现“9.11大于9.9”的低级数学错误；复杂任务易偷懒：生成长文时内容易重复，处理复杂Excel或长文本时会出现遗漏关键信息的情况；生成效果不稳定：AI作画有时像网图，视频生成速度较慢且质量时好时坏\n使用技巧：先从其预设的风格模型（如“二次元”、“写实”）中选择基础风格，再输入具体描述词。"},
            { name: "文心一格",url:"https://yiyan.baidu.com", description:"功能：通过文本描述生成绘画、插画、设计等各类图像。\n特点：百度出品，对中文提示词理解准确，尤其在生成国风、传统文化元素方面有特色。\n缺点：在极端写实细节和全球顶尖艺术风格的模仿上仍有进步空间。\n使用技巧：在描述中具体说明艺术风格（如“水墨画”、“赛博朋克”）和构图细节，更容易获得理想效果。"},
            { name: "Midjourney", url: "https://www.midjourney.com/", description: "功能：通过文本提示生成高质量艺术图像，支持多种风格和细节控制。\n特点：在艺术创作领域表现出色，生成的图像具有独特的美学风格和丰富的细节。\n缺点：需要通过Discord平台使用，学习曲线较陡；免费用户生成次数有限。\n使用技巧：利用其丰富的参数设置（如风格、细节等级、色彩模式等）来微调生成结果，尝试不同的提示词组合以获得最佳效果。" }
        ]
    },
    "视频生成":{
        icon:"📽️",
        description: "智能视频生成工具",
        links: [
            { name:"可灵AI",url: "https://klingai.com/cn/", description: "功能：从文本或图片生成短视频，支持视频风格扩展与编辑。\n特点：在生成视频的物理合理性和动态连贯性上表现较好，可生成较长时长视频。\n缺点：作为新兴工具，生成结果的稳定性和对提示词的精准响应仍在持续优化。\n使用技巧：在提示词中详细描述镜头运动、视角和主体动作，有助于生成更具动感的视频。"},
            { name:"腾讯云智影",url: "https://ai-bot.cn/sites/360.html", description: "功能：数字人播报、文本转视频、文章转视频、智能字幕、肖像动漫化等。\n特点：强于快速将图文内容转化为视频，集成腾讯云生态，适合企业级内容生产。\n缺点：更偏向实用型视频制作工具，在纯AI艺术视频生成方面功能相对较弱。\n使用技巧：利用其“文本转视频”功能，为营销文案、新闻稿自动匹配素材库内容生成视频。"},
            { name:"智谱清言",url:"https://chatglm.cn/", description:"功能：国内首个面向C端开放的AI视频通话，能实时识别摄像头中的物体并对话；支持文生视频（清影）和图片生成。还支持长文写作、编程代码、多语言翻译、数学解题及PPT生成等功能。特有“沉思”模式。AutoGLM智能体可接收语音指令，自动替你操作微信、浏览器等App（如自动发朋友圈）\n特点：免费且门槛低；集写作、编程、数据分析、PPT制作于一体，无需在多个工具间切换；任务自动化程度高。\n缺点：准确性存疑：识别物体时常翻车（如把丁真认成演员），生成视频时动作逻辑混乱，甚至出现“9.11大于9.9”的低级数学错误；复杂任务易偷懒：生成长文时内容易重复，处理复杂Excel或长文本时会出现遗漏关键信息的情况；生成效果不稳定：AI作画有时像网图，视频生成速度较慢且质量时好时坏\n使用技巧：先从其预设的风格模型（如“二次元”、“写实”）中选择基础风格，再输入具体描述词。"},
            { name:"Runway", url: "https://runwayml.com/", description: "功能：提供多种AI视频生成和编辑工具，包括文/图转视频、视频风格转换、背景替换、智能擦除、运动控制等。\n特点：在视频编辑和特效处理方面功能强大，适合创作者进行复杂的视频制作。\n缺点：部分高级功能需要付费订阅，且生成视频的质量和稳定性可能因输入提示词的复杂程度而有所波动。学习成本相对较高。\n使用技巧：利用其丰富的模板和预设效果，结合详细的提示词描述，可以快速生成具有专业水准的视频内容。适合对视频有高阶创意和编辑需求的创作者，可从其丰富的教程社区开始学习。" }
        ]
    },

    
    "办公效率": {
        icon: "⚙️",
        description: "工作效率提升与模板设计",
        links: [
            { name: "熊猫办公", url: "https://art.tukuppt.com/", description:"功能：提供海量PPT、Word、Excel模板下载，并集成AI写作、智能排版、AIPPT一键生成、在线协作及素材库等功能。\n特点：模板资源覆盖全行业且每日更新；AI能根据关键词智能推荐模板和生成文稿框架；支持多人在线实时编辑与云端同步。\n缺点：部分高级模板、素材和AI功能需要开通会员才能使用；作为综合性平台，其在垂直领域的AI深度（如专业代码生成或艺术创作）可能不及专用工具。\n使用技巧：利用“一键生成PPT”功能，输入主题后让AI自动生成大纲并匹配模板；对于公文、报告等文本，使用“AI写作”助手快速生成初稿；在团队项目中充分利用其在线协作功能提升效率。"},
            { name: "Notion AI", url: "https://www.notion.so/product/ai", description: "功能：集成在Notion中的AI助手，支持文本生成、总结、翻译、任务管理等功能。\n特点：无缝集成在Notion的笔记和项目管理环境中，适合个人和团队使用。\n缺点：作为通用AI助手，某些专业领域的生成质量可能不如专用工具。\n使用技巧：利用其总结功能快速提炼会议记录或长文档的关键信息；使用任务管理功能自动生成待办事项列表。" },
            { name: "ProcessOn", url: "https://www.processon.com/", description: "在线流程图思维导图" },
            { name: "Canva", url: "https://www.canva.cn/", description: "在线设计工具" },
            { name: "智谱清言",url:"https://chatglm.cn/", description:"功能：国内首个面向C端开放的AI视频通话，能实时识别摄像头中的物体并对话；支持文生视频（清影）和图片生成。还支持长文写作、编程代码、多语言翻译、数学解题及PPT生成等功能。特有“沉思”模式。AutoGLM智能体可接收语音指令，自动替你操作微信、浏览器等App（如自动发朋友圈）\n特点：免费且门槛低；集写作、编程、数据分析、PPT制作于一体，无需在多个工具间切换；任务自动化程度高。\n缺点：准确性存疑：识别物体时常翻车（如把丁真认成演员），生成视频时动作逻辑混乱，甚至出现“9.11大于9.9”的低级数学错误；复杂任务易偷懒：生成长文时内容易重复，处理复杂Excel或长文本时会出现遗漏关键信息的情况；生成效果不稳定：AI作画有时像网图，视频生成速度较慢且质量时好时坏\n使用技巧：先从其预设的风格模型（如“二次元”、“写实”）中选择基础风格，再输入具体描述词。"},
            { name: "Jasper", url: "https://www.jasper.ai/", description: "功能：提供多种预设模板，擅长生成高转化率的电商产品描述、广告文案、邮件营销内容等。\n特点：模板丰富，针对不同营销场景优化，支持品牌声音定制。\n缺点：主要面向英文市场，对中文营销场景的适配和模板可能不如本土工具。\n使用技巧：利用“品牌声音”功能教会AI你的写作风格；对于长文档，使用“工作流程”功能分步骤生成。" },
            { name: "Copy.ai", url: "https://www.copy.ai/", description: "功能：支持批量生成产品描述、广告文案、社交媒体帖子等，提供多种写作风格。\n特点：操作简单，支持内容批量生成，适合需要大量内容产出的营销团队。\n缺点：生成的内容有时需要较多人工编辑以更贴合具体品牌。\n使用技巧：先使用“头脑风暴”功能生成多个创意点，再选择最佳方向进行扩展和完善。" }
        ] 
    },
    "文本创作": {
        icon: "✍️",
        description: "创意写作与内容生成",
        links: [
            { name: "通义千问", url: "https://qianwen.aliyun.com/", description: "功能：根据自然语言描述生成文章、故事、诗歌等。\n特点：作为通用大模型，对中文内容理解自然，适合多种创作场景。\n缺点：在特定领域的专业知识和深度可能不如专业工具。\n使用技巧：提供清晰的创作背景和要求，有助于生成更符合预期的内容。" },
            { name: "文心一言", url: "https://yiyan.baidu.com/", description: "功能：生成文章、故事、诗歌等多种文本内容。\n特点：百度出品，对中文理解较好，适合多样化的创作需求。\n缺点：在特定领域的专业知识和深度可能不如专业工具。\n使用技巧：提供详细的创作背景和要求，有助于生成更符合预期的内容。" },
            { name: "讯飞星火", url: "https://xinghuo.xfyun.cn/", description: "功能：文本生成、多轮对话、代码编写、知识问答、多模态交互。\n特点：由科大讯飞推出，在中文场景、语音交互领域有深厚积累，支持联网搜索。\n缺点：在高度复杂的创意生成和逻辑推理任务上可能存在局限。\n使用技巧：适合用于基于行业知识的问答、会议纪要整理和内容灵感激发。" },
            { name: "秘塔写作猫", url: "https://metaso.cn/", description:"功能：专注于中文文本的AI校对、润色、改写、续写与翻译。\n特点：针对中文语法、标点、字词的纠错准确率高，提供浏览器插件，与写作场景结合紧密。\n缺点：长文本创意生成能力较弱，主要功能集中于对现有文本的优化。\n使用技巧：将初稿粘贴进工具进行语法和流畅性检查，或使用“风格改写”功能适配不同平台文风。"}
        ]
    },
    "语音合成": {
        icon: "🎤",
        description: "文本转语音与语音合成",
        links: [
            { name: "百度AI开放平台", url: "https://ai.baidu.com/tech/speech/tts", description: "功能：覆盖语音技术（识别/合成）、图像技术（OCR/人脸识别）、自然语言处理（文心大模型）、视频技术等，通过API接口“即插即用”。内置文心4.5（多模态）和X1（深度推理），API调用价格仅为GPT-4.5的1%（0.004元/千tokens），部分场景免费。\n特点：百度出品，对中文语音合成效果较好，支持多样化的声音选择和情感表达。\n缺点：高级功能付费：免费测试资源用完后需按量付费，高级音色、高并发QPS等需额外购买套餐。\n使用技巧：根据不同的应用场景选择合适的声音类型和情感参数，以提升用户体验。" },
            { name: "讯飞开放平台", url: "https://www.xfyun.cn/services/online_tts", description: "功能：提供多种语音合成服务，包括普通话、方言、情感语音等。\n特点：科大讯飞出品，在中文语音合成领域有深厚积累，支持多样化的声音选择和情感表达。\n缺点：免费额度有限，商业使用需要付费。\n使用技巧：根据不同的应用场景选择合适的声音类型和情感参数，以提升用户体验。" },
            { name: "naturalreaders", url: "https://www.naturalreaders.com/online/", description: "功能：支持PDF、Word、PPT、TXT、EPUB、网页URL，以及通过OCR技术扫描图片/纸质文件中的文字多格式输入；提供50+种语言、200+种AI语音，包括美音、英音、中文等，部分付费语音具备“内容感知”情绪（如兴奋、悲伤）；拥有网页版、手机App（iOS/Android）和Chrome浏览器插件，数据可跨设备同步；支持同步高亮字幕、可调语速（0.5x-3x）、阅读障碍专用字体，对阅读困难者友好\n特点：免费版无需注册即可在网页直接粘贴文字朗读，提供多个免费自然音色，且无使用时长限制；手机App端免费版即可直接拍照扫描，将书本、菜单上的文字提取并朗读出来。操作极简。\n缺点：无法离线使用；免费版功能受限，无法导出音频且音色选择少。\n使用技巧：1.薅羊毛技巧：网页版免费音色不限时长；付费的高级音色（Premium/Plus）每天有5-20分钟的免费试听额度，可以每天“蹭”着用。\n2.手机端白嫖OCR：用手机App的“相机扫描”功能识别文字是完全免费的，不用充会员就能把纸质书转成语音。\n3.浏览器听网页：在Chrome/Edge装好插件后，遇到长文章直接选中文字，或点击插件图标里的播放键，就能直接朗读，不用复制粘贴。\n4.解决付费音色中断：免费版听高级音色会突然中断，如果想连续听故事/写作业，记得在设置里手动切回“Free”标签下的免费音色，才能无限畅听。" },
            { name: "Murf.ai", url: "https://murf.ai/", description: "功能：提供高质量、专业的AI语音合成，支持多语言和情感调节，适合制作专业旁白和视频配音。\n特点：：音库丰富，语音自然度高，提供精细的声音参数控制。在英语语音合成领域表现出色，适合国际化应用场景。\n缺点：对中文语音合成的支持相对较弱，且免费版功能有限，高质量音色和长时长生成需付费。\n使用技巧：先试听不同音色和风格，找到最匹配项目基调的声音，再利用情感和语调微调使配音更具表现力。" },
            { name:"ElevenLabs", url: "https://elevenlabs.io/", description: "功能：高质量的语音克隆和合成，能生成极具表现力和真实感的声音。\n特点：以高质量的语音克隆和声音自然度闻名，支持多种语言和风格。\n缺点：克隆功能对样本质量要求高，高级功能价格较高。\n使用技巧：用于克隆时，提供清晰、无背景噪音的语音样本；用于合成时，善用“稳定性”和“清晰度”滑块来优化输出。" }
        ]
    },
    "3D建模": {
        icon: "🔵",
        description: "3D建模与设计工具",
        links: [
            { name: "Meshy", url: "https://www.meshy.ai", description: "功能：支持文本生成3D和图像生成3D，操作简单，生成速度快。\n特点：特点：界面友好，生成效率高，适合快速原型设计和团队协作。\n缺点：生成的模型在细节和拓扑结构上可能不如专业手动建模。\n使用技巧：文本描述时尽可能具体（如“一个低多边形的卡通狐狸雕像”）；图生3D时提供多角度参考图效果更好。" }
        ]
    },
    "学术研究": {
        icon: "📄",
        description: "专业学科知识与学术论文工具",
        links: [
            { name: "Elicit", url: "https://elicit.com", description: "功能：AI研究助手，能自动查找、总结和梳理学术论文，帮助快速进行文献综述。\n特点：能理解复杂研究问题，从海量论文中提取关键结论和方法，节省文献调研时间。\n缺点：对非常新兴或小众领域的研究覆盖可能不全。\n使用技巧：提出具体的研究问题（而非简单关键词），让其查找相关论文并总结；利用其“概念矩阵”功能对比不同研究。" },
            { name: "Zotero", url: "https://www.zotero.org/", description: "功能：免费的文献管理工具，支持浏览器插件自动抓取文献信息，生成引用和 bibliography。\n特点：完全免费，开源社区支持，易于上手。\n缺点：高级功能需要付费，部分用户反馈界面不够直观。\n使用技巧：利用浏览器插件快速收集在线资源；善用标签和文件夹组织文献。" },
            { name: "Perplexity AI", url: "https://www.perplexity.ai/", description: "功能：具备联网能力的AI对话式搜索引擎。可直接回答复杂问题，并提供答案的来源链接。\n特点：适合快速获取信息和进行初步研究，提供多样化的答案来源。\n缺点：在需要极深度的专业领域分析时，可能不如专业数据库。\n使用技巧：提出具体且明确的问题，以获得更准确的答案；利用提供的来源链接进行进一步阅读和验证；开启“学术”或“写作”等专注模式以获得更相关的资料来源；对复杂问题可进行多轮追问。" }
        ]
    },
    "音乐生成": {
        icon: "🎵",
        description: "AI音乐创作与生成工具",
        links: [
            { name: "AIVA", url: "https://www.aiva.ai/", description: "功能：AI作曲助手，支持超过250种音乐风格，能够根据用户输入的风格、情感和结构要求生成原创音乐。拥有四种创作模式：From a Style（从预设风格库直接生成）、From an Influence（上传音频/MIDI文件作为参考，AI生成保留核心特征的全新作品）、From a Prompt（通过文字描述生成30秒至10分钟的器乐曲）From Scratch（完全自定义参数创作），付费用户可获得完整商用版权。\n特点：全球首个获得作曲家协会认证的AI虚拟作曲家。支持多种音乐风格和乐器，生成的音乐具有高度的个性化和艺术性。有专业级编辑器（内置钢琴卷帘编辑器，可逐音符修改旋律、和声、力度，更换乐器，甚至导出MIDI/PDF乐谱到DAW软件（Logic Pro、Ableton等））和多格式导出（MP3、MIDI、WAV（专业版）格式）。专业版用户拥有完整版权，可任意用于商业项目、流媒体发行，无需标注AIVA。\n缺点：1.无法生成人声和歌词，只能制作纯音乐。\n2.风格局限：管弦乐和影视配乐质量很高，但摇滚、电子等现代风格音色偏薄、不够真实。\n3.学习门槛较高：专业编辑器的界面类似DAW软件，对无音乐理论基础的新手不够友好。\n使用技巧：上传你喜欢的参考音乐或MIDI片段，AI会生成保留核心特征的变奏，比纯文字描述更精准。：官方只有网页版和桌面App（Mac/Win），手机端名为“Aiva AI”的App是第三方山寨产品，功能简陋且带订阅陷阱。" },
            { name: "Soundraw", url: "https://soundraw.io/", description: "功能：免费的AI音乐生成工具，支持多种乐器和风格。\n特点：完全免费，无需注册即可使用，适合快速创作背景音乐。\n缺点：生成的音乐可能缺乏独特性，高级功能需要付费。\n使用技巧：利用其丰富的音色库和节奏模板，快速生成符合项目需求的背景音乐。" },
            { name: "Suno AI", url: "https://www.suno.ai/", description: "功能：根据文本描述或输入的歌词，一键生成包含人声演唱、多种乐器和完整编曲的歌曲。\n特点：音乐生成领域的突破性工具，极大地降低了音乐创作的门槛。\n缺点：部分功能需要付费。对生成风格的精准控制仍有限，编曲复杂度可能不及专业音乐人。\n使用技巧：在描述中明确风格、情绪、乐器和节奏（如“一首 upbeat 的流行朋克歌曲，带有电吉他 riff”）；也可以尝试编写完整的歌词让其演绎。" }
        ]
    }
}

// ==================== 以下代码无需修改 ====================

// 当前页面URL参数处理
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 将描述文本中的关键词（冒号前面的词）加粗
function formatDescriptionWithBold(description) {
    if (!description) return "点击访问";
    
    // 匹配模式：中文关键词后跟冒号（如：功能：、特点：、缺点：、优点：、局限：、使用技巧：等）
    // 也支持数字列表项（如：1. 2. 等）
    let formatted = description.replace(/([功能特点缺点优点局限使用技巧|提示]+[：:])/g, '<strong>$1</strong>');
    
    // 处理数字列表项的开头（如：1. 2. 3.）
    formatted = formatted.replace(/^(\d+\.)/gm, '<strong>$1</strong>');
    
    // 将换行符转换为 <br> 标签
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
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

    // 搜索功能 - 跳转百度搜索
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// 执行百度搜索的函数
function baiduSearch() {
    const keyword = searchInput.value.trim();
    if (keyword === "") {
        searchTips.innerHTML = "⚠️ 请输入关键词后再搜索";
        searchTips.style.color = "#ff6b6b";
        setTimeout(() => {
            searchTips.innerHTML = "";
        }, 2000);
        return;
    }
    // 百度搜索的 URL 编码
    const searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(keyword)}`;
    window.open(searchUrl, "_blank");
}

// 点击搜索按钮
if (searchBtn) {
    searchBtn.addEventListener("click", baiduSearch);
}

// 按回车键搜索
if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            baiduSearch();
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
            
            // 格式化描述文本（加粗关键词 + 换行转<br>）
            const formattedDesc = formatDescriptionWithBold(link.description);
            
            linkCard.innerHTML = `
                <h3>🔗 ${link.name}</h3>
                <p>${formattedDesc || "点击访问"}</p>
            `;
            
            linksList.appendChild(linkCard);
        });
    } else if (keyword) {
        categoryTitle.innerHTML = "❌ 未找到该资源分类";
        linksList.innerHTML = '<div style="text-align:center;padding:40px;">抱歉，没有找到对应的资源库，请返回首页重试。</div>';
    }
}