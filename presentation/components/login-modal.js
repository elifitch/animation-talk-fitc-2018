import React from 'react';
import styled from 'react-emotion';
import { Heading } from 'spectacle';

class LoginModal extends React.Component {
  render() {
    const ModalContainer = styled('div')`
      display: flex;
    `;
    const ModalBody = styled('div')`
      padding: 1em;
      background: hsla(190, 5%, 97%, 1);
      margin: 0 auto;
      border: 1px solid #ddd;
      box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      text-align: left;
    `;
    const ModalLabel = styled('label')`
      display: block;
      text-align: left;
      font-size: 0.8em;
      font-family: 'pinopolis';
      font-weight: bold;
      margin-bottom: 0.5em;
    `;
    const ModalInput = styled('input')`
      font-size: 1em;
      min-width: 500px;
      border-radius: 4px;
      padding: 0.2em 0.4em;
      border: 1px solid #aaa;
      font-family: 'pinopolis';
    `;
    const ModalButton = styled('button')`
      appearance: none;
      background: linear-gradient(to bottom right,#7753eb,#4264fb);
      padding: 0.6em 1.2em;
      font-family: 'brandon grotesque';
      color: #fff;
      -webkit-font-smoothing: antialiased;
      border-radius: 9999px;
    `;
    const Spacer = styled('div')`
      margin-bottom: 1em;
    `;
    return (
      <ModalContainer>
        <ModalBody>
          <Spacer>
            <Heading size={5}>Sign in</Heading>
          </Spacer>
          <Spacer>
            <ModalLabel>Username</ModalLabel>
            <ModalInput />
          </Spacer>
          <Spacer>
            <ModalLabel>Password</ModalLabel>
            <ModalInput type="password" />
          </Spacer>
          <Spacer>
            <ModalLabel>MFA Code</ModalLabel>
            <ModalInput />
          </Spacer>
          <ModalButton>Sign in</ModalButton>
        </ModalBody>
      </ModalContainer>
    )
  }
}

export default LoginModal;
