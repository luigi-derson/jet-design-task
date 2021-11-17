import { Box } from 'grommet';

const Container = ({ children, ...rest }) => {
  return (
    <Box
      width={{ width: '100%', max: '1364px' }}
      margin={{ horizontal: 'auto' }}
      pad={{ horizontal: 'medium' }}
      flex="grow"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Container;
