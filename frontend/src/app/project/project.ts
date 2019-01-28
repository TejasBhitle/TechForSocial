export interface Project{
    key? : string
    name: string
    abstract: string
    team: string
    isOpen: boolean
    index: number
    slug: string
    keywords: []
    papers: Paper[]
}

export interface Paper{
    index: number
    name: string
    link: string
}