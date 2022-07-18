import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Task[]{
    return TASK;
  }
}
