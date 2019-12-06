import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components'



const Container = styled(motion.div)` 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;


const Backdrop = styled(Container)`

    background: rgba(0, 0, 0, 0.32);
  will-change: opacity;
  z-index: 2;
`;


const ModalContainer = styled(Container)`
display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 3;
`;

const ModalContent = styled.div`
 background: white;
  border-radius: 4px;
  width: 400px;

  pointer-events: all;
  

`;


const shade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.15 } }
};

export function Modal({ close, children}) {
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden">
      <Backdrop
        variants={shade}
        transition={{ duration: 0.2 }}
        onClick={close}
      />
      <ModalContainer>
        <ModalContent variants={modal}>{children}</ModalContent>
      </ModalContainer>

    </motion.div>
  );
}
