import { Box, Paragraph, Text } from 'grommet';
import { useInView } from 'react-intersection-observer';
import Section from './Section';

const DescriptionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <Section
      direction="row"
      justify="center"
      pad={{ vertical: 'xlarge' }}
      ref={ref}
    >
      {inView && (
        <Box
          direction="column"
          justify="center"
          width={{ max: '800px' }}
          style={{ textAlign: 'center' }}
          animation={['fadeIn', 'slideUp']}
        >
          <Box
            fill="horizontal"
            direction="row"
            justify="center"
            color="dark-6"
            gap="xsmall"
          >
            <Text color="dark-6" weight="bold" letterSpacing={1}>
              INSPIRED BY
            </Text>{' '}
            <Text family="Ravioli" color="brand" size="50px" lineHeight={10}>
              nature
            </Text>{' '}
            <Text color="dark-6" weight="bold" letterSpacing={1}>
              SUPPORTED BY
            </Text>{' '}
            <Text family="Ravioli" color="brand" size="50px" lineHeight={10}>
              science
            </Text>
          </Box>
          <Paragraph size="20px" letterSpacing={1.2}>
            We start with the best quality ingredients, and create the most
            efficacious blends; always responsibly sourced and ethically
            packaged.
          </Paragraph>
          <Text size="22px" color="brand" weight={500} letterSpacing={1.2}>
            So you can protect our planet while you protect your health
          </Text>
        </Box>
      )}
    </Section>
  );
};

export default DescriptionSection;
