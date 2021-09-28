import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import sendEmail from '../../service/emailkey';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  nome: yup
    .string('Coloque seu nome, por favor')
    .min(3, 'Entre com um nome válido')
    .required('Nome é obrigatório'),
  email: yup
    .string('Coloque seu email, por favor')
    .email('Coloque um email válido')
    .required('Email é obrigatório'),
  telefone: yup
    .string('Coloque seu telefone, por favor')
    .matches(phoneRegExp, 'Este telefone não é válido')
    .required('Telefone é obrigatório'),
  endereco: yup
    .string('Coloque seu endereço, por favor')
    .min(3, 'Entre com um endereço válido')
    .required('Endereço é obrigatório'),
  assunto: yup
    .string('Coloque seu assunto, por favor')
    .min(3, 'Entre com um nome válido')
    .required('Assunto é obrigatório'),
  mensagem: yup
    .string('Coloque seu mensagem, por favor')
    .min(3, 'Entre com um nome válido')
    .required('Mensagem é obrigatório'),
});

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      assunto: '',
      mensagem: '',
    },
    validationSchema: validationSchema,
    onSubmit: (e, { resetForm }) => {
      sendEmail(e);
      resetForm({ values: '' });
    },
  });

  // init('YOUR_USER_ID');

  return (
    <div
      style={{
        backgroundColor: '#f3f3f3',
        borderRadius: '10px',
        width: '600px',
        height: '500px',
        alignItems: 'center',
        position: 'relative',
        top: '30%',
        left: '30%',
      }}
    >
      <Typography
        style={{
          textAlign: 'center',
          padding: '30px 0 15px 0 ',
          color: '#18a0fb',
        }}
        variant='h3'
        gutterBottom
      >
        ENTRE EM CONTATO
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          style={{
            background: '#fff',
            position: 'relative',
            width: '45%',
            left: '1.5%',
            borderRadius: '6px',
          }}
          name='nome'
          label='Nome'
          value={formik.values.nome}
          onChange={formik.handleChange}
          error={formik.touched.nome && Boolean(formik.errors.nome)}
          helperText={formik.touched.nome && formik.errors.nome}
        />
        <TextField
          style={{
            background: '#fff',
            position: 'relative',
            width: '48%',
            left: '5%',
            borderRadius: '6px',
          }}
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          style={{
            background: '#fff',
            position: 'relative',
            width: '45%',
            left: '1.5%',
            top: '0.5rem',
            borderRadius: '6px',
          }}
          type='tel'
          name='telefone'
          label='Telefone'
          value={formik.values.telefone}
          onChange={formik.handleChange}
          error={formik.touched.telefone && Boolean(formik.errors.telefone)}
          helperText={formik.touched.telefone && formik.errors.telefone}
        />
        <TextField
          style={{
            background: '#fff',
            position: 'relative',
            width: '48%',
            left: '5%',
            top: '0.5rem',
            borderRadius: '6px',
          }}
          name='endereco'
          label='Endereço'
          value={formik.values.endereco}
          onChange={formik.handleChange}
          error={formik.touched.endereco && Boolean(formik.errors.endereco)}
          helperText={formik.touched.endereco && formik.errors.endereco}
        />
        <TextField
          style={{
            background: '#fff',
            position: 'relative',
            width: '96.5%',
            left: '1.5%',
            top: '0.9rem',
            borderRadius: '6px',
          }}
          name='assunto'
          label='Assunto'
          value={formik.values.assunto}
          onChange={formik.handleChange}
          error={formik.touched.assunto && Boolean(formik.errors.assunto)}
          helperText={formik.touched.assunto && formik.errors.assunto}
        />
        <TextField
          style={{
            background: '#fff',
            position: 'relative',
            width: '96.5%',
            left: '1.5%',
            top: '1.5rem',
            borderRadius: '6px',
          }}
          multiline
          rows={4}
          name='mensagem'
          label='Digite sua mensagem aqui...'
          value={formik.values.mensagem}
          onChange={formik.handleChange}
          error={formik.touched.mensagem && Boolean(formik.errors.mensagem)}
          helperText={formik.touched.mensagem && formik.errors.mensagem}
        />
        <Button
          className='buttonFooter'
          style={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            width: '96.5%',
            top: '1.8rem',
            position: 'relative',
            left: '1.5%',
          }}
          variant='outlined'
          type='submit'
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
