export class Student {
  id: string;
  name: string;
  birthday: Date;
  imageUrl: string;
  quote: string;
  favouriteSubject: string;

  constructor(
    id: string,
    name: string,
    birthday: Date,
    imageUrl: string,
    quote: string,
    favouriteSubject: string
  ) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.imageUrl = imageUrl;
    this.quote = quote;
    this.favouriteSubject = favouriteSubject;
  }
}

export const STUDENT: Student[] = [
  new Student(
    '1',
    'Michael Samarati',
    new Date('2005-06-03T00:00:00'),
    'assets/p1.gif',
    'Lieber im Stehen scheißen, als in der Scheiße stehen',
    'ITP2'
  ),
  new Student(
    '2',
    'Taisier Khalifa',
    new Date('2004-12-12T00:00:00'),
    'assets/p2.jpg',
    '3 kleine Mäus, schau wie sie rennen. Sie rannten zur Bäuerin unverwand..  die nahm ein Großes Messer in die Hand und hackte den Mäusen die Schwänze ab .. Hast du schon mal sowas gesehen gehabt wie drei blinde mäus.',
    'NW2'
  ),
  new Student(
    '3',
    'Philipp Vollmann',
    new Date('2004-02-11T00:00:00'),
    'assets/p3.jpg',
    'Idk, I just got here',
    'WIR_3'
  ),
];
