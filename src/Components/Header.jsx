import logo from '../assets/logoMiPaquete.svg';
import '../sass/Header.scss';
import NavBar from './NavBar';
import MenuRegister from './MenuRegister';



const Header = () => {
  return (
    <div id='header'>
      <img id='logo' src= {logo} alt='logo'></img>
      <NavBar />
      <MenuRegister />
    </div>
  );
}

export default Header;
