const dados = {
  times: [
    {
      id: 1,
      nome: "Atletico Mineiro",
      imagem: "../assets/img/atletico.png",
      estilo: "Ofensivo",
      fase: "Boa",
      liga: "Brasileirão Série A",
      descricao:
        "O Atlético Mineiro é um dos clubes mais tradicionais do futebol brasileiro, conhecido pelo seu estilo ofensivo e pela forte torcida apaixonada.",
      destaque: true,
      vitorias: 18,
      empates: 6,
      derrotas: 4,
    },
    {
      id: 2,
      nome: "Cruzeiro",
      imagem: "../assets/img/cruzeiro.png",
      estilo: "Defensivo",
      fase: "Ruim",
      liga: "Brasileirão Série A",
      descricao:
        "O Cruzeiro Esporte Clube é um gigante do futebol mineiro, com um estilo de jogo mais defensivo e organized.",
      destaque: false,
      vitorias: 8,
      empates: 5,
      derrotas: 15,
    },
    {
      id: 3,
      nome: "America Mineiro",
      imagem: "../assets/img/america.png",
      estilo: "Equilibrado",
      fase: "Regular",
      liga: "Brasileirão Série A",
      descricao:
        "O América Mineiro apresenta um futebol equilibrado, alternando entre momentos ofensivos e defensivos conforme a necessidade.",
      destaque: true,
      vitorias: 10,
      empates: 8,
      derrotas: 10,
    },
  ],

  ultimasPartidas: [
    {
      id: 101,
      timeId: 1,
      adversario: "Flamengo",
      resultado: "Atlético 2 x 1 Flamengo",
      imagem: "../assets/img/flamengo.png",
    },
    {
      id: 102,
      timeId: 1,
      adversario: "Palmeiras",
      resultado: "Atlético 0 x 0 Palmeiras",
      imagem: "../assets/img/palmeiras.png",
    },
    {
      id: 103,
      timeId: 1,
      adversario: "São Paulo",
      resultado: "São Paulo 1 x 3 Atlético",
      imagem: "../assets/img/saopaulo.png",
    },
    {
      id: 201,
      timeId: 2,
      adversario: "Grêmio",
      resultado: "Cruzeiro 0 x 2 Grêmio",
      imagem: "../assets/img/gremio.png",
    },
    {
      id: 202,
      timeId: 2,
      adversario: "Fluminense",
      resultado: "Fluminense 1 x 0 Cruzeiro",
      imagem: "../assets/img/fluminense.png",
    },
    {
      id: 203,
      timeId: 2,
      adversario: "Vasco",
      resultado: "Cruzeiro 1 x 1 Vasco",
      imagem: "../assets/img/vasco.png",
    },
    {
      id: 301,
      timeId: 3,
      adversario: "Santos",
      resultado: "América 1 x 1 Santos",
      imagem: "../assets/img/santos.png",
    },
    {
      id: 302,
      timeId: 3,
      adversario: "Botafogo",
      resultado: "Botafogo 0 x 2 América",
      imagem: "../assets/img/botafogo.png",
    },
    {
      id: 303,
      timeId: 3,
      adversario: "Cuiabá",
      resultado: "América 0 x 1 Cuiabá",
      imagem: "../assets/img/cuiaba.png",
    },
  ],
};

const menu = document.querySelector(".menu ul");
if (menu) {
  menu.innerHTML = `
    <li><a href="index.html">Início</a></li>
    <li><a href="partidas.html">Partidas</a></li>
    <li><a href="estatistica.html">Estatisticas</a></li>
    <li><a href="denunciar.html">Favoritos</a></li>
    <li><a href="times.html">Times</a></li>
  `;
}

const aside = document.querySelector(".coluna_direta");
if (aside) {
  aside.innerHTML = `
    <div class="pesquisa">
      <h3 class="titulo">Buscar Times</h3>
      <div>
        <label for="time">Nome:</label>
        <input type="text" id="time" name="nome_time" />
      </div>
      <div>
        <label for="liga">Liga:</label>
        <input type="text" id="liga" name="liga" />
      </div>
      <button type="button" id="btn-buscar">Buscar</button>
    </div>
  `;
}

const banner = document.querySelector(".banner");
if (banner) {
  banner.innerHTML = `
    <p class="intro">
      O FootScore é uma plataforma para análise de desempenho de times
      de futebol, mostrando estatísticas, estilo de jogo e fase atual
      das equipes.
    </p>
    <h2>Times Analisados</h2>
  `;
}

function renderizarCards(listaTimes) {
  const listaCards = document.querySelector(".seleçao_cards");
  if (!listaCards) return;
  
  listaCards.innerHTML = "";
  
  if (listaTimes.length === 0) {
    listaCards.innerHTML = `<p>Nenhum time encontrado.</p>`;
    return;
  }

  listaTimes.forEach((time) => {
    const classeFase =
      time.fase === "Boa" ? "boa" : time.fase === "Ruim" ? "ruim" : "medio";
    listaCards.innerHTML += `
      <article class="card">
        <img src="${time.imagem}" alt="Imagem do ${time.nome}">
        <div class="card_conteudo">
          <h3>${time.nome}</h3>
          <p>Estilo: ${time.estilo}</p>
          <p><span class="bolinha ${classeFase}"></span>Fase: ${time.fase}</p>
          <button onclick="verDetalhes(${time.id})">Ver mais</button>
        </div>
      </article>
    `;
  });
}

renderizarCards(dados.times);

function filtrarTimes() {
  const filtroNome = document.getElementById("time").value.toLowerCase().trim();
  const filtroLiga = document.getElementById("liga").value.toLowerCase().trim();
  
  const timesFiltrados = dados.times.filter((time) => {
    const correspondeNome = time.nome.toLowerCase().includes(filtroNome);
    const correspondeLiga = time.liga.toLowerCase().includes(filtroLiga);
    return correspondeNome && correspondeLiga;
  });
  
  renderizarCards(timesFiltrados);
}

const btnBuscar = document.getElementById("btn-buscar");
if (btnBuscar) {
  btnBuscar.addEventListener("click", filtrarTimes);
}

const footer = document.querySelector(".rodape");
if (footer) {
  footer.innerHTML = `
    <div class="footer-container">
      
      <div class="footer-marca">
        <h4>&copy; FootScore</h4>
        <p class="footer-subtexto">Análise e Estatísticas de Futebol</p>
      </div>
      
      <div class="desenvolvedor">
        <p class="nome">Desenvolvido por: Samuel Ferreira Guimarães </p>
        <p class="dev-info">Curso: Engenharia de Software </p>
      </div>

      <div class="footer-contato">
        <p class="email">Contato: footscore@email.com</p>
        <div class="social">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>

    </div>
  `;
}

const carrosel = document.getElementById("carrosel");
if (carrosel) {
  let primeiroItem = true;
  dados.times.forEach((item) => {
    if (item.destaque == true) {
      const carroselItem = document.createElement("div");
      carroselItem.classList.add("carousel-item");

      if (primeiroItem) {
        carroselItem.classList.add("active");
        primeiroItem = false;
      }

      const carroselItemCard = document.createElement("div");
      carroselItemCard.classList.add("carousel-card");

      const tag = document.createElement("span");
      tag.classList.add("carousel-tag");
      tag.textContent = " Destaque";

      const carroselItemImage = document.createElement("img");
      carroselItemImage.setAttribute("src", item.imagem);
      carroselItemImage.setAttribute("alt", item.nome);
      carroselItemImage.classList.add("d-block");

      const nome = document.createElement("h3");
      nome.textContent = item.nome;
      const descricao = document.createElement("p");
      descricao.textContent = item.descricao;

      carroselItemCard.appendChild(tag);
      carroselItemCard.appendChild(carroselItemImage);
      carroselItemCard.appendChild(nome);
      carroselItemCard.appendChild(descricao);

      carroselItem.appendChild(carroselItemCard);
      carrosel.appendChild(carroselItem);
    }
  });
}

function verDetalhes(id) {
  window.location.href = `detalhes.html?id=${id}`;
}