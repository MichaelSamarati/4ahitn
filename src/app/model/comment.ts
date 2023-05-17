export class Comment {
  commentid: string | undefined;
  name: string | undefined;
  message: string | undefined;
  dat: Date | undefined;
  personid: string | undefined;

  constructor(
    commentid: string | undefined,
    name: string | undefined,
    message: string | undefined,
    dat: Date | undefined,
    personid: string | undefined
  ) {
    this.commentid = commentid;
    this.name = name;
    this.message = message;
    this.dat = dat;
    this.personid = personid;
  }
}
