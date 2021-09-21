import { Link } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: inline-flex;
  list-style-type: none;
  right: 62%;
  position: relative;
  font-family: 'Franklin Gothic Medium';
`;

export default function Nav() {
  return (
    <div style={{ position: 'absolute', right: '0' }}>
      <Ul>
        <li>
          <Link
            href='/'
            style={{
              color: '#18a0fb',
              position: 'relative',
              right: '100%',
              // paddingRight: '72px',
              top: '10px',
              textDecoration: 'none',
              fontSize: '18px',
              fontFamily: "'Franklin Gothic Medium'",
            }}
          >
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link
            href='/sobre'
            style={{
              color: '#18a0fb',
              position: 'relative',
              right: '50%',
              // paddingRight: '72px',
              top: '10px',
              textDecoration: 'none',
              fontSize: '18px',
              fontFamily: "'Franklin Gothic Medium'",
            }}
          >
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link
            href='/servicos'
            style={{
              color: '#18a0fb',
              position: 'relative',
              paddingRight: '65px',
              top: '10px',
              textDecoration: 'none',
              fontSize: '18px',
              fontFamily: "'Franklin Gothic Medium'",
            }}
          >
            <a>Serviços</a>
          </Link>
        </li>
      </Ul>
    </div>
  );
}
