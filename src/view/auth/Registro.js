import './../../asset/css/Main.css';
import './../../asset/css/Registro.css';
import Cuenta from './../../componente/tarjeta/Cuenta';

function Registro() {
  return (
    <div className="app-registro">
      <Cuenta Modo="Registro" Titulo="Crear nueva cuenta" Info="Unete a nuestra web."></Cuenta>
    </div>
  );
}

export default Registro;
