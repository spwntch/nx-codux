import { SiteShell } from '@spwntch/react-ui';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
  name: 'Site Shell',
  Board: () => {
    return <SiteShell>ping</SiteShell>;
  },
  isSnippet: true,
});
