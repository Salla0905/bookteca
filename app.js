const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");

const livros = {
  semcoracao: {
    titulo: "Sem coração",
    img: "livro1.jpg",
    desc: `Muito antes de Alice cair no buraco do coelho…
    E antes das rosas serem pintadas de vermelho…
    A Rainha de Copas era só uma garota vivendo seu primeiro amor.
    Contos de fadas revisitados
    Catherine era uma das garotas mais desejadas do País das Maravilhas e a favorita do ainda solteiro Rei de Copas, mas seus interesses eram outros. Por seu talento na cozinha, ela só queria abrir uma confeitaria em sociedade com sua melhor amiga e oferecer ao Reino de Copas os mais deliciosos doces e bolos.`
  },
  jogosvorazes: {
    titulo: "Jogos vorazes",
    img: "livro2.jpg",
    desc: `Na abertura dos Jogos Vorazes, a organização não recolhe os corpos dos combatentes caídos e dá tiros de canhão até o final. Cada tiro, um morto. Onze tiros no primeiro dia. Treze jovens restaram, entre eles, Katniss. Para quem os tiros de canhão serão no dia seguinte?...

    Após o fim da América do Norte, uma nova nação chamada Panem surge. Formada por doze distritos, é comandada com mão de ferro pela Capital. Uma das formas com que demonstra seu poder sobre o resto do carente país é com Jogos Vorazes, uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de doze a dezoito anos de cada distrito são selecionados e obrigados a lutar até a morte!`
  },
  quartaasa: {
    titulo: "Quarta Asa",
    img: "livro3.jpg",
    desc: `Em Quarta Asa, best-seller #1 do The New York Times, uma jovem precisa sobreviver ao treinamento em uma escola de elite para poderosos cavaleiros de dragões, onde a única regra é se formar... ou morrer tentando.

    Violet Sorrengail, uma jovem de vinte anos, estava destinada a entrar na Divisão dos Escribas, levando uma vida relativamente tranquila entre os livros e as aulas de História. No entanto, a general comandante das forças de Navarre – também conhecida como sua mãe –, durona como as garras de um dragão, ordena que Violet se junte às centenas de candidatos que buscam se tornar a elite de seu país: cavaleiros de dragões.`
  },
  osdoismorremnofinal: {
    titulo: "Os dois morrem no final",
    img: "livro4.jpg",
    desc: `No dia 5 de setembro, pouco depois da meia-noite, Mateo Torrez e Rufus Emeterio recebem uma ligação da Central da Morte. A notícia é devastadora: eles vão morrer naquele mesmo dia.

    Os dois não se conhecem, mas, por motivos diferentes, estão à procura de um amigo com quem compartilhar os últimos momentos, uma conexão verdadeira que ajude a diminuir um pouco a angústia e a solidão que sentem. Por sorte, existe um aplicativo para isso, e é graças a ele que Rufus e Mateo vão se encontrar para uma última grande aventura: viver uma vida inteira em um único dia.`
  },
  ahoradastrelas: {
    titulo: "A hora da estrela",
    img: "livro5.jpg",
    desc: `A hora da estrela é um romance da escritora brasileira Clarice Lispector, publicado em 1977. A obra narra a história de Macabéa, uma jovem nordestina que se muda para o Rio de Janeiro em busca de uma vida melhor. Através de uma narrativa sensível e poética, Lispector aborda temas como a solidão, a busca por identidade e a condição da mulher na sociedade.`
  },
  battle_royale: {
    titulo: "Battle Royale",
    img: "livro6.jpg",
    desc: `Battle Royale é um romance de ficção científica escrito por Koushun Takami, publicado em 1999. A história se passa em um Japão distópico, onde um grupo de estudantes do ensino médio é forçado a participar de um jogo mortal, onde apenas um pode sobreviver. O livro explora temas como a violência, a sobrevivência e a natureza humana em situações extremas.`
  },
  capitaesdaareia: {
    titulo: "Capitães da Areia",
    img: "livro7.jpg",
    desc: `Capitães da Areia é um romance do escritor brasileiro Jorge Amado, publicado em 1937. A obra narra a vida de um grupo de meninos de rua em Salvador, que se organizam em uma espécie de gangue. Através de suas histórias, Amado aborda temas como a pobreza, a marginalização e a busca por liberdade.`
  },
};

document.querySelectorAll(".ver-mais").forEach(btn => {
  btn.addEventListener("click", () => {
    const livroId = btn.dataset.livro;
    const livro = livros[livroId];

    modalTitle.textContent = livro.titulo;
    modalImg.src = livro.img;
    modalDesc.textContent = livro.desc;

    modal.classList.add("open-modal");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});




const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const cardWidth = cards[0].offsetWidth + 16; // card + margin

// duplicar cards para loop infinito
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

let index = 0;

function updateCarousel() {
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {
  index++;
  updateCarousel();

  // quando passar pelos originais, reinicia sem transição
  if (index === cards.length) {
    setTimeout(() => {
      track.style.transition = 'none';
      index = 0;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }, 500);
  }
}

function prevSlide() {
  if (index === 0) {
    // ir para o clone final antes de voltar
    track.style.transition = 'none';
    index = cards.length;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
    setTimeout(() => {
      track.style.transition = 'transform 0.5s ease-in-out';
      index--;
      updateCarousel();
    }, 20);
  } else {
    index--;
    updateCarousel();
  }
}

document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-btn.prev').addEventListener('click', prevSlide);
