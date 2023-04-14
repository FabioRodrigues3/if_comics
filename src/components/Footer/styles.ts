import styled from 'styled-components';
import * as Separator from '@radix-ui/react-separator';

export const Container = styled.footer`
  display: flex;
  width: 100%;
  background-color: #707070;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.875rem;
  font-weight: 600;
  gap: 1rem;
  padding: 1rem 0;
`;

export const FooterContent = styled.div`
  gap: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;
export const CustomSeparator = styled(Separator.Root)`
  margin-top: 2px;
  background: #ffffff;
  height: 1px;
  width: 100%;
`;

export const FooterText = styled.div`
  display: flex;

  font-weight: 500;
  font-size: 1rem;
`;

export const Year = styled.span`
  font-size: 12px;
`;
