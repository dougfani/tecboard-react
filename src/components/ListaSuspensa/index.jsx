import './lista-suspensa.estilos.css';

export function ListaSuspensa({ children, htmlFor }) {
    return (
        <select htmlFor={htmlFor} className="lista-suspensa">
            {children}
        </select>
    );
}
