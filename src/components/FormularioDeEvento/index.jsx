import './formulario-de-evento.estilos.css';
import { CampoDeEntrada } from '../CampoDeEntrada';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { Label } from '../Label';
import { TituloFormulario } from '../TituloFormulario';
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao/botao';

export function FormularioDeEvento() {
    return (
        <form className="form-evento">
            <TituloFormulario>Preencha para criar um evento</TituloFormulario>
            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
                    <CampoDeEntrada
                        type="text"
                        id="nomeEvento"
                        placeholder="Summer dev hits"
                        name="nomEvento"
                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">Data do evento</Label>
                    <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="temaEvento">Tema do evento</Label>
                    <ListaSuspensa name="temaEvento">
                        <option value="notInformed">Selecione uma opção</option>
                        <option value="front">Front-end</option>
                        <option value="back">Back-end</option>
                        <option value="devops">Devops</option>
                        <option value="ia">Inteligência Artificial</option>
                        <option value="datascience">Data Science</option>
                        <option value="cloud">Cloud</option>
                    </ListaSuspensa>
                </CampoDeFormulario>
                <Botao type="submit">Criar evento</Botao>
            </div>
        </form>
    );
}
