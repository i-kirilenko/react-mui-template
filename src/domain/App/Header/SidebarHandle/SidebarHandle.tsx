import { FC, memo } from 'react'

import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledSidebarHandle } from './SidebarHandle.style'

const SidebarHandle: FC = () => {
  const [localSettingsState, setLocalSettingsState] =
    useLocalSettings<LocalSettingsState>()

  const { sidebarExpanded: expanded } = localSettingsState
  log(`SidebarHandle.render`)(`Expanded: ${expanded}`)

  return (
    <StyledSidebarHandle
      className={cnc('SidebarHandle', { expanded })}
      onClick={() => setLocalSettingsState({ sidebarExpanded: !expanded })}
    >
      &#5125;
    </StyledSidebarHandle>
  )
}

export const testContent = 'SidebarHandle test content'
export default withRenderingTest(memo(SidebarHandle), testContent)
