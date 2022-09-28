import "../styles/card.css";
import g1 from "../images/g1.png";
import g2 from "../images/g2.png";
import g3 from "../images/g3.png";
import g4 from "../images/g4.png";
import g5 from "../images/g5.png";

function Card() {
  return (
    <div className="body">
      <div className="guitarra">
        <div className="item">
          <img src={g1} alt="guitarra1" />
        </div>
        <div>
          <h2>eds-1275 Gibson de doble cuello</h2>
          <p>Fue gracias a Page tocando "Stairway To Heaven"</p>
        </div>
      </div>

      <div className="guitarra">
        <div className="item">
          <img src={g2} alt="guitarra2" />
        </div>
        <div>
          <h2>Jaydee SG</h2>
          <p>Con pequeños relampagos en el cuello de esta guitarra roja, el instrumento
          </p>
          <p>paso tambien a convertirse en la marca personal del guitarrista de AC/DC</p>
        </div>
      </div>

      <div className="guitarra">
        <div className="item">
          <img src={g3} alt="guitarra3" />
        </div>
        <div>
          <h2>Monterey Fender Stratocaster</h2>
          <p>Más que por su apariencia fisica, esta emblematica guitarra es recordada por lo</p>
          <p>que le ocurrió. Durante el Monterey Pop Festival de 1967, Hendrix le</p>
          <p>prendió fuego y las destruyó para después lanzar los restos al publico</p>
        </div>
      </div>

      <div className="guitarra">
        <div className="item">
          <img src={g4} alt="guitarra4" />
        </div>
        <div>
          <h2>Airline</h2>
          <p>Esta guitarra hecha por valco, de colores rojo y blanco, encajaba a la</p>
          <p>perfeccion con la imagen de su ex banda, los White Stripes. White</p>
          <p>consiguio el instrumento a muy buen precio.</p>
        </div>
      </div>

      <div className="guitarra">
        <div className="item">
          <img src={g5} alt="guitarra5" />
        </div>
        <div>
          <h2>Frankkenstrat</h2>
          <p>la "Frankkenstrat" es producto de la intención de Eddie Van Halen de combinar</p>
          <p>el sonido de una Gibson con el cuerpo de una Fender Stratocaster.</p>
          <p>El músico la construyó el mismo dándole un diseño muy particular.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
