import "./App.css";
import Header from "./components/Header";

function App() {
const notices = [ 
    {id: 1,
      title: "Secitex Macau 2026",
      category: 'Evento',
      description: 'Inscrições abertas para oficinas e palestras.',
      author: "COINF/MC",
      date: "01/07/2026",
      featured: true,
    },
    {id: 2,
      title: "Secitex Macau 2026",
      category: 'Evento',
      description: 'Inscrições abertas para oficinas e palestras.',
      author: "COINF/MC",
      date: "01/07/2026",
      featured: true,
    },
  

  return (
    <>
      <main className="main">
        <Header
          title={"Programação para Internet"}
          subtitle={"Curso Técnico Integrado em Informática"}
        />
        <h1>Mural Digital do IFRN - Campus Macau</h1>

        {notices.map((notice) => (
          <article>
          <p>{notice.category}</p>
          <h3>{notice.title}</h3>
          <p>{notice.description}</p>

          <div>
            <span>Por: Autor</span>
            <span>Data: Data do Post</span>
          </div>
        </article>
        ))}

      </main>
    </>
  );
}

export default App;
