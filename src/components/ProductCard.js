import { Box, Button, Image, Text } from 'grommet';
import { Shop } from 'grommet-icons';
import { useState } from 'react';

const ProductCard = ({ name, category, price, img, color = 'brand' }) => {
  const [showCircle, setShowCircle] = useState(false);

  const mouseEnter = () => {
    setShowCircle(true);
  };
  const mouseLeave = () => {
    setShowCircle(false);
  };
  return (
    <Box
      width="330px"
      height="500px"
      position="relative"
      align="center"
      onMouseOver={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {showCircle && (
        <Box
          animation="fadeIn"
          position="absolute"
          round="50%"
          width="265px"
          height="265px"
          background={color}
          top="1rem"
        />
      )}
      <Box
        position="relative"
        direction="column"
        pad={{ horizontal: 'medium', bottom: 'medium' }}
        textAlign="center"
        fill
      >
        <Image src={img} alt={name} fit="contain" />
        <Text size="40px" family="Ravioli">
          {name}
        </Text>
        <Text size="15px">{category}</Text>
        <Text size="32px" family="Ravioli">
          £{price}
        </Text>
        <Box align="center" pad={{ vertical: 'medium' }}>
          <Button primary type="button">
            {() => (
              <Box pad="xsmall" direction="row" align="center" gap="small">
                <Shop size="15px" />
                <Text as="div" size="15px" color="brand" letterSpacing={1}>
                  Add to Basket
                </Text>
              </Box>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
