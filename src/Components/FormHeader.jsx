import arrow from '../assets/arrowOrange.svg';
import '../sass/FormHeader.scss'

const FormHeader = () => {
  return (
    <div id='formHeader'>
      <div className='left'>
        <img id='arrow' src={arrow} alt='arrow'></img>
        <h1>Diligencia tus datos</h1>
      </div>

      <div class="rigth">
        <p>Todos los campos son obligatorios</p>
      </div>
    </div>
    
  )
}

export default FormHeader;