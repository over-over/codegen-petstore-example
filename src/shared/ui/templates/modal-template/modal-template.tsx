import styled from '@emotion/styled';
import { Modal, Fade, Backdrop } from '@mui/material';
import type { ReactNode } from 'react';

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div<{ $maxWidth?: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  outline: none;
  width: 100%;
  max-width: ${({ $maxWidth = 700 }) => $maxWidth}px;
`;

type Props = {
  children: ReactNode;
  isOpen?: boolean;
  maxWidth?: number;
  onClose: () => void;
};

export const ModalTemplate = ({
  onClose,
  isOpen = false,
  children,
  maxWidth,
}: Props) => {
  return (
    <StyledModal
      onClose={onClose}
      open={isOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        enter: true,
        exit: true,
        timeout: 200,
      }}
    >
      <Fade appear timeout={{ enter: 225, exit: 195 }} in={isOpen}>
        <ModalContent $maxWidth={maxWidth}>{children}</ModalContent>
      </Fade>
    </StyledModal>
  );
};
