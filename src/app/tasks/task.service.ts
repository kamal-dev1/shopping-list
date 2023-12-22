import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ITaskRequest } from './typings/task-request.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = environment.apiBaseUrl;

  http = inject(HttpClient);

  createTask(task: ITaskRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}task`, task);
  }
}
