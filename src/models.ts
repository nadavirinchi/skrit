export interface Count{
    count: number,
    thou: string,
    title: string,
    description: string
}

export interface Company{
    src: string,
    name: string,
    location: string
}

export interface Service{
    src: string,
    service: string,
    delay: number
}

export interface BlogPost{
    src: string,
    title: string
}