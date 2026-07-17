import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured }) {
  return (
    // <article className={'notice-card ${notice.featured ? "featured" : ""}`}>
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>
      <div className="notice-meta">
        <span>Por: {notice.author}</span>-<span>Data: {notice.date}</span>
      </div>
      <div className="notice-actions">
        {/* Exibir uma descrição completa do evento. Se ativo, texto do botão = "Fechar Detalhes". */}
        <div className="card-evento">
  {/* INÍCIO DO COMPONENTE */}
  <h2>{evento.titulo}</h2>
  <p>Data: {evento.data}</p>

  {/* QUESTÃO 1: Exibir uma descrição completa do evento se estiver ativo */}
  {ativo && (
    <div className="detalhes">
      <p><strong>Descrição Completa:</strong> {evento.descricao}</p>
    </div>
  )}

  {/* QUESTÃO 2: Se ativo, texto do botão muda para a frase solicitada */}
  <button onClick={lidarComClique}>
    {ativo 
      ? "Fechar Detalhes e Excluir o evento da lista" 
      : "Ver Detalhes"}
  </button>
  
</div>
          
      <button className="details">
        Exibir detalhes
      </button>
      <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
          </button>
          {/* Excluir o evento da lista */}
          // 1. No seu componente Pai (onde fica a lista de eventos no JavaScript)
const [listaEventos, setListaEventos] = React.useState(eventosIniciais);

const excluirEvento = (idDoEvento) => {
  // Filtra a lista mantendo apenas os eventos que têm o ID diferente do que queremos excluir
  const novaLista = listaEventos.filter(evento => evento.id !== idDoEvento);
  setListaEventos(novaLista);
};

// ==========================================

// 2. A TAG BOTÃO EM JSX (Dentro do componente do Evento)
<button 
  onClick={() => {
    if (ativo) {
      // Se já estava ativo, ao clicar ele executa a função de excluir
      excluirEvento(evento.id);
    } else {
      // Se não estava ativo, apenas abre os detalhes
      setAtivo(true);
    }
  }}
>
  {ativo ? "Fechar Detalhes e Excluir o evento da lista" : "Ver Detalhes"}
</button>