import './Style.css';
function Input(props) {
  const {Icon,Placeholder} = props;
  return (
    <div className='form-content-input'>
        <div className='icon-input'>{Icon}</div>
        <input type="email" placeholder={Placeholder} className='input-app' />
    </div>
  );
}

export default Input;
