export type RootTabsParamList = {
  Library: undefined
  Updates: undefined
  History: undefined
  Browse: undefined
  More: undefined
}

export interface TABS {
  id: string
  name: keyof RootTabsParamList
  component: () => JSX.Element
  Icon: string
}
