import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import { theme } from './theme';
import { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <TopBar />
            <Header />
            <Section background="#F6F6F2" height="500px">
              Helllo
            </Section>
            <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align="center" justify="center">
                app body
              </Box>
              {!showSideBar || size !== 'small' ? (
                <Collapsible direction="horizontal" open={showSideBar}>
                  <Box
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSideBar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
