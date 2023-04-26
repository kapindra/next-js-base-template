import Card from '@/components/Card/Card';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import Header from '../components/Header/Header';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }: any) {
  return (
    <>
      <Head>
        <title>Blog Template created by Kapindra Raut</title>
        <meta name="description" content="A NEXT blog app by kapindra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className="px-4 sm:px-6 lg:px-8 py-28 lg:pt-40 mx-auto max-w-screen-xl">
          <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-300">
            A simple blog template created with NextJs
          </h2>
          <p className="mb-20 text-lg text-gray-500 dark:text-gray-400">
            Using this blog template, you can start creating great contents from
            your knowledgebase. Write your own markdown to customize your blog
            post. Great optimization, Simple Design, Dark Mode, Tailwind vibes
            and much more.
          </p>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {allPostsData.map(
              ({ id, date, title, description }: any, index: any) => (
                <Card
                  key={index}
                  slug={id}
                  date={date}
                  title={title}
                  description={description}
                />
              )
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
