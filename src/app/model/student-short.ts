export class StudentShort {
  studentid: string;
  forename: string;
  lastname: string;
  image: string | undefined;
  visionScore: string | undefined;
  eyeColor: string | undefined;
  chickenCrossReason: string | undefined;
  burgerPizzaAvocado: string | undefined;
  favouriteSubject: string | undefined;
  favouriteColor: string | undefined;

  constructor(
    studentid: string,
    forename: string,
    lastname: string,
    image: string | undefined,
    visionScore: string | undefined,
    eyeColor: string | undefined,
    chickenCrossReason: string | undefined,
    burgerPizzaAvocado: string | undefined,
    favouriteSubject: string | undefined,
    favouriteColor: string | undefined,
  ) {
    this.studentid = studentid;
    this.forename = forename;
    this.lastname = lastname;
    this.image = image;
    this.visionScore = visionScore;
    this.eyeColor = eyeColor;
    this.chickenCrossReason = chickenCrossReason;
    this.burgerPizzaAvocado = burgerPizzaAvocado;
    this.favouriteSubject = favouriteSubject;
    this.favouriteColor = favouriteColor;
  }
}

