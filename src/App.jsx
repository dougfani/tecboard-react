import { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { CardEvento } from './components/CardEvento';
import { FormularioDeEvento } from './components/FormularioDeEvento';
import { Tema } from './components/Tema';
// no react, componentes são FUNÇÕES

function App() {
    const temas = [
        {
            id: 1,
            nome: 'front-end',
        },
        {
            id: 2,
            nome: 'back-end',
        },
        {
            id: 3,
            nome: 'devops',
        },
        {
            id: 4,
            nome: 'inteligência artificial',
        },
        {
            id: 5,
            nome: 'data science',
        },
        {
            id: 6,
            nome: 'cloud',
        },
    ];

    // hook
    const eventosSalvos = JSON.parse(localStorage.getItem('eventos')) || [];
    const [eventos, setEventos] = useState(eventosSalvos);

    function adicionarEvento(evento) {
        const novaLista = [...eventos, evento];
        setEventos(novaLista);
        localStorage.setItem('eventos', JSON.stringify(novaLista));
    }
    // renderização condicional usando &&
    return (
        <main>
            <header>
                <img src="/logo.png" alt="" />
            </header>
            <Banner></Banner>
            <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
            <section className="container">
                {temas.map(function (tema) {
                    if (
                        !eventos.some(function (evento) {
                            return evento.tema.id == tema.id;
                        })
                    ) {
                        return null;
                    }
                    return (
                        <section key={tema.id}>
                            <Tema tema={tema} />
                            <div className="eventos">
                                {eventos
                                    .filter(function (evento) {
                                        return evento.tema.id == tema.id;
                                    })
                                    .map(function (evento, index) {
                                        return <CardEvento evento={evento} key={index} />;
                                    })}
                            </div>
                        </section>
                    );
                })}
            </section>
            <footer>
                <img src="/logo.png" alt="" />
                <p>Desenvolvido por Douglas Floriano durante o curso de React da Alura.</p>
            </footer>
        </main>
    );
}

export default App;
