import React from 'react'
import styled from 'styled-components'

const Login: React.FC = () => {
  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')

  return (
    <LoginStyle>
      <ImageContainer>
        <Image src='https://powerusers.microsoft.com/t5/image/serverpage/image-id/30630iDEBB00595FF770B0/image-size/large/is-moderation-mode/true?v=v2&px=999' />
      </ImageContainer>
      <LoginContainer>
        <Title>Inicio de sesion</Title>
        <SubTitle>Ingrese su usuario y contrasena</SubTitle>
        <Form>
          <Input
            type='text'
            placeholder='e-mail'
            // onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type='password'
            placeholder='contraseña'
            // onChange={(e) => setPassword(e.target.value)}
          />
          <Submit>Iniciar Sesión</Submit>
        </Form>
      </LoginContainer>
    </LoginStyle>
  )
}

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  // align-items: center;
  // flex-wrap: nowrap;
  //width: 100%;
  // height: 100%;
  margin: 30px 30px;
  // color: rgb(var(--primary-color-f-1));
`
export const ImageContainer = styled.div`
  display: flex;
  height: 100vh;
  max-height: 100vh;
`
export const Image = styled.img`
  //width: 100%;
  // height: 100%;
  // object-fit: contain;
  border-radius: 2vh;
`
export const LoginContainer = styled.div`
  // margin: 0 10px;
  border: 1px solid rgb(104, 102, 102);
  padding: 10px;
  height: fit-content;
  background-color: white;
  border-radius: 10px;
`
export const Title = styled.h1`
  // font-size: var(--text-xxxl);
  // font-weight: bold;
`
export const SubTitle = styled.h2``

export const Form = styled.div`
  display: flex;
  // align-items: flex-start;
  flex-direction: column;
  // width: 300px;
  margin: 16px 0;
`
export const Input = styled.input`
  // width: 100%;
  margin: 6px 0;
  padding: 8px;
  // padding-left: 12px;
  // border-width: 1px;
  // border-color: rgba(0, 0, 0, 0.25);
  // border-radius: 8px;
`
export const Submit = styled.button`
  // width: 100%;
  // height: 50px;
  // margin-top: 24px;
  // color: white;
  // font-weight: 900;
  // background-image: var(--BACKGROUND-RGB-1);
  // border-radius: 8px;
`
export default Login
