import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 53,
    label: 'MENUITEMS.CONFIGURATION.TEXT',
    icon: 'ri-hospital-line',
    role: '',
    subItems: [
      {
        id: 56,
        label: 'MENUITEMS.CONFIGURATION.CHILD.PERSONNEL',
        link: '/personnel',
        role: '',
        parentId: 53
      },
    ]
  },
  {
    id: 54,
    label: 'MENUITEMS.SPACES.TEXT',
    icon: 'bx bxl-squarespace',
    role: '',
    link: '/spaces',
  },
];
