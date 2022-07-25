/*
 *
 *
 *
 *
 */

import { AcademicYearConfig, SemesterConfig } from "../config/config";
import { ScheduleInterface } from "../interfaces/scheduleInterface";
import { Semester } from "./semester";

class Schedule implements ScheduleInterface {
    name: string;
    matriculationYear : AcademicYearConfig;
    semesters : Semester[]
    description : string;

    constructor(name : string, matriculationYear : AcademicYearConfig, description ?: string) {
        // load input parameters
        this.name = name
        this.matriculationYear = matriculationYear
        this.semesters = []
        if (description === undefined) {
            this.description = ''
        } else {
            this.description = description
        }
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getMatriculationYear(): AcademicYearConfig {
        return this.matriculationYear
    }

    setMatriculationYear(acadYear: AcademicYearConfig): void {
        this.matriculationYear = acadYear
    }

    getDescription(): string {
        return this.description
    }

    setDescription(description: string): void {
        this.description = description
    }

    initialiseSemesters(years   : number): void {
        // consider emptying semesters?
        for (let i=1;i<years+1;i++) {
            console.log(i)
            this.addSemester(i, 1)
            this.addSemester(i, 2)
            console.log()
        }
    }

    private findSemester(year : number, semester : SemesterConfig) : number {
        for (let i=0;i<this.semesters.length;i++) {
            let currentSemester = this.semesters[i]
            if (currentSemester.getYear()===year && currentSemester.getSemester()===semester) {
                // current sem matches both acadYear and semIndex
                return i
            }
        }
        // all semesters checked and not found, return rogue value of -1
        return -1
    }

    hasSemester(year: number, semester: SemesterConfig): boolean {
        return this.findSemester(year, semester)!==-1
    }

    addSemester(year: number, semester: SemesterConfig): boolean {
        // check not duplicate
        if (this.hasSemester(year, semester)) {
            return false
        }
        // push new semester
        let newSemester = new Semester(`Sem ${this.semesters.length+1}`, year, semester)
        this.semesters.push(newSemester)
        return true
    }

    removeSemester(year: number, semester: SemesterConfig): boolean {
        let index = this.findSemester(year, semester)
        if (index===-1) {
            //return false if sem not found
            return false
        } else {
            // splice out semester
            this.semesters.splice(index)
            return true
        }
    }

    // separate methods for global and local checks
    hasModule(moduleCode: string): boolean {
        for (let i=0;i<this.semesters.length;i++) {
            let currentSemester = this.semesters[i]
            if (currentSemester.hasModule(moduleCode)) {
                // return and exit when found
                return true
            }
        }
        // all semesters checked and not found
        return false
    }

    addModule(moduleCode: string, year: number , semester: SemesterConfig): boolean {
        // check duplicate
        // if (this.hasModule(moduleCode)) { return false }
        // check sem
        let semIndex = this.findSemester(year, semester)
        if (semIndex===-1) { return false}
        // add into
        return this.semesters[semIndex].addModule(moduleCode)
    }

    removeModule(moduleCode: string, year: number , semester: SemesterConfig): boolean {
        // check sem exists
        let semIndex = this.findSemester(year, semester)
        if (semIndex===-1) { return false}
        // remove, removeModule returns false if mod not found
        return this.semesters[semIndex].removeModule(moduleCode)
    }

    flatten(): string[] {
        let modules : string[] = []
        // get all modules in each semester
        for (let i=0;i<this.semesters.length;i++) {
            modules = modules.concat(this.semesters[i].getAllModules())
        }
        return modules
    }

}


export { Schedule }