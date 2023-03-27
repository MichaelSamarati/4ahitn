export class StudentModel {
    surname: string;
    imageUrl: string;

    constructor(surname: string, imageUrl: string){
        this.surname = surname;
        this.imageUrl = imageUrl;
    }
}

export const STUDENT: StudentModel[]=[
    new StudentModel("Student 1", "assets/kkk04.gif"),
    new StudentModel("Student 2", "assets/kkk03.gif")
]