import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPost } from "./model";

@Injectable({
    providedIn: 'root'
})
export class PostService{
    constructor(public readonly httpClient: HttpClient){}


    getPost(): Observable<IPost[]>{
        return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    } 
}