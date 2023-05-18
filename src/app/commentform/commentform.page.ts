import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../model/person';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';
import { Comment } from '../model/comment';
import { Preferences } from '@capacitor/preferences';
import { genderToColorDarkTransparent } from '../logic/color';

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.page.html',
  styleUrls: ['./commentform.page.scss'],
})
export class CommentformPage implements OnInit {
  profile: Person | undefined;
  comments: Comment[] | undefined;
  subscriptions = new Subscription();
  name: string | null;
  message: string | undefined;
  imageName: string | undefined;
  colorVariable: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private communicationService: CommunicationService
  ) {}

  async ngOnInit() {
    this.subscriptions = new Subscription();
    const routeParams = this.route.snapshot.paramMap;
    const profileIdFromRoute = routeParams.get('id');
    this.subscriptions.add(
      this.communicationService
        .waitForStudents()
        .subscribe(async (persons: Person[]) => {
          if (!this.profile) {
            this.profile = persons.find(
              (x) => x.personid == profileIdFromRoute
            );
            if (!this.profile) {
              return;
            } else {
              this.initValues(this.profile);
            }
          }
        })
    );
    this.subscriptions.add(
      this.communicationService
        .waitForTeachers()
        .subscribe(async (persons: Person[]) => {
          if (!this.profile) {
            this.profile = persons.find(
              (x) => x.personid == profileIdFromRoute
            );
            if (!this.profile) {
              return;
            } else {
              this.initValues(this.profile);
            }
          }
        })
    );
    this.name = await this.getPseudonym();
    if (this.name == '') {
      this.setPseudonym('anonymous' + Math.floor(Math.random() * 100));
      this.name = await this.getPseudonym();
    }
    this.colorVariable = genderToColorDarkTransparent(this.profile?.gender);
  }

  initValues(person: Person) {
    this.imageName =
      person.gender == 'f' ? 'female_background.png' : 'male_background.png';
  }

  ngOnDestroy() {
    this.setPseudonym(this.name || '');
    this.subscriptions.unsubscribe();
  }

  submitComment() {
    const comment: Comment = new Comment(
      undefined,
      this.name || '',
      this.message,
      new Date(),
      this.profile?.personid
    );
    this.communicationService.sendComment(comment);
    this.subscriptions.add(
      this.communicationService
        .waitForCommentSuccess()
        .subscribe((comment_insert: any) => {
          this.location.back();
        })
    );
  }

  async setPseudonym(pseudonym: string) {
    await Preferences.set({
      key: 'commentpseudonym',
      value: pseudonym,
    });
  }

  async getPseudonym() {
    const pseudonym = await Preferences.get({ key: 'commentpseudonym' });
    return pseudonym.value;
  }
}
