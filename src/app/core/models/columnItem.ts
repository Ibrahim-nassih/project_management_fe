export interface ColumnItem{
    name?: string
    key?: string | null
}
export interface ButtonItem{
    role?: string,
    action?: ButtonEnum,
    tooltip?: string,
    icon?: string,
    color?: string
}
export enum ButtonEnum {
    EDIT = 'EDIT',
    DELETE = 'DELETE',
    SHOW = 'SHOW',
    SERVICES_VISUALISER = 'SERVICES_VISUALISER',
    LABORATOIRES_VISUALISER = 'LABORATOIRES_VISUALISER',
    COMPTE_BANCAIRE = 'COMPTE_BANCAIRE',
    CONTRAT = 'CONTRAT'
}

export enum FilterEnum {
    ACTIVITE = 'ACTIVITE',
    TYPE_PEC = 'TYPE_PEC',
    PROFIL = 'PROFIL',
    DEPARTEMENT = 'DEPARTEMENT',
    SERVICE = 'SERVICE'
}
export interface FilterDataItem{
    id?: number,
    nom?: string
}
export interface DataFilter{
    columnsTable?: any
    isrefresh?: boolean
    buttonList?: boolean
    loading?: boolean
    profilesFilter?: any,
    isprofileFilter?: boolean
    servicesFilter?: any,
    isservicesFilter?: boolean
    departementsFilter?: any
    isdepartementsFilter?: boolean
    buttons: any
}

