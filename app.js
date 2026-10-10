// Portfolio Application Logic for Himel Debnath
// Clean Minimalist Modern Architecture

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderStats();
  renderResearch();
  renderProjects('all');
  renderSkills();
  initFilters();
  initSearch();
  initTerminalToggle();
  initModal();
  initCopyButtons();
  initMobileNav();

  // Re-render Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   THEME TOGGLE (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const meshBg = document.getElementById('mesh-bg');
  const html = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  applyTheme(isDark);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const willBeDark = !html.classList.contains('dark');
      applyTheme(willBeDark);
      localStorage.setItem('theme', willBeDark ? 'dark' : 'light');
    });
  }

  function applyTheme(dark) {
    if (dark) {
      html.classList.add('dark');
      html.classList.remove('light');
      if (meshBg) {
        meshBg.classList.add('mesh-bg-dark');
        meshBg.classList.remove('mesh-bg-light');
      }
      if (themeIcon) {
        themeIcon.setAttribute('data-lucide', 'sun');
      }
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      if (meshBg) {
        meshBg.classList.add('mesh-bg-light');
        meshBg.classList.remove('mesh-bg-dark');
      }
      if (themeIcon) {
        themeIcon.setAttribute('data-lucide', 'moon');
      }
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

/* ==========================================================================
   PROFILE & STATS RENDERING
   ========================================================================== */
function renderProfile() {
  const summaryEl = document.getElementById('profile-summary');
  if (summaryEl && portfolioData.profile) {
    summaryEl.textContent = portfolioData.profile.summary;
  }
}

function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container || !portfolioData.stats) return;

  container.innerHTML = portfolioData.stats.map(stat => `
    <div class="p-5 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm card-hover flex flex-col justify-between">
      <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">${stat.label}</span>
      <div class="mt-2">
        <div class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${stat.value}</div>
        <div class="text-xs text-slate-400 mt-1 truncate">${stat.sub}</div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RESEARCH & THESIS SPOTLIGHT
   ========================================================================== */
function renderResearch() {
  const container = document.getElementById('research-container');
  if (!container || !portfolioData.research) return;

  container.innerHTML = portfolioData.research.map((item, idx) => `
    <div class="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm card-hover flex flex-col justify-between space-y-5">
      <div class="space-y-3">
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            ${item.badge}
          </span>
          <span class="text-xs font-mono text-slate-400">${item.period}</span>
        </div>

        <h3 class="text-xl font-bold text-white tracking-tight leading-snug">${item.title}</h3>
        <p class="text-xs font-medium text-indigo-300 font-mono">${item.subtitle}</p>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${item.overview}</p>

        <div class="space-y-1.5 pt-2">
          <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Key Highlights:</h4>
          <ul class="space-y-1.5 text-xs text-slate-300">
            ${item.contributions.map(c => `
              <li class="flex items-start gap-2">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0"></i>
                <span>${c}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/80">
        <div class="flex flex-wrap gap-1.5">
          ${item.tags.map(tag => `
            <span class="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   PROJECTS RENDERING & FILTERING
   ========================================================================== */
function renderProjects(category = 'all', searchQuery = '') {
  const grid = document.getElementById('projects-grid');
  if (!grid || !portfolioData.projects) return;

  let filtered = portfolioData.projects;

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 space-y-3">
        <i data-lucide="search-x" class="w-10 h-10 mx-auto text-slate-500"></i>
        <p class="text-base font-medium">No projects matched your search criteria.</p>
        <button id="reset-filters-btn" class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline">
          Reset filters
        </button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        document.getElementById('project-search').value = '';
        setActiveCategoryTab('all');
        renderProjects('all');
      });
    }
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm card-hover flex flex-col justify-between space-y-5 group cursor-pointer" onclick="openProjectModal('${p.id}')">
      <div class="space-y-3">
        
        <!-- Category & Featured Header -->
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            ${p.categoryLabel}
          </span>
          ${p.featured ? `
            <span class="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
              <i data-lucide="star" class="w-3 h-3 fill-amber-400"></i> Featured
            </span>
          ` : ''}
        </div>

        <!-- Title & Subtitle -->
        <div>
          <h3 class="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
            ${p.title}
          </h3>
          <p class="text-xs text-indigo-300/80 font-mono mt-1">${p.subtitle}</p>
        </div>

        <!-- Description -->
        <p class="text-xs text-slate-400 leading-relaxed line-clamp-3">
          ${p.description}
        </p>

        <!-- Highlights Preview -->
        <ul class="space-y-1 text-xs text-slate-300 pt-1">
          ${p.highlights.slice(0, 2).map(h => `
            <li class="flex items-start gap-1.5">
              <span class="text-indigo-400 text-sm leading-none">•</span>
              <span class="line-clamp-2">${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Footer: Tags & Action Links -->
      <div class="space-y-3 pt-4 border-t border-slate-800/80">
        <div class="flex flex-wrap gap-1">
          ${p.tags.slice(0, 4).map(tag => `
            <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300">
              ${tag}
            </span>
          `).join('')}
          ${p.tags.length > 4 ? `
            <span class="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
              +${p.tags.length - 4}
            </span>
          ` : ''}
        </div>

        <div class="flex items-center justify-between gap-2 pt-1" onclick="event.stopPropagation()">
          <div class="flex items-center gap-2">
            ${p.links.map(l => `
              <a href="${l.url}" target="_blank" class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg ${l.primary ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'} transition-all" title="${l.label}">
                <i data-lucide="${l.icon}" class="w-3 h-3"></i>
                <span class="text-[11px]">${l.label}</span>
              </a>
            `).join('')}
          </div>
          <button onclick="openProjectModal('${p.id}')" class="text-xs text-slate-400 hover:text-white transition-colors" title="View details">
            <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initFilters() {
  const tabButtons = document.querySelectorAll('.cat-tab');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-cat');
      setActiveCategoryTab(cat);
      const searchVal = document.getElementById('project-search').value;
      renderProjects(cat, searchVal);
    });
  });
}

function setActiveCategoryTab(cat) {
  const tabButtons = document.querySelectorAll('.cat-tab');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-cat') === cat) {
      btn.className = 'cat-tab px-4 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white transition-all shadow-sm';
    } else {
      btn.className = 'cat-tab px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all';
    }
  });
}

function initSearch() {
  const searchInput = document.getElementById('project-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activeTab = document.querySelector('.cat-tab.bg-indigo-600');
    const cat = activeTab ? activeTab.getAttribute('data-cat') : 'all';
    renderProjects(cat, e.target.value);
  });
}

/* ==========================================================================
   SKILLS RENDERING
   ========================================================================== */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid || !portfolioData.skills) return;

  grid.innerHTML = portfolioData.skills.map(group => `
    <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white">${group.category}</h3>
        <p class="text-xs text-slate-400 mt-0.5">${group.description}</p>
      </div>

      <div class="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/80">
        ${group.items.map(item => `
          <div class="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between gap-2">
            <div class="flex items-center gap-2 min-w-0">
              <i data-lucide="${item.icon || 'check'}" class="w-3.5 h-3.5 text-indigo-400 shrink-0"></i>
              <span class="text-xs font-medium text-slate-200 truncate">${item.name}</span>
            </div>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 shrink-0">
              ${item.level}
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   INTERACTIVE PROJECT DETAILS MODAL
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!modal || !project) return;

  document.getElementById('modal-category').textContent = project.categoryLabel;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-subtitle').textContent = project.subtitle;
  document.getElementById('modal-description').textContent = project.description;

  const highlightsContainer = document.getElementById('modal-highlights');
  highlightsContainer.innerHTML = project.highlights.map(h => `
    <li class="flex items-start gap-2">
      <i data-lucide="check-circle" class="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0"></i>
      <span>${h}</span>
    </li>
  `).join('');

  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = project.tags.map(t => `
    <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700">
      ${t}
    </span>
  `).join('');

  const linksContainer = document.getElementById('modal-links');
  linksContainer.innerHTML = project.links.map(l => `
    <a href="${l.url}" target="_blank" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold ${l.primary ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'} transition-all">
      <i data-lucide="${l.icon}" class="w-3.5 h-3.5"></i>
      <span>${l.label}</span>
    </a>
  `).join('');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Global modal trigger for inline onclick
window.openProjectModal = openProjectModal;

/* ==========================================================================
   TERMINAL EASTER EGG TOGGLE
   ========================================================================== */
function initTerminalToggle() {
  const btn = document.getElementById('terminal-toggle-btn');
  const term = document.getElementById('interactive-terminal');
  if (!btn || !term) return;

  btn.addEventListener('click', () => {
    term.classList.toggle('hidden');
    if (!term.classList.contains('hidden')) {
      term.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

/* ==========================================================================
   COPY TO CLIPBOARD & TOAST
   ========================================================================== */
function initCopyButtons() {
  setupCopy('copy-email-hero', portfolioData.profile.email, 'Email copied to clipboard!');
  setupCopy('copy-email-btn', portfolioData.profile.email, 'Email copied to clipboard!');
  setupCopy('copy-phone-btn', portfolioData.profile.phoneRaw, 'Phone number copied to clipboard!');
}

function setupCopy(buttonId, textToCopy, toastMsg) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(toastMsg);
    }).catch(() => {
      showToast('Copied: ' + textToCopy);
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2500);
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}
