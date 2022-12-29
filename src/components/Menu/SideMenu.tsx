import { Box } from '@chakra-ui/react';

import MenuContent from './MenuContent';
import routes from './routes';

export default function NavMenu() {
  return (
    <Box
      aria-label="Main Navigation"
      as="nav"
    >
      <MenuContent routes={routes} />
    </Box>
  );
}
