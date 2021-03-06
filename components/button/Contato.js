import { Modal } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import Contact from '../contact/contact';

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
  cursor: pointer;
`;

export function Contato() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: 'absolute', right: '0' }}>
      <Button onClick={handleOpen}>Contato</Button>
      <Modal open={open} onClose={handleClose}>
        <Contact />
      </Modal>
    </div>
  );
}
