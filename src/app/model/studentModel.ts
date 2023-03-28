export class StudentModel {

    id: string;
    surname: string;
    imageUrl: string;

    constructor(id: string, surname: string, imageUrl: string){
        this.id = id;
        this.surname = surname;
        this.imageUrl = imageUrl;
    }
}

export const STUDENT: StudentModel[]=[
    new StudentModel("1", "Student 1", "assets/kkk04.gif"),
    new StudentModel("2", "Student 2", "assets/kkk03.gif")
]