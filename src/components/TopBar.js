import { Box, Text } from 'grommet';
import React from 'react';
import Container from './Container';

const TopBar = () => {
  return (
    <Box height="70px" background="brand">
      <Container fill="vertical">
        <Box
          direction="row"
          align="center"
          justify="center"
          gap="medium"
          fill="vertical"
        >
          <Text color="white" letterSpacing={1}>
            Earth friendly
          </Text>
          <Text color="white" letterSpacing={1}>
            Cruelty-free
          </Text>
          <Text color="white" letterSpacing={1}>
            Unique formulas
          </Text>
          <Text color="white" letterSpacing={1}>
            Proven results
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default TopBar;
