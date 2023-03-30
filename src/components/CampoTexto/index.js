import './CampoTexto.css';

export const CampoTexto = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterar(event.target.value);
    }

    return (
        <div className="campo__texto">
            <label>{props.label}</label>
            <input value = {props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        
        </div>
    )
}
 