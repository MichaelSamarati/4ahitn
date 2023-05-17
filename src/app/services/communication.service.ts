import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../model/comment';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public static activeStudents: BehaviorSubject<any> = new BehaviorSubject([]);
  public static students: BehaviorSubject<any> = new BehaviorSubject([]);
  // public student: BehaviorSubject<any> = new BehaviorSubject('');
  public comments: BehaviorSubject<any> = new BehaviorSubject('');
  public comment_insert: BehaviorSubject<any> = new BehaviorSubject('');
  public static range: number = 0;

  constructor(private socket: Socket) {}

  requestStudents() {
    this.socket.emit('students', {});
  }

resetStudents()    {
    CommunicationService.students.next([]);
    CommunicationService.activeStudents.next([]);
    CommunicationService.range = 0;
  }

  waitForStudents() {
    this.socket.on('students_success', (msg: any) => {
      let student: Student = msg;
      CommunicationService.students.next([
        ...CommunicationService.students.value,
        student,
      ]);
    });
    return CommunicationService.students.asObservable();
  }

  initialeActiveStudents() {
    setTimeout(() => {
      let interval = setInterval(() => {
        if (CommunicationService.range > 50) {
          clearInterval(interval);
          return;
        }
        if (CommunicationService.students.value[CommunicationService.range]) {
          CommunicationService.activeStudents.next([
            ...CommunicationService.activeStudents.value,
            CommunicationService.students.value[CommunicationService.range],
          ]);

          CommunicationService.range++;
        }
      }, 175);
    }, 130);
  }

  getActiveStudents() {
    return CommunicationService.activeStudents.asObservable();
  }

  requestComments(id: any) {
    this.socket.emit('comments', { id });
  }

  waitForComments() {
    this.socket.on('comments_success', (msg: any) => {
      this.comments.next(msg);
    });
    return this.comments.asObservable();
  }

  sendComment(comment: Comment) {
    this.socket.emit('comment_insert', comment);
  }

  waitForCommentSuccess() {
    this.socket.on('comment_insert_success', (msg: any) => {
      this.comment_insert.next(msg);
    });
    return this.comment_insert.asObservable();
  }
}
