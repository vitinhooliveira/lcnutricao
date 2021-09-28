import Link from 'next/link';
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
          <Link href='/'>
            <a
              style={{
                color: '#18a0fb',
                position: 'relative',
                right: '400%',
                top: '10px',
                textDecoration: 'none',
                fontSize: '18px',
                fontFamily: "'Franklin Gothic Medium'",
              }}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/sobre'>
            <a
              style={{
                color: '#18a0fb',
                position: 'relative',
                right: '350%',
                top: '10px',
                textDecoration: 'none',
                fontSize: '18px',
                fontFamily: "'Franklin Gothic Medium'",
              }}
            >
              Sobre
            </a>
          </Link>
        </li>
        <li>
          <Link href='/servicos'>
            <a
              style={{
                color: '#18a0fb',
                position: 'relative',
                right: '200%',
                top: '10px',
                textDecoration: 'none',
                fontSize: '18px',
                fontFamily: "'Franklin Gothic Medium'",
              }}
            >
              Serviços
            </a>
          </Link>
        </li>
      </Ul>
    </div>
  );
}
