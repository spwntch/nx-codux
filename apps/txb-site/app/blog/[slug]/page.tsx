// import { ArticlePage } from '@/next-marketing-pages';
// import { readFileSync, readdirSync } from 'fs';
// import { notFound } from 'next/navigation';
// import { join } from 'path';
// import { CASE_STUDIES_GRID } from '../../../config/home/case-studies';
// import { parseMdxFileBuffer } from '../../../utils/parse-mdx-file-buffer';

type Props = {
  params: { slug: string };
};

// const docPath = join(process.cwd(), `public/case-studies`);

// export async function generateStaticParams() {
//   const params = readdirSync(docPath)
//     .filter((path) => path.includes('/images'))
//     .map((path) => path.replace(/\.mdx?$/, ''))
//     .map((slug) => ({ slug }));

//   return params;
// }

// const findPost = (slug: string) => {
//   return CASE_STUDIES_GRID.find((Post) => Post.meta.slug === slug);
// };

// export const generateMetadata = ({ params: { slug } }: Props) => {
//   const Post = findPost(slug);
//   if (!Post) {
//     return { title: 'Not Found' };
//   }
//   const { title, abstract: description, keywords } = Post.meta;
//   const coverImage = `${process.env.NEXT_PUBLIC_SITE_URL}/images/${slug}-cover.jpg`;

//   return {
//     title,
//     description,
//     keywords,
//     openGraph: {
//       title,
//       description,
//       url: `${process.env.NEXT_PUBLIC_SITE_URL}/case-studies/${slug}`,
//       siteName: 'Interact RDT Global',
//       images: [{ url: coverImage, width: 896, height: 596 }],
//       locale: 'en_US',
//       type: 'website',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       creator: '@InteractRDT',
//       images: [coverImage],
//     },
//   };
// };

// const getBuffer = (slug: string) => {
//   const filePath = join(docPath, `${slug}.mdx`);
//   return readFileSync(filePath);
// };

const PostPage = async ({ params: { slug } }: Props) => {
  return <div>Work in Progress</div>

  // const Post = findPost(slug);
  // const buffer = getBuffer(slug);
  // const doc = await parseMdxFileBuffer(buffer);
  // if (!Post || !doc) return notFound();

  // return (
  //   <div className="flex flex-col mt-28 md:container px-3">
  //     <ArticlePage meta={Post.meta} content={doc.content} toc={doc.toc} />
  //   </div>
  // );
};

export default PostPage;
