import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Blog: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('blog.title')}</title>
        <meta name="description" content={t('blog.description')} />
      </Head>
      <div>{t('blog.title')}</div>
      <Link href="/">
        <a>메인으로 가기</a>
      </Link>
    </>
  );
};

export default Blog;
