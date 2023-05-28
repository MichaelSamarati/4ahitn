import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../model/comment';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public static activeStudents: BehaviorSubject<any> = new BehaviorSubject([]);
  public static students: BehaviorSubject<any> = new BehaviorSubject([]);
  public static studentRange: number = 0;
  public static studentMaxRange: number = 0;
  public static areStudentsFinished: BehaviorSubject<boolean> =
    new BehaviorSubject(false);
  public static activeTeachers: BehaviorSubject<any> = new BehaviorSubject([]);
  public static teachers: BehaviorSubject<any> = new BehaviorSubject([]);
  public static teacherRange: number = 0;
  public static teacherMaxRange: number = 0;
  public static areTeachersFinished: BehaviorSubject<boolean> =
    new BehaviorSubject(false);
  public comments: BehaviorSubject<any> = new BehaviorSubject('');
  public comment_insert: BehaviorSubject<any> = new BehaviorSubject('');
  public static readonly INITIAL_DELAY: number = 140;
  public static readonly NEXT_DELAY: number = 160;

  constructor(private socket: Socket) {}

  reset() {
    CommunicationService.students.next([]);
    CommunicationService.activeStudents.next([]);
    CommunicationService.studentRange = 0;
    CommunicationService.studentMaxRange = 0;
    CommunicationService.areStudentsFinished.next(false);
    CommunicationService.teachers.next([]);
    CommunicationService.activeTeachers.next([]);
    CommunicationService.teacherRange = 0;
    CommunicationService.teacherMaxRange = 0;
    CommunicationService.areTeachersFinished.next(false);
  }

  requestStudents() {
    this.socket.emit('students', {});
  }

  waitForStudents() {
    this.socket.on('students_length', (msg: any) => {
      CommunicationService.studentMaxRange = msg.length;
    });
    this.socket.on('students_success', (msg: any) => {
      let person: Person = msg;
      CommunicationService.students.next([
        ...CommunicationService.students.value,
        person,
      ]);
    });
    return CommunicationService.students.asObservable();
  }

  initiateActiveStudents() {
    setTimeout(() => {
      let interval = setInterval(() => {
        if (
          CommunicationService.studentRange >=
          CommunicationService.studentMaxRange
        ) {
          clearInterval(interval);
          CommunicationService.areStudentsFinished.next(true);
          return;
        }
        if (
          CommunicationService.students.value[CommunicationService.studentRange]
        ) {
          CommunicationService.activeStudents.next([
            ...CommunicationService.activeStudents.value,
            CommunicationService.students.value[
              CommunicationService.studentRange
            ],
          ]);

          CommunicationService.studentRange++;
        }
      }, CommunicationService.NEXT_DELAY);
    }, CommunicationService.INITIAL_DELAY);
  }

  getActiveStudents() {
    return CommunicationService.activeStudents.asObservable();
  }

  areStudentsFinished() {
    return CommunicationService.areStudentsFinished.asObservable();
  }

  requestTeachers() {
    this.socket.emit('teachers', {});
  }

  waitForTeachers() {
    this.socket.on('teachers_length', (msg: any) => {
      CommunicationService.teacherMaxRange = msg.length;
    });
    this.socket.on('teachers_success', (msg: any) => {
      let person: Person = msg;
      CommunicationService.teachers.next([
        ...CommunicationService.teachers.value,
        person,
      ]);
    });
    return CommunicationService.teachers.asObservable();
  }

  initiateActiveTeachers() {
    setTimeout(() => {
      let interval = setInterval(() => {
        if (
          CommunicationService.teacherRange >=
          CommunicationService.teacherMaxRange
        ) {
          clearInterval(interval);
          CommunicationService.areTeachersFinished.next(true);
          return;
        }
        if (
          CommunicationService.teachers.value[CommunicationService.teacherRange]
        ) {
          CommunicationService.activeTeachers.next([
            ...CommunicationService.activeTeachers.value,
            CommunicationService.teachers.value[
              CommunicationService.teacherRange
            ],
          ]);

          CommunicationService.teacherRange++;
        }
      }, CommunicationService.NEXT_DELAY);
    }, CommunicationService.INITIAL_DELAY);
  }

  getActiveTeachers() {
    return CommunicationService.activeTeachers.asObservable();
  }

  areTeachersFinished() {
    return CommunicationService.areTeachersFinished.asObservable();
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

  waitForDisconnect() {
    this.socket.on('disconnect', () => {
      console.log('Disconnect!');
    });
  }
}
