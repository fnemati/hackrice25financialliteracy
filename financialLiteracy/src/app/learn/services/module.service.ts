import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuleResponse } from '../models/module.model';
import { ModuleDetail } from '../models/moduleDetail.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private readonly apiUrl = '/api/modules'; // 👈 replace with your real endpoint

  constructor(private http: HttpClient) {}

  getModules(): Observable<ModuleResponse> {
    return this.http.get<ModuleResponse>(this.apiUrl);
  }

  getModuleById(id: number): Observable<ModuleDetail> {
    return this.http.get<ModuleDetail>(`${this.apiUrl}/${id}`);
  }
}