export interface Project{
    key? : string
    name: string
    abstract: string
    team: string
    paper: Paper[]
}

export interface Paper{
    name: string
    link: string
}