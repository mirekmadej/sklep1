import './Owoc.css';

function Owoc(o) {

    return(
        <div className="owoc">
            <p><img src={o.owoc.grafika} alt={o.owoc.nazwa} /></p>
            <h3>{o.owoc.nazwa} {o.owoc.cena} zł</h3>
            <p><button>dodaj do koszyka</button></p>
            <p>sztuk w koszyku: {o.owoc.sztuk}</p>
        </div>
    );
}

export default Owoc;