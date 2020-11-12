export interface Poke {
    name: string,
    id: number,
    sprite: string,
    spriteShiny: string,
    types: Types[],
    abilities: Abilities[],
    stats: Stat[],
    weight: number,
    height: number,
    exists: boolean
}
export interface Types{
    name: string,
    color?: string
}
export interface Stat {
    name: string,
    value: number
}

export interface Abilities{
    ability: string
}