import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import icon1 from 'assets/Topology_Management.svg';
import icon2 from 'assets/Detailed_Metrics.svg';
import icon3 from 'assets/Classroom_Management.svg';
import icon4 from 'assets/GitHub_Integration.svg';

const SERVICES_DATA = [
  {
    icon: icon1,
    title: 'Topology Management',
    text:
      'Create and manage topologies. Make experiments on different topologies you build.',
  },
  {
    icon: icon2,
    title: 'Detailed Metrics',
    text:
      'Get detailed metrics about your experiments. See your results clearly.',
  },
  {
    icon: icon3,
    title: 'Classroom Management',
    text:
      'Create and manage classrooms. See how your participants are doing.',
  },
  {
    icon: icon4,
    title: 'GitHub Integration',
    text:
      'Get your projects from GitHub. See your metrics and changes on your repositories.',
  },
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="The best way to manage your experimentation environment"
          title="Features"
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

export default Services;

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
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['150px', null, null, '220px'],
    height: ['150px', null, null, '220px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
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
