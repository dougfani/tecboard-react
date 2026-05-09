import './App.css';
import { FormularioDeEvento } from './components/FormularioDeEvento'
// no react, componentes são FUNÇÕES

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
