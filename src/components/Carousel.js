import { Box, Button, Paragraph, Text } from 'grommet';
import Section from './Section';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Mousewheel } from 'swiper';
import ProductCard from './ProductCard';
import Product1 from '../assets/p-green.png';
import Product2 from '../assets/p-bliss.png';
import Product3 from '../assets/p-eye.png';
import Product4 from '../assets/p-gut.png';
import Product5 from '../assets/p-go.png';

const Carousel = () => {
  return (
    <Section pad={{ left: 'medium', bottom: 'large' }}>
      <Box display="block">
        <Swiper
          modules={[Mousewheel]}
          spaceBetween={10}
          slidesPerView={4.5}
          mousewheel
        >
          <SwiperSlide>
            <Box
              width="330px"
              height="500px"
              background="#F6F6F2"
              direction="column"
              pad="medium"
              justify="end"
            >
              <Text size="50px" family="Ravioli" lineHeight={40} color="brand">
                Refill Supplements
              </Text>
              <Paragraph size="19px" letterSpacing={1.2}>
                Our compostable pouches are packed with good stuff. Pour into
                your glass jar, and they’ll look gorgeous too.
              </Paragraph>
              <Text size="19px" letterSpacing={1.2} weight="bold" color="brand">
                Refill. Recycle. Repeat.
              </Text>
              <Box align="start" pad={{ vertical: 'medium' }}>
                <Button primary type="button">
                  {() => (
                    <Box
                      pad="xsmall"
                      direction="row"
                      align="center"
                      gap="small"
                    >
                      <Text size="15px" color="brand" letterSpacing={1}>
                        Shop Refills
                      </Text>
                    </Box>
                  )}
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="Green Goddess"
              category="SMOOTHIE SCOOP"
              price={12.99}
              img={Product1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="Bedtime Bliss"
              category="FOOD SUPPLEMENT"
              price={12.99}
              img={Product2}
              color="#393753"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="Eye Love"
              category="FOOD SUPPLEMENT"
              price={12.99}
              img={Product3}
              color="#803445"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="Gut Goodness"
              category="FOOD SUPPLEMENT"
              price={12.99}
              img={Product4}
              color="#D28E8C"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="Get up & Go"
              category="FOOD SUPPLEMENT"
              price={12.99}
              img={Product5}
              color="#DBA725"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="Green Goddess"
              category="SMOOTHIE SCOOP"
              price={12.99}
              img={Product1}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Section>
  );
};

export default Carousel;
