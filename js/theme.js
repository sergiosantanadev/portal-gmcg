/* =====================================================================
   theme.js — catálogo de CORES e ÍCONES (raramente precisa editar)
   Os valores abaixo são exatamente os do layout original.
   Mantenha as classes Tailwind escritas por extenso (não monte por
   concatenação), para continuarem funcionando se um dia houver build.
   ===================================================================== */

const COLORS = {
  sky:     { box: 'bg-sky-500/10 border-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950',             hover: 'group-hover:text-sky-400',     badge: 'bg-sky-500/20 text-sky-400' },
  emerald: { box: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950', hover: 'group-hover:text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-400' },
  purple:  { box: 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-slate-950',   hover: 'group-hover:text-purple-400',  badge: 'bg-purple-500/20 text-purple-400' },
  teal:    { box: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950',           hover: 'group-hover:text-teal-400',    badge: 'bg-teal-500/20 text-teal-400' },
  amber:   { box: 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950',       hover: 'group-hover:text-amber-400',   badge: 'bg-amber-500/20 text-amber-400' },
  indigo:  { box: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-slate-950',   hover: 'group-hover:text-indigo-400',  badge: 'bg-indigo-500/20 text-indigo-400' },
  rose:    { box: 'bg-rose-500/10 border-rose-500/20 text-rose-400 group-hover:bg-rose-500 group-hover:text-slate-950',           hover: 'group-hover:text-rose-400',    badge: 'bg-rose-500/20 text-rose-400' },
};

// Cada ícone é o atributo "d" de um <path> SVG (viewBox 24x24, traço).
const ICONS = {
  monitor:   'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  documento: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  grafico:   'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  livro:     'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  balanca:   'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  megafone:  'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A2.5 2.5 0 013 11.2V8.8a2.5 2.5 0 012.436-2.483l6.568-.438c.677-.045 1.296.442 1.34 1.12l.656 10.02c.045.678-.442 1.297-1.12 1.34l-6.568.438z',
  alerta:    'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  seta:      'M9 5l7 7-7 7',
};
