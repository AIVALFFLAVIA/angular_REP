import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7006/api'; 

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/data`);
  }

  getDataById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/data/${id}`);
  }

  createData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/data`, data);
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/data/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/data/${id}`);
  }
}

// Replace /data with your actual endpoint routes.