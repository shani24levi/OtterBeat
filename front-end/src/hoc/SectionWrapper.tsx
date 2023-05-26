import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { Container } from '@mui/material';

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  return function Hoc(): JSX.Element {
    return (
      <Container fixed>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span id={idName}>&nbsp;</span>
          <Component />
        </motion.section>
      </Container>
    );
  };
};

export default SectionWrapper;
