import {
  Box, Grid, GridItem, Heading, HStack, Text, VStack,
} from '@chakra-ui/react';
import { Palette } from '@emotion/react';
import Header from './components/Header';
import { SideMenu } from './components/Menu';
import theme, { colors } from './theme';

function App() {
  return (
    <Grid
      gridTemplateAreas={`
    "header header"
    "nav    main"
    `}
      gridTemplateRows="auto 1fr"
      gridTemplateColumns="300px 1fr"
      minH="100vh"
    >
      <GridItem
        area="header"
        bg="primary.bg2"
        borderBottom="1px solid"
        borderBottomColor="primary.dark2"
      >
        <Header />
      </GridItem>
      <GridItem
        area="nav"
        bg="primary.bg2"
        borderRight="1px solid"
        borderRightColor="primary.dark2"
      >
        <SideMenu />
      </GridItem>
      <GridItem area="main" padding="1">
        Main Content
      </GridItem>
    </Grid>
  );
}

export default App;
