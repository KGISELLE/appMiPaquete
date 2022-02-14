import logo from '../assets/logoMiPaquete.svg';
import home from '../assets/home.svg'
import '../sass/Header.scss';
import NavBar from './NavBar';
import MenuRegister from './MenuRegister';



const Header = () => {
  return (
    <div id='header'>
      <img id='logo' src= {logo} alt='logo'></img>
      <div id= 'respResgister'>
        <h2>Registro</h2>
        <img id='home' src= {home} alt = 'home'></img>
      </div>

      <NavBar />
      <MenuRegister />
    </div>
  );
}

export default Header;
