export interface Region {
    name: string
    icon: string
    resource: string | null
    color: string
}

export interface RegionData {
    regionName: string
    questsNumber: number
    successQuestsNumber: number
    expirience: number
    gold: number
    resources: Record<string, number>
}

export interface User {
    nickNames: Array<string>
    time: Array<string>
}
