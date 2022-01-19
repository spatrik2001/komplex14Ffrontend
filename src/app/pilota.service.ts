import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotaService {

  constructor(private http:HttpClient) { }

  getPilotak():Observable<Object[]> {
    return this.http.get<Object[]>("localhost:8000/pilotak");
  }
}
