import { motion } from 'framer-motion';

export const AnimateUpWrapper = (props) => (
  <motion.div
    initial={{ y: '100%', opacity: 0 }}
    exit={{ y: '100%', opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: 'easeInOut', delay: props.delay }}
  >
    {props.children}
  </motion.div>
);

AnimateUpWrapper.defaultProps = {
  delay: 0,
};
