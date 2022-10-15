export const defaultSidebarExpanded = true

export const headerHeight = 48

export const minWindowWidthByExpandedSidebar = 600

export const sidebarAnimateDuration = 0.5

export const sidebarWidth = {
  collapsed: 48,
  expanded: 240,
}

type ZIndexName = 'header' | 'loading'
const headerZIndex = 100
const loadingZIndex = headerZIndex + 10
export const zIndexes: Record<ZIndexName, number> = {
  header: headerZIndex,
  loading: loadingZIndex,
}
