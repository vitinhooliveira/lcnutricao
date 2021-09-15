import Head from 'next/head';

const Example = () => {
  return (
    <div>
      <Head>
        <title>LC nitrição</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='keywords' content='testeLC, artigo, metatag, html'></meta>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-207644092-1'
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'UA-207644092-1');
        </script>
      </Head>
      <p>Teste</p>
    </div>
  );
};

export default Example;
