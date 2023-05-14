import { calculateAge } from "../logic/date";

export class Student {
  studentid: string;
  forename: string;
  lastname: string;
  gender: string | undefined;
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
  age: number | undefined;

  constructor(
    studentid: string,
    forename: string,
    lastname: string,
    gender: string | undefined,
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
    socialmedia: string | undefined
  ) {
    this.studentid = studentid;
    this.forename = forename;
    this.lastname = lastname;
    this.gender = gender;
    this.birthday = birthday;
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
  }
}

