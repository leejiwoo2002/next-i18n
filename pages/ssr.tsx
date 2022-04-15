import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = () => ({
  props: {
    text: 'some serverside props!',
  },
});

const SSR = ({ text }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('SSR.title')}</title>
        <meta name="description" content={t('SSR.description')} />
      </Head>
      <div>{text}</div>
      <Link href="/">
        <a>메인으로 가기</a>
      </Link>
    </>
  );
};

export default SSR;
