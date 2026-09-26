/* ============================================================
   Tianyi Yuan — Personal Academic Homepage
   Bilingual (EN/中文) · publications / news / experience data
   ============================================================ */

'use strict';

/* ---------------- i18n dictionary ---------------- */
const I18N = {
  en: {
    brandName: 'Tianyi Yuan',
    brandSub: 'Tsinghua University',
    navAbout: 'About',
    navEducation: 'Education',
    navPublications: 'Publications',
    navExperience: 'Experience',
    navCollab: 'Collaborations',
    navNews: 'News',
    navContact: 'Contact',
    heroTitle: 'Ph.D. Candidate in Human Factors & Human–Computer Interaction',
    heroAffil: 'Department of Industrial Engineering · Tsinghua University',
    heroName: 'Tianyi Yuan <span class="hero-name-zh">袁天一 (Travis)</span>',
    heroJobmarket: 'On the 2027 academic job market — open to postdoc & industry research roles.',
    labelEmail: 'Email',
    aboutTitle: 'About',
    about: '<p>I am <strong>Tianyi (Travis) Yuan</strong>, a Ph.D. candidate in Human Factors and Human–Computer Interaction at Tsinghua University, advised by <a href="https://www.ie.tsinghua.edu.cn/en/" target="_blank" rel="noopener">Prof. Pei-Luen Patrick Rau</a>. My research sits at the intersection of <strong>human–AI interaction</strong>, <strong>explainable AI</strong>, and <strong>neuroergonomics</strong>: I combine behavioral experiments, large-scale surveys, and neuroimaging (fNIRS) to understand how people perceive, trust, and collaborate with intelligent systems.</p><p>My work has been published in venues including <em>International Journal of Human–Computer Studies</em>, <em>Journal of Neural Engineering</em>, <em>Multisensory Research</em>, and <em>CHI</em>. I have also led industry research collaborations with Huawei\'s UX team on human-centered evaluation of AI systems.</p>',
    interestsTitle: 'Research Interests',
    interest1: '<strong>Human–AI Interaction &amp; Explainable AI</strong> — How explanation strategies, task contexts, and users\' AI literacy shape trust, engagement, and decision-making in human–AI teams.',
    interest2: '<strong>Neuroergonomics &amp; Multisensory Perception</strong> — Neural (fNIRS) correlates of cross-modal correspondence and their role in multimodal information processing.',
    interest3: '<strong>Algorithmic Management &amp; the Future of Work</strong> — How gig workers perceive and respond to algorithmic management in platform labor.',
    interest4: '<strong>Cross-Cultural HCI</strong> — Cultural factors in AI literacy, technology adoption, and human–system interaction design.',
    eduTitle: 'Education',
    eduExpected: 'expected',
    edu1Title: 'Ph.D., Management Science & Engineering (Human Factors track)',
    edu1Body: 'Tsinghua University · Advisor: Prof. Pei-Luen Patrick Rau',
    edu2Title: 'B.E., Industrial Engineering',
    edu2Body: 'Tsinghua University',
    edu3Title: 'Second B.A., Product Design',
    edu3Body: 'Academy of Arts & Design, Tsinghua University',
    selectedTitle: 'Selected Publications',
    seeFullList: 'Full publication list',
    pubsTitle: 'Publications',
    pubsNote: 'Click a title to open the publisher page (DOI). Use "Cite" to show/copy the BibTeX entry. ★ = selected representative work.',
    expTitle: 'Experience',
    expNote: 'Descriptions are intentionally brief; project details remain confidential per agreements.',
    collabTitle: 'Industry Collaborations',
    newsTitle: 'News',
    contactTitle: 'Contact',
    contactEmailTitle: 'Email',
    contactAddressTitle: 'Office',
    contactAddressBody: 'Department of Industrial Engineering, Tsinghua University, Beijing, China',
    contactProfilesTitle: 'Profiles',
    footerSub: 'Human–AI Interaction · Explainable AI · Neuroergonomics',
    cmDemoTitle: 'Try it — Color–Touch Cross-Modal Correspondence',
    cmDemoHint: 'Hover to preview a theme colour; click to apply. Pulse size = vibration amplitude.',
    cmNoteFirm: 'Core finding: higher colour chroma ↔ stronger vibration (Yuan et al., 2023, 2026)',
    beyondTitle: 'Beyond the Lab',
    hobbyHiking: 'Hiking',
    hobbyDesign: 'Design',
    hobbyTheatre: 'Musical',
    hobbyGaming: 'Gaming',
    hobbySports: 'Sports',
    /* dynamic (rendered by JS) */
    pubGroupJournal: 'Journal Articles',
    pubGroupConference: 'Conference Papers',
    pubGroupBook: 'Book Chapters',
    pubGroupZh: 'In Chinese',
    tagSelected: '★ Selected',
    tagFirst: 'First author',
    tagCCFA: 'CCF-A',
    tagChinese: 'In Chinese',
    btnBibtex: 'Cite',
    btnCopy: 'Copy',
    btnCopied: 'Copied ✓',
    btnDOI: 'DOI',
  },

  zh: {
    brandName: '袁天一',
    brandSub: '清华大学',
    navAbout: '简介',
    navEducation: '教育',
    navPublications: '论文',
    navExperience: '经历',
    navCollab: '合作',
    navNews: '动态',
    navContact: '联系',
    heroTitle: '人因工程与人机交互方向博士研究生',
    heroAffil: '清华大学 · 工业工程系',
    heroName: '袁天一 <span class="hero-name-zh">Tianyi Yuan (Travis)</span>',
    heroJobmarket: '2027 学术招聘季求职中——开放博士后与产业研究岗位',
    labelEmail: '邮箱',
    aboutTitle: '简介',
    about: '<p>我是<strong>袁天一（Travis）</strong>，清华大学管理科学与工程（人因工程方向）的博士研究生，师从<a href="https://www.ie.tsinghua.edu.cn/" target="_blank" rel="noopener">饶培伦教授</a>。我的研究聚焦于<strong>人机交互</strong>、<strong>可解释人工智能</strong>与<strong>神经人因学</strong>：结合行为实验、大规模问卷调查与脑成像（fNIRS）方法，研究人们如何感知、信任智能系统并与之协作。</p><p>论文发表于 <em>International Journal of Human–Computer Studies</em>、<em>Journal of Neural Engineering</em>、<em>Multisensory Research</em> 与 <em>CHI</em> 等期刊与会议，并与华为 UX 团队开展以人为中心的 AI 系统评估等产业研究合作。</p>',
    interestsTitle: '研究方向',
    interest1: '<strong>人机交互与可解释 AI</strong>——解释策略、任务情境与用户 AI 素养如何塑造人机团队中的信任、参与和决策。',
    interest2: '<strong>神经人因学与多感官整合</strong>——跨模态对应（如色彩–触觉）的神经关联（fNIRS）及其在多模态信息加工中的作用。',
    interest3: '<strong>算法管理与工作的未来</strong>——零工劳动者如何感知并应对平台劳动中的算法管理。',
    interest4: '<strong>跨文化人机交互</strong>——AI 素养、技术采纳与人机系统交互设计中的文化因素。',
    eduTitle: '教育经历',
    eduExpected: '预期',
    edu1Title: '博士 · 管理科学与工程（人因工程方向）',
    edu1Body: '清华大学 · 导师：饶培伦 教授',
    edu2Title: '学士 · 工业工程',
    edu2Body: '清华大学',
    edu3Title: '第二学士 · 产品设计',
    edu3Body: '清华大学美术学院',
    selectedTitle: '代表论文',
    seeFullList: '查看全部论文',
    pubsTitle: '论文列表',
    pubsNote: '点击标题打开出版社页面（DOI）；点“引用”查看/复制 BibTeX 条目。★ = 代表作。',
    expTitle: '经历',
    expNote: '描述有意从简，项目细节按协议保密。',
    collabTitle: '产学研合作',
    newsTitle: '动态',
    contactTitle: '联系方式',
    contactEmailTitle: '邮箱',
    contactAddressTitle: '办公室',
    contactAddressBody: '北京市海淀区清华大学工业工程系',
    contactProfilesTitle: '学术主页',
    footerSub: '人机交互 · 可解释 AI · 神经人因学',
    cmDemoTitle: '体验一下 · 色–触跨模态对应',
    cmDemoHint: '悬停预览主题色，点击应用；圆点扩散幅度 = 振动振幅。',
    cmNoteFirm: '核心结论：颜色彩度(chroma)越高 ↔ 振动越强（Yuan et al., 2023, 2026）',
    beyondTitle: '研究之外',
    hobbyHiking: '徒步',
    hobbyDesign: '设计',
    hobbyTheatre: '音乐剧',
    hobbyGaming: '游戏',
    hobbySports: '运动',
    pubGroupJournal: '期刊论文',
    pubGroupConference: '会议论文',
    pubGroupBook: '图书章节',
    pubGroupZh: '中文论文',
    tagSelected: '★ 代表作',
    tagFirst: '第一作者',
    tagCCFA: 'CCF-A 类会议',
    tagChinese: '中文',
    btnBibtex: '引用',
    btnCopy: '复制',
    btnCopied: '已复制 ✓',
    btnDOI: 'DOI',
  }
};

/* ---------------- Publications data ---------------- */
/* authors: [ [name, isSelf], ... ]  ·  bibtex: string */
const PUBLICATIONS = [
  {
    id: 'yuan2027xai', year: 2027, type: 'journal', selected: true,
    authors: [['Yuan, Tianyi', true], ['Rau, Pei-Luen Patrick', false]],
    title: 'XAI in the human-agent-environment loop: How do task, explanation strategy, and AI literacy shape user engagement?',
    venue: 'International Journal of Human-Computer Studies',
    detail: 'vol. 218, 103939',
    doi: '10.1016/j.ijhcs.2026.103939',
    bibtex: `@article{yuan2027xai,
  title={XAI in the human-agent-environment loop: How do task, explanation strategy, and AI literacy shape user engagement?},
  author={Yuan, Tianyi and Rau, Pei-Luen Patrick},
  journal={International Journal of Human-Computer Studies},
  volume={218},
  pages={103939},
  year={2027},
  doi={10.1016/j.ijhcs.2026.103939}
}`
  },
  {
    id: 'yuan2026neural', year: 2026, type: 'journal', selected: true,
    authors: [['Yuan, Tianyi', true], ['Yang, Haochen', false], ['Rau, Pei-Luen Patrick', false]],
    title: 'Neural correlates of cross-modal correspondence: fNIRS evidence from color-vibrotactile perception',
    venue: 'Journal of Neural Engineering',
    detail: 'vol. 23, no. 4, 046049',
    doi: '10.1088/1741-2552/ae888b',
    bibtex: `@article{yuan2026neural,
  title={Neural correlates of cross-modal correspondence: {fNIRS} evidence from color-vibrotactile perception},
  author={Yuan, Tianyi and Yang, Haochen and Rau, Pei-Luen Patrick},
  journal={Journal of Neural Engineering},
  volume={23},
  number={4},
  pages={046049},
  year={2026},
  doi={10.1088/1741-2552/ae888b}
}`
  },
  {
    id: 'wang2024effects', year: 2024, type: 'journal', selected: true,
    authors: [['Wang, Bingcheng', false], ['Yuan, Tianyi', true], ['Rau, Pei-Luen Patrick', false]],
    title: 'Effects of Explanation Strategy and Autonomy of Explainable AI on Human-AI Collaborative Decision-making',
    venue: 'International Journal of Social Robotics',
    detail: 'vol. 16, no. 4, pp. 791–810',
    doi: '10.1007/s12369-024-01132-2',
    bibtex: `@article{wang2024effects,
  title={Effects of Explanation Strategy and Autonomy of Explainable {AI} on Human-{AI} Collaborative Decision-making},
  author={Wang, Bingcheng and Yuan, Tianyi and Rau, Pei-Luen Patrick},
  journal={International Journal of Social Robotics},
  volume={16},
  number={4},
  pages={791--810},
  year={2024},
  doi={10.1007/s12369-024-01132-2}
}`
  },
  {
    id: 'yuan2023colour', year: 2023, type: 'journal', selected: true,
    authors: [['Yuan, Tianyi', true], ['Rau, Pei-Luen Patrick', false], ['Zhao, Jingyu', false], ['Zheng, Jian', false]],
    title: 'Colour–Touch Cross-Modal Correspondence and Its Impact on Single-Modal Judgement in Multimodal Perception',
    venue: 'Multisensory Research',
    detail: 'vol. 36, no. 5, pp. 387–411',
    doi: '10.1163/22134808-bja10098',
    bibtex: `@article{yuan2023colour,
  title={Colour--Touch Cross-Modal Correspondence and Its Impact on Single-Modal Judgement in Multimodal Perception},
  author={Yuan, Tianyi and Rau, Pei-Luen Patrick and Zhao, Jingyu and Zheng, Jian},
  journal={Multisensory Research},
  volume={36},
  number={5},
  pages={387--411},
  year={2023},
  doi={10.1163/22134808-bja10098}
}`
  },
  {
    id: 'wang2022measuring', year: 2022, type: 'journal', selected: true,
    authors: [['Wang, Bingcheng', false], ['Rau, Pei-Luen Patrick', false], ['Yuan, Tianyi', true]],
    title: 'Measuring user competence in using artificial intelligence: validity and reliability of artificial intelligence literacy scale',
    venue: 'Behaviour & Information Technology',
    detail: 'vol. 42, no. 9, pp. 1324–1337',
    doi: '10.1080/0144929X.2022.2072768',
    bibtex: `@article{wang2022measuring,
  title={Measuring user competence in using artificial intelligence: validity and reliability of artificial intelligence literacy scale},
  author={Wang, Bingcheng and Rau, Pei-Luen Patrick and Yuan, Tianyi},
  journal={Behaviour \\& Information Technology},
  volume={42},
  number={9},
  pages={1324--1337},
  year={2022},
  doi={10.1080/0144929X.2022.2072768}
}`
  },
  {
    id: 'xu2021hulamove', year: 2021, type: 'conference', selected: false, ccf: true,
    authors: [
      ['Xu, Xuhai', false], ['Li, Jiahao', false], ['Yuan, Tianyi', true], ['He, Liang', false],
      ['Liu, Xin', false], ['Yan, Yukang', false], ['Wang, Yuntao', false], ['Shi, Yuanchun', false],
      ['Mankoff, Jennifer', false], ['Dey, Anind K.', false]
    ],
    title: 'HulaMove: Using Commodity IMU for Waist Interaction',
    venue: 'Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI \'21)',
    detail: 'pp. 1–16',
    doi: '10.1145/3411764.3445182',
    bibtex: `@inproceedings{xu2021hulamove,
  title={{HulaMove}: Using Commodity {IMU} for Waist Interaction},
  author={Xu, Xuhai and Li, Jiahao and Yuan, Tianyi and He, Liang and Liu, Xin and Yan, Yukang and Wang, Yuntao and Shi, Yuanchun and Mankoff, Jennifer and Dey, Anind K.},
  booktitle={Proceedings of the 2021 {CHI} Conference on Human Factors in Computing Systems ({CHI} '21)},
  pages={1--16},
  year={2021},
  doi={10.1145/3411764.3445182}
}`
  },
  {
    id: 'xu2022typeout', year: 2022, type: 'conference', selected: false, ccf: true,
    authors: [
      ['Xu, Xuhai', false], ['Zou, Tianyuan', false], ['Xiao, Han', false], ['Li, Yanzhang', false],
      ['Wang, Ruolin', false], ['Yuan, Tianyi', true], ['Wang, Yuntao', false], ['Shi, Yuanchun', false],
      ['Mankoff, Jennifer', false], ['Dey, Anind K.', false]
    ],
    title: 'TypeOut: Leveraging Just-in-Time Self-Affirmation for Smartphone Overuse Reduction',
    venue: 'Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems (CHI \'22)',
    detail: 'pp. 1–17',
    doi: '10.1145/3491102.3517476',
    bibtex: `@inproceedings{xu2022typeout,
  title={{TypeOut}: Leveraging Just-in-Time Self-Affirmation for Smartphone Overuse Reduction},
  author={Xu, Xuhai and Zou, Tianyuan and Xiao, Han and Li, Yanzhang and Wang, Ruolin and Yuan, Tianyi and Wang, Yuntao and Shi, Yuanchun and Mankoff, Jennifer and Dey, Anind K.},
  booktitle={Proceedings of the 2022 {CHI} Conference on Human Factors in Computing Systems ({CHI} '22)},
  pages={1--17},
  year={2022},
  doi={10.1145/3491102.3517476}
}`
  },
  {
    id: 'yuan2023design', year: 2023, type: 'conference', selected: false,
    authors: [['Yuan, Tianyi', true], ['Wang, Zhecheng', false], ['Rau, Pei-Luen Patrick', false]],
    title: 'Design of Intelligent Real-Time Feedback System in Online Classroom',
    venue: 'Cross-Cultural Design, HCII 2023, Lecture Notes in Computer Science',
    detail: 'pp. 326–335',
    doi: '10.1007/978-3-031-35946-0_27',
    bibtex: `@inproceedings{yuan2023design,
  title={Design of Intelligent Real-Time Feedback System in Online Classroom},
  author={Yuan, Tianyi and Wang, Zhecheng and Rau, Pei-Luen Patrick},
  booktitle={Cross-Cultural Design, {HCII} 2023, Lecture Notes in Computer Science},
  pages={326--335},
  year={2023},
  doi={10.1007/978-3-031-35946-0_27}
}`
  },
  {
    id: 'yuan2024impact', year: 2024, type: 'conference', selected: true,
    authors: [['Yuan, Tianyi', true], ['Rau, Pei-Luen Patrick', false]],
    title: 'The Impact of Color-Touch Cross-Modal Correspondence on the Temporal Integration of Multimodal Information',
    venue: 'Cross-Cultural Design, HCII 2024, Lecture Notes in Computer Science',
    detail: 'pp. 161–177',
    doi: '10.1007/978-3-031-60898-8_11',
    bibtex: `@inproceedings{yuan2024impact,
  title={The Impact of Color-Touch Cross-Modal Correspondence on the Temporal Integration of Multimodal Information},
  author={Yuan, Tianyi and Rau, Pei-Luen Patrick},
  booktitle={Cross-Cultural Design, {HCII} 2024, Lecture Notes in Computer Science},
  pages={161--177},
  year={2024},
  doi={10.1007/978-3-031-60898-8_11}
}`
  },
  {
    id: 'yuan2025cultural', year: 2025, type: 'conference', selected: false,
    authors: [['Yuan, Tianyi', true], ['Rau, Pei-Luen Patrick', false]],
    title: 'Cultural Intelligence and Its Influencing Factors in the Chinese Context',
    venue: 'Cross-Cultural Design, HCII 2025, Lecture Notes in Computer Science',
    detail: 'pp. 119–135',
    doi: '10.1007/978-3-031-93730-9_9',
    bibtex: `@inproceedings{yuan2025cultural,
  title={Cultural Intelligence and Its Influencing Factors in the Chinese Context},
  author={Yuan, Tianyi and Rau, Pei-Luen Patrick},
  booktitle={Cross-Cultural Design, {HCII} 2025, Lecture Notes in Computer Science},
  pages={119--135},
  year={2025},
  doi={10.1007/978-3-031-93730-9_9}
}`
  },
  {
    id: 'yuan2026lurking', year: 2026, type: 'conference', selected: false,
    authors: [['Yuan, Tianyi', true], ['Rau, Pei-Luen Patrick', false]],
    title: 'From Passive Observers to Potential Assets: Reconceptualizing Lurking and Its Factors in Blended Spaces',
    venue: 'Cross-Cultural Design, HCII 2026, Lecture Notes in Computer Science',
    detail: 'pp. 356–378',
    doi: '10.1007/978-3-032-29903-1_22',
    bibtex: `@inproceedings{yuan2026lurking,
  title={From Passive Observers to Potential Assets: Reconceptualizing Lurking and Its Factors in Blended Spaces},
  author={Yuan, Tianyi and Rau, Pei-Luen Patrick},
  booktitle={Cross-Cultural Design, {HCII} 2026, Lecture Notes in Computer Science},
  pages={356--378},
  year={2026},
  doi={10.1007/978-3-032-29903-1_22}
}`
  },
  {
    id: 'yuan2026teaming', year: 2026, type: 'book', selected: false,
    authors: [['Yuan, Tianyi', true], ['Yang, Minqian', false], ['Yu, Dian', false], ['Rau, Pei-Luen Patrick', false]],
    title: 'Human-AI Teaming',
    venue: 'Advances in Human-AI Collaboration (Wiley)',
    detail: 'pp. 123–141',
    doi: '10.1002/9781394266401.ch7',
    bibtex: `@incollection{yuan2026teaming,
  title={Human-{AI} Teaming},
  author={Yuan, Tianyi and Yang, Minqian and Yu, Dian and Rau, Pei-Luen Patrick},
  booktitle={Advances in Human-{AI} Collaboration},
  pages={123--141},
  year={2026},
  publisher={Wiley},
  doi={10.1002/9781394266401.ch7}
}`
  },
  {
    id: 'yuan2024boba', year: 2024, type: 'conference', selected: false,
    authors: [['Yuan, Tianyi', true], ['Rau, Pei-Luen Patrick', false]],
    title: 'Would boba and food characteristics impact the tasting experience? A Kansei Engineering study towards food mixed with boba',
    venue: 'International Symposium on Affective Science and Engineering (ISASE 2024)',
    detail: 'pp. 1–4',
    doi: '10.5057/isase.2024-c000044',
    bibtex: `@inproceedings{yuan2024boba,
  title={Would boba and food characteristics impact the tasting experience? A {Kansei} Engineering study towards food mixed with boba},
  author={Yuan, Tianyi and Rau, Pei-Luen Patrick},
  booktitle={International Symposium on Affective Science and Engineering ({ISASE} 2024)},
  pages={1--4},
  year={2024},
  doi={10.5057/isase.2024-c000044}
}`
  },
  {
    id: 'li2024gig', year: 2024, type: 'zh', selected: false,
    authors: [['李彦怡', false], ['袁天一', true], ['饶培伦', false]],
    title: '零工工作者的算法感知因素及其影响——以外卖骑手为例',
    venue: '工业工程与管理',
    detail: '2024 年第 4 期，第 1–10 页',
    doi: null,
    bibtex: '李彦怡, 袁天一, 饶培伦. 零工工作者的算法感知因素及其影响——以外卖骑手为例[J]. 工业工程与管理, 2024(4): 1-10.'
  }
];

/* ---------------- Experience data ---------------- */
const EXPERIENCE = [
  {
    period: { en: 'Jul – Sep 2025', zh: '2025.07 – 2025.09' },
    org: { en: 'Huawei Device BG, UX Team (Human Factors Dept.)', zh: '华为 · 终端BG UX团队（人因部门）' },
    role: { en: 'Research Intern — Agent Capability Grading & Multimodal Interaction', zh: '研究实习生 · 智能体分级评估与多模态交互研究' },
    location: { en: 'Beijing, China', zh: '北京' },
    bullets: [
      {
        en: 'Built a multi-dimensional agent capability-grading model and developed an NLP-driven evaluation pipeline with multi-agent tools: given scenario and feature documents, it outputs design recommendations and target intelligence levels.',
        zh: '构建多维度智能体分级评估模型，并基于多智能体工具开发自然语言评估流程——输入场景与功能文档，自动输出设计要点与目标智能等级。'
      },
      {
        en: 'Reviewed multimodal interaction literature and product practice to deliver channel-matching design proposals and theoretical support for multimodal information presentation on end devices.',
        zh: '系统梳理多模态交互文献并结合终端产品实践，为终端设备多模态信息呈现提供通道匹配设计方案与理论支撑。'
      }
    ]
  }
];

/* ---------------- Industry collaborations data ---------------- */
const COLLABORATIONS = [
  {
    org: { en: 'Huawei', zh: '华为' },
    title: { en: 'Human Factors Research on Intelligence-Grading Model', zh: '智能等级模型人因研究' },
    role: { en: 'Project Lead', zh: '项目负责人' },
    period: { en: '2025.10 – 2026.10', zh: '2025.10 – 2026.10' },
    bullets: [
      { en: 'Built a grading framework and a user-perceived intelligence-grading model for terminal systems from a human-factors perspective, validated through literature review (70+ papers), expert interviews, and multi-stage experiments (70+ participants).', zh: '从人因研究视角构建智能终端系统智能等级的分级框架与用户感知智能等级评估模型，通过文献调研（70+ 篇）、专家访谈、多阶段实验（70+ 人次）与案例验证完成量化验证。' },
      { en: 'As project lead, oversaw surveys, experimental design and execution, data analysis, and staged deliverables.', zh: '作为项目负责人统筹调研、实验设计执行、数据分析与各阶段交付。' }
    ]
  },
  {
    org: { en: 'Huawei', zh: '华为' },
    title: { en: 'User Experience Evaluation of Glasses-Free 3D Display', zh: '裸眼3D屏幕用户体验测试' },
    role: { en: 'Project Lead', zh: '项目负责人' },
    period: { en: '2022.06 – 2023.06', zh: '2022.06 – 2023.06' },
    bullets: [
      { en: 'Designed experiments on how depth cues, viewing position, and image features affect user experience of glasses-free 3D displays.', zh: '围绕景深、观看位置与图像特征设计实验，评估其对裸眼3D屏幕用户体验的影响。' },
      { en: 'Led the team through experimental design, execution, data analysis, and reporting.', zh: '组织团队完成实验设计、实验执行、数据分析和报告撰写。' }
    ]
  },
  {
    org: { en: 'Honor', zh: '荣耀' },
    title: { en: 'UI Animation Fluency Research', zh: '动效流畅性研究' },
    role: { en: 'Project Lead', zh: '项目负责人' },
    period: { en: '2021.01 – 2022.03', zh: '2021.01 – 2022.03' },
    bullets: [
      { en: 'Benchmarked UI design guidelines, color, and motion systems across Android/iOS and competing brands; authored an industry report on UI motion trends.', zh: '对标调研安卓/iOS 等主流手机 UI 设计规范、色彩与动效体系，撰写 UI 动效行业发展报告。' },
      { en: 'Designed questionnaires based on prototype-library schemes, collected 500+ responses, and ran 64-participant experiments on motion curves and scenario fit.', zh: '基于原型库设计方案设计问卷，收集 500+ 份回复并完成 64 人次用户实验（动效曲线、场景匹配性等变量）。' },
      { en: 'Designed dozens of animation schemes and application scenarios, built a motion database, and led the team in proposal writing, reporting, and client presentations.', zh: '为荣耀设计数十种动效方案与适配场景，建立动效数据库，带领组员完成立项书、实验报告与汇报展示。' }
    ]
  },
  {
    org: { en: 'China State Railway Group', zh: '中国国家铁路集团' },
    title: { en: 'Wayfinding System Redesign for Hangzhou West Railway Station', zh: '杭州西站导视系统设计重构' },
    role: { en: 'Project Member', zh: '项目组成员' },
    period: { en: '2020.09 – 2021.04', zh: '2020.09 – 2021.04' },
    bullets: [
      { en: 'Visited ~10 high-speed railway stations across China to benchmark lighting, wayfinding, business models, and TOD development; simulated passenger flows with AnyLogic.', zh: '走访国内近十个高铁站，梳理室内照度、导视、商业模式与 TOD 建设痛点，并用 AnyLogic 对人流线路进行模拟仿真。' },
      { en: 'Authored design specifications and consulting reports, redesigned wayfinding information architecture, and coordinated iteratively with the client team.', zh: '独立撰写设计规范与咨询方案报告，完成导视系统视觉信息梳理与可视化设计，与国铁团队多轮对接需求。' }
    ]
  },
  {
    org: { en: 'Venucia', zh: '东风启辰' },
    title: { en: 'In-Vehicle Infotainment System Evaluation', zh: '车载中控交互系统测试与评估' },
    role: { en: 'Project Member', zh: '项目组成员' },
    period: { en: '2019.10 – 2020.03', zh: '2019.10 – 2020.03' },
    bullets: [
      { en: 'Benchmarked infotainment systems of Tesla, NIO, XPeng, etc. and built a UX capability evaluation framework.', zh: '调研特斯拉、蔚来、小鹏等交互系统发展历程，建立用户交互工作建设评价体系。' },
      { en: 'Developed qualitative/quantitative evaluation protocols for in-vehicle systems, trained client staff, and designed/facilitated enterprise workshops.', zh: '制定中控系统定性+定量评测方案，辅助企业员工掌握测评系统；设计并主持企业工作坊培训。' }
    ]
  }
];
/* ---------------- News data ---------------- */
const NEWS = [
  {
    sort: '2026-06-01',
    date: { en: '2026', zh: '2026年' },
    title: { en: 'Paper published in Journal of Neural Engineering', zh: '论文发表于 Journal of Neural Engineering' },
    text: {
      en: '"Neural correlates of cross-modal correspondence: fNIRS evidence from color-vibrotactile perception" is now published in the Journal of Neural Engineering.',
      zh: '"Neural correlates of cross-modal correspondence: fNIRS evidence from color-vibrotactile perception" 发表于 Journal of Neural Engineering。'
    }
  },
  {
    sort: '2026-05-01',
    date: { en: '2026', zh: '2026年' },
    title: { en: 'Paper accepted at International Journal of Human-Computer Studies', zh: '论文被 International Journal of Human-Computer Studies 录用' },
    text: {
      en: 'Our paper "XAI in the human-agent-environment loop: How do task, explanation strategy, and AI literacy shape user engagement?" was accepted for publication in the International Journal of Human-Computer Studies.',
      zh: '论文 "XAI in the human-agent-environment loop: How do task, explanation strategy, and AI literacy shape user engagement?" 被 International Journal of Human-Computer Studies 录用。'
    }
  },
];

/* ---------------- State ---------------- */
let currentLang = localStorage.getItem('site-lang') === 'zh' ? 'zh' : 'en';

const t = (key) => (I18N[currentLang][key] !== undefined ? I18N[currentLang][key] : key);

/* ---------------- Renderers ---------------- */
function renderPubs() {
  const root = document.getElementById('pubsRoot');
  const groupOrder = ['journal', 'conference', 'book', 'zh'];
  const groupKeys = {
    journal: 'pubGroupJournal',
    conference: 'pubGroupConference',
    book: 'pubGroupBook',
    zh: 'pubGroupZh'
  };

  const groups = groupOrder
    .map((type) => ({
      type,
      label: t(groupKeys[type]),
      items: PUBLICATIONS.filter((p) => p.type === type).sort((a, b) => b.year - a.year)
    }))
    .filter((g) => g.items.length > 0);

  let html = '';
  let n = 0;
  groups.forEach((group) => {
    html += `<div class="pub-group"><h3 class="pub-group-title">${group.label}</h3>`;
    group.items.forEach((p) => {
      n += 1;
      const authors = p.authors
        .map(([name, self]) => (self ? `<b>${name}</b>` : name))
        .join(', ');
      const doiLink = p.doi
        ? `<a class="mini-btn" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${t('btnDOI')}</a>`
        : '';
      const tags = [];
      if (p.selected) tags.push(`<span class="tag tag--gold">${t('tagSelected')}</span>`);
      if (p.authors[0][1]) tags.push(`<span class="tag">${t('tagFirst')}</span>`);
      if (p.ccf) tags.push(`<span class="tag">${t('tagCCFA')}</span>`);
      if (p.type === 'zh') tags.push(`<span class="tag">${t('tagChinese')}</span>`);

      html += `
        <article class="pub-card${p.selected ? ' pub-card--selected' : ''}">
          <div class="pub-row">
            <span class="pub-index">${n}</span>
            <div class="pub-body">
              <div class="pub-authors">${authors}</div>
              <div class="pub-title-line">
                ${p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${p.title}</a>` : p.title}
                <span class="pub-year">(${p.year})</span>
              </div>
              <div class="pub-venue">${p.venue}, ${p.detail}</div>
              <div class="pub-tags">${tags.join('')}</div>
              <div class="pub-actions">
                ${doiLink}
                <button class="mini-btn" type="button" data-bib-toggle="${p.id}">${t('btnBibtex')}</button>
                <button class="mini-btn" type="button" data-bib-copy="${p.id}">${t('btnCopy')}</button>
              </div>
              <div class="pub-bibtex" id="bib-${p.id}">
                <pre data-bib-pre="${p.id}"></pre>
              </div>
            </div>
          </div>
        </article>`;
    });
    html += `</div>`;
  });
  root.innerHTML = html;

  /* wire bibtex content (textContent avoids escaping issues) */
  document.querySelectorAll('[data-bib-pre]').forEach((pre) => {
    const pub = PUBLICATIONS.find((x) => x.id === pre.dataset.bibPre);
    if (pub) pre.textContent = pub.bibtex;
  });
}

function renderExperience() {
  const root = document.getElementById('expRoot');
  if (!root) return;
  root.innerHTML = EXPERIENCE.map((e) => `
    <div class="exp-card">
      <div class="exp-head">
        <div>
          <span class="exp-org">${e.org[currentLang]}</span>
          <span class="exp-loc"> · ${e.location[currentLang]}</span>
          <div class="exp-role">${e.role[currentLang]}</div>
        </div>
        <span class="exp-period">${e.period[currentLang]}</span>
      </div>
      <ul class="exp-bullets">
        ${e.bullets.map((b) => `<li>${b[currentLang]}</li>`).join('')}
      </ul>
    </div>`).join('');
}

function renderCollaborations() {
  const root = document.getElementById('collabRoot');
  if (!root) return;
  root.innerHTML = COLLABORATIONS.map((c) => `
    <div class="exp-card">
      <div class="exp-head">
        <div>
          <span class="exp-org">${c.org[currentLang]}</span>
          <div class="collab-title">${c.title[currentLang]}</div>
          <div class="collab-role">${c.role[currentLang]}</div>
        </div>
        <span class="exp-period">${c.period[currentLang]}</span>
      </div>
      <!-- project details (bullets) hidden; data retained in COLLABORATIONS -->
    </div>`).join('');
}
function renderNews() {
  const root = document.getElementById('newsRoot');
  const items = NEWS.slice().sort((a, b) => b.sort.localeCompare(a.sort));
  root.innerHTML = items.map((n) => `
    <div class="news-item">
      <span class="news-date">${n.date[currentLang]}</span>
      <div class="news-body">
        <p class="news-title">${n.title[currentLang]}</p>
        <p class="news-text">${n.text[currentLang]}</p>
      </div>
    </div>`).join('');
}

/* ---------------- Language switching ---------------- */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('site-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  /* static text nodes */
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  /* block-level HTML */
  document.querySelectorAll('[data-i18n-block]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nBlock);
  });

  renderPubs();
  renderExperience();
  renderCollaborations();
  renderNews();
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));

  /* toggle button state */
  const en = document.getElementById('langEn');
  const zh = document.getElementById('langZh');
  en.classList.toggle('lang-option--active', lang === 'en');
  zh.classList.toggle('lang-option--active', lang === 'zh');
  document.getElementById('langToggle').setAttribute(
    'aria-label',
    lang === 'en' ? '切换语言 / Switch language' : 'Switch language / 切换语言'
  );
  document.title = lang === 'en'
    ? 'Tianyi Yuan | Ph.D. Candidate in Human Factors & HCI, Tsinghua University'
    : '袁天一（Tianyi Yuan）| 清华大学 人因工程与人机交互方向博士研究生';
}

/* ---------------- Interactions ---------------- */
function copyText(text, btn) {
  const done = () => {
    const original = t('btnCopy');
    btn.textContent = t('btnCopied');
    setTimeout(() => { btn.textContent = original; }, 1500);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
}

document.addEventListener('click', (e) => {
  const bibToggle = e.target.closest('[data-bib-toggle]');
  if (bibToggle) {
    const box = document.getElementById('bib-' + bibToggle.dataset.bibToggle);
    if (box) box.classList.toggle('open');
    return;
  }
  const bibCopy = e.target.closest('[data-bib-copy]');
  if (bibCopy) {
    const pub = PUBLICATIONS.find((x) => x.id === bibCopy.dataset.bibCopy);
    if (pub) copyText(pub.bibtex, bibCopy);
  }
});

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'zh' : 'en');
});

const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  const nav = document.getElementById('siteNav');
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.site-nav a').forEach((a) => {
  a.addEventListener('click', () => {
    document.getElementById('siteNav').classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------------- Feature modules ---------------- */
/* 每个功能独立封装：不需要某功能时，把 index.html 里对应 HTML 块注释掉即可，下面的 init 会自动跳过。 */
const FEATURES = {
  accentSwitcher: true,
  crossModalDemo: true,
};

/* FEATURE: accent theme switcher */
const ACCENT = (() => {
  const hexToRgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  const rgbToHex = (r, g, b) => '#' + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hexToRgb(a); const B = hexToRgb(b); return rgbToHex(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t); };
  const applyVars = (hex) => {
    document.documentElement.style.setProperty('--accent', hex);
    document.documentElement.style.setProperty('--accent-strong', mix(hex, '#000000', 0.18));
    document.documentElement.style.setProperty('--accent-soft', mix(hex, '#ffffff', 0.9));
  };
  const clearVars = () => { ['--accent', '--accent-strong', '--accent-soft'].forEach((v) => document.documentElement.style.removeProperty(v)); };
  const syncDots = () => {
    const root = document.getElementById('accentSwitcher');
    if (!root) return;
    const cur = document.documentElement.getAttribute('data-accent');
    root.querySelectorAll('.accent-dot').forEach((d) => d.classList.toggle('accent-dot--active', (d.dataset.accent || 'custom') === cur));
  };
  const commit = (hex) => {
    applyVars(hex);
    document.documentElement.setAttribute('data-accent', 'custom');
    localStorage.setItem('site-accent', 'custom');
    localStorage.setItem('site-accent-custom', hex);
    const input = document.getElementById('accentColorInput');
    if (input) input.value = hex;
    syncDots();
  };
  const applyPreset = (key) => {
    clearVars();
    document.documentElement.setAttribute('data-accent', key);
    localStorage.setItem('site-accent', key);
    syncDots();
  };
  const restore = () => {
    const saved = localStorage.getItem('site-accent') || 'blue';
    const savedCustom = localStorage.getItem('site-accent-custom');
    if (saved === 'custom' && savedCustom) commit(savedCustom); else applyPreset(saved);
  };
  return { preview: applyVars, commit, applyPreset, restore };
})();

function initAccentSwitcher() {
  const root = document.getElementById('accentSwitcher');
  if (!root) return;
  const input = document.getElementById('accentColorInput');
  const customBtn = document.getElementById('accentCustom');
  root.querySelectorAll('.accent-dot').forEach((d) => {
    if (d.dataset.accent) d.addEventListener('click', () => ACCENT.applyPreset(d.dataset.accent));
  });
  if (customBtn) customBtn.addEventListener('click', () => { if (input) input.click(); });
  if (input) input.addEventListener('input', (e) => ACCENT.commit(e.target.value));
  ACCENT.restore();
}

/* FEATURE: cross-modal demo */
const CM_DATA = {
  red:    { c: '#d64545', en: 'high amplitude · strong', zh: '高振幅 · 强振动', dur: 0.9, scale: 1.8 },
  orange: { c: '#e8833a', en: 'medium amplitude · medium', zh: '中等振幅 · 中等振动', dur: 0.9, scale: 1.5 },
  yellow: { c: '#d9a92b', en: 'low amplitude · weak', zh: '低振幅 · 弱振动', dur: 0.9, scale: 1.2 },
  green:  { c: '#3f8f5f', en: 'low amplitude · weak', zh: '低振幅 · 弱振动', dur: 0.9, scale: 1.2 },
  blue:   { c: '#4a7fb5', en: 'high amplitude · strong', zh: '高振幅 · 强振动', dur: 0.9, scale: 1.8 },
  purple: { c: '#8a5bb5', en: 'high amplitude · strong', zh: '高振幅 · 强振动', dur: 0.9, scale: 1.8 },
};
function initCrossModalDemo() {
  const demo = document.getElementById('crossModalDemo');
  if (!demo) return;
  const swatches = document.getElementById('cmSwatches');
  const pulse = document.getElementById('cmPulse');
  const desc = document.getElementById('cmDesc');
  let hoverKey = null;
  let lockedKey = null;
  const renderDesc = () => {
    const key = hoverKey || lockedKey;
    desc.textContent = key ? CM_DATA[key][currentLang] : '';
  };
  const activate = (key) => {
    hoverKey = key;
    const d = CM_DATA[key];
    swatches.querySelectorAll('.cm-swatch').forEach((s) => {
      s.classList.toggle('cm-swatch--active', s.dataset.cm === key);
    });
    pulse.style.background = d.c;
    pulse.style.setProperty('--cm-dur', d.dur + 's');
    pulse.style.setProperty('--cm-scale', d.scale);
    demo.classList.add('is-active');
    ACCENT.preview(d.c);
    renderDesc();
  };
  const deactivate = () => {
    hoverKey = null;
    swatches.querySelectorAll('.cm-swatch').forEach((s) => s.classList.remove('cm-swatch--active'));
    demo.classList.remove('is-active');
    ACCENT.restore();
    renderDesc();
  };
  const lock = (key) => {
    lockedKey = key;
    ACCENT.commit(CM_DATA[key].c);
    swatches.querySelectorAll('.cm-swatch').forEach((s) => {
      s.classList.toggle('cm-swatch--locked', s.dataset.cm === key);
    });
    renderDesc();
  };
  swatches.querySelectorAll('.cm-swatch').forEach((s) => {
    s.addEventListener('mouseenter', () => activate(s.dataset.cm));
    s.addEventListener('focus', () => activate(s.dataset.cm));
    s.addEventListener('mouseleave', () => deactivate());
    s.addEventListener('blur', () => deactivate());
    s.addEventListener('click', () => lock(s.dataset.cm));
  });
  document.addEventListener('langchange', () => renderDesc());
  const savedCustom = localStorage.getItem('site-accent-custom');
  if (savedCustom) {
    const match = Object.keys(CM_DATA).find((k) => CM_DATA[k].c.toLowerCase() === savedCustom.toLowerCase());
    if (match) {
      lockedKey = match;
      swatches.querySelectorAll('.cm-swatch').forEach((s) => s.classList.toggle('cm-swatch--locked', s.dataset.cm === match));
      renderDesc();
    }
  }
}
/* ---------------- Init ---------------- */
document.getElementById('year').textContent = new Date().getFullYear();
applyLang(currentLang);

try { if (FEATURES.accentSwitcher) initAccentSwitcher(); } catch (e) { /* isolated */ }
try { if (FEATURES.crossModalDemo) initCrossModalDemo(); } catch (e) { /* isolated */ }
