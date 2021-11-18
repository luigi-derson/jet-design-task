import { Box, Button, Heading, Image, Paragraph, Text } from 'grommet';
import Section from './Section';
import HeroBg from '../assets/bg-1.jpg';
import ProductsImage from '../assets/products.png';
import MiniLogo from '../assets/mini-logo.svg';
import { useState } from 'react';

const Hero = () => {
  const [openTab, setOpenTab] = useState(0);
  const openTabStyles = {
    color: 'brand',
    decoration: 'underline',
  };

  return (
    <Section background="#F6F6F2" pad="medium">
      <Box
        height="590px"
        overflow="hidden"
        position="relative"
        attachment="fixed"
        background={{
          color: 'brand',
          repeat: 'no-repeat',
          size: 'cover',
          image: `url(${HeroBg})`,
        }}
      >
        <Box
          round="50%"
          background="brand"
          height="1000px"
          width="1000px"
          position="absolute"
          left="0"
          right="0"
          top="0"
          bottom="0"
          margin="auto"
        />
        <Box
          direction="row"
          width={{ max: '1000px', width: '100%' }}
          margin={{ horizontal: 'auto' }}
          position="relative"
          align="center"
          justify="between"
          fill="vertical"
        >
          <Box flex={{ grow: 1 }} basis="1/2">
            <Image src={ProductsImage} alt="products" />
          </Box>
          <Box flex={{ grow: 1 }} basis="1/2">
            <Box direction="column" width="80%">
              <Text size="1.375rem" letterSpacing={5} color="#7ABCA3">
                REPLENISH
              </Text>
              <Heading level={1} size="77px" margin="0">
                Starter Pack
              </Heading>
              <Paragraph color="#7ABCA3" letterSpacing={1}>
                A beautiful glass jar. Your supplements of choice. Replenish
                with our compostable refill packs.
              </Paragraph>
              <Paragraph fontWeight="700" letterSpacing={1}>
                One time purchase or flexible subscription
              </Paragraph>
              <Box align="start">
                <Button secondary type="button" size="small">
                  {() => (
                    <Box pad="small" direction="row" align="center" gap="small">
                      <Text letterSpacing={1}>Find out more</Text>
                    </Box>
                  )}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box pad="medium">
        <Box direction="column" align="center" justify="center">
          <Box direction="row" justify="center" align="center" pad="small">
            <Image margin={{ left: '1.5rem' }} src={MiniLogo} alt="Mini Logo" />
          </Box>
          <Box
            direction="row"
            align="center"
            justify="center"
            gap="medium"
            border="between"
            margin={{ top: '1rem' }}
          >
            <Box>
              <Button onClick={() => setOpenTab(0)}>
                {() => (
                  <Text
                    letterSpacing={2}
                    color="rgba(4, 66, 41, 0.4)"
                    {...(openTab === 0 && openTabStyles)}
                  >
                    SHOP BY PRODUCT
                  </Text>
                )}
              </Button>
            </Box>
            <Box>
              <Button onClick={() => setOpenTab(1)}>
                {() => (
                  <Text
                    letterSpacing={2}
                    color="rgba(4, 66, 41, 0.4)"
                    {...(openTab === 1 && openTabStyles)}
                  >
                    SHOP BY BENEFIT
                  </Text>
                )}
              </Button>
            </Box>
          </Box>
          <Box margin={{ top: 'medium' }}>
            {openTab === 0 && (
              <Box
                animation="fadeIn"
                direction="row"
                align="center"
                gap="small"
              >
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Supplements
                      </Text>
                    </Box>
                  )}
                </Button>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Beauty & Toiletries
                      </Text>
                    </Box>
                  )}
                </Button>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Dietary
                      </Text>
                    </Box>
                  )}
                </Button>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Snacking
                      </Text>
                    </Box>
                  )}
                </Button>
              </Box>
            )}
            {openTab === 1 && (
              <Box
                animation="fadeIn"
                direction="row"
                align="center"
                gap="small"
              >
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Energy
                      </Text>
                    </Box>
                  )}
                </Button>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Digestion
                      </Text>
                    </Box>
                  )}
                </Button>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Sleep & Stress
                      </Text>
                    </Box>
                  )}
                </Button>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Immunity
                      </Text>
                    </Box>
                  )}
                </Button>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Anti-aging
                      </Text>
                    </Box>
                  )}
                </Button>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Bone
                      </Text>
                    </Box>
                  )}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Hero;
