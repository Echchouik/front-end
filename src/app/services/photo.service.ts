import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';

@Injectable()
export class PhotoService {
    constructor(private http:HttpClient) {}
    getPhotos() {
        let url = "http://localhost:8080/photo/allPhotos";
        return this.http.get(url);
    }
}