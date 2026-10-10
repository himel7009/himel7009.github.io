// Portfolio Data Configuration for Himel Debnath
// Easily update this file to reflect new projects, publications, or skills as your career progresses.

const portfolioData = {
  profile: {
    name: "Himel Debnath",
    title: "Data Scientist Aspirant · AI & ML Engineer",
    tagline: "Bridging mathematical foundations and modern deep learning — specializing in medical imaging segmentation, data analytics, and interactive business intelligence.",
    location: "Dhaka, Bangladesh",
    email: "www.himel4200@gmail.com",
    phone: "+880 1789-156469",
    phoneRaw: "01789156469",
    availability: "Available for Data Science, ML & Data Analyst Roles",
    github: "https://github.com/himel7009",
    kaggle: "https://www.kaggle.com/debnathhimel",
    resumePdf: "Himel_Debnath_CV.pdf",
    summary: `Final-year Computer Science & Engineering student at Independent University, Bangladesh (IUB) with a 3.48 CGPA. Completed all academic coursework and currently conducting undergraduate thesis research in deep-learning-based Brain Metastasis segmentation. Experienced across the full data lifecycle: from exploratory data analysis and Power BI dashboard development with custom DAX, to training CNN architectures (DenseNet, ResNet) in PyTorch, developing cross-platform applications with Flutter, and operating across Linux and Windows CLI environments.`
  },

  stats: [
    { label: "Academic CGPA", value: "3.48", sub: "IUB CSE (Coursework Complete)" },
    { label: "Research Focus", value: "Medical AI", sub: "Brain Metastasis & Alzheimer's" },
    { label: "Core Projects", value: "6+", sub: "ML, BI & Full-Stack Systems" },
    { label: "Tool Stack", value: "PyTorch & BI", sub: "DAX, Pandas, OpenCV, SQL" }
  ],

  research: [
    {
      title: "Undergraduate Thesis: Brain Metastasis Segmentation",
      subtitle: "Medical Imaging & Deep Learning · Independent University, Bangladesh",
      status: "Ongoing Thesis (Coursework Completed)",
      period: "2026",
      badge: "Thesis Research",
      badgeColor: "indigo",
      overview: "Investigating deep learning segmentation frameworks to delineate and quantify brain metastases in complex neuroimaging scans. Focuses on handling irregular lesion morphology, multi-scale feature representations, and class imbalance challenges in medical computer vision.",
      contributions: [
        "Implementing segmentation pipelines using PyTorch and OpenCV for neuroimaging slices.",
        "Developing preprocessing workflows including intensity normalization, slice filtering, and medical data augmentation.",
        "Evaluating boundary delineation accuracy using Dice similarity coefficient (DSC) and Intersection over Union (IoU)."
      ],
      tags: ["PyTorch", "TorchVision", "OpenCV", "Medical Image Segmentation", "Deep Learning", "Python"]
    },
    {
      title: "Binary Classification of Alzheimer's Disease: A Comparative Study",
      subtitle: "University Coursework Research · AI & Machine Learning",
      status: "Completed Comparative Study",
      period: "2025 – 2026",
      badge: "Comparative Deep Learning",
      badgeColor: "blue",
      overview: "Conducted a systematic empirical comparison between three model architectures — a Custom CNN, DenseNet121, and ResNet50 — on an Alzheimer's disease neuroimaging classification benchmark to analyze feature extraction efficiency and generalization.",
      contributions: [
        "Trained and fine-tuned Custom CNN, DenseNet121, and ResNet50 architectures under controlled hyperparameter conditions.",
        "Evaluated models across Accuracy, Precision, Recall, and F1-score to observe depth vs. parameter efficiency trade-offs.",
        "Authored a structured research report detailing gradient behavior, feature reuse in DenseNet, and residual learning advantages."
      ],
      tags: ["PyTorch", "DenseNet121", "ResNet50", "Custom CNN", "Scikit-Learn", "Matplotlib"]
    }
  ],

  projects: [
    {
      id: "powerbi-food-delivery",
      title: "Food Delivery Analytics Dashboard",
      category: "bi",
      categoryLabel: "Data Analytics & BI",
      featured: true,
      subtitle: "Interactive Business Intelligence & Operations KPI Dashboard",
      description: "Designed and deployed a comprehensive Power BI operations dashboard modeling food delivery logistics (Foodpanda-style operations), enabling non-technical stakeholders to rapidly inspect order volume, revenue trends, and operational bottlenecks.",
      highlights: [
        "Crafted robust DAX formulas for dynamic KPI calculation (Average Order Value, delivery time variances, peak order windows).",
        "Engineered multi-dimensional drill-downs across geographic delivery zones, time intervals, and restaurant categories.",
        "Built interactive visual reporting layouts reducing time-to-insight for operational decision-makers."
      ],
      tags: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Excel"],
      links: [
        { label: "Live Power BI Report", url: "https://app.powerbi.com/groups/me/reports/bf4c0504-9767-4b02-8fee-ee983966e56c/d4567582cbbf900f6079?experience=power-bi", icon: "external-link", primary: true },
        { label: "Data Analysis Repo", url: "https://github.com/himel7009/DATA_ANALYSIS", icon: "github" }
      ]
    },
    {
      id: "calculus-navigator",
      title: "Calculus Navigator — Adaptive Learning Platform",
      category: "apps",
      categoryLabel: "Applied AI & Systems",
      featured: true,
      subtitle: "Gamified Math Education Web App with AI Tutor",
      description: "An adaptive web learning platform designed to help students master calculus through an interactive skill-tree roadmap, interactive visual graphing sandbox, and an integrated AI tutor powered by the Gemini API.",
      highlights: [
        "Integrated Google Gemini API to deliver on-demand conversational mathematical explanations and intelligent hints.",
        "Utilized Chart.js to visually graph student mastery scores and progression milestones in real time.",
        "Configured Firebase Authentication and Cloud Firestore to persist multi-user progress across modular practice units."
      ],
      tags: ["Gemini API", "JavaScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Chart.js"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/himel7009/calculus-navigator", icon: "github", primary: true }
      ]
    },
    {
      id: "flutter-ta-app",
      title: "Teacher Assistant App — Course & Student Activity Manager",
      category: "apps",
      categoryLabel: "Applied AI & Systems",
      featured: true,
      subtitle: "Cross-Platform Mobile App for Academic Management",
      description: "Collaborated in a 3-person team to engineer a Flutter mobile app for university teaching assistants to coordinate schedules, record real-time attendance, and manage student performance records.",
      highlights: [
        "Integrated Firebase Core and Cloud Firestore for real-time document synchronization across mobile devices.",
        "Developed the Add Student interactive bottom-sheet modal with real-time input verification.",
        "Reworked and polished the course editing architecture and responsive routine scheduling interface."
      ],
      tags: ["Flutter", "Dart", "Cloud Firestore", "Firebase Core", "Provider State Management"],
      links: [
        { label: "Watch App Demo Video", url: "https://drive.google.com/file/d/1G1IcH8gaJnuZxVCczSTRPqU6w17uP8X4/view", icon: "play", primary: true },
        { label: "Forked GitHub Repo", url: "https://github.com/himel7009/Flutter_CSC464_Flutter_Final_Project-Group5-Section1-P005", icon: "github" }
      ]
    },
    {
      id: "customer-churn",
      title: "Customer Churn Prediction Engine",
      category: "ai",
      categoryLabel: "Deep Learning & AI",
      featured: false,
      subtitle: "Predictive Attrition Modeling & Feature Importance",
      description: "Built an end-to-end classification pipeline to detect early churn indicators among customers, helping businesses identify high-risk accounts and formulate proactive retention strategies.",
      highlights: [
        "Executed comprehensive exploratory data analysis, outlier remediation, and encoding of customer behavior variables.",
        "Trained baseline and regularized machine learning classifiers evaluating ROC-AUC, precision, and recall trade-offs.",
        "Extracted feature importances to highlight top drivers contributing to customer termination."
      ],
      tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "EDA", "Machine Learning"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/himel7009/Customer-Churn-Prediction", icon: "github", primary: true }
      ]
    },
    {
      id: "movie-recommender",
      title: "Movie Recommendation System",
      category: "ai",
      categoryLabel: "Deep Learning & AI",
      featured: false,
      subtitle: "Content-Based Similarity Recommendation Engine",
      description: "Designed a recommendation engine that suggests relevant films to users based on natural language metadata, genres, and contextual feature overlap using vector similarity measures.",
      highlights: [
        "Constructed vector representations of film metadata and applied Cosine Similarity to surface relevant matches.",
        "Engineered text cleaning, tokenization, and sparse matrix transformations.",
        "Built an interactive lookup interface returning ranked cinematic suggestions."
      ],
      tags: ["Python", "NLP / Vectorization", "Cosine Similarity", "Pandas", "Scikit-Learn"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/himel7009/Movie-Recommendation-System", icon: "github", primary: true }
      ]
    },
    {
      id: "data-analysis-lab",
      title: "Data Analysis & Exploration Lab",
      category: "bi",
      categoryLabel: "Data Analytics & BI",
      featured: false,
      subtitle: "Continuous Applied Analytics & Statistical Practice",
      description: "A centralized repository tracking continuous practical experiments in data manipulation, visual exploratory analysis, statistical testing, and insight extraction across tabular and image datasets.",
      highlights: [
        "Created modular data transformation notebooks with Pandas, NumPy, and SQL queries.",
        "Crafted publication-ready statistical plots with Seaborn and Matplotlib.",
        "Documented practical techniques to bypass 'tutorial hell' through hands-on implementation."
      ],
      tags: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/himel7009/DATA_ANALYSIS", icon: "github", primary: true }
      ]
    }
  ],

  skills: [
    {
      category: "Data Science & Machine Learning",
      description: "Core algorithms, deep neural network architectures, and statistical modeling",
      items: [
        { name: "PyTorch", level: "Advanced", icon: "flame" },
        { name: "TorchVision & OpenCV", level: "Proficient", icon: "eye" },
        { name: "Scikit-Learn", level: "Proficient", icon: "cpu" },
        { name: "Medical Image Segmentation", level: "Proficient", icon: "activity" },
        { name: "CNNs (ResNet, DenseNet)", level: "Proficient", icon: "layers" },
        { name: "TensorFlow", level: "Familiar", icon: "box" }
      ]
    },
    {
      category: "Data Analysis & Business Intelligence",
      description: "Extracting actionable insights, developing metrics, and executive reporting",
      items: [
        { name: "Power BI (DAX & Dashboards)", level: "Advanced", icon: "bar-chart-2" },
        { name: "Python (Pandas, NumPy)", level: "Advanced", icon: "code" },
        { name: "SQL (Querying & Joins)", level: "Proficient", icon: "database" },
        { name: "Matplotlib & Seaborn", level: "Proficient", icon: "pie-chart" },
        { name: "Excel & Google Sheets", level: "Advanced", icon: "file-text" },
        { name: "Exploratory Data Analysis", level: "Advanced", icon: "search" }
      ]
    },
    {
      category: "Software & Mobile Development",
      description: "Building production tools, user interfaces, and mobile applications",
      items: [
        { name: "Flutter & Dart", level: "Proficient", icon: "smartphone" },
        { name: "JavaScript & HTML5/CSS3", level: "Proficient", icon: "globe" },
        { name: "Tailwind CSS", level: "Proficient", icon: "palette" },
        { name: "Firebase (Auth & Firestore)", level: "Proficient", icon: "zap" },
        { name: "Gemini API Integration", level: "Proficient", icon: "sparkles" }
      ]
    },
    {
      category: "Tools, Systems & Workflow",
      description: "Operating systems, version control, and scientific research environments",
      items: [
        { name: "Linux & Windows CLI", level: "Advanced", icon: "terminal" },
        { name: "Git & GitHub", level: "Proficient", icon: "git-branch" },
        { name: "Kaggle", level: "Active", icon: "award" },
        { name: "Conda & Jupyter", level: "Advanced", icon: "book-open" },
        { name: "Overleaf & LaTeX", level: "Proficient", icon: "edit-3" },
        { name: "Technical Documentation", level: "Advanced", icon: "check-circle" }
      ]
    }
  ],

  education: {
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "Independent University, Bangladesh (IUB)",
    location: "Dhaka, Bangladesh",
    period: "Graduation Expected: December 2026",
    status: "Completed Coursework · Concluding Thesis",
    cgpa: "3.48",
    cgpaMax: "4.00",
    highlights: [
      "Completed all degree coursework with strong performance across Data Science, Algorithms, and Mathematics.",
      "Undergraduate Thesis focus: Deep learning for Brain Metastasis medical image segmentation.",
      "Relevant Coursework: Machine Learning, Artificial Intelligence, Mobile Application Development (CSC464), Database Systems, Probability & Statistics, Linear Algebra & Calculus."
    ]
  }
};
