import ContainerLogin from './ContainerLogin'
import SupportBotton from './SupportBotton';
import '../sass/CreateAcountBody.scss'

const CreateAcountBody = () => {
  return (
    <div id = 'createAcountBody'>
      <ContainerLogin />
      <SupportBotton />
    </div>
  )
}

export default CreateAcountBody;