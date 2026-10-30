/* =====================================================================
   app.js — lógica do portal (renderização, busca, filtros, modal, toast)
   Não precisa editar para adicionar cards. Depende de theme.js e data.js.
   ===================================================================== */

const state = { category: 'all', query: '' };
let modalUrl = null; // link do recurso aberto no modal

const $ = (id) => document.getElementById(id);
// Escapa texto que vai para innerHTML (títulos, descrições, urls)
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// Normaliza para busca: minúsculas e sem acento ("prestacao" acha "Prestação")
const norm = (s = '') => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
const isWebUrl = (u = '') => /^https?:\/\//i.test(u);

/* ---------- Renderização ---------- */
function renderPills() {
  const pills = [{ id: 'all', label: 'Todos' }, ...CATEGORIES];
  $('categoryPills').innerHTML = pills.map((p) => {
    const active = p.id === state.category;
    const style = active ? 'bg-sky-600 text-white' : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800';
    return `<button data-cat="${esc(p.id)}" class="cat-btn px-3 py-1.5 rounded-lg font-medium shrink-0 transition-colors ${style}">${esc(p.label)}</button>`;
  }).join('');
}

function cardHtml(c, index) {
  const col = COLORS[c.color] || COLORS.sky;
  const icon = ICONS[c.icon] || ICONS.documento;
  const badge = c.badge ? `<span class="${col.badge} text-[10px] font-bold px-2 py-0.5 rounded-full">${esc(c.badge)}</span>` : '';
  return `
  <a href="${esc(c.url)}" data-index="${index}" class="link-card glass-card rounded-2xl p-4 flex items-center justify-between group transition-all duration-300 hover:-translate-y-0.5">
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl border flex items-center justify-center transition-all shrink-0 shadow-inner ${col.box}">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="${icon}"></path></svg>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h2 class="font-semibold text-slate-100 text-sm sm:text-base ${col.hover} transition-colors">${esc(c.title)}</h2>
          ${badge}
        </div>
        <p class="text-xs text-slate-400 mt-0.5">${esc(c.description)}</p>
      </div>
    </div>
    <div class="text-slate-500 ${col.hover} transition-colors pl-2">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="${ICONS.seta}"></path></svg>
    </div>
  </a>`;
}

function render() {
  const q = norm(state.query);
  const visible = CARDS
    .map((card, index) => ({ card, index }))
    .filter(({ card }) =>
      (state.category === 'all' || card.category === state.category) &&
      (norm(card.title).includes(q) || norm(card.description).includes(q)));

  $('linksContainer').innerHTML = visible.map(({ card, index }) => cardHtml(card, index)).join('');
  $('searchCount').textContent = q ? `${visible.length} resultados` : '';
  $('noResults').classList.toggle('hidden', visible.length > 0);
}

/* ---------- Modal ---------- */
function openModal(title, html, url = null) {
  modalUrl = url;
  $('modalTitle').textContent = title;
  $('modalDescription').innerHTML = html; // conteúdo confiável (escrito por você)
  const modal = $('serviceModal');
  const box = $('modalContentBox');
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    box.classList.remove('scale-95');
    box.classList.add('scale-100');
  }, 10);
}

function closeModal() {
  const modal = $('serviceModal');
  const box = $('modalContentBox');
  modal.classList.add('opacity-0');
  box.classList.remove('scale-100');
  box.classList.add('scale-95');
  setTimeout(() => modal.classList.add('hidden'), 300);
}

// Link real (http/https) abre em nova aba; link fictício (#...) mantém o comportamento simulado.
function simulateAccess() {
  const url = modalUrl;
  closeModal();
  if (isWebUrl(url)) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    showToast('Acessando o ambiente seguro da GMCG...');
  }
}

/* ---------- Compartilhar e Toast ---------- */
function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: 'GMCG - Gerência de Monitoramento de Contratos de Gestão',
      text: 'Acesse os links oficiais da Gerência de Monitoramento de Contratos de Gestão.',
      url: window.location.href,
    }).catch(() => {});
    return;
  }
  const done = () => showToast('Link do portal copiado!');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(done).catch(() => {});
  } else {
    const dummy = document.createElement('input');
    dummy.value = window.location.href;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    done();
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'bg-slate-900 border border-sky-500/40 text-slate-100 text-xs px-4 py-3 rounded-xl shadow-xl toast-animate pointer-events-auto flex items-center gap-2 mb-2';
  toast.innerHTML = `
    <svg class="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    <span>${esc(message)}</span>`;
  $('toastContainer').appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

/* ---------- Eventos e inicialização ---------- */
$('searchInput').addEventListener('input', (e) => { state.query = e.target.value; render(); });

$('categoryPills').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-cat]');
  if (!btn) return;
  state.category = btn.dataset.cat;
  renderPills();
  render();
});

$('linksContainer').addEventListener('click', (e) => {
  const link = e.target.closest('.link-card');
  if (!link) return;
  e.preventDefault();
  const c = CARDS[Number(link.dataset.index)];
  openModal(c.modalTitle || c.title, c.modalText || c.description, c.url);
});

$('serviceModal').addEventListener('click', (e) => { if (e.target === $('serviceModal')) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('serviceModal').classList.contains('hidden')) closeModal(); });

renderPills();
render();
