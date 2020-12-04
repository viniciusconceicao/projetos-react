export default function ComParametros(props) {

    const status = props.nota >= 7 ? 'aprovado' : 'Recuperação'

    return <div>

        <h2> {props.titulo} </h2>
        <h3> <strong>{props.aluno}</strong> </h3>
                                tem nota
                            <strong> {props.nota} </strong>
                             e foi
                            <strong> {status} </strong>

    </div>
}