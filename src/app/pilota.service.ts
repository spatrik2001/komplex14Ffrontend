import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PilotaModel } from './models/pilota.model';

@Injectable({
  providedIn: 'root'
})
export class PilotaService {

  constructor(private http:HttpClient) { }

  getPilotak():Observable<PilotaModel[]> {
    return this.http.get<PilotaModel[]>("localhost:8000/pilotak");
  }
}
