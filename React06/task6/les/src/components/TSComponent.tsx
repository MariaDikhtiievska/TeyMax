import * as interFace from "../task2_interface";
import task2_source from '../task2_source.json';


const someone : interFace.Root = { 
name: task2_source.name,
height : task2_source.height,
mass: task2_source.mass,
hair_color: task2_source.hair_color,
films:task2_source.films,
species: task2_source.species,
created: task2_source.created    
}

console.log(someone.films)

export default someone
