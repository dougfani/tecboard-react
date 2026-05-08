import './App.css';

// no react, componentes são FUNÇÕES


// props é um OBJETO
// props.children
function TituloFormulario(props) {
    return <h2>{props.children}</h2>;
}

function FormularioDeEvento() {
    return (
        <form className="form-evento">
            <TituloFormulario>Preencha para criar um evento</TituloFormulario>
            <fieldset>
                <label htmlFor="nome">Qual o nome do evento?</label>
                <input type="text" id="nome" placeholder="Summer dev hits" />
            </fieldset>
        </form>
    );
}

function App() {
    return (
        <main>
            <header>
                <img src="/logo.png" alt="" />
            </header>
            <section>
                <img src="/banner.png" alt="" />
            </section>
            <FormularioDeEvento />
        </main>
    );
}

export default App;
