import './Style.css';
import LogoClaro from './../../asset/img/logolight.svg';
import Input from './../form/Input';
import { MdEmail } from "react-icons/md";
import {FaLock} from "react-icons/fa";

function Cuenta(props) {
  const {Modo,Titulo,Info} = props;
  return (
    <div className="tarjeta-cuenta">
      <div className='logo-tarjeta'>
        <img src={Modo === 'Registro' ? LogoClaro : ''} alt="React Logo" />
      </div>
      <div className='content'>
        <div className='title-tarjeta'>
          {Titulo}
        </div>
        <div className='info-tarjeta'>
            {Info}
        </div>
        <div className='form-tarjeta' style={{width:'350px'}}>
          <div style={{padding:'10px 0px'}}>
              <Input Icon={<MdEmail/>} Placeholder="Email"></Input>
          </div>
          <div style={{padding:'10px 0px'}}>
              <Input Icon={<FaLock/>} Placeholder="Contraseña"></Input>
          </div>
          <div style={{padding:'10px 0px'}}>
              <button type='button' className='button-tarjeta'>Comienza Ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuenta;
