import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    return(
        <section className="layout_grid listagem">
            <h1>{props.nomeLista}</h1>
            <hr/>

            <div className="tabela">
                <table>
                    {/* Cabeçalho da tabela: */}
                    <thead>
                        {/* tr => Table Row */}
                        <tr className="table_cabecalho"> 
                            {/* th => Table Head */}
                            <th> Nome </th>
                            <th style={{display:props.visibilidade}}> Gênero </th>
                            <th> Editar </th>
                            <th> Excluir </th>
                        </tr>
                    </thead>
                    {/* tbody => Corpo da Tabela */}
                     <tbody>
                        {/* verificar se a lista está vindo vazia */}
                        {props.lista && props.lista.length > 0 ? (
                            props.lista.map((item) => (
                                <tr className="item_lista" key={item.idGenero}>
                                    <td data-cell="Nome">
                                        {item.nome}
                                    </td>
                                    <td data-cell="Genero" style={{ display: props.visibilidade }}>Acao</td>
                                    <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                                    <button className="botaoLimpo" onClick={props.funcExcluir}>
                                        <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>

                                    </button>
                                </tr>
                            ))
                        )  :
                        (
                            <p>Nenhum gênero foi encontrado.</p>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;