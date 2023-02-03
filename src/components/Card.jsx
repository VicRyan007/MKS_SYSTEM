import 'bootstrap/dist/css/bootstrap.min.css'

import '../../css/general.css'

export default function Card(props) {
    return (
       
        <div className='col-3' key={props.id}>
            <div className="card" style={{ width: "217.56px", height: "430px", borderRadius: "8px" }}>
                <img src={props.foto} className="card-img-top" alt="..."  />
                <div className="card-body">
                        <h5 className="card-title">{props.nome}</h5>
                        <p className='price'>R$ {props.preco}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>

    )
}