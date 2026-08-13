interface optionalProperty {
    id: number;
    name: string;
    phone: number;
    readonly email?: string;
}

const studentData: optionalProperty = {
    id: 3,
    name: "anthony",
    phone: 2323432
}

console.log(studentData.email);

interface firstSemData extends optionalProperty {
    grade: string;
    percentage: number;
    promoted: boolean;
    getData(): void;
}

class StudentDetails implements firstSemData {
    id: number;
    name: string;
    phone: number;
    grade: string;
    percentage: number;
    promoted: boolean = true;
    constructor(id: number, name: string, phone: number, grade: string, percentage: number, promoted: boolean) {
        this.id = id,
            this.name = name,
            this.phone = phone,
            this.grade = grade,
            this.percentage = percentage,
            this.promoted = promoted
    }
    getData(): void {
        console.log("Excellent");
        console.log(this.name);

    };
}

let sd = new StudentDetails(1, "AAA", 2983, "A", 89, true);
sd.getData();


