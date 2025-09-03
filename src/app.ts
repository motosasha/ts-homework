let salary: number = 1000;
let bonus: number = 500;

let result: number = salary + bonus;
console.log(result);


//==


function getFullName(firstname: string, lastname: string): string {
    return `${firstname} ${lastname}`;
}

let me = getFullName("Alex", "Moto");
console.log(me);


//==


const user = {
    firstname: "John",
    lastname: "Doe",
    city: "San Francisco",
    age: 32,
}

interface userInterface {
    firstname: string,
    lastname: string
};

const getFullNameArrow = (userEntity: userInterface): string => {
    return `${userEntity.firstname} ${userEntity.lastname}`;
}

let me2 = getFullNameArrow(user);
console.log(me2)


//==


let skills: string[] = ["Dev", "DevOps", "Tester"];
let id = skills[0];
let skillName = skills[1];
console.log(skills, id, skillName);

for(let skill of skills) {
    console.log(skill);
}

const newResult = skills
    .filter((skill: string) => skill !== "DevOps")
    .map((skill: string) => skill + "! ")
    .reduce((a, b) => a + b);
console.log(newResult);

let newSkills: [number, string, ...boolean[], number] = [1, "Dev", true, false, 1];
console.log(newSkills);

//==

const a = 5;
// a = 6;

const arr: readonly [number, string] = [1, "some"];
const arrString: ReadonlyArray<string> = ["some", "thing"];
const arrNumber: ReadonlyArray<number> = [42, 24];

//==

enum StatusCodes {
    SUCCESS = 1,
    IN_PROCESS = 2,
    FAILED = 3,
}

const res = {
    message: "Success",
    statusCode: StatusCodes.SUCCESS,
}

if (res.statusCode === StatusCodes.SUCCESS) {}
