import { Grid, GridItem } from "@chakra-ui/react";
import { Route, Switch } from "wouter";

import Header from "./components/Header";
import { SideMenu } from "./components/Menu";
import DeltaVPage from "./pages/deltav";
import SynchronusOrbitsPage from "./pages/synchronous";

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
        <Switch>
          <Route path="/deltav" component={DeltaVPage} />
          <Route path="/synchronus-orbits" component={SynchronusOrbitsPage} />
        </Switch>
      </GridItem>
    </Grid>
  );
}

export default App;
