export  interface Root {
    name: string
    height: number
    mass: number
    hair_color: HairColor
    films: string[] | string
    species: Species[] | Species
    created: string
  }
  
  export  interface HairColor {
    R: number
    G: number
    B: number
    A: number
  }
  
  export interface Species {
    id: number
    url: string
    name: string
  }