import styled from '@emotion/styled';
import { ReactNode } from 'react';

const RootWrapper = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.paper};
  width: 100%;
  height: 100vh;
`;

type Props = {
  children?: ReactNode;
};

export const App = ({ children }: Props) => {
  return <RootWrapper>{children}</RootWrapper>;
};
