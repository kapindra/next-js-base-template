import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';

const NewPost = ({ postData }: any) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Author: A.N. Author, Illustrator: P. Picture, Category: Books, Price:  £9.24, Length: 784 pages"
        />
      </Head>
      <main>
        <div>{postData.title}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
    </>
  );
};

export default NewPost;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
