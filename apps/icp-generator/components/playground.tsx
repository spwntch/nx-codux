'use client';
import {
  Button,
  ContentContainer,
  IContent,
  SplitLayout,
} from '@spwntch/react-ui';
import NewProductForm from './new-product-form';

const playground = () => {
  const header: IContent = {
    heading: 'Ping',
  };
  return (
    <div>
      <SplitLayout
        className="gap-6"
        mainPaneCoverage={30}
        containers={[
          <NewProductForm key={0} />,
          <ContentContainer
            key={0}
            hAlign="left"
            vAlign="top"
            innerContent={header}
          />,
        ]}
      />
    </div>
  );
};

export default playground;
