import axios from "axios";
import {MoviesArr} from "../infoSec"
import { Request, Response } from "express"
const url:string =`http://www.omdbapi.com/?s=`
const apiKey:string = `&apikey=8c217066`



type Movie  = {
    name?:string;
    year?:number;
    genre?:string[];
}


const allMovies =  (_req:Request, res:Response)=> {
let films:any;

    let movieFinal:Movie[] = ( MoviesArr.map(async(e:string) => {

    films = await axios.get(url+{e}+apiKey)

}
    )).map((x:any)=>{
       return{
        name:x.name,
        year:x.year,
        genre:x.genre,
       } 
    })
   
    res.send(movieFinal)
 }
 module.exports={
    allMovies
 }