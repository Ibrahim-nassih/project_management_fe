import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 53,
    label: 'MENUITEMS.CONFIGURATION.TEXT',
    collapseid: 'sidebarCONFIGURATION',
    icon: 'ri-hospital-line',
    role: 'ETABLISSEMENT',
    subItems: [
      {
        id: 56,
        label: 'MENUITEMS.CONFIGURATION.CHILD.PERSONNEL',
        link: '/personnel',
        role: 'ETABLISSEMENT_MENU_PERSONNEL',
        parentId: 53
      },
    ]
  },
];
