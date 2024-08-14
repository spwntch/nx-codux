import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { IMdxDoc, IMdxDocFrontMatter } from '@spwntch/react-ui';

export const parseMdx = async (
  source: string,
  path?: string
): Promise<IMdxDoc> => {
  // let toc: TocItem[] = [];
  const { content, frontmatter } = await compileMDX<IMdxDocFrontMatter>({
    source,
    // components: { GithubImage },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          // [
          //   rehypeToc,
          //   {
          //     nav: false,
          //     headings: ['h2', 'h3'],
          //     customizeTOC: (tocTree: HtmlElementNode) => {
          //       toc = flattenTocTree(tocTree);
          //       return false;
          //     },
          //   },
          // ],
          // [rehypeAutoLinkHeadings, { behavior: 'wrap' }],
          // [
          //   rehypePrettyCode,
          //   {
          //     theme: {
          //       dark: 'one-dark-pro',
          //     },
          //   },
          // ],
        ],
      },
    },
  });
  return { toc: [], content, meta: { ...frontmatter, path } };
};
