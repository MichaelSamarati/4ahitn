import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../model/comment';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public students: BehaviorSubject<any> = new BehaviorSubject('');
  public student: BehaviorSubject<any> = new BehaviorSubject('');
  public comments: BehaviorSubject<any> = new BehaviorSubject('');
  public comment_insert: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private socket: Socket) {}

  requestStudents() {
    this.students.next([]);
    this.socket.emit('students', {});
  }

  waitForStudents() {
    this.socket.on('students_success', (msg: any) => {
      this.students.next([...this.students.value, msg]);
    });
    return this.students.asObservable();
  }

  // requestStudent(id: any) {
  //   this.socket.emit('student', { id });
  // }

  // waitForStudent() {
  //   this.socket.on('student_success', (msg: any) => {
  //     this.student.next(msg);
  //   });
  //   return this.student.asObservable();
  // }

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
