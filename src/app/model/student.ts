export class Student {
  studentid: string;
  forename: string;
  lastname: string;
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

  constructor(
    studentid: string,
    forename: string,
    lastname: string,
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

// export const STUDENT: Student[] = [
//   new Student(
//     '1',
//     'Michael',
//     'Samarati',
//     new Date('2005-06-03T00:00:00'),
//     'assets/p1.gif',
//     'Lieber im Stehen scheißen, als in der Scheiße stehen',
//     'ITP2',
//     '#00fced',
//     'Windows Phone',
//     'blue'
//   ),
//   new Student(
//     '2',
//     'Taisier',
//     'Khalifa',
//     new Date('2004-12-12T00:00:00'),
//     'assets/p2.jpg',
//     '3 kleine Mäus, schau wie sie rennen. Sie rannten zur Bäuerin unverwand..  die nahm ein Großes Messer in die Hand und hackte den Mäusen die Schwänze ab .. Hast du schon mal sowas gesehen gehabt wie drei blinde mäus.',
//     'NW2',
//     '#07f6e7',
//     'Android',
//     'brown'
//   ),
//   new Student(
//     '3',
//     'Philipp',
//     'Vollmann',
//     new Date('2004-02-11T00:00:00'),
//     'assets/p3.jpg',
//     'Idk, I just got here',
//     'WIR_3',
//     '#005F6A',
//     'IOS',
//     'brown'
//   ),
// ];
