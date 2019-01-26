export interface Project{
    key? : string
    name: string
    abstract: string
    team: string
    isOpen: boolean
    index: number
    paper: Paper[]
}

export interface Paper{
    index: number
    name: string
    link: string
}