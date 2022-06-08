import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import ufuhIcon from 'assets/ufuh.jpeg';
import ufukIcon from 'assets/ufuk.jpg';
import cenkIcon from 'assets/cenk.jpg';
import ertanIcon from 'assets/ertan.jpg';
import yiitIcon from 'assets/yiit.jpg';
import ozanIcon from 'assets/akin.jpeg';

const SERVICES_DATA = [
  {
    icon: ertanIcon,
    title: 'Ertan Onur',
    text:
      'Team Lead',
  },
  {
    icon: ufukIcon,
    title: 'Ufuk Yağmur',
    text:
      'Library',
  },
  {
    icon: yiitIcon,
    title: 'Yiğit Uçan',
    text:
      'Frontend',
  },
  {
    icon: cenkIcon,
    title: 'Cenk Yılmaz',
    text:
      'Backend',
  },
  {
    icon: ufuhIcon,
    title: 'Deniz Koluaçık',
    text:
      'Backend',
  },
  {
    icon: ozanIcon,
    title: 'Ozan Akın',
    text:
      'Runner',
  },
];

const Testimonials = () => {
  return (
    <Box sx={styles.services} id="testimonials" style={{ marginBottom: '180px' }}>
      <Container>
        <BlockTitle
          slogan=""
          title="The Team"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['110px', null, null, '150px'],
    height: ['110px', null, null, '150px'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
