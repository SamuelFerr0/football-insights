

function verDetalhes(id) {
  window.location.href = `detalhes.html?id=${id}`;
}

function carregarDetalhes() {
  const urlParams = new URLSearchParams(window.location.search);
  const idTime = parseInt(urlParams.get("id"));

  if (!idTime) return;

  const time = dados.times.find((t) => t.id === idTime);
  if (!time) return;

  const classeFase =
    time.fase === "Boa" ? "boa" : time.fase === "Ruim" ? "ruim" : "medio";

  const container = document.getElementById("detalhes-time");
  if (container) {
    container.innerHTML = `
      <div class="card-detalhe">
        <img src="${time.imagem}" alt="Imagem do ${time.nome}">
        <div class="detalhe-conteudo">
          <h2>${time.nome}</h2>
          <p><strong>Liga:</strong> ${time.liga}</p>
          <p><strong>Estilo de Jogo:</strong> ${time.estilo}</p>
          <p>
            <strong>Fase:</strong>
            <span class="bolinha ${classeFase}"></span>${time.fase}
          </p>
          <p><strong>Sobre o Time:</strong> ${time.descricao}</p>
          <div class="estatisticas">
            <h3>Estatísticas</h3>
            <p>Vitórias: ${time.vitorias}</p>
            <p>Empates: ${time.empates}</p>
            <p>Derrotas: ${time.derrotas}</p>
          </div>
          <a href="index.html"><button>← Voltar</button></a>
        </div>
      </div>
      <div class="titulo-partidas">
        <h3>Últimas Partidas</h3>
      </div>
    `;
  }

  const historico = document.getElementById("historico");
  if (historico) {
    const partidasDoTime = dados.ultimasPartidas.filter(
      (p) => p.timeId === time.id,
    );
    let htmlPartidas = "";

    partidasDoTime.forEach((partida) => {
      htmlPartidas += `
        <div class="card_partida_item">
          <img src="${partida.imagem}" alt="Escudo do ${partida.adversario}">
          <h4>${partida.resultado}</h4>
        </div>
      `;
    });
    historico.innerHTML = htmlPartidas;
  }
}

if (document.getElementById("detalhes-time")) {
  carregarDetalhes();
}
