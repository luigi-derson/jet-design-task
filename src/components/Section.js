import { Box } from 'grommet';
import React from 'react';
import Container from './Container';

const Section = ({
  withContainer = false,
  containerProps = {},
  children,
  ...rest
}) => {
  return (
    <Box {...rest}>
      {withContainer ? (
        <Container {...containerProps}>{children}</Container>
      ) : (
        children
      )}
    </Box>
  );
};

export default Section;
