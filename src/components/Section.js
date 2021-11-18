import { Box } from 'grommet';
import { forwardRef } from 'react';
import Container from './Container';

const Section = forwardRef(
  ({ withContainer = false, containerProps = {}, children, ...rest }, ref) => {
    return (
      <Box {...rest} ref={ref}>
        {withContainer ? (
          <Container {...containerProps}>{children}</Container>
        ) : (
          children
        )}
      </Box>
    );
  }
);

export default Section;
