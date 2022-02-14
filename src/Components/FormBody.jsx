// import colombia from '../assets/colombia.svg'
import '../sass/FormBody.scss'

const FormBody = () => {
  return (
    <div id='formBody'>

      <div id= 'formContent'>

        <div id= 'leftSide'>
          <div id= 'spaceForm'>
            <label>Nombre</label>
            <input type='text' id='name' placeholder='Daniela'></input>
          </div>

          <div id= 'spaceForm'>
            <label>Correo electrónico</label>
            <input type='email' id='email' placeholder='dani.mantilla@mipaquete.com'></input>
          </div>

          <div id= 'spaceForm'>
            <label>Ciudad</label>
            <input type='text' id='city' placeholder='MEDELLÍN'></input>
          </div>
        </div>

        <div id= 'rightSide'>
          <div id= 'spaceForm'>
            <label>Apellido</label>
            <input type='text' id='lastName' placeholder='Mantilla'></input>
          </div>

          <div id= 'spaceForm'>
            <label>Celular</label>
            {/* <img id='colombia' src= {colombia} alt='colombia'></img> */}
            <input type='number-text' id='phone' placeholder= '3101234567'></input>
            
          </div>

          <div id= 'spaceForm'>
            <label>Dirección de recogida</label>
            <input type='text' id='address' placeholder='Carrera 25 A # 23 - 18'></input>
          </div>

        </div>

      </div>

      <div id= 'formButtons'>
        <button id='cancelButton' type='button'>Cancelar</button>
        <button id='nextButton' type='button'>Continuar</button>
      </div>

    </div>
  )
}

export default FormBody;


