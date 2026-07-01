// Desafio 2

// Questão 1 — Média de notas e filtro de aprovados

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const aprovados = alunos
  .map((aluno) => {
    const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
    const media = soma / aluno.notas.length;

    return {
      nome: aluno.nome,
      media: Number(media.toFixed(2)),
    };
  })
  .filter((aluno) => aluno.media >= 7)
  .sort((a, b) => b.media - a.media);

console.log(aprovados);

// Questão 2 — Catálogo de filmes com busca e ordenação
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
    const filtro = filmes.filter((filme) => filme.genero === genero);

    if(criterio === 'titulo') {
      filtro.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if(criterio === 'ano') {
      filtro.sort((a, b) => b.ano - a.ano);
     } else {
        console.log("Critério inválido!");
        filtro.lenght = 0;
      }

      console.log(
        filtro.map((filme) => ´$
      )
    }
}

