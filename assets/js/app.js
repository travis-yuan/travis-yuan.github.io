/* ============================================================
   Tianyi Yuan — Personal Academic Homepage
   Bilingual (EN/中文) · publications / news / experience data
   ============================================================ */

'use strict';

/* ---------------- i18n dictionary ---------------- */
const I18N = {
  en: {
    brandSub: 'Tsinghua University',
    navAbout: 'About',
    navEducation: 'Education',
    navPublications: 'Publications',
    navExperience: 'Experience',
    navNews: 'News',
    navContact: 'Contact',
    heroTitle: 'Ph.D. Candidate in Human Factors & Human–Computer Interaction',
    heroAffil: 'Department of Industrial Engineering · Tsinghua University',
    heroJobmarket: 'On the 2027 academic job market — open to postdoc & industry research roles.',
    labelEmail: 'Email',
    aboutTitle: 'About',
    about: '<p>I am a Ph.D. candidate in Human Factors and Human–Computer Interaction at Tsinghua University, advised by <a href="https://www.ie.tsinghua.edu.cn/en/" target="_blank" rel="noopener">Prof. Pei-Luen Patrick Rau</a>. My research sits at the intersection of <strong>human–AI interaction</strong>, <strong>explainable AI</strong>, and <strong>neuroergonomics</strong>: I combine behavioral experiments, large-scale surveys, and neuroimaging (fNIRS) to understand how people perceive, trust, and collaborate with intelligent systems.</p><p>My work has been published in venues including <em>International Journal of Human–Computer Studies</em>, <em>Journal of Neural Engineering</em>, <em>Multisensory Research</em>, and <em>CHI</em>. I have also led industry research collaborations with Huawei\'s UX team on human-centered evaluation of AI systems.</p>',
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
    seeFullList: '↓ Full publication list',
    pubsTitle: 'Publications',
    pubsNote: 'Click a title to open the publisher page (DOI). Use "Cite" to show/copy the BibTeX entry. ★ = selected representative work.',
    expTitle: 'Experience',
    expNote: 'Descriptions are intentionally brief; project details remain confidential per agreements.',
    newsTitle: 'News',
    contactTitle: 'Contact',
    contactEmailTitle: 'Email',
    contactAddressTitle: 'Office',
    contactAddressBody: 'Department of Industrial Engineering, Tsinghua University, Beijing, China',
    contactProfilesTitle: 'Profiles',
    footerSub: 'Human–AI Interaction · Explainable AI · Neuroergonomics',
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
    brandSub: '清华大学',
    navAbout: '简介',
    navEducation: '教育',
    navPublications: '论文',
    navExperience: '经历',
    navNews: '动态',
    navContact: '联系',
    heroTitle: '人因工程与人机交互方向 博士研究生',
    heroAffil: '清华大学 · 工业工程系',
    heroJobmarket: '2027 届学术求职季进行中——欢迎博士后与产业研究岗位机会',
    labelEmail: '邮箱',
    aboutTitle: '简介',
    about: '<p>我是清华大学管理科学与工程（人因工程方向）的博士研究生，师从<a href="https://www.ie.tsinghua.edu.cn/" target="_blank" rel="noopener">饶培伦教授</a>。我的研究横跨<strong>人机交互</strong>、<strong>可解释人工智能</strong>与<strong>神经人因学</strong>：我结合行为实验、大规模问卷与脑成像（fNIRS）方法，研究人们如何感知、信任并与智能系统协作。</p><p>论文发表于 <em>International Journal of Human–Computer Studies</em>、<em>Journal of Neural Engineering</em>、<em>Multisensory Research</em> 与 <em>CHI</em> 等期刊与会议，并与华为 UX 团队开展以人为中心的 AI 系统评估等产业研究合作。</p>',
    interestsTitle: '研究方向',
    interest1: '<strong>人机交互与可解释AI</strong>——解释策略、任务情境与用户 AI 素养如何影响人机团队中的信任、参与和决策。',
    interest2: '<strong>神经人因学与多感觉整合</strong>——跨模态对应（色–触）的神经机制（fNIRS）及其在多模态信息加工中的作用。',
    interest3: '<strong>算法管理与未来工作</strong>——平台劳动中零工工作者如何感知并应对算法管理。',
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
    seeFullList: '↓ 查看全部论文',
    pubsTitle: '论文列表',
    pubsNote: '点击标题打开出版社页面（DOI）；点“引用”查看/复制 BibTeX 条目。★ = 代表作品。',
    expTitle: '经历',
    expNote: '描述有意从简，项目细节按协议保密。',
    newsTitle: '动态',
    contactTitle: '联系方式',
    contactEmailTitle: '邮箱',
    contactAddressTitle: '办公室',
    contactAddressBody: '北京市海淀区清华大学工业工程系',
    contactProfilesTitle: '学术主页',
    footerSub: '人机交互 · 可解释AI · 神经人因学',
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
    id: 'xu2021hulamove', year: 2021, type: 'conference', selected: true, ccf: true,
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
    id: 'yuan2024impact', year: 2024, type: 'conference', selected: false,
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
  renderNews();

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
    : '袁天一 Tianyi Yuan | 清华大学 人因工程与人机交互方向 博士研究生';
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

/* ---------------- Init ---------------- */
document.getElementById('year').textContent = new Date().getFullYear();
applyLang(currentLang);
