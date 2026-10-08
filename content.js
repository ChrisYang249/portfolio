/*
  ==========================================================================
  PORTFOLIO CONTENT
  ==========================================================================
  This is the only file you need to edit to change the words on the site.

  HOW TO EDIT
  - Text sits between backticks: `like this`. You can use ' and " freely
    inside backticks. Do not delete the backticks or the comma after them.
  - Any field set to TODO shows a dashed "Chris to write" box on the site.
    Replace TODO with Chris's own words, e.g.
        built: TODO,
    becomes
        built: `I designed the database and wrote the booking flow...`,
  - Leave a blank line between paragraphs to start a new paragraph.
  - Before submitting, open the site and check that no dashed boxes remain.
  ==========================================================================
*/

const TODO = null;

window.CONTENT = {
  person: {
    name: `Christopher Yang`,
    shortName: `Chris`,
    school: `The Lawrenceville School, New Jersey`,
    base: `Abu Dhabi and New Jersey`,
    email: `yang.christopher.x@gmail.com`,
    github: `https://github.com/ChrisYang249`,
    linkedin: `https://www.linkedin.com/in/christopher-yang-80435b281/`,
    headshot: `assets/img/chris-headshot.webp`,

    // One or two sentences at the top of the page, in Chris's voice.
    // Prompt: who are you and what do you build?
    intro: TODO,
  },

  // Line under the "Projects" heading
  workIntro: `Built during internships and school projects, then handed over to the clinic, lab, company or school that asked for them. The public versions run on sample data.`,

  // ------------------------------------------------------------------------
  // PROJECTS, in the order they appear. Strongest first.
  // ------------------------------------------------------------------------
  projects: [
    {
      id: `animalia`,
      title: `Animalia Adoptions`,
      tagline: `A swipe-to-adopt app and staff portal for a veterinary clinic`,
      builtFor: `Animalia Veterinary Clinic, Abu Dhabi`,
      shortFor: `Animalia Veterinary Clinic, Abu Dhabi`,
      when: `Summer 2026 internship`,
      role: `Built the adoption app and staff portal`,
      stack: [`React`, `TypeScript`, `FastAPI`, `PostgreSQL`, `Google Calendar API`, `Render`],
      status: `Demo handed over to Dr. Susan Aylott at Animalia, August 2026`,
      facts: [
        [`Cats in the demo`, `30`],
        [`Adopter flow`, `Browse cats, like favourites, book a visit`],
        [`Staff portal`, `Visit requests, cat profiles, clients, orders`],
        [`Booking`, `Visits sync to Google Calendar for adopter and staff`],
      ],
      links: [
        { label: `Open live demo`, url: `https://animalia-web.onrender.com`, primary: true },
        { label: `Clinic adoptions page`, url: `https://www.animalia.ae/adoptions` },
        { label: `Code on GitHub`, url: `https://github.com/ChrisYang249/Animalia` },
      ],
      demoNote: `Staff portal login is not public. The adopter side is open to everyone.`,
      video: { src: `assets/animalia-video.mp4`, poster: `assets/img/animalia-clinic.webp`,
               caption: `Awareness video Chris made for the clinic's adoption campaign` },
      gallery: [
        { src: `assets/img/animalia-desktop-home.webp`, alt: `Cat carousel on the adoption home page` },
        { src: `assets/img/animalia-mobile.webp`, alt: `Swipe-style cat card on a phone`, tall: true },
        { src: `assets/img/animalia-apply.webp`, alt: `Visit booking form` },
        { src: `assets/img/animalia-dashboard.webp`, alt: `Staff dashboard with visit requests and cat profiles` },
      ],
      // Chris's own words. Prompts are shown on the site until filled in.
      summary: TODO,   // 1-2 sentences: what is it and why did the clinic need it?
      built: TODO,     // What did you personally build?
      challenge: TODO, // Hardest technical or other problem, and how you solved it
      learned: TODO,   // What did you learn?
    },

    {
      id: `nyulims`,
      title: `NYU Lab Inventory Management System`,
      tagline: `Order, reagent and inventory tracking for a neuroscience lab`,
      builtFor: `Prof. Dipesh Chaudhury's lab, NYU Abu Dhabi Center for Brain & Health`,
      shortFor: `NYU Abu Dhabi neuroscience lab`,
      when: `August 2025 internship`,
      role: `Developed and deployed the system`,
      stack: [`React`, `TypeScript`, `Ant Design`, `FastAPI`, `SQLAlchemy`, `JWT auth`, `Render`],
      status: `Handed over to the lab at the end of the internship. The public version runs on sample data.`,
      facts: [
        [`Tracks`, `Lab orders, reagents, blockers, storage location, users`],
        [`Audit trail`, `Every creation and deletion is logged with who and when`],
        [`Access`, `Role-based permissions for lab staff`],
      ],
      links: [
        { label: `Open live demo`, url: `https://nyulims-web.onrender.com`, primary: true },
        { label: `Code on GitHub`, url: `https://github.com/ChrisYang249/NYULIMS` },
      ],
      demoNote: `Demo password: shown on the login page. Sample data resets on each deploy.`,
      gallery: [
        { src: `assets/img/lims-products.webp`, alt: `Product and order list` },
        { src: `assets/img/lims-dashboard.webp`, alt: `Dashboard with order status counts` },
        { src: `assets/img/lims-product-detail.webp`, alt: `Product detail page` },
        { src: `assets/img/lims-blockers.webp`, alt: `EP blockers inventory` },
        { src: `assets/img/lims-logs.webp`, alt: `Creation audit log` },
      ],
      summary: TODO,
      built: TODO,
      challenge: TODO,
      learned: TODO,
    },

    {
      id: `cmbio`,
      title: `Gut Microbiome Inflammation Predictor`,
      tagline: `Predicting inflammation markers from gut microbiome profiles`,
      builtFor: `Cmbio, bioinformatics team (Maryland)`,
      shortFor: `Cmbio bioinformatics team`,
      when: `March and June 2025 internship`,
      role: `Built the ML pipeline and the web app`,
      stack: [`Python`, `pandas`, `scikit-learn`, `statsmodels`, `Flask`, `Render`],
      status: `Handed over to Cmbio for further tuning. The public demo uses synthetic data.`,
      facts: [
        [`Inputs`, `158 microbiome and demographic features per sample`],
        [`Predicts`, `5 serology markers: IgA ASCA, IgG ASCA, OmpC, CBir1, ANCA`],
        [`Models`, `Random forest and linear regression, one per marker`],
        [`Also`, `Upload a CSV to get correlation charts for every marker`],
      ],
      links: [
        { label: `Open live demo`, url: `https://inflammation.onrender.com`, primary: true },
        { label: `Code on GitHub`, url: `https://github.com/ChrisYang249/Inflammation` },
      ],
      demoNote: `Use "Download Sample for Prediction" on the demo page, then upload it.`,
      gallery: [
        { src: `assets/img/inflammation-predict.webp`, alt: `Prediction results table` },
        { src: `assets/img/inflammation-home.webp`, alt: `Upload page` },
        { src: `assets/img/inflammation-eda.webp`, alt: `Correlation charts for each marker`, tall: true },
      ],
      summary: TODO,
      built: TODO,
      challenge: TODO,
      learned: TODO,
    },

    {
      id: `alumni`,
      title: `Alumni Philanthropy Prediction`,
      tagline: `Which alumni are likely to give, and what drives engagement`,
      builtFor: `Lawrenceville School Alumni & Development office, through the AI Council`,
      shortFor: `Lawrenceville alumni office`,
      when: `June 2025`,
      role: `Built the model and the web app`,
      stack: [`Python`, `pandas`, `scikit-learn`, `seaborn`, `Flask`, `Render`],
      status: `Handed over to the school's IT department. The public demo uses synthetic data.`,
      facts: [
        [`Question`, `Will this alumnus give? Yes or no, from an uploaded spreadsheet`],
        [`Model`, `Random forest classifier on class year, house and engagement data`],
        [`Also`, `Engagement correlation heatmap from any uploaded file`],
      ],
      links: [
        { label: `Open live demo`, url: `https://alumni-engagement.onrender.com`, primary: true },
        { label: `Code on GitHub`, url: `https://github.com/ChrisYang249/Alumni-Engagement` },
      ],
      demoNote: `Use "Download Sample for Prediction" on the demo page, then upload it.`,
      gallery: [
        { src: `assets/img/alumni-predict.webp`, alt: `Philanthropy prediction results` },
        { src: `assets/img/alumni-home.webp`, alt: `Upload page with prediction type` },
        { src: `assets/img/alumni-eda.webp`, alt: `Engagement correlation heatmap` },
      ],
      summary: TODO,
      built: TODO,
      challenge: TODO,
      learned: TODO,
    },
  ],

  // ------------------------------------------------------------------------
  // RESEARCH
  // ------------------------------------------------------------------------
  research: [
    {
      id: `brain`,
      title: `Brain Tumor Classification Using CNNs`,
      credit: `First author`,
      authors: `Christopher Yang, Sharifa Sahai (mentor, Harvard Systems Biology)`,
      venue: `Curieux Academic Journal, Issue 54, September 2025`,
      extra: `Finalist and presenter, IEEE MIT Undergraduate Research Technology Conference (URTC), October 2024`,
      image: { src: `assets/img/brain-poster.webp`, alt: `Research poster presented at MIT URTC 2024` },
      photos: [
        { src: `assets/img/urtc-poster-chris.webp`, alt: `Chris with his poster at MIT URTC` },
        { src: `assets/img/urtc-explaining.webp`, alt: `Chris presenting his poster to a visitor` },
      ],
      stats: [
        [`73.9%`, `test accuracy, CNN trained from scratch`],
        [`94.1%`, `test accuracy, CNN with EfficientNetB0 transfer learning`],
        [`3,264`, `MRI scans in 4 classes: glioma, meningioma, pituitary, no tumor`],
      ],
      links: [
        { label: `Read the paper (PDF)`, url: `assets/docs/brain-tumor-classification-curieux-2025.pdf`, primary: true },
        { label: `MIT URTC poster (PDF)`, url: `assets/docs/brain-tumor-cnn-poster-mit-urtc.pdf` },
        { label: `Full journal issue`, url: `https://www.curieuxacademicjournal.com/_files/ugd/99711c_aca5394bf7ec4768ab37f7c1eccfea9a.pdf` },
      ],
      summary: TODO,   // What question did you ask, and what did you find?
      learned: TODO,   // What did you learn, or what would you do next?
    },
    {
      id: `gmu`,
      title: `Using LLMs to Predict One-Year Hospitalization in Liver Transplant Recipients`,
      credit: `Team of 3. First Prize, Best Speaker`,
      authors: `Janice Li, Patrick Shi, Christopher Yang`,
      venue: `George Mason University Data Analytics Internship, July 2024`,
      extra: `My part: the decision tree model, the feature-importance analysis and the correlation matrix`,
      image: { src: `assets/img/gmu-decision-tree.webp`, alt: `Feature importances and correlation matrix from the decision tree model` },
      stats: [
        [`75%`, `accuracy, decision tree model (recall 0.99)`],
        [`~0.5`, `AUC for the LLM probability prompts, close to chance`],
      ],
      links: [
        { label: `Slides (PDF)`, url: `assets/docs/gmu-llm-liver-transplant-slides.pdf`, primary: true },
      ],
      summary: TODO,
      learned: TODO,
    },
    {
      id: `glyphosate`,
      title: `Predictive Modeling of Glyphosate Contamination Using Random Forest Classifiers`,
      credit: `Co-author`,
      authors: `Jonathan Yang, Sathvik Samant, Lena Haefele, Louise Carroll, Nikhil Dhruv, Robert Lee, Christopher Yang, Jamie Ho, Sameer Menghani`,
      venue: `Critical Debates in Humanities, Science and Global Justice, Vol. 4, Issue 1, September 2024`,
      extra: TODO,     // e.g. "My part: ..." (what Chris did on this paper)
      stats: [
        [`80%`, `accuracy, environmental-indicator model`],
        [`72%`, `accuracy, socioeconomic-indicator model`],
      ],
      links: [
        { label: `Read the article`, url: `https://criticaldebateshsgj.scholasticahq.com/article/123526-predictive-modeling-of-glyphosate-contamination-utilizing-random-forest-classifiers`, primary: true },
      ],
      summary: null,
      learned: null,
    },
  ],

  // ------------------------------------------------------------------------
  // SMALLER THINGS. Set show: false to hide an item.
  // ------------------------------------------------------------------------
  more: [
    { show: true, title: `Frog stripe classifier`, where: `NYU Abu Dhabi Evolutionary Genomics Lab, December 2024`,
      text: `CNN trained on more than 1,000 images to classify vertebral-striped frogs, for postdoc Sandra Goutte's colour polymorphism study.`, url: null },
    { show: true, title: `Tour guide matching with semantic search`, where: `Lawrenceville AI Council`,
      text: `Helped the admissions office match campus tour guides with prospective students.`, url: null },
    { show: true, title: `AI Summarizer Chrome extension`, where: `Big Red Hacks 2026`,
      text: `A Chrome extension that summarizes reading for K-12 students.`, url: null },
    { show: true, title: `Bioengineering Club`, where: `The Lawrenceville School`,
      text: `Founded the club and run bi-weekly meetings and a guest speaker series on protein folding, CRISPR and bioprinting.`, url: null },
  ],

  // ------------------------------------------------------------------------
  // ABOUT
  // ------------------------------------------------------------------------
  about: {
    photo: `assets/img/chris-jump.webp`,
    photoAlt: `Chris mid-jump on a beach boardwalk`,
    text: TODO,        // A short paragraph about Chris, in his voice
    facts: [
      [`School`, `The Lawrenceville School, since 2023`],
      [`Leads`, `Founder, Bioengineering Club. Co-president, AI Council`],
      [`Sport`, `Varsity wrestling captain`],
      [`Music`, `Pianist, Little Big Band and Jazz Ensemble`],
      [`Languages`, `English, Mandarin, French, Arabic (intermediate)`],
    ],
  },
};
