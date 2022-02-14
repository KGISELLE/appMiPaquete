import '../sass/MenuRegister.scss'
import bars from '../assets/bar-menu.svg'

const MenuRegister = () => {
  return (
    <div id= 'mainContainer'>
      <div id= 'background'>
        <img id='bars' src= {bars} alt= 'menu'></img>
        <span className='login'>Ingresa</span>
        <span className='signUp'>Regístrate</span>
      </div>
    </div>
  );
}

export default MenuRegister;

