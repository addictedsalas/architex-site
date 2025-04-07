import Head from 'next/head';

const FontLoader = () => {
  return (
    <Head>
      <link rel="preload" href="/fonts/Ortland.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
    </Head>
  );
};

export default FontLoader;
