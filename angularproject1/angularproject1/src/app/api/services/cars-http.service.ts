import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Cars} from "../models/Cars"

@Injectable()
export class CarsHttpService{
  private readonly API_URL = 'https://63a4e98c2a73744b00820b81.mockapi.io/car';
  constructor(private http: HttpClient) {
  }

  getAll(){
    return this.http.get<Cars[]>(this.API_URL)
  }
  delete(id: number){
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }
}
