import './CampoTexto.css';

export const CampoTexto = (props) => {
    return (
        <div className="campo__texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}
