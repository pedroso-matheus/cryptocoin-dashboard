import styled from 'styled-components';

import { IWrapperStyled } from './types';

export const StyledWrapper = styled.div<IWrapperStyled>`
  margin: ${props => props.$margin || "0px"};
  padding: ${props => props.$padding || '30px'};   
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
`;
