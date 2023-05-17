export class PersonShort {
  personid: string;
  forename: string;
  lastname: string;
  gender: string | undefined;
  image: string | undefined;
  visionScore: string | undefined;
  eyeColor: string | undefined;
  chickenCrossReason: string | undefined;
  burgerPizzaAvocado: string | undefined;
  favouriteSubject: string | undefined;
  favouriteColor: string | undefined;

  constructor(
    personid: string,
    forename: string,
    lastname: string,
    gender: string | undefined,
    image: string | undefined,
    visionScore: string | undefined,
    eyeColor: string | undefined,
    chickenCrossReason: string | undefined,
    burgerPizzaAvocado: string | undefined,
    favouriteSubject: string | undefined,
    favouriteColor: string | undefined,
  ) {
    this.personid = personid;
    this.forename = forename;
    this.lastname = lastname;
    this.gender = gender;
    this.image = image;
    this.visionScore = visionScore;
    this.eyeColor = eyeColor;
    this.chickenCrossReason = chickenCrossReason;
    this.burgerPizzaAvocado = burgerPizzaAvocado;
    this.favouriteSubject = favouriteSubject;
    this.favouriteColor = favouriteColor;
  }
}

