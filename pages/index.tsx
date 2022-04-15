import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('main.title')}</title>
        <meta name="description" content={t('main.description')} />
      </Head>
      <div>{t('main.title')}</div>
      <Link href="/blog">
        <a>블로그 가기</a>
      </Link>
      <div>
        <Link href="/blog" locale="en">
          <a>미국 블로그 가기</a>
        </Link>
      </div>
      <div>
        <Link href="/blog" locale="ko">
          <a>한국 블로그 가기</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
