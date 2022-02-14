import FormHeader from './FormHeader';
import FormBody from './FormBody';
import '../sass/ContainerLogin.scss'

const ContainerLogin = () => {
  return (
    <div id='containerLogin'>
      <FormHeader/>
      <FormBody />
    </div>
  );
}

export default ContainerLogin;