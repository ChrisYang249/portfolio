/*
  ==========================================================================
  PORTFOLIO CONTENT
  ==========================================================================
  This is the Portfolio content.

  HOW TO EDIT
  - Text sits between backticks: `like this`. You can use ' and " freely
    inside backticks. Do not delete the backticks or the comma after them.
  - Leave a blank line between paragraphs to start a new paragraph.
  ==========================================================================
*/

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
    intro: `I build practical software for real people and real processes, and use machine learning where it helps. My work ranges from a vet clinic’s adoption system and a neuroscience lab’s inventory tracker to disease prediction from gut microbiome data.`,
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
               caption: `Awareness video I made for the clinic's adoption campaign` },
      gallery: [
        { src: `assets/img/animalia-desktop-home.webp`, alt: `Cat carousel on the adoption home page` },
        { src: `assets/img/animalia-mobile.webp`, alt: `Swipe-style cat card on a phone`, tall: true },
        { src: `assets/img/animalia-apply.webp`, alt: `Visit booking form` },
        { src: `assets/img/animalia-dashboard.webp`, alt: `Staff dashboard with visit requests and cat profiles` },
      ],
      // my own words
      summary: `A swipe-to-adopt app for Animalia’s cats, with a staff portal for listings and visit bookings. It gives adopters and staff one place to manage adoptions instead of a manual process.`,
      built: `An adopter site (to be linked from the clinic’s main website) where people browse 30 cats, save favourites, and book visits, plus a staff portal for visit requests, cat profiles, clients, and orders. I also made the clinic’s awareness video.`,
      challenge: `Syncing visit bookings to Google Calendar for both adopter and staff. I had to handle authentication, time zones, and updates when a visit changed or was cancelled.`,
      learned: `Building for real users is different from building for a class. Clinic staff needed something simple to run without me, so I cut features and focused on a clean handover.`, 
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
      summary: `A web system that tracks the lab’s orders, reagents, storage locations, and users, with a log of every change. It replaces scattered spreadsheets and emails so the team can see what’s in stock and what’s on order.`,
      built: `A working web app covering product and order tracking, reagents, blockers, storage locations, and user management. I added secure login and an audit log that records who created or deleted each item, and when.`,
      challenge: `Building the audit trail. Every change to the inventory had to be traceable, so I set up secure login and logged each creation and deletion with who made it and when.`,
      learned: `In a lab, accuracy and accountability matter as much as features. I learned to design the data model around how researchers actually order, store, and use supplies.`,
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
      summary: `A web tool powered by machine learning models that predict five inflammation-related blood markers from a sample’s gut microbiome and demographic data. It helps the Cmbio team explore how gut bacteria relate to inflammation and screen samples before lab testing.`,
      built: `I cleaned and merged the microbiome datasets, trained one model per marker, and built a Flask web app. Users upload a CSV to get predictions, or explore correlation charts for each marker.`,
      challenge: `Preparing the data. The datasets covered about 80 bacterial families and were sparse, with many zero values. I merged and cleaned them into 158 consistent features so the models could learn from them.`,
      learned: `Most of the work in machine learning happens before the model. I also learned that results need careful testing before anyone relies on them, which is why the models went to Cmbio for further tuning.`,
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
      summary: `A web tool powered by a machine learning model that predicts which alumni are likely to give and shows what drives engagement. It helps the Alumni & Development office focus outreach on the people most likely to respond.`,
      built: `Prepared the alumni data, trained a random forest classifier on class year, house, and engagement data, and built a Flask web app. Users upload a spreadsheet to get predictions or an engagement correlation heatmap.`,
      challenge: `Messy, incomplete records. Many alumni had missing details, such as an unknown house, and far fewer gave than didn’t. I cleaned the data and handled the gaps so the model didn’t just predict “no” for everyone.`,
      learned: `A model is only useful if people can act on it. I learned to explain results in plain terms so the office could see not just who might give, but why.`,
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
        { src: `assets/img/urtc-poster-chris.webp`, alt: `Presented my research and poster at MIT URTC` },
        { src: `assets/img/urtc-explaining.webp`, alt: `Collaborating with visitors at the Conference` },
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
      summary: `Can transfer learning beat a CNN trained from scratch at classifying brain tumor MRIs? Yes: EfficientNetB0 reached 94.1% test accuracy, versus 73.9% from scratch.`,
      learned: `What I learned: With limited medical data, starting from a pretrained model helps a lot. I also learned to spot overfitting and present research clearly to an expert audience.`,   
    },
    {
      id: `gmu`,
      title: `Using LLMs to Predict One-Year Hospitalization in Liver Transplant Recipients`,
      credit: `Team of 3. First Prize, Best Speaker`,
      authors: `Christopher Yang, Janice Li, Patrick Shi`,
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
      summary: `Can LLMs predict which liver transplant patients will be hospitalized within a year? Not well: the LLM prompts scored near chance, while our decision tree reached 75% accuracy.`,
      learned: `What I learned: Newer isn’t always better. On structured patient data, a simple, explainable model beat an LLM. I also learned to present findings clearly, which won us Best Speaker.`,
    },
    {
      id: `glyphosate`,
      title: `Predictive Modeling of Glyphosate Contamination Using Random Forest Classifiers`,
      credit: `Co-author`,
      authors: `Jonathan Yang, Sathvik Samant, Lena Haefele, Louise Carroll, Nikhil Dhruv, Robert Lee, Christopher Yang, Jamie Ho, Sameer Menghani`,
      venue: `Critical Debates in Humanities, Science and Global Justice, Vol. 4, Issue 1, September 2024`,
      extra: `Glyphosate paper: My part
I helped prepare the data and build the random forest models that predict glyphosate contamination from environmental and socioeconomic indicators.`,     
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
    text: `I grew up across New York, Abu Dhabi, and New Jersey, and I’ve never been good at sitting still. I’m curious about almost everything, especially where biology meets code, and I like problems that don’t have an obvious answer yet. Most of my projects started with a simple question: could I build something that makes this easier?

Away from the screen, I’m on the wrestling mat, at the piano with the jazz band, or at home with my two cats, Cookie and Mochi, who are my toughest critics. I can juggle, moonwalk, and backflip (not usually at the same time), and I’m always up for learning something new, especially if someone says it’s hard.`,
    facts: [
      [`School`, `The Lawrenceville School, since 2023`],
      [`Leads`, `Founder, Bioengineering Club. Co-president, AI Council`],
      [`Sport`, `Varsity wrestling captain`],
      [`Music`, `Pianist, Little Big Band and Jazz Ensemble`],
      [`Languages`, `English, Mandarin, French, Arabic (intermediate)`],
    ],
  },
};
