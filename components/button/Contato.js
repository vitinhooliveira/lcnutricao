import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #f3f3f3;
  width: 130px;
  height: 40px;
  border-radius: 6px;
  border: 2px solid #18a0fb;
  color: #18a0fb;
  position: relative;
  right: 50%;
  top: 17px;
  font-size: 18px;
  font-family: 'Franklin Gothic Medium';
`;

export function Contato() {
  return (
    <div style={{ position: 'absolute', right: '0' }}>
      <Button>Contato</Button>
    </div>
  );
}
