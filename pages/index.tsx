import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('main.title')}</title>
        <meta name="description" content={t('main.description')} />
      </Head>
      <div>{t('main.title')}</div>
    </>
  );
};

export default Home;
