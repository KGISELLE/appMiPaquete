import '../sass/SupportButton.scss'
import icon from '../assets/HelpIcon.svg'

const SupportBotton = () => {
  return(
    <div id= 'supportButton'>
      <img id= 'iconSupport' src= {icon} alt="support"></img>
      <span class="support">Centro de ayuda</span>
    </div>
  )
}

export default SupportBotton;