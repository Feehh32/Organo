import { Banner } from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from "react";
import Time from './components/Time';



function App() {

	const times = [
		{
			nome: "Programação",
			corPrimaria: "#57c278",
			corSecundaria: "#d9f7e9"
		},
		{
			nome: "Front-End",
			corPrimaria: "#82cffa",
			corSecundaria: "#e8f8ff"
		},
		{
			nome: "Data Science",
			corPrimaria: "#a6d157",
			corSecundaria: "#f0f8e2"
		},
		{
			nome: "Devops",
			corPrimaria: "#e06b69",
			corSecundaria: "#fde7e8"
		},
		{
			nome: "UX e Design",
			corPrimaria: "#db6ebf",
			corSecundaria: "#FAE9F5"
		},
		{
			nome: "Mobile",
			corPrimaria: "#ffba05",
			corSecundaria: "#fff5d9"
		},
		{
			nome: "Inovação e Gestão",
			corPrimaria: "#ff8a29",
			corSecundaria: "#ffeedf"
		}
	]

	const [colaboradores, setColaboradores] = useState([]);

	const novoColaboradorAdicionado = (colaborador) => {
		debugger
		setColaboradores([...colaboradores, colaborador]);
	}

	return (
		<div className="App">
			<Banner />
			<Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => novoColaboradorAdicionado(colaborador)} />

			{times.map(time => <Time
				key={time.nome}
				nome={time.nome}
				corPrimaria={time.corPrimaria}
				corSecundaria={time.corSecundaria}
				colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
			/>)}
		</div>
	);
}

export default App;
