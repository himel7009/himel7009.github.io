# 🌐 Himel Debnath — Data Science & AI Portfolio Website

Live URL: **[https://himel7009.github.io](https://himel7009.github.io)**

The official personal portfolio website for **Himel Debnath**, highlighting research in **Brain Metastasis Deep Learning Segmentation**, **Alzheimer's Comparative Classification**, **Power BI Business Intelligence Dashboards**, and applied AI platforms.

---

## 🚀 Features

* **Option B Minimalist Modern UI**: Clean light and dark mode with persistent user preference.
* **Research & Thesis Spotlight**: Dedicated neuroimaging deep learning cards showcasing ongoing undergraduate thesis and comparative CNN architectures.
* **Interactive Projects Showcase**:
  * Real-time category filtering: *All*, *Data Analytics & BI*, *Deep Learning & AI*, *Applied AI & Systems*.
  * Instant search bar filtering by keyword or technology tag.
  * Interactive Project Modal showing full architecture breakdowns and links.
* **Technical Skills Matrix**: Visual badges categorized into Data Science/ML, Analytics/BI, Software, and Systems/CLI.
* **Interactive Terminal View**: Easter egg showcasing Linux and Windows command-line fluency.
* **Printable / Web-Based Resume (`resume.html`)**: Direct print-to-PDF button and downloadable `Himel_Debnath_CV.pdf`.

---

## 🛠️ How to Update as Your Career Evolves

All content is cleanly separated in `data.js`. Whenever you complete a new project, write a new paper, or add a new skill:

1. Open `data.js`.
2. Locate the relevant array:
   * `portfolioData.projects`: Add a new project object.
   * `portfolioData.research`: Update your thesis milestones.
   * `portfolioData.skills`: Append new technologies or libraries.
3. Commit and push:
   ```bash
   git add data.js
   git commit -m "Update portfolio with new project"
   git push origin main
   ```
   GitHub Pages will automatically rebuild and deploy your changes in seconds!

---

## 💻 Local Preview

You can open `index.html` directly in any web browser, or launch a lightweight local server:

```bash
# Using Python
python3 -m http.server 8080
# Then visit: http://localhost:8080
```
