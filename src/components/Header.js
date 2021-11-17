import { Anchor, Box, Button, Image, Text } from 'grommet';
import { Shop, User } from 'grommet-icons';
import Container from './Container';
import Logo from '../assets/nutrify-logo.svg';

const Header = (props) => {
  return (
    <Box tag="header" gap="large" height="176px" {...props}>
      <Container
        direction="row"
        align="center"
        justify="between"
        fill="vertical"
      >
        <Box direction="row" align="center" gap="large">
          <Anchor href="/" label="SHOP" weight="bold" letterSpacing={2.2} />
          <Anchor
            href="/"
            label="WHY REFIL"
            weight="bold"
            letterSpacing={2.2}
          />
          <Anchor
            href="/"
            label="WHY NUTRIFY"
            weight="bold"
            letterSpacing={2.2}
          />
        </Box>
        <Box width="230px">
          <Image fit="contain" src={Logo} />
        </Box>
        <Box direction="row" align="center" gap="large">
          <Anchor
            href="/"
            label="START CONSULTATION"
            weight="bold"
            letterSpacing={2.2}
          />
          <Button color="dark-1" icon={<User />} />
          <Button color="dark-1" icon={<Shop />} />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
