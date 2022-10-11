import styled from '@emotion/styled'

import { zIndexes } from 'constants/layout'

export const StyledLoading = styled.div`
  position: fixed;
  z-index: ${zIndexes.loading};
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;

  background: red;
`
