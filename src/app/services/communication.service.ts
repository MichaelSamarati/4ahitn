import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../model/comment';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public static activePersons: BehaviorSubject<any> = new BehaviorSubject([]);
  public static persons: BehaviorSubject<any> = new BehaviorSubject([]);
  public comments: BehaviorSubject<any> = new BehaviorSubject('');
  public comment_insert: BehaviorSubject<any> = new BehaviorSubject('');
  public static range: number = 0;

  constructor(private socket: Socket) {}

  requestStudents() {
    this.socket.emit('persons', {});
  }

  resetStudents() {
    CommunicationService.persons.next([]);
    CommunicationService.activePersons.next([]);
    CommunicationService.range = 0;
  }

  waitForPersons() {
    this.socket.on('persons_success', (msg: any) => {
      let person: Person = msg;
      CommunicationService.persons.next([
        ...CommunicationService.persons.value,
        person,
      ]);
    });
    return CommunicationService.persons.asObservable();
  }

  initiateActivePersons() {
    setTimeout(() => {
      let interval = setInterval(() => {
        if (CommunicationService.range > 50) {
          clearInterval(interval);
          return;
        }
        if (CommunicationService.persons.value[CommunicationService.range]) {
          CommunicationService.activePersons.next([
            ...CommunicationService.activePersons.value,
            CommunicationService.persons.value[CommunicationService.range],
          ]);

          CommunicationService.range++;
        }
      }, 175);
    }, 130);
  }

  getActivePersons() {
    return CommunicationService.activePersons.asObservable();
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
