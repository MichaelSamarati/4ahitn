import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public students: BehaviorSubject<any> = new BehaviorSubject('');
  public student: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private socket: Socket) {}

  requestStudents() {
    this.socket.emit('students', {});
  }

  waitForStudents() {
    this.socket.on('students_success', (msg: any) => {
      this.students.next(msg);
    });
    return this.students.asObservable();
  }

  requestStudent(id: any) {
    this.socket.emit('student', { id });
  }

  waitForStudent() {
    this.socket.on('student_success', (msg: any) => {
      this.student.next(msg);
    });
    return this.student.asObservable();
  }
}
