import './botao.estilos.css'

export function Botao({ children, type }) {
    return <button type={type} className='botao'>{children}</button>;
    
}
