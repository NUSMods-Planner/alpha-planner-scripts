import { Semester } from "./classes/semester"
import { AcademicYearConfig, SemesterConfig } from "./config/config"


let sem : Semester = new Semester('Test Semester', AcademicYearConfig["AY2021-2022"], SemesterConfig["Semester 1"])
console.log('SEMESTER DATA', sem)
console.log('====')
sem.addModule('PC2130')
sem.addModule('PC2133')
sem.addModule('PC2130')
console.log(sem)
console.log(sem.hasModule('PC2130'))
console.log(sem.hasModule('PC2032'))