const PAGE_SIZE = 12;
const REGION_NAMES = {
  Africa: "África",
  Americas: "América",
  Asia: "Asia",
  Europe: "Europa",
  Oceania: "Oceanía",
  Antarctic: "Antártida"
};

const curatedFacts = {
  AFG: "Afganistán alberga el minarete de Jam, del siglo XII, una torre de ladrillo de 65 metros declarada Patrimonio de la Humanidad.",
  ALB: "En Albania hay más de 170.000 búnkeres construidos durante el siglo XX; muchos hoy tienen usos muy distintos.",
  AND: "Andorra es el único país del mundo cuyo idioma oficial es el catalán.",
  ARG: "El Aconcagua, en Argentina, es la montaña más alta del mundo fuera de Asia: alcanza los 6.961 metros.",
  AUS: "Australia es el único país que ocupa un continente entero y tiene más canguros que habitantes.",
  AUT: "El zoológico de Schönbrunn, en Viena, abrió en 1752 y se considera el más antiguo que sigue en funcionamiento.",
  BOL: "El salar de Uyuni, en Bolivia, es el mayor desierto de sal del planeta y puede reflejar el cielo como un espejo.",
  BRA: "Brasil comparte frontera con todos los países de Sudamérica excepto Chile y Ecuador.",
  CAN: "Canadá tiene la costa más larga del mundo: sus orillas suman más de 200.000 kilómetros.",
  CHL: "El desierto de Atacama, en Chile, es uno de los lugares más secos de la Tierra; algunas estaciones no registran lluvia durante años.",
  CHN: "La Gran Muralla China es una red de fortificaciones construida durante siglos; sus distintos tramos suman miles de kilómetros.",
  COL: "Colombia es el único país sudamericano con costas tanto en el mar Caribe como en el océano Pacífico.",
  CRI: "Costa Rica abolió su ejército en 1948 y destinó esos recursos a educación y sanidad.",
  CUB: "Cuba alberga al zunzuncito, la especie de ave más pequeña del mundo: mide alrededor de cinco centímetros.",
  DNK: "Groenlandia, la isla más grande del mundo que no es un continente, forma parte del Reino de Dinamarca.",
  ECU: "Ecuador lleva el nombre de la línea ecuatorial, que atraviesa el país y puede visitarse cerca de Quito.",
  EGY: "La Gran Pirámide de Guiza fue la construcción más alta del mundo durante casi 4.000 años.",
  ESP: "España tiene más de 8.000 kilómetros de costa y una gran diversidad de paisajes, desde desiertos hasta glaciares.",
  ETH: "Etiopía tiene su propio calendario, con 13 meses, y celebra el año nuevo en septiembre.",
  FIN: "Finlandia tiene alrededor de 188.000 lagos y se conoce como la tierra de los mil lagos.",
  FRA: "Francia tiene más husos horarios que cualquier otro país gracias a sus territorios de ultramar.",
  DEU: "La primera revista impresa de la que se tiene registro apareció en Alemania en 1663.",
  GRC: "Grecia cuenta con miles de islas e islotes, aunque solo una parte está habitada.",
  IND: "India alberga la oficina de correos más alta del mundo, en el pueblo de Hikkim, a más de 4.400 metros de altitud.",
  IDN: "Indonesia es el mayor archipiélago del mundo: se extiende a lo largo de miles de islas entre dos océanos.",
  IRN: "El qanat, un antiguo sistema persa de canales subterráneos, permitió llevar agua a través de zonas desérticas.",
  IRL: "En Irlanda no hay serpientes autóctonas; la isla quedó separada de Gran Bretaña antes de que pudieran llegar.",
  ISL: "Islandia obtiene casi toda su electricidad de fuentes renovables, principalmente geotermia e hidroelectricidad.",
  ISR: "El mar Muerto, entre Israel y Jordania, es uno de los puntos más bajos de la superficie terrestre.",
  ITA: "Italia tiene más lugares inscritos como Patrimonio Mundial de la UNESCO que ningún otro país.",
  JPN: "Japón tiene más de 6.000 islas y una red ferroviaria famosa por su puntualidad.",
  KEN: "La reserva de Maasai Mara, en Kenia, es escenario de una de las mayores migraciones de mamíferos del planeta.",
  MDV: "Maldivas es el país más bajo del mundo: su altura media sobre el nivel del mar ronda apenas los 1,5 metros.",
  MEX: "La Ciudad de México se construyó sobre Tenochtitlan, una antigua ciudad lacustre fundada por los mexicas.",
  MNG: "Mongolia tiene la menor densidad de población de cualquier país soberano.",
  NPL: "Nepal contiene ocho de las diez montañas más altas del planeta, incluido el Everest.",
  NLD: "Alrededor de una cuarta parte de los Países Bajos está por debajo del nivel del mar, protegida por diques y obras hidráulicas.",
  NZL: "Nueva Zelanda fue el primer país autónomo en conceder el voto a las mujeres, en 1893.",
  NGA: "Nigeria es el país más poblado de África y cuenta con cientos de lenguas y grupos culturales.",
  NOR: "Noruega tiene una costa recortada por más de mil fiordos, valles glaciares inundados por el mar.",
  PAK: "El K2, en la frontera entre Pakistán y China, es la segunda montaña más alta del mundo.",
  PER: "Machu Picchu, la ciudad inca de los Andes peruanos, se encuentra a unos 2.430 metros de altitud.",
  PHL: "Filipinas está formada por más de 7.600 islas, aunque solo una parte está habitada.",
  POL: "El castillo de Malbork, en Polonia, es considerado el castillo de ladrillo más grande del mundo.",
  PRT: "La librería Bertrand de Lisboa, abierta en 1732, es reconocida como una de las librerías más antiguas aún en actividad.",
  RUS: "El lago Baikal, en Rusia, contiene cerca de una quinta parte del agua dulce superficial no congelada del planeta.",
  SGP: "Singapur es una ciudad-Estado que pasó de ser un puerto comercial a convertirse en uno de los principales centros financieros del mundo.",
  ZAF: "Sudáfrica tiene tres capitales: Pretoria, Ciudad del Cabo y Bloemfontein, cada una con una función de gobierno distinta.",
  KOR: "Corea del Sur es conocida por su rápida adopción de nuevas tecnologías y cuenta con una de las redes de internet más veloces.",
  SWE: "Suecia tiene el derecho de acceso a la naturaleza, que permite disfrutar del campo respetando a las personas y al entorno.",
  CHE: "Suiza tiene cuatro idiomas nacionales: alemán, francés, italiano y romanche.",
  THA: "Tailandia es el único país del sudeste asiático que no fue colonizado por una potencia europea.",
  TUR: "Estambul se extiende a ambos lados del estrecho del Bósforo, entre Europa y Asia.",
  ARE: "Emiratos Árabes Unidos reúne siete emiratos y su ciudad de Dubái alberga uno de los edificios más altos del mundo.",
  GBR: "El metro de Londres, inaugurado en 1863, fue el primer ferrocarril subterráneo del mundo.",
  USA: "Estados Unidos tiene 63 parques nacionales, desde volcanes y cañones hasta bosques tropicales.",
  VAT: "La Ciudad del Vaticano es el Estado soberano más pequeño del mundo, tanto por superficie como por población.",
  VNM: "La cueva Son Doong, en Vietnam, es tan grande que contiene su propio río subterráneo y tramos de selva.",
  ZWE: "Las cataratas Victoria, en la frontera de Zimbabue y Zambia, forman una de las cortinas de agua más anchas del mundo."
};

const elements = {
  search: document.querySelector("#country-search"),
  grid: document.querySelector("#country-grid"),
  count: document.querySelector("#country-count"),
  total: document.querySelector("#browser-total"),
  empty: document.querySelector("#empty-state"),
  loadMore: document.querySelector("#load-more"),
  featureFlag: document.querySelector("#feature-flag"),
  featureRegion: document.querySelector("#feature-region"),
  featureName: document.querySelector("#feature-name"),
  featureFact: document.querySelector("#feature-fact"),
  featureNumber: document.querySelector("#feature-number"),
  stats: document.querySelector("#country-stats"),
  map: document.querySelector("#country-map"),
  mapTitle: document.querySelector("#map-title"),
  coordinates: document.querySelector("#map-coordinates"),
  mapLink: document.querySelector("#map-link"),
  factSource: document.querySelector("#fact-source"),
  filters: document.querySelector("#continent-filters"),
  random: document.querySelector("#random-button")
};

let countries = [];
let visibleCountries = [];
let activeRegion = "Todos";
let selectedCode = "";
let page = 1;
let factRequest = 0;

function getCountryName(country) {
  return country.translations?.spa?.common || country.name?.common || "País sin nombre";
}

function getRegion(country) {
  if (country.region === "Americas") return "América";
  return REGION_NAMES[country.region] || country.region || "Mundo";
}

function numberFormat(value) {
  return new Intl.NumberFormat("es").format(value);
}

function areaFormat(value) {
  return `${numberFormat(Math.round(value))} km²`;
}

function setFlagSource(image, country) {
  const code = /^[a-z0-9]{2}$/i.test(country.cca2 || "") ? country.cca2.toUpperCase() : "??";
  const pngSource = country.flags?.png || (code !== "??" ? `https://flagcdn.com/w320/${code.toLowerCase()}.png` : "");
  let triedPng = false;

  image.onerror = () => {
    if (!triedPng && pngSource && image.src !== pngSource) {
      triedPng = true;
      image.src = pngSource;
      return;
    }

    image.onerror = null;
    image.alt = `Bandera no disponible (${code})`;
    image.title = `No se pudo cargar la bandera de ${getCountryName(country)}`;
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48"><rect width="72" height="48" rx="4" fill="#f1f0ec"/><text x="36" y="30" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#69766c">${code}</text></svg>`
    )}`;
  };
  image.src = country.flags?.svg || pngSource;
}

function renderCountries() {
  const query = elements.search.value.trim().toLocaleLowerCase("es");
  visibleCountries = countries.filter((country) => {
    const matchesName = getCountryName(country).toLocaleLowerCase("es").includes(query)
      || (country.name?.common || "").toLocaleLowerCase("es").includes(query);
    return matchesName && (activeRegion === "Todos" || getRegion(country) === activeRegion);
  });

  const visiblePage = visibleCountries.slice(0, page * PAGE_SIZE);
  elements.grid.replaceChildren();
  visiblePage.forEach((country) => elements.grid.append(createCountryCard(country)));
  elements.empty.hidden = visibleCountries.length > 0;
  elements.count.textContent = `${visibleCountries.length} ${visibleCountries.length === 1 ? "país" : "países"}`;
  elements.total.textContent = `${visibleCountries.length} en el atlas`;
  elements.loadMore.hidden = visiblePage.length >= visibleCountries.length || visibleCountries.length === 0;
}

function createCountryCard(country) {
  const button = document.createElement("button");
  button.className = `country-card${country.cca3 === selectedCode ? " selected" : ""}`;
  button.type = "button";
  button.setAttribute("aria-label", `Descubrir ${getCountryName(country)}`);
  button.setAttribute("aria-pressed", String(country.cca3 === selectedCode));

  const flag = document.createElement("img");
  flag.alt = country.flags?.alt || `Bandera de ${getCountryName(country)}`;
  flag.loading = "lazy";
  setFlagSource(flag, country);

  const copy = document.createElement("span");
  copy.className = "card-copy";
  const name = document.createElement("span");
  name.className = "card-name";
  name.textContent = getCountryName(country);
  const region = document.createElement("span");
  region.className = "card-region";
  region.textContent = getRegion(country);
  copy.append(name, region);

  const arrow = document.createElement("span");
  arrow.className = "card-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  button.append(flag, copy, arrow);
  button.addEventListener("click", () => selectCountry(country));
  return button;
}

function renderStats(country) {
  const languages = country.languages ? Object.values(country.languages).join(", ") : "No disponible";
  const stats = [
    ["CAPITAL", country.capital?.[0] || "Sin capital"],
    ["IDIOMAS", languages],
    ["SUPERFICIE", country.area ? areaFormat(country.area) : "Sin datos"]
  ];
  elements.stats.replaceChildren();
  stats.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "stat";
    const title = document.createElement("span");
    title.className = "stat-label";
    title.textContent = label;
    const detail = document.createElement("span");
    detail.className = "stat-value";
    detail.textContent = value;
    item.append(title, detail);
    elements.stats.append(item);
  });
}

async function getFact(country, requestId) {
  if (curatedFacts[country.cca3]) return curatedFacts[country.cca3];

  const articleName = country.name?.translations?.spa?.common
    || country.name?.common
    || getCountryName(country);
  const endpoint = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleName)}`;
  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`Wikipedia respondió ${response.status}`);
    const article = await response.json();
    if (requestId !== factRequest) return null;
    if (article.extract && !article.type?.includes("disambiguation")) {
      return { text: article.extract, url: article.content_urls?.desktop?.page || `https://es.wikipedia.org/wiki/${encodeURIComponent(articleName)}` };
    }
  } catch (error) {
    console.warn(`No se pudo obtener el artículo de ${getCountryName(country)}:`, error);
  }

  if (country.area) {
    const rankedCountries = countries
      .filter((item) => item.area)
      .sort((a, b) => b.area - a.area);
    const rank = rankedCountries.findIndex((item) => item.cca3 === country.cca3) + 1;
    if (rank > 0) {
      return {
        text: `${getCountryName(country)} tiene ${areaFormat(country.area)} de superficie y ocupa el puesto ${numberFormat(rank)} entre los territorios del atlas por extensión.`,
        url: "https://github.com/mledoze/countries"
      };
    }
  }
  const capital = country.capital?.[0];
  if (capital) {
    return {
      text: `La capital de ${getCountryName(country)} es ${capital}, centro político y cultural de este rincón del mundo.`,
      url: "https://github.com/mledoze/countries"
    };
  }
  return {
    text: `Cada lugar tiene una historia propia. Explora ${getCountryName(country)} en el mapa y descubre más sobre este rincón del mundo.`,
    url: "https://github.com/mledoze/countries"
  };
}

async function selectCountry(country) {
  selectedCode = country.cca3;
  const requestId = ++factRequest;
  const name = getCountryName(country);
  const region = getRegion(country);
  elements.featureFlag.alt = country.flags?.alt || `Bandera de ${name}`;
  setFlagSource(elements.featureFlag, country);
  elements.featureRegion.textContent = region.toLocaleUpperCase("es");
  elements.featureName.textContent = name;
  elements.featureNumber.innerHTML = `<span>/ PAÍS</span>`;
  elements.featureFact.textContent = curatedFacts[country.cca3] || "Buscando una historia interesante...";
  elements.factSource.hidden = true;
  elements.mapTitle.textContent = country.capital?.[0] || name;
  renderStats(country);

  const coordinates = country.latlng;
  if (Array.isArray(coordinates) && coordinates.length >= 2) {
    const [lat, lon] = coordinates;
    const bbox = `${lon - 3},${lat - 2},${lon + 3},${lat + 2}`;
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${encodeURIComponent(`${lat},${lon}`)}`;
    elements.map.src = mapUrl;
    elements.mapLink.href = `https://www.openstreetmap.org/?mlat=${encodeURIComponent(lat)}&mlon=${encodeURIComponent(lon)}#map=5/${encodeURIComponent(lat)}/${encodeURIComponent(lon)}`;
    elements.coordinates.textContent = `${lat.toFixed(2)}°, ${lon.toFixed(2)}°`;
  } else {
    elements.map.removeAttribute("src");
    elements.mapLink.href = country.maps?.openStreetMaps || "#";
    elements.coordinates.textContent = "Ubicación no disponible";
  }

  renderCountries();
  const fact = await getFact(country, requestId);
  if (requestId !== factRequest || !fact) return;
  elements.featureFact.textContent = typeof fact === "string" ? fact : fact.text;
  if (typeof fact !== "string" && fact.url) {
    elements.factSource.href = fact.url;
    elements.factSource.hidden = false;
  }
}

async function loadCountries() {
  try {
    const result = window.ATLAS_COUNTRIES;
    if (!Array.isArray(result) || result.length === 0) throw new Error("El catálogo local no contiene países.");
    countries = result
      .filter((country) => country.cca3 && country.name?.common)
      .sort((a, b) => getCountryName(a).localeCompare(getCountryName(b), "es"));
    renderCountries();
    const featured = countries.find((country) => country.cca3 === "JPN") || countries[0];
    if (featured) selectCountry(featured);
  } catch (error) {
    console.error("No se pudo cargar el atlas:", error);
    elements.count.textContent = "No se pudo cargar el atlas";
    elements.total.textContent = "Fuente no disponible";
    elements.grid.innerHTML = '<div class="loading-card">No pudimos conectar con el atlas. Comprueba tu conexión y vuelve a intentarlo.</div>';
  }
}

elements.search.addEventListener("input", () => {
  page = 1;
  renderCountries();
});

elements.filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-region]");
  if (!button) return;
  activeRegion = button.dataset.region;
  page = 1;
  elements.filters.querySelectorAll(".filter-chip").forEach((chip) => {
    const isActive = chip === button;
    chip.classList.toggle("active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });
  renderCountries();
});

elements.loadMore.addEventListener("click", () => {
  page += 1;
  renderCountries();
});

elements.random.addEventListener("click", () => {
  if (visibleCountries.length === 0) return;
  const randomCountry = visibleCountries[Math.floor(Math.random() * visibleCountries.length)];
  selectCountry(randomCountry);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== elements.search && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    elements.search.focus();
  }
  if (event.key === "Escape" && document.activeElement === elements.search) {
    elements.search.value = "";
    elements.search.blur();
    page = 1;
    renderCountries();
  }
});

loadCountries();
