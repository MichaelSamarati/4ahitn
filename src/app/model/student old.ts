export class Student {
  id: string;
  forename: string | undefined;
  lastname: string | undefined;
  birthday: Date | undefined;
  image: string | undefined;
  quote: string | undefined;
  favouriteSubject: string | undefined;
  favouriteColor: string | undefined;
  phone: string | undefined;
  eyeColor: string | undefined;

  constructor(
    id: string,
    forename: string | undefined,
    lastname: string | undefined,
    birthday: Date | undefined,
    image: string | undefined,
    quote: string | undefined,
    favouriteSubject: string | undefined,
    favouriteColor: string | undefined,
    phone: string | undefined,
    eyeColor: string | undefined
  ) {
    this.id = id;
    this.forename = forename;
    this.lastname = lastname;
    this.birthday = birthday;
    this.image = image;
    this.quote = quote;
    this.favouriteSubject = favouriteSubject;
    this.favouriteColor = favouriteColor;
    this.phone = phone;
    this.eyeColor = eyeColor;
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
