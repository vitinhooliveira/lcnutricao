import emailjs from 'emailjs-com';

export default function sendEmail(e) {
  let templatePrams = {
    nome: e.nome,
    email: e.email,
    telefone: e.telefone,
    endereco: e.endereco,
    assunto: e.assunto,
    mensagem: e.mensagem,
  };

  emailjs
    .send(
      'service_casi4sv',
      'template_lc_nutricao',
      templatePrams,
      'user_Q9ILDwyzz4eNrDcpqny7L'
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
