const schools = [
  {
    id: "juilliard",
    name: "The Juilliard School",
    nameCn: "茱莉亚学院",
    country: "美国",
    region: "US",
    city: "New York",
    ranking: 1,
    rankingLabel: "QS Performing Arts 2026 #1",
    location: "纽约林肯中心，演出资源密集，生活成本高",
    degrees: ["Bachelor", "Master", "Diploma"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Jazz", "Conducting"],
    tuitionUsd: 57370,
    tuitionLabel: "约 $57k / 年，另有生活费与杂费",
    language: { ielts: 6, toefl: 73, duolingo: null, note: "低于较高英语水平通常需要 ESL 面试；2026 年 TOEFL 新评分规则需单独核对。" },
    gpaBand: "high",
    gap: "neutral",
    gapText: "可解释 Gap，但更看重持续训练、曲目准备和艺术履历。",
    admissionRules: "在线申请、艺术简历、文书、推荐、成绩单、英语成绩；音乐类多数专业 12 月初截止。",
    examContent: "按专业提交预筛/现场考试。器乐通常要求不同时期曲目；作曲提交作品集；爵士含即兴与听辨。",
    curriculum: "一对一主课、室内乐、乐团/合奏、音乐理论、音乐史、职业发展与跨学科演出。",
    duration: "本科 4 年；硕士多为 2 年；部分 Artist Diploma 免学费但极具竞争性。",
    scholarships: "约九成学生获得某种形式奖助；以录取和资金审核结果为准。",
    selectivity: "extreme",
    auditionMode: "live",
    sources: [
      ["QS 2026 Performing Arts", "https://www.topuniversities.com/university-subject-rankings/performing-arts"],
      ["Juilliard Admissions", "https://www.juilliard.edu/admissions"],
      ["Juilliard Tuition", "https://www.juilliard.edu/campus-life/tuition-financial-aid/tuition-fees-and-expenses"]
    ]
  },
  {
    id: "rcm",
    name: "Royal College of Music",
    nameCn: "英国皇家音乐学院 RCM",
    country: "英国",
    region: "UK",
    city: "London",
    ranking: 2,
    rankingLabel: "QS Music & Performing Arts 2026 #2",
    location: "伦敦 South Kensington，临近 Royal Albert Hall 与博物馆区",
    degrees: ["Bachelor", "Master", "Diploma", "Gap"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Conducting"],
    tuitionUsd: 43000,
    tuitionLabel: "国际本科约 £33k+ / 年，随课程变动",
    language: { ielts: 5.5, toefl: 72, duolingo: null, note: "本科/研究生和签证路径要求不同，需按 offer 条件核对。" },
    gpaBand: "medium",
    gap: "friendly",
    gapText: "提供 Gap Year / Junior / Foundation 相关路径，适合补曲目与学术衔接。",
    admissionRules: "UCAS Conservatoires 或院校系统申请，包含推荐、学历材料、英语条件和作品/面试要求。",
    examContent: "按主修准备面试或试奏；演奏专业重视技术、音乐性、视奏和训练潜力。",
    curriculum: "主课、合奏、历史理论、专业发展、录音与舞台实践，并有伦敦演出合作。",
    duration: "BMus 4 年；MPerf/MMus 多为 1-2 年；Gap Year 通常 1 年。",
    scholarships: "学院奖学金竞争制，常与试奏表现绑定。",
    selectivity: "high",
    auditionMode: "live-or-recorded",
    sources: [
      ["RCM QS 2026 News", "https://www.rcm.ac.uk/about/news/all/2026-03-26qsrankings2026.aspx"],
      ["RCM Fees", "https://www.rcm.ac.uk/apply/feesandfunding/"],
      ["RCM Apply", "https://www.rcm.ac.uk/apply/"]
    ]
  },
  {
    id: "curtis",
    name: "Curtis Institute of Music",
    nameCn: "柯蒂斯音乐学院",
    country: "美国",
    region: "US",
    city: "Philadelphia",
    ranking: 3,
    rankingLabel: "QS Music 2026 Top 3",
    location: "费城 Rittenhouse Square，小规模精英制",
    degrees: ["Bachelor", "Master", "Diploma"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Conducting"],
    tuitionUsd: 0,
    tuitionLabel: "全额学费奖学金；仍需预算生活费、保险和杂费",
    language: { ielts: 6.5, toefl: 79, duolingo: null, note: "国际学生英语材料和签证材料按录取后要求执行。" },
    gpaBand: "high",
    gap: "neutral",
    gapText: "年龄与专业名额限制明显，Gap 需证明艺术成长和持续训练。",
    admissionRules: "申请、预筛、现场试奏/面试；录取高度依赖当年具体乐器名额。",
    examContent: "曲目要求非常细分，声乐含多语言艺术歌曲/咏叹调，指挥含读谱、听辨和面试。",
    curriculum: "导师制主课、室内乐、乐团、歌剧/新音乐项目和职业化演出训练。",
    duration: "本科约 4 年；硕士 2 年；Diploma 按项目设置。",
    scholarships: "所有学生获得 merit-based full-tuition scholarship。",
    selectivity: "extreme",
    auditionMode: "live",
    sources: [
      ["Curtis Audition", "https://www.curtis.edu/apply/audition/"],
      ["Curtis Admissions", "https://www.curtis.edu/apply/"],
      ["QS Music 2026", "https://xuanxiao.org/en/rankings/qs/subject/music"]
    ]
  },
  {
    id: "guildhall",
    name: "Guildhall School of Music & Drama",
    nameCn: "市政厅音乐与戏剧学院",
    country: "英国",
    region: "UK",
    city: "London",
    ranking: 3,
    rankingLabel: "QS Performing Arts 2026 #3",
    location: "伦敦 Barbican 艺术中心旁，演出与剧场资源突出",
    degrees: ["Bachelor", "Master", "Diploma", "Gap"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Jazz", "Music Production"],
    tuitionUsd: 39500,
    tuitionLabel: "国际学费约 £30k+ / 年，课程不同费用不同",
    language: { ielts: 5.5, toefl: 72, duolingo: null, note: "英国签证和院校英语条件需同时满足。" },
    gpaBand: "medium",
    gap: "friendly",
    gapText: "有短期/预备类路径，适合先建立英国体系作品与语言节奏。",
    admissionRules: "申请后按专业参加预筛、现场/录制试奏、面试或作品集审核。",
    examContent: "演奏与声乐重视曲目完整度；作曲/制作方向重作品集、面试和创作阐述。",
    curriculum: "主课、合奏、录音技术、舞台项目、Barbican 联动实践和职业模块。",
    duration: "本科 4 年；研究生常见 1-2 年；短期项目按学期或学年。",
    scholarships: "提供有限奖学金，通常需在申请/录取阶段竞争。",
    selectivity: "high",
    auditionMode: "live-or-recorded",
    sources: [
      ["Guildhall QS 2026 News", "https://www.gsmd.ac.uk/about-guildhall/news/guildhall-school-rises-into-the-top-three-institutions-for-performing-arts-in"],
      ["Guildhall Fees", "https://www.gsmd.ac.uk/study-with-guildhall/fee-schedule-202526"],
      ["Guildhall Study", "https://www.gsmd.ac.uk/study-with-guildhall"]
    ]
  },
  {
    id: "ram",
    name: "Royal Academy of Music",
    nameCn: "英国皇家音乐学院 RAM",
    country: "英国",
    region: "UK",
    city: "London",
    ranking: 5,
    rankingLabel: "QS Music 2026 Top 5",
    location: "伦敦 Marylebone，隶属 University of London",
    degrees: ["Bachelor", "Master", "Diploma", "Gap"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Jazz", "Conducting"],
    tuitionUsd: 42000,
    tuitionLabel: "国际本科/研究生多在 £30k+ / 年区间",
    language: { ielts: 5.5, toefl: 72, duolingo: null, note: "语言成绩通常需在入学前指定日期提交。" },
    gpaBand: "medium",
    gap: "friendly",
    gapText: "有 Gap Year 和预备类选择，适合在伦敦做曲目、语言和导师衔接。",
    admissionRules: "申请、学历/英语材料、推荐、试奏或面试；不同专业对钢琴副科和理论有额外期待。",
    examContent: "主修试奏、视奏、面试；作曲提交作品集；声乐要求多语种曲目。",
    curriculum: "University of London 学位框架下的主课、学术模块、合奏、研究与职业实践。",
    duration: "本科 4 年；硕士常见 1-2 年；Gap Year 1 年。",
    scholarships: "提供国际生可申请资助，竞争激烈。",
    selectivity: "high",
    auditionMode: "live-or-recorded",
    sources: [
      ["RAM Fees", "https://www.ram.ac.uk/study/fees-and-funding"],
      ["RAM Entry Requirements", "https://www.ram.ac.uk/study/entry-requirements"],
      ["QS Music 2026", "https://xuanxiao.org/en/rankings/qs/subject/music"]
    ]
  },
  {
    id: "sibelius",
    name: "Sibelius Academy, Uniarts Helsinki",
    nameCn: "西贝柳斯音乐学院",
    country: "芬兰",
    lang: "nordic", region: "Europe",
    city: "Helsinki",
    ranking: 13,
    rankingLabel: "QS Music 2026 #13",
    location: "赫尔辛基，北欧公共艺术生态强",
    degrees: ["Bachelor", "Master"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Jazz", "Music Education"],
    tuitionUsd: 14000,
    tuitionLabel: "非 EU/EEA 英语授课项目约 €12k+ / 年，芬兰/瑞典语项目规则不同",
    language: { ielts: 6, toefl: 78, duolingo: 105, note: "语言要求取决于英语、芬兰语或瑞典语授课项目。" },
    gpaBand: "medium",
    gap: "friendly",
    gapText: "北欧项目较看重学习动机、独立能力和长期发展路径。",
    admissionRules: "Studyinfo/院校系统申请，提交学历、语言和专业材料；部分专业多轮考试。",
    examContent: "演奏/作品集、面试、理论或听力测试；教育方向关注教学动机与沟通能力。",
    curriculum: "主课、合奏、北欧当代音乐、教育学、研究与跨艺术学院合作。",
    duration: "本科 3 年；硕士 2 年；部分一体化路径 5.5 年。",
    scholarships: "非 EU/EEA 学费奖学金按项目申请。",
    selectivity: "high",
    auditionMode: "live-or-recorded",
    sources: [
      ["Sibelius QS 2026 News", "https://student.uniarts.fi/articles/news/the-sibelius-academy-ranked-13th-in-the-2026-qs-university-rankings-by-subject/"],
      ["Uniarts Admissions", "https://www.uniarts.fi/en/admissions/"],
      ["Uniarts Tuition", "https://www.uniarts.fi/en/guides/tuition-fees/"]
    ]
  },
  {
    id: "mdw",
    name: "University of Music and Performing Arts Vienna",
    nameCn: "维也纳音乐与表演艺术大学 MDW",
    country: "奥地利",
    institutionType: "Conservatoire", lang: "german", region: "Europe",
    city: "Vienna",
    ranking: 19,
    rankingLabel: "QS Music 2026 Top 20",
    location: "维也纳，古典音乐传统与歌剧资源深厚",
    degrees: ["Bachelor", "Master", "Diploma"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Conducting", "Music Education"],
    tuitionUsd: 1700,
    tuitionLabel: "公立大学学费较低，非 EU/EEA 通常约 €1.5k / 年加学生会费",
    language: { ielts: 0, toefl: 0, duolingo: null, note: "多数项目要求德语，需按专业核对等级；英语成绩不是主要门槛。" },
    gpaBand: "medium",
    gap: "neutral",
    gapText: "欧洲公立体系看重入学考试，Gap 重点解释训练连续性。",
    admissionRules: "专业入学考试优先，通常含多轮试奏/理论/听力；德语证明按阶段提交。",
    examContent: "器乐曲目、视奏、听力、乐理；声乐与指挥方向要求面试和综合音乐能力。",
    curriculum: "传统主课、室内乐、乐团、理论、歌剧/指挥实践和教育学路径。",
    duration: "本科多为 4 年；硕士 2 年；Diploma 依专业设置。",
    scholarships: "低学费优势明显，奖学金多为生活补助或专项资助。",
    selectivity: "high",
    auditionMode: "live",
    sources: [
      ["QS Music 2026", "https://xuanxiao.org/en/rankings/qs/subject/music"],
      ["MDW Admissions", "https://www.mdw.ac.at/studium/zulassung/"],
      ["MDW Tuition", "https://www.mdw.ac.at/studiencenter/en/tuition-fee/"]
    ]
  },
  {
    id: "berklee",
    name: "Berklee College of Music",
    nameCn: "伯克利音乐学院",
    country: "美国",
    region: "US",
    city: "Boston",
    ranking: 21,
    rankingLabel: "现代音乐强校，QS Music 榜单参考",
    location: "波士顿 Back Bay，现代音乐产业连接强",
    degrees: ["Bachelor", "Master", "Diploma"],
    majors: ["Jazz", "Music Production", "Composition", "Voice", "Piano", "Music Education"],
    tuitionUsd: 50490,
    tuitionLabel: "本科约 $50k+ / 年，另有住宿、餐食和设备成本",
    language: { ielts: 6, toefl: 72, duolingo: 110, note: "2026 年 TOEFL 新评分规则已更新，需按考试日期核对。" },
    gpaBand: "medium",
    gap: "friendly",
    gapText: "对非传统路径较友好，强调音乐经历、创作和职业方向。",
    admissionRules: "申请、成绩单、英语、试奏/面试；国际高中成绩需可能进行认证评估。",
    examContent: "试奏、即兴/读谱/听辨、面试；制作方向关注作品、软件能力和创作表达。",
    curriculum: "爵士、当代写作、制作技术、音乐商业、电影配乐、合奏与工作室项目。",
    duration: "本科 4 年；研究生通常 1-2 年；Diploma 按项目设置。",
    scholarships: "国际学生可通过录取试奏竞争 merit scholarship。",
    selectivity: "medium",
    auditionMode: "live-or-recorded",
    sources: [
      ["Berklee International Applicants", "https://college.berklee.edu/admissions/undergraduate/international"],
      ["Berklee How to Apply", "https://college.berklee.edu/admissions/undergraduate/how-to-apply"],
      ["Berklee Tuition 2025-26", "https://www.berklee.edu/student-accounts/tuition-and-related-costs-previous-year"]
    ]
  },
  {
    id: "mcgill",
    name: "Schulich School of Music, McGill University",
    nameCn: "麦吉尔大学舒立克音乐学院",
    country: "加拿大",
    region: "Canada",
    city: "Montreal",
    ranking: 14,
    rankingLabel: "加拿大音乐与表演艺术领先",
    location: "蒙特利尔，英法双语城市，音乐与录音技术资源强",
    degrees: ["Bachelor", "Master", "Diploma"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Jazz", "Music Production", "Music Education"],
    tuitionUsd: 30000,
    tuitionLabel: "国际生约 CAD 30k-40k / 年，按学分和项目浮动",
    language: { ielts: 6.5, toefl: 90, duolingo: 125, note: "作为综合大学，英语门槛通常高于部分 conservatoire。" },
    gpaBand: "high",
    gap: "neutral",
    gapText: "综合大学体系会同时看学术履历与专业能力。",
    admissionRules: "McGill 申请系统、学术材料、英语成绩、预筛/试奏或作品集。",
    examContent: "演奏、作品集、面试；录音/科技方向关注技术项目与音乐基础。",
    curriculum: "主课、研究型课程、音乐科技、录音、合奏、大学通识与跨学院资源。",
    duration: "本科 3-4 年；硕士 2 年；Graduate Diploma 按项目设置。",
    scholarships: "入学奖学金与学院资助并存，通常竞争制。",
    selectivity: "high",
    auditionMode: "live-or-recorded",
    sources: [
      ["McGill QS 2026 News", "https://www.mcgill.ca/music/channels/news/schulich-school-music-scores-highly-2026-qs-world-university-rankings-372265"],
      ["McGill Music Admissions", "https://www.mcgill.ca/music/admissions"],
      ["McGill Tuition", "https://www.mcgill.ca/student-accounts/tuition-fees"]
    ]
  },
  {
    id: "nec",
    name: "New England Conservatory",
    nameCn: "新英格兰音乐学院 NEC",
    country: "美国",
    region: "US",
    city: "Boston",
    ranking: 35,
    rankingLabel: "美国传统音乐学院强校",
    location: "波士顿 Fenway，临近交响乐与高校资源",
    degrees: ["Bachelor", "Master", "Diploma"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Jazz", "Conducting"],
    tuitionUsd: 58900,
    tuitionLabel: "约 $58k+ / 年，生活费另计",
    language: { ielts: 6.5, toefl: 79, duolingo: 115, note: "语言要求按学位层级核对。" },
    gpaBand: "medium",
    gap: "neutral",
    gapText: "重视作品和导师匹配，Gap 需呈现明确训练成果。",
    admissionRules: "申请、推荐、文书、成绩单、英语、预筛/现场试奏。",
    examContent: "古典、爵士、作曲等方向要求差异较大，通常含曲目、面试和理论背景评估。",
    curriculum: "主课、室内乐、乐团、爵士合奏、作曲工作坊和职业发展。",
    duration: "本科 4 年；硕士 2 年；Graduate Diploma / Artist Diploma 1-2 年。",
    scholarships: "提供 merit-based scholarship，通常与录取一并考虑。",
    selectivity: "high",
    auditionMode: "live-or-recorded",
    sources: [
      ["NEC Admissions", "https://necmusic.edu/admissions/"],
      ["NEC Tuition", "https://necmusic.edu/tuition-and-fees/"],
      ["NEC International", "https://necmusic.edu/international-students/"]
    ]
  },
  {
    id: "usc",
    name: "USC Thornton School of Music",
    nameCn: "南加州大学桑顿音乐学院",
    country: "美国",
    region: "US",
    city: "Los Angeles",
    ranking: 45,
    rankingLabel: "综合大学音乐与产业资源强",
    location: "洛杉矶，影视、商业音乐和录音产业连接突出",
    degrees: ["Bachelor", "Master", "Diploma"],
    majors: ["Composition", "Jazz", "Music Production", "Voice", "Piano", "Violin", "Music Education"],
    tuitionUsd: 70400,
    tuitionLabel: "USC 本科总学费较高，音乐项目另看课程/学分",
    language: { ielts: 7, toefl: 100, duolingo: 130, note: "综合大学英语要求较高，部分研究生项目可能有额外条件。" },
    gpaBand: "high",
    gap: "neutral",
    gapText: "需要同时处理大学学术录取与音乐学院专业审核。",
    admissionRules: "USC 主申请加 Thornton 专业申请，含作品/试奏、简历、推荐和学术材料。",
    examContent: "音乐产业、流行、影视配乐、古典等方向差异大；作品集和面试权重高。",
    curriculum: "专业主课、大学通识、音乐商业、电影配乐、录音制作与洛杉矶行业项目。",
    duration: "本科 4 年；硕士多为 2 年；certificate/diploma 按项目设置。",
    scholarships: "大学奖助与音乐学院奖学金竞争制。",
    selectivity: "high",
    auditionMode: "live-or-recorded",
    sources: [
      ["USC Thornton Admissions", "https://music.usc.edu/admission/"],
      ["USC Tuition", "https://financialaid.usc.edu/undergraduate-financial-aid/cost-of-attendance/"],
      ["USC International", "https://admission.usc.edu/prospective-students/international-students/"]
    ]
  },
  {
    id: "yong-siew-toh",
    name: "Yong Siew Toh Conservatory of Music, NUS",
    nameCn: "新加坡国立大学杨秀桃音乐学院",
    country: "新加坡",
    region: "Asia",
    city: "Singapore",
    ranking: 8,
    rankingLabel: "NUS QS World 2026 #8，音乐学院独立参考",
    location: "新加坡 NUS 校园，亚洲枢纽与英语环境",
    degrees: ["Bachelor", "Master"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Music Production"],
    tuitionUsd: 28500,
    tuitionLabel: "国际生按 NUS/学院学费表，常见约 SGD 35k+ / 年",
    language: { ielts: 6.5, toefl: 92, duolingo: 115, note: "NUS 英语授课体系，需满足大学入学英语要求。" },
    gpaBand: "high",
    gap: "neutral",
    gapText: "亚洲英语环境，适合想兼顾综合大学资源与音乐训练的申请者。",
    admissionRules: "NUS 申请、学院试奏/面试、学术与英语材料；曲目要求按专业发布。",
    examContent: "试奏、面试、理论/听力；作曲与录音方向重作品集。",
    curriculum: "主课、室内乐、录音、亚洲音乐资源、跨 NUS 课程和海外交流。",
    duration: "本科 4 年；硕士按项目通常 1-2 年。",
    scholarships: "提供学院与大学奖学金，名额有限。",
    selectivity: "high",
    auditionMode: "live-or-recorded",
    sources: [
      ["YST Admissions", "https://www.ystmusic.nus.edu.sg/admissions/"],
      ["NUS Tuition", "https://www.nus.edu.sg/registrar/administrative-policies-procedures/undergraduate/tuition-fees"],
      ["QS World 2026", "https://www.topuniversities.com/world-university-rankings"]
    ]
  },
  {
    id: "sydney",
    name: "Sydney Conservatorium of Music",
    nameCn: "悉尼音乐学院",
    country: "澳大利亚",
    region: "Oceania",
    city: "Sydney",
    ranking: 26,
    rankingLabel: "澳洲音乐教育与表演强校",
    location: "悉尼皇家植物园旁，隶属 University of Sydney",
    degrees: ["Bachelor", "Master"],
    majors: ["Piano", "Violin", "Voice", "Composition", "Jazz", "Music Education", "Music Production"],
    tuitionUsd: 35000,
    tuitionLabel: "国际生约 AUD 50k+ / 年，按课程调整",
    language: { ielts: 6.5, toefl: 85, duolingo: 115, note: "需满足 University of Sydney 英语要求。" },
    gpaBand: "medium",
    gap: "friendly",
    gapText: "澳洲体系可接受多样背景，但需清楚解释学习路径。",
    admissionRules: "大学申请加音乐学院 audition/portfolio，需学历和英语材料。",
    examContent: "演奏/声乐试奏、作品集或面试；教育方向关注教学潜力。",
    curriculum: "主课、合奏、音乐教育、作曲、当代音乐、大学选修与研究课程。",
    duration: "本科 4 年；硕士通常 1.5-2 年。",
    scholarships: "大学与学院奖学金可查，国际生竞争制。",
    selectivity: "medium",
    auditionMode: "live-or-recorded",
    sources: [
      ["Sydney Conservatorium", "https://www.sydney.edu.au/music/"],
      ["Sydney Admissions", "https://www.sydney.edu.au/study/applying.html"],
      ["Sydney Fees", "https://www.sydney.edu.au/study/fees-and-loans.html"]
    ]
  }
];

const commonMajors = ["Piano", "Violin", "Voice", "Composition", "Jazz", "Music Production", "Conducting", "Music Education"];
const classicalMajors = ["Piano", "Violin", "Voice", "Composition", "Conducting", "Music Education"];
const contemporaryMajors = ["Jazz", "Music Production", "Composition", "Voice", "Piano", "Music Education"];

// 攻读门类 → 专业方向 映射
const categorySpecs = {
  Musicology:     { label: "音乐学",          specs: ["Musicology","MusicEducation","MusicTherapy","MusicHistory"] },
  VocalPerformance: { label: "音乐表演（声乐）",  specs: ["PopVocals","ClassicalVocals","Drama","Musical"] },
  InstrumentalPerformance: { label: "音乐表演（器乐）", specs: ["Keyboard","Strings","Woodwinds","Brass","Percussion","Conducting"] },
  MusicTech:      { label: "音乐科技与应用",    specs: ["MusicProduction","Composition","SoundDesign"] },
  ArtsManagement: { label: "艺术管理",         specs: ["StageManagement","TheatreManagement"] }
};

// 专业方向显示标签
const specLabels = {
  Musicology:"音乐学", MusicEducation:"音乐教育", MusicTherapy:"音乐治疗", MusicHistory:"音乐史",
  PopVocals:"流行演唱", ClassicalVocals:"古典演唱", Drama:"戏剧", Musical:"音乐剧",
  Keyboard:"键盘", Strings:"弦乐", Woodwinds:"木管", Brass:"铜管", Percussion:"打击乐",
  Conducting:"指挥", MusicProduction:"音乐制作", Composition:"作曲", SoundDesign:"声音设计",
  StageManagement:"舞台管理", TheatreManagement:"剧场管理"
};

// 专业方向 → 旧版主修名（用于学校匹配）
const specToOld = {
  Musicology:[], MusicEducation:["Music Education"], MusicTherapy:[], MusicHistory:[],
  PopVocals:["Voice","Jazz"], ClassicalVocals:["Voice"], Drama:[], Musical:[],
  Keyboard:["Piano"], Strings:["Violin"], Woodwinds:[], Brass:[], Percussion:[], Conducting:["Conducting"],
  MusicProduction:["Music Production"], Composition:["Composition"], SoundDesign:[],
  StageManagement:[], TheatreManagement:[]
};

const majorLabels = {
  Piano: "钢琴",
  Violin: "小提琴",
  Voice: "声乐",
  Composition: "作曲",
  Jazz: "爵士",
  "Music Production": "音乐制作",
  Conducting: "指挥",
  "Music Education": "音乐教育",
  // 攻读门类专业方向标签
  Musicology:"音乐学", MusicTherapy:"音乐治疗", MusicHistory:"音乐史",
  PopVocals:"流行演唱", ClassicalVocals:"古典演唱", Drama:"戏剧", Musical:"音乐剧",
  Keyboard:"键盘", Strings:"弦乐", Woodwinds:"木管", Brass:"铜管", Percussion:"打击乐",
  SoundDesign:"声音设计", StageManagement:"舞台管理", TheatreManagement:"剧场管理",
  PopKeyboard:"流行键盘", ClassicalKeyboard:"古典键盘",
  Viola:"中提琴", Cello:"大提琴", DoubleBass:"低音提琴", Guitar:"吉他",
  FlutePiccolo:"长笛、短笛", Oboe:"双簧管", Clarinet:"单簧管", Saxophone:"萨克斯", Bassoon:"巴松",
  Trumpet:"小号", Horn:"圆号", Trombone:"长号", Tuba:"大号"
};
const directUniversitySignals = [
  "University of Rochester",
  "Indiana University",
  "University of Cambridge",
  "Boston University",
  "Griffith University",
  "Nanyang Technological University",
  "Northwestern University",
  "Royal Holloway",
  "Seoul National University",
  "University of British Columbia",
  "University of California",
  "University of Huddersfield",
  "University of Michigan",
  "University of Toronto",
  "Johns Hopkins University",
  "University of Cincinnati",
  "Rice University",
  "NUS",
  "University of Sydney",
  "McGill University",
  "USC",
  "Yale",
  "UBC",
  "Toronto",
  "Queensland Conservatorium, Griffith",
  "Melbourne Conservatorium"
];
const programUrlOverrides = {
  juilliard: "https://www.juilliard.edu/music",
  rcm: "https://www.rcm.ac.uk/courses/",
  curtis: "https://www.curtis.edu/academics/degrees-diplomas/",
  guildhall: "https://www.gsmd.ac.uk/study-with-guildhall/music",
  ram: "https://www.ram.ac.uk/study",
  sibelius: "https://www.uniarts.fi/en/units/sibelius-academy/",
  mdw: "https://www.mdw.ac.at/studium/studienangebot/",
  berklee: "https://college.berklee.edu/majors",
  mcgill: "https://www.mcgill.ca/music/programs",
  nec: "https://necmusic.edu/programs/",
  usc: "https://music.usc.edu/programs/",
  "yong-siew-toh": "https://www.ystmusic.nus.edu.sg/admissions/",
  sydney: "https://www.sydney.edu.au/music/study-music.html"
};

function addSchool(seed) {
  schools.push({
    id: seed.id,
    name: seed.name,
    nameCn: seed.nameCn,
    country: seed.country,
    region: seed.region,
    city: seed.city,
    ranking: seed.ranking,
    rankingLabel: seed.rankingLabel || (seed.ranking <= 25 ? `QS Music 2026 #${seed.ranking}` : "QS Music 2026 #26-50"),
    location: seed.location || `${seed.city}，${seed.country}。${seed.type || "音乐学院/大学音乐学院"}，具体校区、导师和演出资源需官网核对。`,
    degrees: seed.degrees || ["Bachelor", "Master", "Diploma"],
    majors: seed.majors || commonMajors,
    tuitionUsd: seed.tuitionUsd,
    tuitionLabel: seed.tuitionLabel,
    language: {
      ielts: seed.ielts ?? 6.5,
      toefl: seed.toefl ?? 80,
      duolingo: seed.duolingo ?? null,
      note: seed.languageNote || "语言要求按学位、授课语言和签证路径核对；音乐学院常以 offer 条件为准。"
    },
    gpaBand: seed.gpaBand || "medium",
    gap: seed.gap || "neutral",
    gapText: seed.gapText || "可解释 Gap，但需要体现持续练习、作品集更新、比赛/演出或导师学习成果。",
    admissionRules: seed.admissionRules || "通常需要在线申请、学历材料、成绩单、推荐、个人陈述、语言成绩，以及按专业提交预筛视频、作品集或参加面试/试奏。",
    examContent: seed.examContent || "演奏/声乐方向通常要求多首不同时期曲目、视奏或面试；作曲、制作、爵士和教育方向会增加作品集、即兴、听辨、教学动机或技术项目审核。",
    curriculum: seed.curriculum || "主课、一对一导师、室内乐/合奏、理论、音乐史、职业发展、录音或跨学科项目。",
    duration: seed.duration || "本科多为 3-4 年；硕士多为 1-2 年；Diploma/Artist Diploma 按项目设置。",
    scholarships: seed.scholarships || "奖学金、助学金和低学费政策差异很大，需在申请季按官网最新页面核对。",
    selectivity: seed.selectivity || "high",
    auditionMode: seed.auditionMode || "live-or-recorded",
    institutionType: seed.institutionType,
    programsUrl: seed.programsUrl || seed.url,
    majorLinks: seed.majorLinks || {},
    sources: [
      ["QS Music 2026", "https://xuanxiao.org/en/rankings/qs/subject/music"],
      [seed.sourceLabel || "官网 / 招生入口", seed.url]
    ]
  });
}

[
  { id: "cnsmdp", name: "Conservatoire national supérieur de musique et de danse de Paris", nameCn: "巴黎国立高等音乐舞蹈学院 CNSMDP", country: "法国", lang: "french", region: "Europe", city: "Paris", ranking: 6, tuitionUsd: 1200, tuitionLabel: "法国公立体系学费较低，注册费和生活费另计", ielts: 0, toefl: 0, languageNote: "多数字段以法语能力为主，英语成绩不是主要门槛。", majors: classicalMajors, url: "https://www.conservatoiredeparis.fr/en/admissions", selectivity: "extreme", auditionMode: "live" },
  { id: "rcs", name: "Royal Conservatoire of Scotland", nameCn: "苏格兰皇家音乐学院 RCS", country: "英国", region: "UK", city: "Glasgow", ranking: 7, tuitionUsd: 33000, tuitionLabel: "国际生约 £25k-32k / 年，按课程浮动", ielts: 5.5, toefl: 72, majors: commonMajors, url: "https://www.rcs.ac.uk/apply/" },
  { id: "rncm", name: "Royal Northern College of Music", nameCn: "皇家北方音乐学院 RNCM", country: "英国", region: "UK", city: "Manchester", ranking: 8, tuitionUsd: 33000, tuitionLabel: "国际生约 £25k+ / 年，按课程浮动", ielts: 5.5, toefl: 72, majors: classicalMajors.concat(["Jazz"]), url: "https://www.rncm.ac.uk/study-here/how-to-apply/" },
  { id: "moscow-conservatory", name: "Moscow State Conservatory P. I. Tchaikovsky", nameCn: "莫斯科柴可夫斯基音乐学院", country: "俄罗斯", lang: "russian", region: "Europe", city: "Moscow", ranking: 10, tuitionUsd: 9000, tuitionLabel: "国际生学费按专业和授课语言核对", ielts: 0, toefl: 0, languageNote: "以俄语能力和专业考试为主。", majors: classicalMajors, url: "https://mosconsv.ru/en/" },
  { id: "dkdm", name: "Royal Danish Academy of Music", nameCn: "丹麦皇家音乐学院 DKDM", country: "丹麦", lang: "nordic", region: "Europe", city: "Copenhagen", ranking: 11, tuitionUsd: 15000, tuitionLabel: "非 EU/EEA 学费约 €13k+ / 年", ielts: 6, toefl: 80, majors: classicalMajors.concat(["Jazz"]), url: "https://english.dkdm.dk/Admission" },
  { id: "riam", name: "Royal Irish Academy of Music", nameCn: "爱尔兰皇家音乐学院 RIAM", country: "爱尔兰", lang: "english", region: "Europe", city: "Dublin", ranking: 12, tuitionUsd: 25000, tuitionLabel: "国际生约 €20k+ / 年，按课程核对", ielts: 6, toefl: 80, majors: classicalMajors, url: "https://www.riam.ie/study" },
  { id: "eastman", name: "Eastman School of Music, University of Rochester", nameCn: "伊斯曼音乐学院", country: "美国", region: "US", city: "Rochester", ranking: 15, tuitionUsd: 65000, tuitionLabel: "美国私立大学学费较高，奖助学金需同步核对", ielts: 6.5, toefl: 83, majors: commonMajors, url: "https://www.esm.rochester.edu/admissions/" },
  { id: "indiana-jacobs", name: "Indiana University Jacobs School of Music", nameCn: "印第安纳大学雅各布斯音乐学院", country: "美国", region: "US", city: "Bloomington", ranking: 16, tuitionUsd: 42000, tuitionLabel: "国际本科约 $40k+ / 年，按学分和校区费用浮动", ielts: 6.5, toefl: 79, majors: commonMajors, url: "https://music.indiana.edu/admissions/index.html" },
  { id: "liszt-academy", name: "Liszt Ferenc Academy of Music", nameCn: "李斯特音乐学院", country: "匈牙利", institutionType: "Conservatoire", lang: "hungarian", region: "Europe", city: "Budapest", ranking: 17, tuitionUsd: 9000, tuitionLabel: "国际生约 €6k-10k / 年，按专业核对", ielts: 0, toefl: 0, languageNote: "授课语言和专业不同，需核对英语或匈牙利语要求。", majors: classicalMajors.concat(["Jazz"]), url: "https://lfze.hu/en/admission" },
  { id: "nmh", name: "Norwegian Academy of Music", nameCn: "挪威音乐学院 NMH", country: "挪威", lang: "nordic", region: "Europe", city: "Oslo", ranking: 18, tuitionUsd: 25000, tuitionLabel: "非 EU/EEA 学费按项目核对，北欧生活成本较高", ielts: 6, toefl: 80, majors: classicalMajors.concat(["Jazz"]), url: "https://nmh.no/en/studies/admission" },
  { id: "trinity-laban", name: "Trinity Laban Conservatoire of Music and Dance", nameCn: "圣三一拉邦音乐舞蹈学院", country: "英国", region: "UK", city: "London", ranking: 20, tuitionUsd: 33000, tuitionLabel: "国际生约 £25k+ / 年，按课程浮动", ielts: 5.5, toefl: 72, majors: commonMajors, url: "https://www.trinitylaban.ac.uk/study/how-to-apply/" },
  { id: "cambridge-music", name: "University of Cambridge, Faculty of Music", nameCn: "剑桥大学音乐系", country: "英国", region: "UK", city: "Cambridge", ranking: 21, tuitionUsd: 46000, tuitionLabel: "国际本科约 £35k+ / 年，学院费和生活费另计", ielts: 7.5, toefl: 110, majors: ["Composition", "Music Education"], admissionRules: "综合大学路径，重视学术材料、面试、写作/作品集和学院录取要求。", examContent: "偏学术与创作研究，演奏可作为能力材料但不是所有路径的唯一核心。", url: "https://www.mus.cam.ac.uk/applicants" },
  { id: "gnesins", name: "The Gnesins Russian Academy of Music", nameCn: "格涅辛俄罗斯音乐学院", country: "俄罗斯", lang: "russian", region: "Europe", city: "Moscow", ranking: 22, tuitionUsd: 7000, tuitionLabel: "国际生学费按专业核对", ielts: 0, toefl: 0, languageNote: "通常以俄语和专业入学考试为主。", majors: classicalMajors.concat(["Jazz"]), url: "https://gnesin-academy.ru/en/" },
  { id: "chopin-university", name: "Chopin University of Music", nameCn: "肖邦音乐大学", country: "波兰", institutionType: "Conservatoire", lang: "polish", region: "Europe", city: "Warsaw", ranking: 23, tuitionUsd: 9000, tuitionLabel: "国际生约 €6k-10k / 年，按项目核对", ielts: 0, toefl: 0, languageNote: "需核对英语或波兰语授课路径。", majors: classicalMajors, url: "https://chopin.edu.pl/admission" },
  { id: "ucsi-music", name: "UCSI University Institute of Music", nameCn: "UCSI 大学音乐学院", country: "马来西亚", region: "Asia", city: "Kuala Lumpur", ranking: 24, tuitionUsd: 9500, tuitionLabel: "国际生约 $8k-12k / 年，按课程核对", ielts: 5.5, toefl: 60, majors: commonMajors, selectivity: "medium", url: "https://www.ucsiuniversity.edu.my/institute-of-music" },
  { id: "st-petersburg-conservatory", name: "St. Petersburg Conservatory", nameCn: "圣彼得堡音乐学院", country: "俄罗斯", lang: "russian", region: "Europe", city: "Saint Petersburg", ranking: 25, tuitionUsd: 7000, tuitionLabel: "国际生学费按专业核对", ielts: 0, toefl: 0, languageNote: "通常以俄语能力和专业考试为主。", majors: classicalMajors, url: "https://www.conservatory.ru/en" },
  { id: "boston-university-music", name: "Boston University School of Music", nameCn: "波士顿大学音乐学院", country: "美国", region: "US", city: "Boston", ranking: 26, tuitionUsd: 66000, tuitionLabel: "美国私立大学学费较高，按 BU 学费表核对", ielts: 7, toefl: 90, majors: commonMajors, url: "https://www.bu.edu/cfa/admissions/school-of-music/" },
  { id: "cnsmdl", name: "Conservatoire national supérieur musique et danse de Lyon", nameCn: "里昂国立高等音乐舞蹈学院 CNSMDL", country: "法国", lang: "french", region: "Europe", city: "Lyon", ranking: 26, tuitionUsd: 1200, tuitionLabel: "法国公立体系注册费较低，生活费另计", ielts: 0, toefl: 0, languageNote: "多数字段以法语能力和专业考试为主。", majors: classicalMajors.concat(["Jazz"]), url: "https://www.cnsmd-lyon.fr/en/admissions" },
  { id: "griffith-conservatorium", name: "Queensland Conservatorium, Griffith University", nameCn: "昆士兰音乐学院 Griffith", country: "澳大利亚", region: "Oceania", city: "Brisbane", ranking: 26, tuitionUsd: 33000, tuitionLabel: "国际生约 AUD 45k+ / 年，按课程核对", ielts: 6.5, toefl: 79, majors: commonMajors, selectivity: "medium", url: "https://www.griffith.edu.au/arts-education-law/queensland-conservatorium" },
  { id: "mahidol-music", name: "College of Music, Mahidol University", nameCn: "玛希隆大学音乐学院", country: "泰国", region: "Asia", city: "Nakhon Pathom", ranking: 26, tuitionUsd: 11000, tuitionLabel: "国际项目约 $8k-13k / 年，按课程核对", ielts: 5.5, toefl: 60, majors: commonMajors, selectivity: "medium", url: "https://www.music.mahidol.ac.th/" },
  { id: "ntu-music", name: "Nanyang Technological University Music Programmes", nameCn: "南洋理工大学音乐相关项目", country: "新加坡", region: "Asia", city: "Singapore", ranking: 26, tuitionUsd: 26000, tuitionLabel: "国际生按 NTU 学费表核对", ielts: 6.5, toefl: 90, majors: ["Music Production", "Composition", "Music Education"], admissionRules: "综合大学音乐/艺术科技相关路径，需按具体学院和项目核对作品集与学术要求。", url: "https://www.ntu.edu.sg/admissions" },
  { id: "northwestern-bienen", name: "Bienen School of Music, Northwestern University", nameCn: "西北大学 Bienen 音乐学院", country: "美国", region: "US", city: "Evanston", ranking: 26, tuitionUsd: 70000, tuitionLabel: "美国私立大学学费较高，按 Northwestern 学费表核对", ielts: 7.5, toefl: 100, majors: commonMajors, url: "https://www.music.northwestern.edu/admission" },
  { id: "royal-academy-aarhus", name: "Royal Academy of Music Aarhus/Aalborg", nameCn: "丹麦皇家音乐学院 Aarhus/Aalborg", country: "丹麦", lang: "nordic", region: "Europe", city: "Aarhus", ranking: 26, tuitionUsd: 15000, tuitionLabel: "非 EU/EEA 学费约 €13k+ / 年，按项目核对", ielts: 6, toefl: 80, majors: commonMajors, url: "https://musikkons.dk/en/admission/" },
  { id: "kmh-stockholm", name: "Royal College of Music in Stockholm", nameCn: "斯德哥尔摩皇家音乐学院 KMH", country: "瑞典", lang: "nordic", region: "Europe", city: "Stockholm", ranking: 26, tuitionUsd: 23000, tuitionLabel: "非 EU/EEA 学费约 SEK 250k+ / 年，按项目核对", ielts: 6.5, toefl: 90, majors: commonMajors, url: "https://www.kmh.se/in-english/education/admissions.html" },
  { id: "royal-holloway-music", name: "Royal Holloway, University of London Department of Music", nameCn: "伦敦大学皇家霍洛威音乐系", country: "英国", region: "UK", city: "Egham", ranking: 26, tuitionUsd: 31000, tuitionLabel: "国际生约 £24k+ / 年，按课程核对", ielts: 6.5, toefl: 88, majors: ["Composition", "Music Education", "Music Production"], admissionRules: "综合大学音乐系路径，偏学术、创作、研究和作品集/写作材料。", url: "https://www.royalholloway.ac.uk/research-and-teaching/departments-and-schools/music/" },
  { id: "snu-music", name: "Seoul National University College of Music", nameCn: "首尔大学音乐学院", country: "韩国", region: "Asia", city: "Seoul", ranking: 26, tuitionUsd: 7000, tuitionLabel: "国立大学学费相对低，国际生费用按学院核对", ielts: 6, toefl: 80, languageNote: "韩语或英语要求按项目核对，部分路径需要 TOPIK。", majors: classicalMajors, url: "https://music.snu.ac.kr/en" },
  { id: "melbourne-conservatorium", name: "Melbourne Conservatorium of Music", nameCn: "墨尔本大学音乐学院", country: "澳大利亚", region: "Oceania", city: "Melbourne", ranking: 26, tuitionUsd: 36000, tuitionLabel: "国际生约 AUD 50k+ / 年，按课程核对", ielts: 6.5, toefl: 79, majors: commonMajors, url: "https://finearts-music.unimelb.edu.au/study-with-us/music" },
  { id: "tokyo-geidai", name: "Tokyo University of the Arts", nameCn: "东京艺术大学音乐学部", country: "日本", region: "Asia", city: "Tokyo", ranking: 26, tuitionUsd: 6000, tuitionLabel: "国立大学学费较低，入学金和生活费另计", ielts: 0, toefl: 0, languageNote: "通常以日语能力、校内考试和专业考试为主。", majors: classicalMajors.concat(["Music Education"]), url: "https://admissions.geidai.ac.jp/en/" },
  { id: "mozarteum", name: "Mozarteum University Salzburg", nameCn: "萨尔茨堡莫扎特音乐大学", country: "奥地利", institutionType: "Conservatoire", lang: "german", region: "Europe", city: "Salzburg", ranking: 26, tuitionUsd: 1700, tuitionLabel: "公立大学学费较低，非 EU/EEA 需按政策核对", ielts: 0, toefl: 0, languageNote: "多数项目以德语能力和专业入学考试为主。", majors: classicalMajors.concat(["Music Education"]), url: "https://www.moz.ac.at/en/study/admission" },
  { id: "ubc-music", name: "University of British Columbia School of Music", nameCn: "英属哥伦比亚大学音乐学院 UBC", country: "加拿大", region: "Canada", city: "Vancouver", ranking: 26, tuitionUsd: 33000, tuitionLabel: "国际生约 CAD 40k+ / 年，按学分核对", ielts: 6.5, toefl: 90, majors: commonMajors, url: "https://music.ubc.ca/admissions/" },
  { id: "ucb-music", name: "University of California, Berkeley Department of Music", nameCn: "加州大学伯克利音乐系", country: "美国", region: "US", city: "Berkeley", ranking: 26, tuitionUsd: 50000, tuitionLabel: "州外/国际费用较高，按 UC Berkeley 学费表核对", ielts: 6.5, toefl: 80, majors: ["Composition", "Music Education", "Music Production"], admissionRules: "综合大学音乐系路径，重学术成绩、大学申请、作品/研究兴趣和课程匹配。", url: "https://music.berkeley.edu/undergraduate/" },
  { id: "huddersfield-music", name: "University of Huddersfield Music", nameCn: "哈德斯菲尔德大学音乐与音乐技术", country: "英国", region: "UK", city: "Huddersfield", ranking: 26, tuitionUsd: 24000, tuitionLabel: "国际生约 £18k-20k / 年，按课程核对", ielts: 6, toefl: 80, majors: ["Composition", "Music Production", "Music Education"], selectivity: "medium", url: "https://courses.hud.ac.uk/subjects/music-music-technology" },
  { id: "michigan-smt", name: "University of Michigan School of Music, Theatre & Dance", nameCn: "密歇根大学音乐、戏剧与舞蹈学院", country: "美国", region: "US", city: "Ann Arbor", ranking: 26, tuitionUsd: 60000, tuitionLabel: "国际/州外费用较高，按 UMich 学费表核对", ielts: 6.5, toefl: 88, majors: commonMajors, url: "https://smtd.umich.edu/admissions/" },
  { id: "toronto-music", name: "University of Toronto Faculty of Music", nameCn: "多伦多大学音乐学院", country: "加拿大", region: "Canada", city: "Toronto", ranking: 26, tuitionUsd: 43000, tuitionLabel: "国际生约 CAD 55k+ / 年，按项目核对", ielts: 6.5, toefl: 100, majors: commonMajors, url: "https://music.utoronto.ca/apply-admissions" },
  { id: "udk-berlin", name: "Berlin University of the Arts", nameCn: "柏林艺术大学 UdK", country: "德国", institutionType: "Conservatoire", lang: "german", region: "Europe", city: "Berlin", ranking: 26, tuitionUsd: 900, tuitionLabel: "德国公立体系学费低，注册费和生活费另计", ielts: 0, toefl: 0, languageNote: "多数音乐项目以德语和专业考试为主。", majors: commonMajors, url: "https://www.udk-berlin.de/en/studies/application/" },
  { id: "yale-music", name: "Yale School of Music", nameCn: "耶鲁音乐学院", country: "美国", region: "US", city: "New Haven", ranking: 26, tuitionUsd: 0, tuitionLabel: "研究生音乐项目通常全额学费奖学金，生活费另计", ielts: 7, toefl: 100, degrees: ["Master", "Diploma"], majors: classicalMajors, selectivity: "extreme", url: "https://music.yale.edu/admissions" },
  { id: "manhattan-school", name: "Manhattan School of Music", nameCn: "曼哈顿音乐学院", country: "美国", region: "US", city: "New York", ranking: 55, rankingLabel: "美国独立音乐学院常见申请校", tuitionUsd: 56000, tuitionLabel: "约 $56k+ / 年，纽约生活费另计", ielts: 6, toefl: 79, majors: commonMajors, url: "https://www.msmnyc.edu/admission/" },
  { id: "mannes", name: "Mannes School of Music", nameCn: "曼尼斯音乐学院", country: "美国", region: "US", city: "New York", ranking: 56, rankingLabel: "纽约独立音乐学院常见申请校", tuitionUsd: 57000, tuitionLabel: "约 $57k+ / 年，按 The New School 费用核对", ielts: 6.5, toefl: 92, majors: classicalMajors.concat(["Jazz"]), url: "https://www.newschool.edu/mannes/admission/" },
  { id: "peabody", name: "Peabody Institute of Johns Hopkins University", nameCn: "约翰霍普金斯皮博迪音乐学院", country: "美国", region: "US", city: "Baltimore", ranking: 57, rankingLabel: "美国传统音乐学院常见申请校", tuitionUsd: 63000, tuitionLabel: "约 $63k+ / 年，按 JHU Peabody 费用核对", ielts: 6.5, toefl: 79, majors: commonMajors, url: "https://peabody.jhu.edu/admissions/" },
  { id: "cleveland-institute", name: "Cleveland Institute of Music", nameCn: "克利夫兰音乐学院 CIM", country: "美国", region: "US", city: "Cleveland", ranking: 58, rankingLabel: "美国独立音乐学院常见申请校", tuitionUsd: 47000, tuitionLabel: "约 $47k+ / 年，生活费另计", ielts: 6, toefl: 79, majors: classicalMajors, url: "https://www.cim.edu/admissions" },
  { id: "sfcm", name: "San Francisco Conservatory of Music", nameCn: "旧金山音乐学院 SFCM", country: "美国", region: "US", city: "San Francisco", ranking: 59, rankingLabel: "美国独立音乐学院常见申请校", tuitionUsd: 55000, tuitionLabel: "约 $55k+ / 年，旧金山生活费较高", ielts: 6, toefl: 71, majors: commonMajors, url: "https://sfcm.edu/apply" },
  { id: "colburn", name: "Colburn School Conservatory of Music", nameCn: "科尔本音乐学院", country: "美国", region: "US", city: "Los Angeles", ranking: 60, rankingLabel: "美国精英型音乐学院常见申请校", tuitionUsd: 0, tuitionLabel: "Conservatory 通常提供全额学费奖学金，名额极少", ielts: 6.5, toefl: 79, majors: classicalMajors, selectivity: "extreme", url: "https://www.colburnschool.edu/conservatory/admissions/" },
  { id: "oberlin", name: "Oberlin Conservatory of Music", nameCn: "欧柏林音乐学院", country: "美国", region: "US", city: "Oberlin", ranking: 61, rankingLabel: "美国本科音乐学院常见申请校", tuitionUsd: 67000, tuitionLabel: "约 $67k+ / 年，按 Oberlin 费用核对", ielts: 7, toefl: 100, majors: commonMajors, url: "https://www.oberlin.edu/admissions-and-aid/conservatory" },
  { id: "cincinnati-ccm", name: "University of Cincinnati College-Conservatory of Music", nameCn: "辛辛那提大学音乐学院 CCM", country: "美国", region: "US", city: "Cincinnati", ranking: 62, rankingLabel: "美国综合大学音乐学院常见申请校", tuitionUsd: 33000, tuitionLabel: "国际/州外费用按 UC 学费表核对", ielts: 6.5, toefl: 80, majors: commonMajors, url: "https://ccm.uc.edu/admissions.html" },
  { id: "rice-shepherd", name: "Rice University Shepherd School of Music", nameCn: "莱斯大学 Shepherd 音乐学院", country: "美国", region: "US", city: "Houston", ranking: 63, rankingLabel: "美国精英大学音乐学院常见申请校", tuitionUsd: 62000, tuitionLabel: "约 $62k+ / 年，奖助学金需核对", ielts: 7, toefl: 100, majors: classicalMajors, selectivity: "extreme", url: "https://music.rice.edu/admission" },
  { id: "royal-welsh", name: "Royal Welsh College of Music & Drama", nameCn: "威尔士皇家音乐与戏剧学院", country: "英国", region: "UK", city: "Cardiff", ranking: 64, rankingLabel: "英国 conservatoire 常见申请校", tuitionUsd: 31000, tuitionLabel: "国际生约 £24k+ / 年，按课程核对", ielts: 5.5, toefl: 72, majors: commonMajors, url: "https://www.rwcmd.ac.uk/study/apply" },
  { id: "royal-birmingham", name: "Royal Birmingham Conservatoire", nameCn: "伯明翰皇家音乐学院", country: "英国", region: "UK", city: "Birmingham", ranking: 65, rankingLabel: "英国 conservatoire 常见申请校", tuitionUsd: 28000, tuitionLabel: "国际生约 £21k+ / 年，按课程核对", ielts: 6, toefl: 80, majors: commonMajors, url: "https://www.bcu.ac.uk/conservatoire" },
  { id: "leeds-conservatoire", name: "Leeds Conservatoire", nameCn: "利兹音乐学院", country: "英国", region: "UK", city: "Leeds", ranking: 66, rankingLabel: "英国现代音乐/爵士常见申请校", tuitionUsd: 26000, tuitionLabel: "国际生约 £20k+ / 年，按课程核对", ielts: 6, toefl: 80, majors: contemporaryMajors, selectivity: "medium", url: "https://www.leedsconservatoire.ac.uk/courses/how-to-apply/" },
  { id: "codarts", name: "Codarts Rotterdam", nameCn: "鹿特丹艺术大学 Codarts", country: "荷兰", lang: "dutch", region: "Europe", city: "Rotterdam", ranking: 67, rankingLabel: "欧洲 conservatoire 常见申请校", tuitionUsd: 13000, tuitionLabel: "非 EU/EEA 学费约 €11k+ / 年，按项目核对", ielts: 6, toefl: 80, majors: commonMajors, url: "https://www.codarts.nl/en/admission/" },
  { id: "conservatorium-amsterdam", name: "Conservatorium van Amsterdam", nameCn: "阿姆斯特丹音乐学院", country: "荷兰", lang: "dutch", region: "Europe", city: "Amsterdam", ranking: 68, rankingLabel: "欧洲 conservatoire 常见申请校", tuitionUsd: 13000, tuitionLabel: "非 EU/EEA 学费约 €11k+ / 年，按项目核对", ielts: 6, toefl: 80, majors: commonMajors, url: "https://www.conservatoriumvanamsterdam.nl/en/study/admission/" },
  { id: "royal-conservatoire-hague", name: "Royal Conservatoire The Hague", nameCn: "海牙皇家音乐学院", country: "荷兰", lang: "dutch", region: "Europe", city: "The Hague", ranking: 69, rankingLabel: "欧洲 conservatoire 常见申请校", tuitionUsd: 13000, tuitionLabel: "非 EU/EEA 学费约 €11k+ / 年，按项目核对", ielts: 6, toefl: 80, majors: commonMajors, url: "https://www.koncon.nl/en/apply" },
  { id: "zhdk", name: "Zurich University of the Arts", nameCn: "苏黎世艺术大学 ZHdK 音乐系", country: "瑞士", institutionType: "Conservatoire", lang: "german", region: "Europe", city: "Zurich", ranking: 70, rankingLabel: "欧洲艺术大学音乐申请校", tuitionUsd: 1800, tuitionLabel: "瑞士公立体系学费较低，生活成本高", ielts: 0, toefl: 0, languageNote: "德语/英语要求按项目核对。", majors: commonMajors, url: "https://www.zhdk.ch/en/degree-programmes/music" },
  { id: "hfm-munich", name: "University of Music and Theatre Munich", nameCn: "慕尼黑音乐与戏剧学院", country: "德国", institutionType: "Conservatoire", lang: "german", region: "Europe", city: "Munich", ranking: 71, rankingLabel: "德国 Musikhochschule 常见申请校", tuitionUsd: 900, tuitionLabel: "德国公立体系学费低，注册费和生活费另计", ielts: 0, toefl: 0, languageNote: "多数项目以德语和专业考试为主。", majors: classicalMajors.concat(["Jazz"]), url: "https://hmtm.de/en/studies/application/" },
  { id: "hanns-eisler", name: "Hochschule für Musik Hanns Eisler Berlin", nameCn: "柏林汉斯艾斯勒音乐学院", country: "德国", institutionType: "Conservatoire", lang: "german", region: "Europe", city: "Berlin", ranking: 72, rankingLabel: "德国 Musikhochschule 常见申请校", tuitionUsd: 900, tuitionLabel: "德国公立体系学费低，注册费和生活费另计", ielts: 0, toefl: 0, languageNote: "多数项目以德语和专业考试为主。", majors: classicalMajors, url: "https://www.hfm-berlin.de/en/studies/application/" },
  { id: "hfmt-cologne", name: "Hochschule für Musik und Tanz Köln", nameCn: "科隆音乐与舞蹈学院", country: "德国", institutionType: "Conservatoire", lang: "german", region: "Europe", city: "Cologne", ranking: 73, rankingLabel: "德国 Musikhochschule 常见申请校", tuitionUsd: 900, tuitionLabel: "德国公立体系学费低，注册费和生活费另计", ielts: 0, toefl: 0, languageNote: "多数项目以德语和专业考试为主。", majors: commonMajors, url: "https://www.hfmt-koeln.de/en/studies/application/" },
  { id: "hmt-leipzig", name: "University of Music and Theatre Leipzig", nameCn: "莱比锡音乐与戏剧学院", country: "德国", institutionType: "Conservatoire", lang: "german", region: "Europe", city: "Leipzig", ranking: 74, rankingLabel: "德国 Musikhochschule 常见申请校", tuitionUsd: 900, tuitionLabel: "德国公立体系学费低，注册费和生活费另计", ielts: 0, toefl: 0, languageNote: "多数项目以德语和专业考试为主。", majors: classicalMajors.concat(["Jazz"]), url: "https://www.hmt-leipzig.de/en/home" },
  { id: "santa-cecilia", name: "Conservatorio di Musica Santa Cecilia", nameCn: "罗马圣切契利亚音乐学院", country: "意大利", lang: "italian", region: "Europe", city: "Rome", ranking: 75, rankingLabel: "意大利 conservatorio 常见申请校", tuitionUsd: 2500, tuitionLabel: "公立音乐学院学费较低，按 ISEE/国际生政策核对", ielts: 0, toefl: 0, languageNote: "多以意大利语能力和专业考试为主。", majors: classicalMajors, url: "https://conservatoriosantacecilia.it/" },
  { id: "verdi-milan", name: "Conservatorio Giuseppe Verdi di Milano", nameCn: "米兰威尔第音乐学院", country: "意大利", lang: "italian", region: "Europe", city: "Milan", ranking: 76, rankingLabel: "意大利 conservatorio 常见申请校", tuitionUsd: 2500, tuitionLabel: "公立音乐学院学费较低，按专业和身份核对", ielts: 0, toefl: 0, languageNote: "多以意大利语能力和专业考试为主。", majors: classicalMajors.concat(["Music Education"]), url: "https://www.consmi.it/" },
  { id: "hem-geneva", name: "Haute école de musique Genève", nameCn: "日内瓦高等音乐学院 HEM", country: "瑞士", lang: "french", region: "Europe", city: "Geneva", ranking: 77, rankingLabel: "瑞士音乐学院常见申请校", tuitionUsd: 1800, tuitionLabel: "瑞士公立体系学费较低，生活成本高", ielts: 0, toefl: 0, languageNote: "法语/英语要求按项目核对。", majors: classicalMajors.concat(["Jazz"]), url: "https://www.hesge.ch/hem/en/studies/admissions" },
  { id: "hemu-lausanne", name: "Haute école de musique de Lausanne", nameCn: "洛桑高等音乐学院 HEMU", country: "瑞士", lang: "french", region: "Europe", city: "Lausanne", ranking: 78, rankingLabel: "瑞士音乐学院常见申请校", tuitionUsd: 1800, tuitionLabel: "瑞士公立体系学费较低，生活成本高", ielts: 0, toefl: 0, languageNote: "法语/英语要求按项目核对。", majors: classicalMajors.concat(["Jazz"]), url: "https://www.hemu.ch/en/admissions" },
  { id: "brussels-conservatoire", name: "Royal Conservatory of Brussels", nameCn: "布鲁塞尔皇家音乐学院", country: "比利时", lang: "french", region: "Europe", city: "Brussels", ranking: 79, rankingLabel: "欧洲 conservatoire 常见申请校", tuitionUsd: 4500, tuitionLabel: "学费按法语/荷语体系和身份核对", ielts: 0, toefl: 0, languageNote: "法语、荷语或英语要求按项目核对。", majors: classicalMajors.concat(["Jazz"]), url: "https://www.conservatoire.be/" },
  { id: "antwerp-conservatoire", name: "Royal Conservatoire Antwerp", nameCn: "安特卫普皇家音乐学院", country: "比利时", lang: "dutch", region: "Europe", city: "Antwerp", ranking: 80, rankingLabel: "欧洲 conservatoire 常见申请校", tuitionUsd: 4500, tuitionLabel: "学费按项目和身份核对", ielts: 6, toefl: 80, majors: commonMajors, url: "https://www.ap-arts.be/en/royal-conservatoire-antwerp" },
  { id: "knua-music", name: "Korea National University of Arts School of Music", nameCn: "韩国艺术综合大学音乐院", country: "韩国", region: "Asia", city: "Seoul", ranking: 81, rankingLabel: "亚洲音乐艺术院校常见申请校", tuitionUsd: 7000, tuitionLabel: "国立艺术大学学费相对低，按项目核对", ielts: 0, toefl: 0, languageNote: "韩语或英语要求按项目核对，可能需要 TOPIK。", majors: classicalMajors, url: "https://www.karts.ac.kr/en/" },
  { id: "hkapa", name: "Hong Kong Academy for Performing Arts", nameCn: "香港演艺学院 HKAPA", country: "中国香港", region: "Asia", city: "Hong Kong", ranking: 26, rankingLabel: "QS Music 2026 #26", tuitionUsd: 14000, tuitionLabel: "非本地生学费约 HKD 120k+ / 年，按课程核对", ielts: 6, toefl: 79, majors: commonMajors, url: "https://www.hkapa.edu/study" },
  { id: "taipei-arts-music", name: "Taipei National University of the Arts Department of Music", nameCn: "台北艺术大学音乐学系", country: "中国台湾", region: "Asia", city: "Taipei", ranking: 106, rankingLabel: "亚洲艺术大学音乐申请校", tuitionUsd: 6000, tuitionLabel: "学费按身份和项目核对", ielts: 0, toefl: 0, majors: classicalMajors.concat(["Music Education"]), url: "https://music.tnua.edu.tw/", languageNote: "中文授课为主，语言要求按招生简章核对。" },
].forEach(addSchool);

[
  { id: "boston-conservatory", name: "Boston Conservatory at Berklee", nameCn: "波士顿音乐学院 at Berklee", country: "美国", region: "US", city: "Boston", ranking: 82, rankingLabel: "美国音乐剧/古典/舞蹈常见申请校", tuitionUsd: 52000, tuitionLabel: "约 $52k+ / 年，按 Berklee 费用核对", ielts: 6, toefl: 72, majors: classicalMajors.concat(["Music Production"]), url: "https://bostonconservatory.berklee.edu/admissions", programsUrl: "https://bostonconservatory.berklee.edu/programs" },
  { id: "bard-conservatory", name: "Bard College Conservatory of Music", nameCn: "巴德音乐学院", country: "美国", region: "US", city: "Annandale-on-Hudson", ranking: 83, rankingLabel: "美国双学位音乐学院常见申请校", tuitionUsd: 65000, tuitionLabel: "约 $65k+ / 年，奖助学金需核对", ielts: 7, toefl: 100, majors: classicalMajors, url: "https://www.bard.edu/conservatory/admission/", institutionType: "University" },
  { id: "longy", name: "Longy School of Music of Bard College", nameCn: "朗基音乐学院", country: "美国", region: "US", city: "Cambridge", ranking: 84, rankingLabel: "美国独立音乐学院常见申请校", tuitionUsd: 52000, tuitionLabel: "约 $52k+ / 年，按项目核对", ielts: 6.5, toefl: 79, majors: commonMajors, url: "https://longy.edu/admissions/", programsUrl: "https://longy.edu/study/" },
  { id: "unt-music", name: "University of North Texas College of Music", nameCn: "北德克萨斯大学音乐学院 UNT", country: "美国", region: "US", city: "Denton", ranking: 85, rankingLabel: "爵士/音乐教育/制作常见申请校", tuitionUsd: 27000, tuitionLabel: "国际生约 $27k+ / 年，按学分核对", ielts: 6, toefl: 79, majors: commonMajors, url: "https://music.unt.edu/admissions/", institutionType: "University" },
  { id: "asu-music", name: "Arizona State University School of Music, Dance and Theatre", nameCn: "亚利桑那州立大学音乐、舞蹈与戏剧学院", country: "美国", region: "US", city: "Tempe", ranking: 86, rankingLabel: "美国综合大学音乐学院常见申请校", tuitionUsd: 36000, tuitionLabel: "国际生约 $36k+ / 年，按项目核对", ielts: 6.5, toefl: 80, majors: commonMajors, url: "https://musicdancetheatre.asu.edu/admission", institutionType: "University" },
  { id: "fsu-music", name: "Florida State University College of Music", nameCn: "佛罗里达州立大学音乐学院 FSU", country: "美国", region: "US", city: "Tallahassee", ranking: 87, rankingLabel: "美国音乐教育/表演常见申请校", tuitionUsd: 25000, tuitionLabel: "国际/州外费用按 FSU 学费表核对", ielts: 6.5, toefl: 80, majors: commonMajors, url: "https://music.fsu.edu/admissions/", institutionType: "University" },
  { id: "maryland-music", name: "University of Maryland School of Music", nameCn: "马里兰大学音乐学院", country: "美国", region: "US", city: "College Park", ranking: 88, rankingLabel: "美国综合大学音乐学院常见申请校", tuitionUsd: 41000, tuitionLabel: "国际/州外费用按 UMD 学费表核对", ielts: 7, toefl: 95, majors: commonMajors, url: "https://music.umd.edu/admissions", institutionType: "University" },
  { id: "temple-boyer", name: "Temple University Boyer College of Music and Dance", nameCn: "天普大学 Boyer 音乐与舞蹈学院", country: "美国", region: "US", city: "Philadelphia", ranking: 89, rankingLabel: "美国综合大学音乐学院常见申请校", tuitionUsd: 36000, tuitionLabel: "国际生约 $36k+ / 年，按项目核对", ielts: 6, toefl: 79, majors: commonMajors, url: "https://boyer.temple.edu/admissions", institutionType: "University" },
  { id: "musicians-institute", name: "Musicians Institute", nameCn: "音乐家学院 MI", country: "美国", region: "US", city: "Los Angeles", ranking: 90, rankingLabel: "现代音乐/制作常见申请校", tuitionUsd: 33000, tuitionLabel: "约 $33k+ / 年，按项目核对", ielts: 5.5, toefl: 60, majors: contemporaryMajors, selectivity: "medium", url: "https://www.mi.edu/admissions/international-students/", programsUrl: "https://www.mi.edu/programs/" },
  { id: "glenn-gould", name: "The Glenn Gould School", nameCn: "格伦古尔德学院", country: "加拿大", region: "Canada", city: "Toronto", ranking: 91, rankingLabel: "加拿大专业音乐学院常见申请校", tuitionUsd: 33000, tuitionLabel: "国际生费用按 Royal Conservatory 学费表核对", ielts: 6.5, toefl: 80, majors: classicalMajors, url: "https://www.rcmusic.com/ggs/admissions", programsUrl: "https://www.rcmusic.com/ggs/programs" },
  { id: "conservatoire-quebec", name: "Conservatoire de musique et d'art dramatique du Québec", nameCn: "魁北克音乐与戏剧学院网络", country: "加拿大", region: "Canada", city: "Quebec / Montreal", ranking: 92, rankingLabel: "加拿大公立 conservatoire 网络", tuitionUsd: 12000, tuitionLabel: "学费按校区、身份和项目核对", ielts: 0, toefl: 0, languageNote: "通常以法语能力和专业试奏为主。", majors: classicalMajors.concat(["Jazz"]), url: "https://www.conservatoire.gouv.qc.ca/en/admission/", programsUrl: "https://www.conservatoire.gouv.qc.ca/en/music-admission/admission-process/" },
  { id: "western-don-wright", name: "Western University Don Wright Faculty of Music", nameCn: "西安大略大学 Don Wright 音乐学院", country: "加拿大", region: "Canada", city: "London", ranking: 93, rankingLabel: "加拿大综合大学音乐学院常见申请校", tuitionUsd: 38000, tuitionLabel: "国际生约 CAD 50k+ / 年，按项目核对", ielts: 6.5, toefl: 83, majors: commonMajors, url: "https://music.uwo.ca/future_students/admissions.html", institutionType: "University" },
  { id: "wilfrid-laurier-music", name: "Wilfrid Laurier University Faculty of Music", nameCn: "劳里埃大学音乐学院", country: "加拿大", region: "Canada", city: "Waterloo", ranking: 94, rankingLabel: "加拿大音乐教育/表演常见申请校", tuitionUsd: 31000, tuitionLabel: "国际生约 CAD 40k+ / 年，按项目核对", ielts: 6.5, toefl: 83, majors: commonMajors, url: "https://www.wlu.ca/academics/faculties/faculty-of-music/index.html", institutionType: "University" },
  { id: "york-music-canada", name: "York University School of the Arts, Media, Performance & Design Music", nameCn: "约克大学音乐系", country: "加拿大", region: "Canada", city: "Toronto", ranking: 95, rankingLabel: "加拿大综合大学音乐/制作常见申请校", tuitionUsd: 34000, tuitionLabel: "国际生约 CAD 45k+ / 年，按项目核对", ielts: 6.5, toefl: 83, majors: ["Composition", "Jazz", "Music Production", "Music Education", "Voice", "Piano"], url: "https://ampd.yorku.ca/music/", institutionType: "University" },
  { id: "new-zealand-school-music", name: "New Zealand School of Music, Victoria University of Wellington", nameCn: "新西兰音乐学院 NZSM", country: "新西兰", region: "Oceania", city: "Wellington", ranking: 96, rankingLabel: "新西兰综合大学音乐学院常见申请校", tuitionUsd: 25000, tuitionLabel: "国际生约 NZD 40k+ / 年，按项目核对", ielts: 6, toefl: 80, majors: commonMajors, url: "https://www.wgtn.ac.nz/nzsm/study", institutionType: "University" },
  { id: "auckland-music", name: "University of Auckland School of Music", nameCn: "奥克兰大学音乐学院", country: "新西兰", region: "Oceania", city: "Auckland", ranking: 97, rankingLabel: "新西兰综合大学音乐学院常见申请校", tuitionUsd: 27000, tuitionLabel: "国际生约 NZD 45k+ / 年，按项目核对", ielts: 6, toefl: 80, majors: commonMajors, url: "https://www.auckland.ac.nz/en/creative/study-with-us/school-of-music.html", institutionType: "University" },
  { id: "monash-music", name: "Monash University Sir Zelman Cowen School of Music and Performance", nameCn: "蒙纳士大学音乐与表演学院", country: "澳大利亚", region: "Oceania", city: "Melbourne", ranking: 98, rankingLabel: "澳洲综合大学音乐学院常见申请校", tuitionUsd: 32000, tuitionLabel: "国际生约 AUD 48k+ / 年，按课程核对", ielts: 6.5, toefl: 79, majors: ["Jazz", "Music Production", "Composition", "Voice", "Piano", "Music Education"], url: "https://www.monash.edu/arts/sir-zelman-cowen-school-of-music-performance", institutionType: "University" },
  { id: "anu-music", name: "Australian National University School of Music", nameCn: "澳大利亚国立大学音乐学院", country: "澳大利亚", region: "Oceania", city: "Canberra", ranking: 99, rankingLabel: "澳洲综合大学音乐学院常见申请校", tuitionUsd: 33000, tuitionLabel: "国际生约 AUD 50k+ / 年，按课程核对", ielts: 6.5, toefl: 80, majors: commonMajors, url: "https://music.cass.anu.edu.au/study", institutionType: "University" },
  { id: "aim-australia", name: "Australian Institute of Music", nameCn: "澳大利亚音乐学院 AIM", country: "澳大利亚", region: "Oceania", city: "Sydney / Melbourne", ranking: 100, rankingLabel: "澳洲现代音乐/音乐剧常见申请校", tuitionUsd: 28000, tuitionLabel: "国际生约 AUD 40k+ / 年，按课程核对", ielts: 6, toefl: 60, majors: contemporaryMajors.concat(["Music Education"]), selectivity: "medium", url: "https://aim.edu.au/international-students/", programsUrl: "https://aim.edu.au/courses/" },
  { id: "yonsei-music", name: "Yonsei University College of Music", nameCn: "延世大学音乐学院", country: "韩国", region: "Asia", city: "Seoul", ranking: 107, rankingLabel: "韩国综合大学音乐学院常见申请校", tuitionUsd: 11000, tuitionLabel: "国际生学费按专业核对", ielts: 6, toefl: 80, languageNote: "韩语或英语要求按项目核对，可能需要 TOPIK。", majors: classicalMajors.concat(["Composition"]), url: "https://music.yonsei.ac.kr/", institutionType: "University" },
  { id: "hanyang-music", name: "Hanyang University College of Music", nameCn: "汉阳大学音乐学院", country: "韩国", region: "Asia", city: "Seoul", ranking: 108, rankingLabel: "韩国综合大学音乐学院常见申请校", tuitionUsd: 11000, tuitionLabel: "国际生学费按专业核对", ielts: 6, toefl: 80, languageNote: "韩语或英语要求按项目核对，可能需要 TOPIK。", majors: classicalMajors.concat(["Composition"]), url: "https://music.hanyang.ac.kr/", institutionType: "University" },
  { id: "nafa-music", name: "Nanyang Academy of Fine Arts School of Music", nameCn: "南洋艺术学院音乐学院 NAFA", country: "新加坡", region: "Asia", city: "Singapore", ranking: 109, rankingLabel: "新加坡艺术院校常见申请校", tuitionUsd: 16000, tuitionLabel: "国际生学费按 NAFA 课程核对", ielts: 5.5, toefl: 60, majors: commonMajors, selectivity: "medium", url: "https://www.nafa.edu.sg/courses/school-of-music" },
  { id: "lasalle-music", name: "LASALLE College of the Arts Music Programmes", nameCn: "拉萨尔艺术学院音乐项目", country: "新加坡", region: "Asia", city: "Singapore", ranking: 110, rankingLabel: "新加坡艺术院校常见申请校", tuitionUsd: 17000, tuitionLabel: "国际生学费按课程核对", ielts: 5.5, toefl: 60, majors: contemporaryMajors, selectivity: "medium", url: "https://www.lasalle.edu.sg/programmes/music" },
  { id: "esmuc", name: "Escola Superior de Música de Catalunya", nameCn: "加泰罗尼亚高等音乐学院 ESMUC", country: "西班牙", lang: "spanish", region: "Europe", city: "Barcelona", ranking: 111, rankingLabel: "欧洲 conservatoire 常见申请校", tuitionUsd: 8000, tuitionLabel: "学费按身份和项目核对", ielts: 0, toefl: 0, languageNote: "西班牙语/加泰罗尼亚语/英语要求按项目核对。", majors: commonMajors, url: "https://www.esmuc.cat/en/studies/admission/" },
  { id: "kug-graz", name: "University of Music and Performing Arts Graz", nameCn: "格拉茨音乐与表演艺术大学 KUG", country: "奥地利", institutionType: "Conservatoire", lang: "german", region: "Europe", city: "Graz", ranking: 112, rankingLabel: "奥地利专业音乐大学常见申请校", tuitionUsd: 1700, tuitionLabel: "公立大学学费较低，非 EU/EEA 按政策核对", ielts: 0, toefl: 0, languageNote: "德语/英语要求按项目和入学考试核对。", majors: commonMajors, url: "https://www.kug.ac.at/en/studies/admission" },
  { id: "estonian-academy", name: "Estonian Academy of Music and Theatre", nameCn: "爱沙尼亚音乐与戏剧学院", country: "爱沙尼亚", lang: "estonian", region: "Europe", city: "Tallinn", ranking: 113, rankingLabel: "欧洲 conservatoire 常见申请校", tuitionUsd: 9000, tuitionLabel: "非 EU/EEA 学费按项目核对", ielts: 5.5, toefl: 72, majors: commonMajors, url: "https://eamt.ee/en/admissions/" },
  { id: "prague-academy", name: "Academy of Performing Arts in Prague Music and Dance Faculty", nameCn: "布拉格表演艺术学院音乐与舞蹈学院 HAMU", country: "捷克", lang: "czech", region: "Europe", city: "Prague", ranking: 114, rankingLabel: "欧洲艺术学院常见申请校", tuitionUsd: 9000, tuitionLabel: "英语授课项目学费按专业核对", ielts: 5.5, toefl: 72, majors: classicalMajors.concat(["Jazz"]), url: "https://www.hamu.cz/en/admissions/" },
  { id: "cuhk-music", name: "Chinese University of Hong Kong Department of Music", nameCn: "香港中文大学音乐系", country: "中国香港", region: "Asia", city: "Hong Kong", ranking: 37, rankingLabel: "香港综合大学音乐学院", tuitionUsd: 18600, tuitionLabel: "非本地生学费约 HKD 145k+ / 年，按课程核对", ielts: 6.5, toefl: 79, majors: commonMajors, url: "https://www.music.cuhk.edu.hk/", languageNote: "需达到大学整体英语要求，音乐理论/史论方向更侧重英文阅读能力。", institutionType: "University" },
  { id: "hku-music", name: "University of Hong Kong Department of Music", nameCn: "香港大学音乐系", country: "中国香港", region: "Asia", city: "Hong Kong", ranking: 38, rankingLabel: "香港综合大学音乐学院", tuitionUsd: 22000, tuitionLabel: "非本地生学费约 HKD 171k+ / 年，按课程核对", ielts: 6.5, toefl: 93, majors: classicalMajors, url: "https://www.music.hku.hk/", languageNote: "英语教学为主，需满足大学入学英语要求。", institutionType: "University" },
  { id: "hkbu-music", name: "Hong Kong Baptist University Department of Music", nameCn: "香港浸会大学音乐系", country: "中国香港", region: "Asia", city: "Hong Kong", ranking: 55, rankingLabel: "香港综合大学音乐学院", tuitionUsd: 18000, tuitionLabel: "非本地生学费约 HKD 140k+ / 年，按课程核对", ielts: 6, toefl: 79, majors: commonMajors, url: "https://mus.hkbu.edu.hk/", languageNote: "英语教学为主。", institutionType: "University" },
  { id: "eduhk-music", name: "Education University of Hong Kong Department of Cultural and Creative Arts", nameCn: "香港教育大学文化与创意艺术学系（音乐）", country: "中国香港", region: "Asia", city: "Hong Kong", ranking: 70, rankingLabel: "香港教育大学创意艺术专业常见申请校", tuitionUsd: 18000, tuitionLabel: "非本地生学费约 HKD 140k+ / 年，按课程核对", ielts: 6, toefl: 80, majors: classicalMajors.concat(["Music Education"]), url: "https://www.eduhk.hk/", languageNote: "音乐教育方向为主，英语教学。", institutionType: "University" },
  { id: "must-music", name: "Macau University of Science and Technology Faculty of Humanities and Arts", nameCn: "澳门科技大学人文艺术学院音乐学", country: "中国澳门", region: "Asia", city: "Macau", ranking: 100, rankingLabel: "澳门综合大学音乐申请校", tuitionUsd: 15000, tuitionLabel: "国际生学费约 MOP 120k+ / 年，按课程核对", ielts: 5.5, toefl: 72, majors: classicalMajors.concat(["Music Education"]), url: "https://www.must.edu.mo/", languageNote: "中文授课为主，部分课程英语授课。", institutionType: "University" },
].forEach(addSchool);

function officialUrl(school) {
  if (school.programsUrl) return school.programsUrl;
  if (school.url) return school.url;
  const source = school.sources.find(([label]) => /course|study|program|admission|apply|music/i.test(label)) || school.sources[0];
  return source?.[1] || "#";
}

function inferInstitutionType(school) {
  if (school.institutionType) return school.institutionType;
  const haystack = `${school.name} ${school.nameCn}`;
  if (directUniversitySignals.some((signal) => haystack.includes(signal))) return "University";
  if (/Department of Music|Faculty of Music|School of Music,|College of Music,|University of California|University of Michigan|University of Toronto|University of British Columbia/.test(haystack)) return "University";
  return "Conservatoire";
}

function normaliseSchools() {
  schools.forEach((school) => {
    school.institutionType = inferInstitutionType(school);
    if (programUrlOverrides[school.id]) school.programsUrl = programUrlOverrides[school.id];
    school.programsUrl = officialUrl(school);
    school.majorLinks = school.majorLinks || {};
    // Extract abbreviation from Chinese name and create a clean version
    const last = school.nameCn.split(' ').pop();
    if (/^[A-Z]{2,}$/.test(last)) {
      school.abbr = last;
      school.nameCnClean = school.nameCn.slice(0, -last.length - 1);
    } else {
      school.abbr = '';
      school.nameCnClean = school.nameCn;
    }
  });
}

normaliseSchools();

const state = {
  selectedId: null,
  focusDetail: false,
  compare: new Set(),
  results: []
};
let origLayout = null;

const form = document.querySelector("#studentForm");
const workspace = document.querySelector(".workspace");
const resultsPanel = document.querySelector(".results-panel");
const contentGrid = document.querySelector(".content-grid");
const list = document.querySelector("#schoolList");
const detail = document.querySelector("#detailPanel");
const insightStrip = document.querySelector("#insightStrip");
const sortBy = document.querySelector("#sortBy");
const budget = document.querySelector("#budget");
const budgetOutput = document.querySelector("#budgetOutput");
const compareButton = document.querySelector("#compareButton");
const compareCount = document.querySelector("#compareCount");
const compareDialog = document.querySelector("#compareDialog");
const compareTable = document.querySelector("#compareTable");
const closeCompare = document.querySelector("#closeCompare");

function getProfile() {
  return {
    category: form.category ? form.category.value : "Any",
    instrument: form.instrument ? form.instrument.value : "Any",
    degree: form.degree.value,
    major: form.major.value,
    region: form.region.value,
    institutionType: form.institutionType.value,
    budget: Number(form.budget.value),
    ielts: Number(form.ielts.value),
    gpa: Number(form.gpa.value),
    gapNeeded: form.gapNeeded.checked,
    scholarship: form.scholarship.checked,
   prescreenReady: form.prescreenReady.checked
    ,europeLang: form.europeLang ? form.europeLang.value : "Any"
  };
}

function money(value) {
  if (value === 0) return "$0";
  return `$${Math.round(value / 1000)}k`;
}

function gpaScore(profile, school) {
  const target = school.gpaBand === "high" ? 88 : school.gpaBand === "medium" ? 80 : 72;
  if (profile.gpa >= target) return 12;
  if (profile.gpa >= target - 5) return 7;
  return 2;
}

function scoreSchool(school, profile) {
  let score = 20;
  const reasons = [];
  const cautions = [];

  if (school.degrees.includes(profile.degree)) {
    score += 14;
    reasons.push("阶段匹配");
  } else {
    score -= 25;
    cautions.push("该阶段不在种子库项目内");
  }

  // 攻读门类 + 专业方向 + 乐器匹配
  let majorMatch = false;
  const m = profile.major;
  const inst = profile.instrument;
  if (m !== "Any") {
    // Check instrument-level match first
    if (inst && inst !== "Any" && instrumentToOld[inst]) {
      majorMatch = instrumentToOld[inst].some(function(o) { return school.majors.includes(o); });
    }
    // Fall back to specialization-level match
    if (!majorMatch) {
      if (school.majors.includes(m)) {
        majorMatch = true;
      } else if (specToOld[m]) {
        majorMatch = specToOld[m].some(function(old) { return school.majors.includes(old); });
      }
    }
  } else {
    majorMatch = true;
  }
  if (majorMatch) {
    score += 18;
    reasons.push("专业方向匹配");
  } else {
    score -= 22;
    cautions.push("主修覆盖度弱");
  }

  if (school.tuitionUsd <= profile.budget) {
    score += 12;
    reasons.push("预算内");
  } else if (school.tuitionUsd <= profile.budget + 15000) {
    score += 4;
    cautions.push("学费略超预算");
  } else {
    score -= 12;
    cautions.push("预算压力较大");
  }

  if (profile.ielts >= school.language.ielts || school.language.ielts === 0) {
    score += 10;
    reasons.push("语言达标或非英语主门槛");
  } else if (profile.ielts + 0.5 >= school.language.ielts) {
    score += 3;
    cautions.push("语言需再提高 0.5 分左右");
  } else {
    score -= 10;
    cautions.push("语言差距明显");
  }

  score += gpaScore(profile, school);
 
   // European language scoring
   if (school.lang && profile.europeLang && profile.europeLang !== "Any") {
     if (school.lang === profile.europeLang) {
       score += 12;
       reasons.push("授课语言匹配");
     } else {
       score -= 10;
       cautions.push("授课语言不匹配");
     }
   }

  if (profile.gapNeeded) {
    if (school.gap === "friendly") {
      score += 10;
      reasons.push("Gap 路径友好");
    } else if (school.gap === "neutral") {
      score += 2;
      cautions.push("Gap 需解释成长成果");
    }
  }

  if (profile.scholarship) {
    if (school.tuitionUsd === 0) {
      score += 14;
      reasons.push("学费奖学金优势突出");
    } else if (school.tuitionUsd < 25000) {
      score += 10;
      reasons.push("低学费压力较小");
    } else {
      score -= 4;
      cautions.push("奖学金竞争或成本需重点核对");
    }
  }

  if (!profile.prescreenReady && ["extreme", "high"].includes(school.selectivity)) {
    score -= 8;
    cautions.push("预筛材料需要尽快补齐");
  }

  const rankBoost = school.ranking <= 5 ? 8 : school.ranking <= 20 ? 5 : school.ranking <= 40 ? 3 : 0;
  score += rankBoost;

  return {
    ...school,
    score: Math.max(0, Math.min(100, Math.round(score))),
    reasons: reasons.slice(0, 3),
    cautions: cautions.slice(0, 3)
  };
}

function sortResults(results) {
  const mode = sortBy.value;
  const sorted = [...results];
  if (mode === "rank") sorted.sort((a, b) => a.ranking - b.ranking);
  if (mode === "tuition") sorted.sort((a, b) => a.tuitionUsd - b.tuitionUsd);
  if (mode === "language") sorted.sort((a, b) => a.language.ielts - b.language.ielts);
  if (mode === "score") sorted.sort((a, b) => b.score - a.score || a.ranking - b.ranking);
  return sorted;
}



function schoolAbbr(nameCn) {
  const last = nameCn.split(' ').pop();
  if (/^[A-Z]{2,}$/.test(last)) return last;
  return '';
}

function renderInsights(results, profile) {
  const best = results[0];
  const budgetMatches = results.filter((school) => school.tuitionUsd <= profile.budget).length;
  const languageMatches = results.filter((school) => profile.ielts >= school.language.ielts || school.language.ielts === 0).length;
  const gapMatches = results.filter((school) => school.gap === "friendly").length;
  const regionLabel = profile.region === "Any" ? "全部地区" : document.querySelector(`#region option[value="${profile.region}"]`)?.textContent || "当前地区";
  const typeLabel = profile.institutionType === "Any" ? "" : ` · ${institutionTypeLabel(profile.institutionType)}`;

  insightStrip.innerHTML = [
    ["推荐院校", `${results.length}`, `${regionLabel}${typeLabel}候选数`],
    ["最佳匹配", best ? `${best.score}%` : "0", best ? best.nameCn : "暂无"],
    ["预算内", `${budgetMatches}`, `年度预算 ${money(profile.budget)}`],
    ["语言达标", `${languageMatches}`, `IELTS ${profile.ielts} 可覆盖`],
    ["Gap 友好", `${gapMatches}`, "含预备或衔接路径"]
  ]
    .slice(0, 4)
    .map(([label, value, caption]) => `<div class="stat"><strong>${value}</strong><span>${label} · ${caption}</span></div>`)
    .join("");
}

function renderList(results) {
  list.className = `school-list${state.focusDetail ? " compact-list" : ""}`;

  if (!results.length) {
    list.innerHTML = `<div class="empty-state">当前条件没有匹配结果。可以放宽预算、地区、学校类型或主修方向后再筛选。</div>`;
    detail.className = "detail-panel empty";
    detail.textContent = "请选择一所院校查看详情";
    return;
  }

  if (!results.some((school) => school.id === state.selectedId)) {
    state.selectedId = results[0].id;
  }

  // In compact mode, put the selected school first; others keep match-order
  let orderedResults = results;
  if (state.focusDetail && state.selectedId) {
    const idx = results.findIndex((s) => s.id === state.selectedId);
    if (idx > 0) {
      orderedResults = [results[idx], ...results.slice(0, idx), ...results.slice(idx + 1)];
    }
  }

  list.innerHTML = orderedResults
    .map((school) => {
      const active = school.id === state.selectedId ? " active" : "";
      const compared = state.compare.has(school.id) ? "已加入" : "加入对比";
      const reasonText = [...school.reasons, ...school.cautions].slice(0, 4).join(" / ") || "建议查看详情核对专业要求";
      return `
        <article class="school-card${active}" data-id="${school.id}">
          <header>
            <div>
              <h3>${school.nameCnClean}</h3>
              <p class="subline"><span class="subline-en">${school.name} · ${school.city}, ${school.country}</span><span class="subline-abbr">${school.abbr}</span></p>
            </div>
            <div class="score-badge" style="--score:${school.score}%">${school.score}</div>
          </header>
          <div class="meta-row">
            <span class="pill gold">${school.rankingLabel}</span>
            <span class="pill">${institutionTypeLabel(school.institutionType)}</span>
            <span class="pill">${school.tuitionLabel}</span>
            <span class="pill ${school.language.ielts > 6.5 ? "warn" : ""}">IELTS ${school.language.ielts || "德语/项目语言"}</span>
            <span class="pill">${school.auditionMode === "live" ? "现场考试优先" : "可现场/录制"}</span>
          </div>
          <div class="fit-row">
            <p class="fit-reasons">${reasonText}</p>
            <div class="card-actions">
              <button type="button" class="secondary" data-action="compare" data-id="${school.id}">${compared}</button>
              <button type="button" data-action="detail" data-id="${school.id}">详情</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDetail(school) {
  if (!school) return;
  detail.className = "detail-panel";
 detail.innerHTML = `
   <button id="expandListButton" type="button" class="ghost-button expand-list-button" ${state.focusDetail ? "" : "hidden"}>展开列表</button>
   <button id="mobileDetailBack" type="button" class="mobile-detail-back">← 返回列表</button>
   <div class="detail-head">
      <div>
        <p class="eyebrow">${school.country} · ${school.city}</p>
        <h3>${school.nameCnClean}</h3>
        <p class="subline">${school.name}</p>
      </div>
      <span class="rank-chip">${school.rankingLabel}</span>
    </div>

    <div class="meta-row">
      <span class="pill">${school.degrees.join(" / ")}</span>
      <span class="pill">${institutionTypeLabel(school.institutionType)}</span>
      <span class="pill">${school.majors.slice(0, 4).join(" / ")}</span>
      <span class="pill gold">${school.tuitionLabel}</span>
    </div>

    ${section("位置", school.location)}
    ${section("招生条例", school.admissionRules)}
    ${section("考学内容", school.examContent)}
    ${renderMajorLinks(school)}
    ${renderLanguageSection(school)}
    ${section("Gap 要求", school.gapText)}
    ${section("专业课程与学制", `${school.curriculum} ${school.duration}`)}
    ${section("奖学金 / 成本提示", school.scholarships)}

    <section class="detail-section">
      <h4>来源</h4>
      <div class="source-links">
        ${school.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
      </div>
    </section>
  `;
}

function section(title, body) {
  return `
    <section class="detail-section">
      <h4>${title}</h4>
      <p>${body}</p>
    </section>
  `;
}

function renderLanguageSection(school) {
  return `
    <section class="detail-section language-section">
      <h4>语言成绩</h4>
      <div class="language-grid">
        <div class="language-score">
          <span>IELTS</span>
          <strong>${school.language.ielts || "按项目语言"}</strong>
        </div>
        <div class="language-score">
          <span>TOEFL</span>
          <strong>${school.language.toefl || "不作为主要门槛"}</strong>
        </div>
      </div>
      <p class="detail-note">${school.language.note}</p>
    </section>
  `;
}

function institutionTypeLabel(type) {
  return type === "University" ? "综合类大学音乐学院" : "音乐学院 / 专门艺术院校";
}

function renderMajorLinks(school) {
  const links = school.majors
    .map((major) => {
      const url = school.majorLinks[major] || school.programsUrl;
      return `<a href="${url}" target="_blank" rel="noreferrer">${majorLabels[major] || major}</a>`;
    })
    .join("");

  return `
    <section class="detail-section">
      <h4>专业官网入口</h4>
      <p>以下链接优先指向该校官方课程/专业页；如果学校没有公开细分专业页，则跳转官方招生入口。</p>
      <div class="program-links">${links}</div>
    </section>
  `;
}

function renderCompare() {
  const selected = schools.filter((school) => state.compare.has(school.id));
  compareCount.textContent = selected.length;

  if (!selected.length) {
    compareTable.innerHTML = `<div class="empty-state">还没有加入对比的院校。</div>`;
    return;
  }

  compareTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>院校</th>
          <th>地区</th>
          <th>排名</th>
          <th>类型</th>
          <th>学费</th>
          <th>语言</th>
          <th>适配点</th>
        </tr>
      </thead>
      <tbody>
        ${selected
          .map((school) => {
            const scored = state.results.find((item) => item.id === school.id) || school;
            return `
              <tr>
                <td><strong>${school.nameCnClean}</strong><br>${school.name}</td>
                <td>${school.city}, ${school.country}</td>
                <td>${school.rankingLabel}</td>
                <td>${institutionTypeLabel(school.institutionType)}</td>
                <td>${school.tuitionLabel}</td>
                <td>IELTS ${school.language.ielts || "项目语言"}<br>${school.language.note}</td>
                <td>${scored.score || "-"} 分<br>${(scored.reasons || []).join(" / ")}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

let prevFocusDetail = false;

function animateColumns(s0, s1, l0, l1, wsTotal, rpPad, duration, done) {
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const e = 1 - Math.pow(1 - t, 3);
    const side = Math.round(s0 + (s1 - s0) * e);
    const listW = Math.round(l0 + (l1 - l0) * e);
    workspace.style.gridTemplateColumns = side + 'px ' + (wsTotal - side - 18) + 'px';
    const cgW = (wsTotal - side - 18) - rpPad;
    contentGrid.style.gridTemplateColumns = listW + 'px ' + (cgW - listW - 18) + 'px';
    if (t < 1) requestAnimationFrame(tick);
    else done();
  }
  requestAnimationFrame(tick);
}

function refresh() {
  const profile = getProfile();
  budgetOutput.textContent = money(profile.budget);
  const regionalSchools = schools.filter((school) => {
    const regionMatch = profile.region === "Any" || school.region === profile.region;
    const typeMatch = profile.institutionType === "Any" || school.institutionType === profile.institutionType;
    const langMatch = profile.europeLang === "Any" || !school.lang || school.lang === profile.europeLang;
    return regionMatch && typeMatch && langMatch;
  });
  const scored = regionalSchools.map((school) => scoreSchool(school, profile));
  state.results = sortResults(scored).filter((school) => school.score >= 25);
  const focusToggled = state.focusDetail !== prevFocusDetail;
  prevFocusDetail = state.focusDetail;
  const doUpdate = () => {
    renderInsights(state.results, profile);
    renderList(state.results);
    renderDetail(state.results.find((school) => school.id === state.selectedId));
    renderCompare();
  };
  if (focusToggled) {
    const sideEl = workspace.querySelector('.profile-panel');
    const contEl = workspace.querySelector('.results-panel');
    const listEl = contentGrid.querySelector('.school-list');
    const detEl = contentGrid.querySelector('.detail-panel');
    const oldSide = sideEl.offsetWidth;
    const oldCont = contEl.offsetWidth;
    const oldList = listEl.offsetWidth;
    const oldDet = detEl.offsetWidth;
    // Freeze both grids at exact current pixel widths
    const wsFrozen = oldSide + 18 + oldCont;
    const cgFrozen = oldList + 18 + oldDet;
    workspace.style.gridTemplateColumns = oldSide + 'px ' + oldCont + 'px';
    contentGrid.style.gridTemplateColumns = oldList + 'px ' + oldDet + 'px';
    workspace.classList.toggle("detail-focus", state.focusDetail);
    contentGrid.classList.toggle("detail-focus", state.focusDetail);
    // Calculate targets based on the frozen totals
    const isDetail = state.focusDetail;
    let newSide, newCont, newList, newDet;
    if (isDetail) {
      newSide = 260;
      newList = 210;
    } else {
      // Expand: animate back to the original layout captured at page load
      newSide = origLayout.side;
      newList = origLayout.list;
    }
    newCont = wsFrozen - newSide - 18;
    newDet = cgFrozen - newList - 18;
    doUpdate();
    const rpPad = oldCont - cgFrozen;
    animateColumns(oldSide, newSide, oldList, newList, wsFrozen, rpPad, 2000, () => {
      if (isDetail) {
        workspace.style.gridTemplateColumns = newSide + 'px 1fr';
        contentGrid.style.gridTemplateColumns = newList + 'px 1fr';
      } else {
        workspace.style.gridTemplateColumns = '';
        contentGrid.style.gridTemplateColumns = '';
      }
    });
  } else {
    if (state.focusDetail) {
      // Compact mode: frosted-glass blur + FLIP list items
      detail.style.transition = 'none';
      detail.style.filter = 'blur(0px) opacity(1)';
      const oldPositions = new Map();
      list.querySelectorAll('.school-card').forEach(card => {
        oldPositions.set(card.dataset.id, card.getBoundingClientRect().top);
      });
      void detail.offsetHeight;
      detail.style.transition = 'filter 0.8s ease, opacity 0.8s ease';
      detail.style.filter = 'blur(32px) opacity(0.15)';
      setTimeout(() => {
        doUpdate();
        requestAnimationFrame(() => {
          detail.style.transition = 'filter 2.5s ease, opacity 2.5s ease';
          detail.style.filter = 'blur(0px) opacity(1)';
          requestAnimationFrame(() => {
            list.querySelectorAll('.school-card').forEach(card => {
              const oldTop = oldPositions.get(card.dataset.id);
              if (oldTop !== undefined) {
                const newRect = card.getBoundingClientRect();
                const diff = oldTop - newRect.top;
                if (Math.abs(diff) > 1) {
                  card.style.transform = 'translateY(' + diff + 'px)';
                  card.style.transition = 'none';
                  requestAnimationFrame(() => {
                    card.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    card.style.transform = 'translateY(0)';
                    setTimeout(() => { card.style.transition = ''; card.style.transform = ''; }, 800);
                  });
                }
              }
            });
          });
        });
      }, 250);
    } else {
      // Non-compact: existing fade
      const fadePanels = [insightStrip, contentGrid];
      if (refresh._fadeTimer) clearTimeout(refresh._fadeTimer);
      fadePanels.forEach(el => { el.style.opacity = '0'; });
      refresh._fadeTimer = setTimeout(() => {
        doUpdate();
        requestAnimationFrame(() => {
          fadePanels.forEach(el => { el.style.opacity = '1'; });
        });
        refresh._fadeTimer = null;
      }, 700);
    }
  }

  // Capture original layout on first run (page load)
  if (refresh._firstRenderDone === undefined) {
    refresh._firstRenderDone = true;
    origLayout = {
      side: document.querySelector('.profile-panel').offsetWidth,
      list: document.querySelector('.school-list').offsetWidth
    };
  }
}

form.addEventListener("input", refresh);
sortBy.addEventListener("change", refresh);

/* ── 攻读门类 → 专业方向 联动 ── */
function updateMajorOptions() {
  const cat = document.getElementById('category').value;
  const sel = document.getElementById('major');
  const prev = sel.value;
  sel.innerHTML = '<option value=\"Any\">不限方向</option>';
  if (cat !== "Any" && categorySpecs[cat]) {
    categorySpecs[cat].specs.forEach(function(s) {
      var o = document.createElement('option');
      o.value = s;
      o.textContent = specLabels[s] || s;
      sel.appendChild(o);
    });
  }
  if ([].slice.call(sel.options).some(function(o) { return o.value === prev; })) sel.value = prev;
  updateInstrumentOptions();
}

/* ── 专业方向 → 具体乐器/方向 联动 ── */
function updateInstrumentOptions() {
  var major = document.getElementById('major').value;
  var label = document.getElementById('instrumentLabel');
  var sel = document.getElementById('instrument');
  var prev = sel.value;
  sel.innerHTML = '<option value=\"Any\">不限</option>';
  if (instrumentSpecs[major]) {
    label.style.display = '';
    instrumentSpecs[major].items.forEach(function(s) {
      var o = document.createElement('option');
      o.value = s;
      o.textContent = instrumentLabels[s] || s;
      sel.appendChild(o);
    });
  } else {
    label.style.display = 'none';
  }
  if ([].slice.call(sel.options).some(function(o) { return o.value === prev; })) sel.value = prev;
}

var categoryEl = document.getElementById('category');
if (categoryEl) {
  categoryEl.addEventListener('change', updateMajorOptions);
  updateMajorOptions();
}
var majorEl = document.getElementById('major');
if (majorEl) {
  majorEl.addEventListener('change', updateInstrumentOptions);
}

list.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".school-card");

  if (button?.dataset.action === "compare") {
    const id = button.dataset.id;
    if (state.compare.has(id)) state.compare.delete(id);
    else state.compare.add(id);
    refresh();
    return;
  }

 if (button?.dataset.action === "detail") {
   state.selectedId = button.dataset.id;
   state.focusDetail = true;
   const isMobile = window.innerWidth <= 760;
   if (isMobile) {
     state.focusDetail = false;
     showMobileDetail();
   }
   refresh();
   return;
 }

  const id = button?.dataset.id || card?.dataset.id;
 if (id) {
   state.selectedId = id;
   state.focusDetail = true;
   const isMobile = window.innerWidth <= 760;
   if (isMobile) {
     state.focusDetail = false;
     showMobileDetail();
   }
   refresh();
 }
});

detail.addEventListener("click", (event) => {
  if (event.target.closest("#expandListButton")) {
    state.focusDetail = false;
    refresh();
  }
});

compareButton.addEventListener("click", () => {
  renderCompare();
  compareDialog.showModal();
});

closeCompare.addEventListener("click", () => {
  compareDialog.style.transition = 'opacity 0.3s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
  compareDialog.style.opacity = '0';
  compareDialog.style.transform = 'translateY(24px) scale(0.96)';
  setTimeout(() => {
    compareDialog.close();
    compareDialog.style.transition = '';
    compareDialog.style.opacity = '';
    compareDialog.style.transform = '';
  }, 1400);
});

budget.addEventListener("input", () => {
  budgetOutput.textContent = money(Number(budget.value));
});

refresh();

/* ── Mobile helpers ── */
function showMobileDetail() {
  const overlay = document.getElementById('mobileDetailOverlay');
  if (!overlay) return;
  detail.classList.remove('mobile-closing');
  overlay.classList.add('open');
  detail.classList.add('mobile-open');
  document.body.style.overflow = 'hidden';
}

function hideMobileDetail() {
  const overlay = document.getElementById('mobileDetailOverlay');
  if (!overlay) return;
  detail.classList.add('mobile-closing');
  overlay.classList.remove('open');
  setTimeout(() => {
    detail.classList.remove('mobile-open', 'mobile-closing');
    document.body.style.overflow = '';
  }, 400);
}

/* ── Mobile filter toggle ── */
const mobileFilterToggle = document.getElementById('mobileFilterToggle');
const mobileFilterOverlay = document.getElementById('mobileFilterOverlay');
const profilePanel = document.querySelector('.profile-panel');

function openMobileFilter() {
  profilePanel.classList.add('open');
  mobileFilterOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileFilter() {
  profilePanel.classList.remove('open');
  mobileFilterOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (mobileFilterToggle) {
  mobileFilterToggle.addEventListener('click', openMobileFilter);
}

if (mobileFilterOverlay) {
  mobileFilterOverlay.addEventListener('click', closeMobileFilter);
}

/* ── Mobile sort by ── */
const mobileSortBy = document.getElementById('mobileSortBy');
if (mobileSortBy) {
  mobileSortBy.addEventListener('change', () => {
    sortBy.value = mobileSortBy.value;
    refresh();
  });
}

/* Keep mobile sort in sync */
/* ── Mobile detail close via overlay tap ── */
const mobileDetailOverlay = document.getElementById('mobileDetailOverlay');
if (mobileDetailOverlay) {
  mobileDetailOverlay.addEventListener('click', hideMobileDetail);
}

/* ── Mobile detail back button ── */
document.addEventListener('click', (event) => {
  const backBtn = event.target.closest('#mobileDetailBack');
  if (backBtn) {
    hideMobileDetail();
  }
});

/* ── Sync desktop sort → mobile sort ── */
sortBy.addEventListener('change', function() {
  if (mobileSortBy) mobileSortBy.value = this.value;
});

/* Sync on initial load */
if (mobileSortBy) {
  mobileSortBy.value = sortBy.value;
}

/* ── European language filter toggle ── */
const regionSelect = document.getElementById('region');
const langLabel = document.getElementById('languageLabel');

function toggleLangFilter() {
  if (!langLabel) return;
  langLabel.style.display = regionSelect.value === 'Europe' ? '' : 'none';
  if (regionSelect.value !== 'Europe') {
    const langSelect = document.getElementById('europeLang');
    if (langSelect) langSelect.value = 'Any';
  }
}

if (regionSelect && langLabel) {
  regionSelect.addEventListener('change', toggleLangFilter);
  /* Apply on load */
  toggleLangFilter();
}
