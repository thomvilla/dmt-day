import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import { Parallax } from 'react-scroll-parallax';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import Form from '../components/Form';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Countdown  from './countdown';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header  />
      <main className="w-full">
        {/* <h1 className="mb-12 text-3xl text-center lg:text-5xl">
          {globalData.blogTitle}
        </h1> */}
        <div className="flex flex-col items-center justify-around w-full h-auto mb-4">
          <Countdown/>
          <Parallax speed={4} >
            <button class="btn btn-primary m-6">Anotate acá</button>
          </Parallax>
        </div>
        <div className='flex w-full px-4'>
          <div className="shadow stats">
            <div className="stat">
              <div className="stat-title text-secondary">Metros de predio</div>
              <div className="stat-value ">89.400</div>
             
            </div>
          </div>
          <div className="ml-4 shadow stats">
            <div className="stat"> 
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
              <div className="stat-title ">Riders</div>
              <div className="stat-value text-secondary">18</div>
            </div>
          </div>

        </div>
        <Form />
        {/* <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="mb-3 font-bold uppercase opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul> */}
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
