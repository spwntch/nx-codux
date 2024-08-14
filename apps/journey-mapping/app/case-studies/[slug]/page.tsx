// import { CaseStudy } from '@spwn-next/landing-page-sections';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
// import ScheduleMeetingButton from '../../../components/ScheduleMeetingButton';
// import { CaseStudy } from '~next/features/case-studies/server';
// import {
//   FeaturesSection,
//   FooterSection,
// } from '~next/features/landing-pages/server';
// import {
//   QASession,
//   ScheduleCalendlyMeeting,
// } from '~next/integrations/calendly/server';
// import { footer } from '../../../config/footer';
// import { problemsWeSolve } from '../../../config/problems-we-solve';
import { CASE_STUDIES_GRID } from '../../../config/home/case-studies';
import { Article, parseMdxFileBuffer } from '@spwntch/react-ui';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const docPath = join(process.cwd(), `public/case-studies`);

export async function generateStaticParams() {
  const params = readdirSync(docPath)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ slug }));

  return params;
}

export const generateMetadata = ({ params: { slug } }: Props) => {
  const caseStudy = CASE_STUDIES_GRID.find(
    (caseStudy) => caseStudy.meta.slug === slug
  );
  if (!caseStudy) {
    return { title: 'Not Found' };
  }
  const { title, abstract: description, keywords } = caseStudy.meta;
  const coverImage = `${process.env.NEXT_PUBLIC_SITE_URL}/images/${slug}-cover.jpg`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/case-studies/${slug}`,
      siteName: 'Interact RDT Global',
      images: [{ url: coverImage, width: 896, height: 596 }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@InteractRDT',
      images: [coverImage],
    },
  };
};

const getBuffer = (slug: string) => {
  const filePath = join(docPath, `${slug}.mdx`);
  return readFileSync(filePath);
};

const CaseStudyPage = async ({ params: { slug } }: Props) => {
  const buffer = getBuffer(slug);
  const doc = await parseMdxFileBuffer(buffer);
  // if (!doc)
     return notFound();

  return (
    <div className="flex flex-col">
      <p>{slug}</p>
    </div>
  );
};

export default CaseStudyPage;
