export class Person {
  personid: string;
  forename: string;
  lastname: string;
  gender: string | undefined;
  age: number | undefined;
  birthday: Date | undefined;
  email: string;
  image: string | undefined;
  visionScore: string | undefined;
  eyeColor: string | undefined;
  piercingTattoos: string | undefined;
  favouriteSong: string | undefined;
  chickenCrossReason: string | undefined;
  quote: string | undefined;
  hobbies: string | undefined;
  pets: string | undefined;
  allergies: string | undefined;
  schoolBeforeHTL: string | undefined;
  burgerPizzaAvocado: string | undefined;
  favouriteSubject: string | undefined;
  favouriteColor: string | undefined;
  phone: string | undefined;
  favouriteFood: string | undefined;
  favouriteMedia: string | undefined;
  specialClassFunction: string | undefined;
  socialmedia: string | undefined;
  subjects: string | undefined;
  holidayDream: string | undefined;
  schoolFromYouth: string | undefined;
  formerJobs: string | undefined;
  sideJobs: string | undefined;
  drink: string | undefined;
  operatingSystem: string | undefined;
  vehicle: string | undefined;

  constructor(
    personid: string,
    forename: string,
    lastname: string,
    gender: string | undefined,
    age: number | undefined,
    birthday: Date | undefined,
    email: string,
    image: string | undefined,
    visionScore: string | undefined,
    eyeColor: string | undefined,
    piercingTattoos: string | undefined,
    favouriteSong: string | undefined,
    chickenCrossReason: string | undefined,
    quote: string | undefined,
    hobbies: string | undefined,
    pets: string | undefined,
    allergies: string | undefined,
    schoolBeforeHTL: string | undefined,
    burgerPizzaAvocado: string | undefined,
    favouriteSubject: string | undefined,
    favouriteColor: string | undefined,
    phone: string | undefined,
    favouriteFood: string | undefined,
    favouriteMedia: string | undefined,
    specialClassFunction: string | undefined,
    socialmedia: string | undefined,
    subjects: string | undefined,
    holidayDream: string | undefined,
    schoolFromYouth: string | undefined,
    formerJobs: string | undefined,
    sideJobs: string | undefined,
    drink: string | undefined,
    operatingSystem: string | undefined,
    vehicle: string | undefined
  ) {
    this.personid = personid;
    this.forename = forename;
    this.lastname = lastname;
    this.gender = gender;
    this.birthday = birthday;
    this.age = age;
    this.email = email;
    this.image = image;
    this.visionScore = visionScore;
    this.eyeColor = eyeColor;
    this.piercingTattoos = piercingTattoos;
    this.favouriteSong = favouriteSong;
    this.chickenCrossReason = chickenCrossReason;
    this.quote = quote;
    this.hobbies = hobbies;
    this.pets = pets;
    this.allergies = allergies;
    this.schoolBeforeHTL = schoolBeforeHTL;
    this.burgerPizzaAvocado = burgerPizzaAvocado;
    this.favouriteSubject = favouriteSubject;
    this.favouriteColor = favouriteColor;
    this.phone = phone;
    this.favouriteFood = favouriteFood;
    this.favouriteMedia = favouriteMedia;
    this.specialClassFunction = specialClassFunction;
    this.socialmedia = socialmedia;
    this.subjects = subjects;
    this.holidayDream = holidayDream;
    this.schoolFromYouth = schoolFromYouth;
    this.formerJobs = formerJobs;
    this.sideJobs = sideJobs;
    this.drink = drink;
    this.operatingSystem = operatingSystem;
    this.vehicle = vehicle;
  }
}
