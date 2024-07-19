import {
  DesktopTopNavbar,
  RegularFooter,
  ShellProvider,
  UnderConstruction,
} from '@spwntch/react-ui';
import { createBoard } from '@wixc3/react-board';
import { brand, primaryNav } from '../config';

export default createBoard({
  name: 'App Shell',
  Board: () => {
    const handleLinkTo = (url: string) => {
      console.log(url);
    };
    return (
      <ShellProvider brand={brand} navItems={primaryNav}>
        <div className="h-screen w-screen flex flex-col">
          <DesktopTopNavbar
            navAlignment="center"
            logoHeight={60}
            githubUrl="https://github.com/spwntch/nx-codux"
            onLinkTo={handleLinkTo}
          />

          <main className="flex-1 flex justify-center items-center ">
            <UnderConstruction />
          </main>
          <RegularFooter />
        </div>
      </ShellProvider>
    );
  },
  isSnippet: true,
  environmentProps: {
    windowWidth: 1458,
    windowHeight: 768,
  },
  tags: ['shell'],
});
