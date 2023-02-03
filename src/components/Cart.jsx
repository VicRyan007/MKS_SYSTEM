import '../../css/general.css'

export default function Cart() {
    return (
        <div className="cart">
            <h4>Carrinho de compras</h4>
            <div className='text_group'>
                <p className='total'>Total</p>
                <p className='final_value'>R$ { }</p>
            </div>
            <button className='bought'>Finalizar compra</button>
        </div>
    )
}