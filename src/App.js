import { Box, Grommet } from 'grommet';
import { theme } from './theme';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import DescriptionSection from './components/DescriptionSection';
import Carousel from './components/Carousel';

function App() {
  return (
    <Grommet theme={theme}>
      <Box fill>
        <TopBar />
        <Header />
        <Hero />
        <DescriptionSection />
        <Carousel />
      </Box>
    </Grommet>
  );
}

export default App;
