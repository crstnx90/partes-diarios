// Script file
// ══════════════════════════════════════════════════
//  FESTIVOS COLOMBIA 2026
// ══════════════════════════════════════════════════
const FESTIVOS_2026 = new Set([
  '2026-01-01', // Año Nuevo
  '2026-01-12', // Reyes Magos (lunes siguiente al 6 ene)
  '2026-03-23', // San José (lunes)
  '2026-04-02', // Jueves Santo
  '2026-04-03', // Viernes Santo
  '2026-05-01', // Día del Trabajo
  '2026-05-18', // Ascensión (lunes)
  '2026-06-08', // Corpus Christi (lunes)
  '2026-06-15', // Sagrado Corazón (lunes)
  '2026-06-29', // San Pedro y San Pablo (lunes)
  '2026-07-20', // Independencia
  '2026-08-07', // Batalla de Boyacá
  '2026-08-17', // Asunción (lunes)
  '2026-10-12', // Día de la Raza (lunes)
  '2026-11-02', // Todos los Santos (lunes)
  '2026-11-16', // Independencia Cartagena (lunes)
  '2026-12-08', // Inmaculada Concepción
  '2026-12-25', // Navidad
]);

function isHabil(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const dow = d.getDay();
  return dow !== 0 && dow !== 6 && !FESTIVOS_2026.has(dateStr);
}

function dateToStr(d) {
  return d.toISOString().split('T')[0];
}

function formatDateLong(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('es-CO', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const day = d.getDate().toString().padStart(2,'0');
  const months = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
  return `${day} DE ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function getWeekday(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('es-CO', { weekday:'long' }).toUpperCase();
}

// ══════════════════════════════════════════════════
//  CATEGORIAS DE NOVEDADES
// ══════════════════════════════════════════════════
const NOVEDADES_CATS = [
  'VACACIONES',
  'PERMISO BIENESTAR',
  'CURSOS DE LEY',
  'COMISION',
  'LICENCIAS',
  'INCAPACIDADES-HOSPITALIZADOS',
];

// ══════════════════════════════════════════════════
//  DATA (pre-cargado del Excel de enero 2026)
// ══════════════════════════════════════════════════
const defaultDirector = {
  nombre: 'Capitán de Navío IVÁN ANDRÉS PELÁEZ SOTELO',
  cargo: 'Director Hospital Naval Nivel III Cartagena'
};

let partes = {
  '2026-01-02': {
    toe: { of: 44, so: 96, imp: 11 },
    novedades: { 'VACACIONES':{of:3,so:19,imp:2}, 'PERMISO BIENESTAR':{of:11,so:0,imp:1}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:1,so:2,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','EXCUSA TN SANCHEZ MONICA 30-12-25 HASTA 04-01-26','EXCUSA S1 GOMEZ EDWIN HASTA 09-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26','PRESENTACION X TRASLADO SV QUIROGA X S2 JOYA'],
    director: {...defaultDirector}
  },
  '2026-01-05': {
    toe: { of: 44, so: 96, imp: 11 },
    novedades: { 'VACACIONES':{of:3,so:19,imp:2}, 'PERMISO BIENESTAR':{of:11,so:0,imp:1}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:2,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','EXCUSA S1 GOMEZ EDWIN HASTA 09-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26','COMISION S1 SAYAS ELKIN HASTA 07-01-26'],
    director: {...defaultDirector}
  },
  '2026-01-06': {
    toe: { of: 44, so: 96, imp: 11 },
    novedades: { 'VACACIONES':{of:0,so:0,imp:0}, 'PERMISO BIENESTAR':{of:0,so:0,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:2,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','EXCUSA S1 GOMEZ EDWIN HASTA 09-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26','COMISION S1 SAYAS ELKIN HASTA 07-01-26','PRESENTACION POR TRASLADO CN ROMERO X CF DIAZGRANADOS X TN MORENO ANAYANSI X TF QUINTERO X MA2 MEJIA X MA2 RIVERA'],
    director: {...defaultDirector}
  },
  '2026-01-07': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:8,so:17,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:2,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','EXCUSA S1 GOMEZ EDWIN HASTA 09-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26','PRESENTACION PERSONAL DE CLASE A SALIENTES Y PERSONAL QUE SE PRESENTA EL 07 ENERO. SJ GUEVARA Y S3 POCATERRA SE PRESENTAN EL VIERNES 09'],
    director: {...defaultDirector}
  },
  '2026-01-08': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:8,so:17,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:3,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','EXCUSA S1 GOMEZ EDWIN HASTA 09-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26','SJ GUEVARA Y S3 POCATERRA SE PRESENTAN EL VIERNES 09','EXCUSA MEDICA S1 CORREA ANNYS DESDE 08-01-2026 HASTA 10-01-2026'],
    director: {...defaultDirector}
  },
  '2026-01-09': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:8,so:16,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:4,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','EXCUSA S1 GOMEZ EDWIN HASTA 09-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26','EXCUSA MEDICA S1 CORREA ANNYS DESDE 08-01-2026 HASTA 10-01-2026','EXCUSA MEDICA S3 CORREA ANDRES 09-01-2026 — 11-01-2026'],
    director: {...defaultDirector}
  },
  '2026-01-13': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:8,so:16,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:3,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','EXCUSA S3 TORRES WILLINTONG HASTA 16-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26','EXCUSA MEDICA S3 CORREA ANDRES 09-01-2026 — 15-01-2026'],
    director: {...defaultDirector}
  },
  '2026-01-14': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:8,so:16,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:3,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','EXCUSA S3 TORRES WILLINTONG HASTA 16-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26','EXCUSA MEDICA S3 CORREA ANDRES 09-01-2026 — 15-01-2026'],
    director: {...defaultDirector}
  },
  '2026-01-15': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:8,so:14,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:3,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26'],
    director: {...defaultDirector}
  },
  '2026-01-16': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:9,so:11,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26'],
    director: {...defaultDirector}
  },
  '2026-01-19': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:7,so:10,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26','COMISION SJ TAPIAS SERGIO DE DISAN 07-12-25 HASTA 20-01-26'],
    director: {...defaultDirector}
  },
  '2026-01-20': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:2,imp:2}, 'PERMISO BIENESTAR':{of:5,so:10,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
  '2026-01-21': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:2,so:5,imp:2}, 'PERMISO BIENESTAR':{of:3,so:8,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['EXCUSA S1 BALLESTAS DALIS - MATERNIDAD 23-09-25 HASTA 26-01-26','COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
  '2026-01-22': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:2,so:5,imp:2}, 'PERMISO BIENESTAR':{of:2,so:7,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
  '2026-01-23': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:2,so:5,imp:2}, 'PERMISO BIENESTAR':{of:2,so:5,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
  '2026-01-26': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:3,imp:0}, 'PERMISO BIENESTAR':{of:2,so:4,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
  '2026-01-27': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:3,imp:0}, 'PERMISO BIENESTAR':{of:1,so:3,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
  '2026-01-28': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:3,imp:0}, 'PERMISO BIENESTAR':{of:1,so:2,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
  '2026-01-29': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:3,imp:0}, 'PERMISO BIENESTAR':{of:0,so:2,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
  '2026-01-30': {
    toe: { of: 48, so: 90, imp: 11 },
    novedades: { 'VACACIONES':{of:1,so:3,imp:0}, 'PERMISO BIENESTAR':{of:0,so:1,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
    observaciones: ['COMISION SJ MONTEALEGRE ANDRES DE UBAML 25-11-25 HASTA 21-02-26'],
    director: {...defaultDirector}
  },
};

// ══════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════
let currentDay = null;
let isDirty = false;

function markDirty() { isDirty = true; }

// ══════════════════════════════════════════════════
//  GENERATE WORK DAYS May-Dec 2026 as stubs
// ══════════════════════════════════════════════════
function generateStubDays() {
  const start = new Date('2026-02-01');
  const end = new Date('2026-12-31');
  for (let d = new Date(start); d <= end; d.setDate(d.getDate()+1)) {
    const ds = dateToStr(d);
    if (isHabil(ds) && !partes[ds]) {
      partes[ds] = {
        toe: { of: 48, so: 90, imp: 11 },
        novedades: { 'VACACIONES':{of:0,so:0,imp:0}, 'PERMISO BIENESTAR':{of:0,so:0,imp:0}, 'CURSOS DE LEY':{of:0,so:0,imp:0}, 'COMISION':{of:0,so:0,imp:0}, 'LICENCIAS':{of:0,so:0,imp:0}, 'INCAPACIDADES-HOSPITALIZADOS':{of:0,so:0,imp:0} },
        observaciones: [],
        director: {...defaultDirector}
      };
    }
  }
}

generateStubDays();

// ══════════════════════════════════════════════════
//  COMPUTE DISPONIBLES
// ══════════════════════════════════════════════════
function computeDisponibles(parte) {
  const { toe, novedades } = parte;
  let novOf = 0, novSo = 0, novImp = 0;
  for (const cat of NOVEDADES_CATS) {
    const n = novedades[cat] || { of:0, so:0, imp:0 };
    novOf += n.of; novSo += n.so; novImp += n.imp;
  }
  return {
    availOf: toe.of - novOf,
    availSo: toe.so - novSo,
    availImp: toe.imp - novImp,
    toeTotal: toe.of + toe.so + toe.imp,
    novOf, novSo, novImp,
    novTotal: novOf + novSo + novImp
  };
}

// ══════════════════════════════════════════════════
//  BUILD SIDEBAR CON ACORDEÓN MES A MES
// ══════════════════════════════════════════════════
function buildSidebar() {
  const dayList = document.getElementById('dayList');
  dayList.innerHTML = '';

  const sortedDates = Object.keys(partes).sort();

  // Agrupar fechas por mes
  const grupos = {};
  for (const ds of sortedDates) {
    if (!isHabil(ds)) continue;
    const d = new Date(ds + 'T12:00:00');
    const monthKey = d.toLocaleDateString('es-CO', { month: 'long', year: 'numeric' }).toUpperCase();
    if (!grupos[monthKey]) grupos[monthKey] = [];
    grupos[monthKey].push(ds);
  }

  for (const [monthKey, fechas] of Object.entries(grupos)) {
    const group = document.createElement('div');
    group.className = 'month-group';

    // Detectar si el mes actual está abierto (contiene el día seleccionado)
    const tieneActivo = fechas.includes(currentDay);

    const row = document.createElement('div');
    row.className = 'month-row';
    row.innerHTML = `
      <div class="month-left">
        <span class="month-name">${monthKey}</span>
        <span class="month-count">${fechas.length} días</span>
      </div>
      <span class="month-chevron ${tieneActivo ? 'open' : ''}">▾</span>
    `;

    const cont = document.createElement('div');
    cont.className = 'days-container' + (tieneActivo ? ' open' : '');

    // Días dentro del mes
    for (const ds of fechas) {
      const d = new Date(ds + 'T12:00:00');
      const { availOf, availSo, availImp, toeTotal } = computeDisponibles(partes[ds]);
      const availTotal = availOf + availSo + availImp;

      const btn = document.createElement('button');
      btn.className = 'day-btn' + (ds === currentDay ? ' active' : '');
      btn.dataset.date = ds;
      btn.onclick = () => selectDay(ds);
      btn.innerHTML = `
        <div class="day-num">${d.getDate()}</div>
        <div class="day-info">
          <div class="day-weekday">${getWeekday(ds)}</div>
          <div class="day-avail"><strong>${availTotal}</strong> / ${toeTotal} disponibles</div>
        </div>
      `;
      cont.appendChild(btn);
    }

    // Toggle al hacer clic en el mes
    row.addEventListener('click', () => {
      const isOpen = cont.classList.contains('open');
      cont.classList.toggle('open', !isOpen);
      row.querySelector('.month-chevron').classList.toggle('open', !isOpen);
    });

    group.appendChild(row);
    group.appendChild(cont);
    dayList.appendChild(group);
  }
}

// ══════════════════════════════════════════════════
//  SELECT DAY
// ══════════════════════════════════════════════════
function selectDay(ds) {
  if (isDirty && currentDay && !confirm('¿Salir sin guardar los cambios del parte actual?')) return;
  isDirty = false;
  currentDay = ds;

  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('editorView').style.display = 'block';
  document.getElementById('newDayForm').style.display = 'none';

  buildSidebar();
  renderEditor();
}

// ══════════════════════════════════════════════════
//  RENDER EDITOR
// ══════════════════════════════════════════════════
function renderEditor() {
  const parte = partes[currentDay];
  const { availOf, availSo, availImp, toeTotal } = computeDisponibles(parte);
  const availTotal = availOf + availSo + availImp;

  document.getElementById('editorDateHeading').textContent = `PARTE DEL DÍA ${formatDateShort(currentDay)}`;
  document.getElementById('editorDateSub').textContent = `${getWeekday(currentDay)} · ${formatDateLong(currentDay)}`;

  // Cards
  document.getElementById('card-avail-of').textContent = availOf;
  document.getElementById('card-toe-of').textContent = parte.toe.of;
  document.getElementById('card-avail-so').textContent = availSo;
  document.getElementById('card-toe-so').textContent = parte.toe.so;
  document.getElementById('card-avail-imp').textContent = availImp;
  document.getElementById('card-toe-imp').textContent = parte.toe.imp;
  document.getElementById('card-avail-total').textContent = availTotal;
  document.getElementById('card-toe-total').textContent = toeTotal;

  // Novedades table
  const tbody = document.getElementById('novedadesBody');
  tbody.innerHTML = '';

  let totOf = 0, totSo = 0, totImp = 0;
  for (const cat of NOVEDADES_CATS) {
    const n = parte.novedades[cat] || { of:0, so:0, imp:0 };
    totOf += n.of; totSo += n.so; totImp += n.imp;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><div class="nov-label">${cat}</div></td>
      <td><input class="num-input" type="number" min="0" value="${n.of}" data-cat="${cat}" data-field="of" onchange="updateNovedad(this)" oninput="markDirty()"></td>
      <td><input class="num-input" type="number" min="0" value="${n.so}" data-cat="${cat}" data-field="so" onchange="updateNovedad(this)" oninput="markDirty()"></td>
      <td><input class="num-input" type="number" min="0" value="${n.imp}" data-cat="${cat}" data-field="imp" onchange="updateNovedad(this)" oninput="markDirty()"></td>
      <td><input class="num-input total-cell" readonly value="${n.of+n.so+n.imp}" id="row-total-${cat.replace(/\s/g,'_')}"></td>
    `;
    tbody.appendChild(tr);
  }

  // TOE row
  const toeTr = document.createElement('tr');
  toeTr.innerHTML = `
    <td><div class="nov-label" style="font-weight:600;">TOE TOTAL</div></td>
    <td><input class="num-input" type="number" min="0" value="${parte.toe.of}" data-field="toe-of" onchange="updateToe(this)" oninput="markDirty()"></td>
    <td><input class="num-input" type="number" min="0" value="${parte.toe.so}" data-field="toe-so" onchange="updateToe(this)" oninput="markDirty()"></td>
    <td><input class="num-input" type="number" min="0" value="${parte.toe.imp}" data-field="toe-imp" onchange="updateToe(this)" oninput="markDirty()"></td>
    <td><input class="num-input total-cell" readonly value="${toeTotal}"></td>
  `;
  tbody.appendChild(toeTr);

  // Total novedades row
  const totTr = document.createElement('tr');
  totTr.className = 'total-row';
  totTr.innerHTML = `
    <td><div class="nov-label" style="font-weight:700;">TOTAL NOVEDADES</div></td>
    <td><input class="num-input total-cell" readonly value="${totOf}" id="tot-of"></td>
    <td><input class="num-input total-cell" readonly value="${totSo}" id="tot-so"></td>
    <td><input class="num-input total-cell" readonly value="${totImp}" id="tot-imp"></td>
    <td><input class="num-input total-cell" readonly value="${totOf+totSo+totImp}" id="tot-all"></td>
  `;
  tbody.appendChild(totTr);

  // Disponibles row
  const dispTr = document.createElement('tr');
  dispTr.className = 'total-row';
  dispTr.style.background = '#e8f4ec';
  dispTr.innerHTML = `
    <td><div class="nov-label" style="font-weight:700;color:#1a5c2a;">TOTAL DISPONIBLES</div></td>
    <td><input class="num-input total-cell" readonly value="${availOf}" id="disp-of" style="color:#1a5c2a;font-weight:700;"></td>
    <td><input class="num-input total-cell" readonly value="${availSo}" id="disp-so" style="color:#1a5c2a;font-weight:700;"></td>
    <td><input class="num-input total-cell" readonly value="${availImp}" id="disp-imp" style="color:#1a5c2a;font-weight:700;"></td>
    <td><input class="num-input total-cell" readonly value="${availTotal}" id="disp-all" style="color:#1a5c2a;font-weight:700;font-size:1.1rem;"></td>
  `;
  tbody.appendChild(dispTr);

  // Observaciones
  renderObservaciones();

  // Director
  document.getElementById('directorNombre').value = parte.director?.nombre || defaultDirector.nombre;
  document.getElementById('directorCargo').value = parte.director?.cargo || defaultDirector.cargo;
}

function updateNovedad(input) {
  const cat = input.dataset.cat;
  const field = input.dataset.field;
  const val = parseInt(input.value) || 0;
  if (!partes[currentDay].novedades[cat]) partes[currentDay].novedades[cat] = {of:0,so:0,imp:0};
  partes[currentDay].novedades[cat][field] = val;
  persistirDatos();
  refreshTotals();
  buildSidebar();
}

function updateToe(input) {
  const field = input.dataset.field;
  const val = parseInt(input.value) || 0;
  if (field === 'toe-of') partes[currentDay].toe.of = val;
  if (field === 'toe-so') partes[currentDay].toe.so = val;
  if (field === 'toe-imp') partes[currentDay].toe.imp = val;
  persistirDatos();
  refreshTotals();
  buildSidebar();
}

function refreshTotals() {
  const parte = partes[currentDay];
  const { availOf, availSo, availImp, toeTotal } = computeDisponibles(parte);
  const availTotal = availOf + availSo + availImp;

  let totOf=0,totSo=0,totImp=0;
  for (const cat of NOVEDADES_CATS) {
    const n = parte.novedades[cat]||{of:0,so:0,imp:0};
    totOf+=n.of; totSo+=n.so; totImp+=n.imp;
    const el = document.getElementById('row-total-'+cat.replace(/\s/g,'_'));
    if (el) el.value = n.of+n.so+n.imp;
  }

  const set = (id,v) => { const e=document.getElementById(id); if(e) e.value=v; };
  set('tot-of',totOf); set('tot-so',totSo); set('tot-imp',totImp); set('tot-all',totOf+totSo+totImp);
  set('disp-of',availOf); set('disp-so',availSo); set('disp-imp',availImp); set('disp-all',availTotal);
  set('card-avail-of',availOf); set('card-toe-of',parte.toe.of);
  set('card-avail-so',availSo); set('card-toe-so',parte.toe.so);
  set('card-avail-imp',availImp); set('card-toe-imp',parte.toe.imp);
  set('card-avail-total',availTotal); set('card-toe-total',toeTotal);
}

function renderObservaciones() {
  const obs = partes[currentDay].observaciones || [];
  const list = document.getElementById('obsList');
  list.innerHTML = '';
  obs.forEach((text, i) => {
    const div = document.createElement('div');
    div.className = 'obs-item';
    div.innerHTML = `
      <textarea class="obs-input" rows="1" oninput="updateObs(${i},this.value);autoResize(this)">${text}</textarea>
      <button class="obs-remove" onclick="removeObs(${i})" title="Eliminar">✕</button>
    `;
    list.appendChild(div);
  });
  list.querySelectorAll('.obs-input').forEach(ta => autoResize(ta));
}

function autoResize(ta) {
  ta.style.height = 'auto';
  ta.style.height = ta.scrollHeight + 'px';
}

function updateObs(i, val) {
  partes[currentDay].observaciones[i] = val;
  isDirty = true;
}

function addObservacion() {
  partes[currentDay].observaciones.push('');
  isDirty = true;
  renderObservaciones();
  const inputs = document.querySelectorAll('.obs-input');
  if (inputs.length) inputs[inputs.length-1].focus();
}

function removeObs(i) {
  partes[currentDay].observaciones.splice(i,1);
  isDirty = true;
  persistirDatos();
  renderObservaciones();
}

function saveCurrentDay() {
  partes[currentDay].director = {
    nombre: document.getElementById('directorNombre').value,
    cargo: document.getElementById('directorCargo').value
  };
  isDirty = false;
  persistirDatos();
  buildSidebar();
  // visual feedback
  const btn = document.querySelector('.btn-save');
  const orig = btn.textContent;
  btn.textContent = '✓ Guardado';
  btn.style.background = '#1a5c2a';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 1500);
}

// ══════════════════════════════════════════════════
//  PRINT
// ══════════════════════════════════════════════════
function printParte() {
  saveCurrentDay();
  const parte = partes[currentDay];
  const { availOf, availSo, availImp, toeTotal } = computeDisponibles(parte);
  const availTotal = availOf + availSo + availImp;
  let totOf=0,totSo=0,totImp=0;
  for (const cat of NOVEDADES_CATS) {
    const n=parte.novedades[cat]||{of:0,so:0,imp:0};
    totOf+=n.of;totSo+=n.so;totImp+=n.imp;
  }

  const novRows = NOVEDADES_CATS.map(cat => {
    const n = parte.novedades[cat]||{of:0,so:0,imp:0};
    return `<tr><td>${cat}</td><td>${n.of}</td><td>${n.so}</td><td>${n.imp}</td><td>${n.of+n.so+n.imp}</td></tr>`;
  }).join('');

  const obsHtml = parte.observaciones.filter(o=>o.trim()).map(o=>`<div class="print-obs-item">• ${o}</div>`).join('');

  const printDiv = document.getElementById('printParte');
  printDiv.innerHTML = `
    <div class="print-header">
      <div class="p-org">FUERZAS MILITARES DE COLOMBIA<br>ARMADA NACIONAL<br>HOSPITAL NAVAL NIVEL III CARTAGENA</div>
      <div class="p-title">CARTAGENA DE INDIAS D.T. Y C.<br>PARTE DIARIO DEL DÍA ${formatDateShort(currentDay)}</div>
    </div>

    <div class="print-section-label">TOTAL TOE</div>
    <table class="print-toe-table">
      <thead><tr><th>OFICIALES</th><th>SUBOFICIALES</th><th>IMP</th><th>TOTAL TOE</th></tr></thead>
      <tbody><tr><td>${parte.toe.of}</td><td>${parte.toe.so}</td><td>${parte.toe.imp}</td><td><strong>${toeTotal}</strong></td></tr></tbody>
    </table>

    <div class="print-section-label">NOVEDADES</div>
    <table class="print-nov-table">
      <thead><tr><th style="text-align:left;width:40%">NOVEDAD</th><th>OFICIALES</th><th>SUBOFICIALES</th><th>IMP</th><th>TOTAL</th></tr></thead>
      <tbody>
        ${novRows}
        <tr class="print-row-total"><td><strong>TOTAL NOVEDADES</strong></td><td><strong>${totOf}</strong></td><td><strong>${totSo}</strong></td><td><strong>${totImp}</strong></td><td><strong>${totOf+totSo+totImp}</strong></td></tr>
        <tr style="background:#e8f4ec;"><td><strong>TOTAL DISPONIBLES</strong></td><td><strong>${availOf}</strong></td><td><strong>${availSo}</strong></td><td><strong>${availImp}</strong></td><td><strong>${availTotal}</strong></td></tr>
      </tbody>
    </table>

    ${obsHtml ? `<div class="print-section-label">OBSERVACIONES</div><div class="print-obs-list">${obsHtml}</div>` : ''}

    <div class="print-signature">
      <div class="sig-block">
        <div style="height:45px;"></div>
        <div class="sig-line"></div>
        <div class="sig-name">${parte.director?.nombre || defaultDirector.nombre}</div>
        <div class="sig-title">${parte.director?.cargo || defaultDirector.cargo}</div>
      </div>
    </div>
  `;

  window.print();
}

// ══════════════════════════════════════════════════
//  NEW DAY FORM
// ══════════════════════════════════════════════════
function showNewDayForm() {
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('editorView').style.display = 'none';
  document.getElementById('newDayForm').style.display = 'block';

  // Set default date to next hábil
  let d = new Date();
  d.setDate(d.getDate()+1);
  while (!isHabil(dateToStr(d))) d.setDate(d.getDate()+1);
  document.getElementById('newDayDate').value = dateToStr(d);

  // Build nov form rows
  const rows = document.getElementById('novFormRows');
  rows.innerHTML = NOVEDADES_CATS.map(cat => `
    <div style="margin-bottom:10px;">
      <div class="form-label">${cat}</div>
      <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
        <div><label class="form-label">Oficiales</label><input type="number" class="form-input" id="nf-${cat.replace(/\s/g,'_')}-of" value="0" min="0"></div>
        <div><label class="form-label">Suboficiales</label><input type="number" class="form-input" id="nf-${cat.replace(/\s/g,'_')}-so" value="0" min="0"></div>
        <div><label class="form-label">IMP</label><input type="number" class="form-input" id="nf-${cat.replace(/\s/g,'_')}-imp" value="0" min="0"></div>
      </div>
    </div>
  `).join('');
}

function cancelNewDay() {
  document.getElementById('newDayForm').style.display = 'none';
  if (currentDay) {
    document.getElementById('editorView').style.display = 'block';
  } else {
    document.getElementById('emptyState').style.display = 'flex';
  }
}

function createNewDay() {
  const ds = document.getElementById('newDayDate').value;
  const warn = document.getElementById('dateWarning');

  if (!ds) { warn.textContent = 'Seleccione una fecha.'; warn.style.display='block'; return; }
  if (!isHabil(ds)) { warn.textContent = 'Esa fecha no es hábil (es fin de semana, festivo o fuera de 2026).'; warn.style.display='block'; return; }
  warn.style.display = 'none';

  const novedades = {};
  for (const cat of NOVEDADES_CATS) {
    const key = cat.replace(/\s/g,'_');
    novedades[cat] = {
      of: parseInt(document.getElementById(`nf-${key}-of`)?.value)||0,
      so: parseInt(document.getElementById(`nf-${key}-so`)?.value)||0,
      imp: parseInt(document.getElementById(`nf-${key}-imp`)?.value)||0,
    };
  }

  partes[ds] = {
    toe: {
      of: parseInt(document.getElementById('newToeOf').value)||48,
      so: parseInt(document.getElementById('newToeSo').value)||90,
      imp: parseInt(document.getElementById('newToeImp').value)||11,
    },
    novedades,
    observaciones: [],
    director: {...defaultDirector}
  };

  persistirDatos();
  buildSidebar();
  document.getElementById('newDayForm').style.display = 'none';
  selectDay(ds);
}

// ══════════════════════════════════════════════════
//  PERSISTENCIA JSON (localStorage)
// ══════════════════════════════════════════════════
const STORAGE_KEY = 'partes_diarios_hnliii_2026';

function persistirDatos() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(partes));
  } catch(e) {
    console.warn('No se pudo guardar en localStorage:', e);
  }
}

function cargarDatosGuardados() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const guardado = JSON.parse(raw);
      for (const ds in guardado) {
        if (!guardado[ds].novedades['LICENCIAS']) {
          guardado[ds].novedades['LICENCIAS'] = {of:0, so:0, imp:0};
        }
        if (guardado[ds].novedades['EXCUSADO / INCAPACIDAD'] !== undefined) {
          guardado[ds].novedades['INCAPACIDADES-HOSPITALIZADOS'] = guardado[ds].novedades['EXCUSADO / INCAPACIDAD'];
          delete guardado[ds].novedades['EXCUSADO / INCAPACIDAD'];
        }
        if (!guardado[ds].novedades['INCAPACIDADES-HOSPITALIZADOS']) {
          guardado[ds].novedades['INCAPACIDADES-HOSPITALIZADOS'] = {of:0, so:0, imp:0};
        }
      }
      partes = {...partes, ...guardado};
    }
  } catch(e) {
    console.warn('No se pudo leer de localStorage:', e);
  }
}

function exportarJSON() {
  const blob = new Blob([JSON.stringify(partes, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'partes_diarios_2026_backup.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importarJSON() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        partes = {...partes, ...data};
        persistirDatos();
        buildSidebar();
        if (currentDay && partes[currentDay]) selectDay(currentDay);
        alert('\u2713 Datos importados correctamente.');
      } catch {
        alert('Error: el archivo no es un JSON v\u00e1lido.');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ══════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════
cargarDatosGuardados();
document.getElementById('currentDateDisplay').textContent = new Date().toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).toUpperCase();

buildSidebar();
// End of script file