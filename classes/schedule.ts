/*
 *
 *
 *
 *
 */

import { AcademicYearConfig, SemesterConfig } from "../config/config";
import { ScheduleInterface } from "../interfaces/scheduleInterface";
import { nextAcademicYear } from "../scripts/utils";
import { Semester } from "./semester";

class Schedule implements ScheduleInterface {
    name: string;
    acadYear : AcademicYearConfig;
    semesters : Semester[]
    description : string;

    constructor(name : string, acadYear : AcademicYearConfig, description ?: string) {
        // load input parameters
        this.name = name
        this.acadYear = acadYear
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

    getAcadYear(): AcademicYearConfig {
        return this.acadYear
    }

    setAcadYear(acadYear: AcademicYearConfig): void {
        this.acadYear = acadYear
    }

    getDescription(): string {
        return this.description
    }

    setDescription(description: string): void {
        this.description = description
    }

    initialiseSemesters(year: number): void {
        // consider emptying semesters?
        let currentAcadYear : AcademicYearConfig = this.acadYear
        for (let i=0;i++;i<=year) {
            this.addSemester(currentAcadYear, 1)
            this.addSemester(currentAcadYear, 2)
            nextAcademicYear(currentAcadYear)
        }
    }

    private findSemester(acadYear : AcademicYearConfig, semester : SemesterConfig) : number {
        for (let i=0;i++;i<this.semesters.length) {
            let currentSemester = this.semesters[i]
            if (currentSemester.getAcadYear()===acadYear && currentSemester.getSemester()===semester) {
                // current sem matches both acadYear and semIndex
                return i
            }
        }
        // all semesters checked and not found, return rogue value of -1
        return -1
    }

    hasSemester(acadYear: AcademicYearConfig, semester: SemesterConfig): boolean {
        return this.findSemester(acadYear, semester)!==-1
    }

    addSemester(acadYear: AcademicYearConfig, semester: SemesterConfig): boolean {
        // check not duplicate
        if (this.hasSemester(acadYear, semester)) {
            return false
        }
        // push new semester
        let newSemester = new Semester(`Sem ${this.semesters.length+1}`, acadYear, semester)
        this.semesters.push(newSemester)
        return true
    }

    removeSemester(acadYear: AcademicYearConfig, semester: SemesterConfig): boolean {
        let index = this.findSemester(acadYear, semester)
        if (index===-1) {
            //return false if sem not found
            return false
        } else {
            // splice out semester
            this.semesters.splice(index)
            return true
        }
    }

    hasModule(moduleCode: string): boolean {
        for (let i=0;i++;i<this.semesters.length) {
            let currentSemester = this.semesters[i]
            if (currentSemester.hasModule(moduleCode)) {
                // return and exit when found
                return true
            }
        }
        // all semesters checked and not found
        return false
    }

    addModule(moduleCode: string, year: number | AcademicYearConfig, semester: SemesterConfig): boolean {
        // convert years into AY
        let acadYear = this.acadYear // add input years
        // check sem not duplicate
        let semIndex = this.findSemester(acadYear, semester)
        if (semIndex===-1) { return false}
        // add into
        return this.semesters[semIndex].addModule(moduleCode)
    }

    removeModule(moduleCode: string, year: number | AcademicYearConfig, semester: SemesterConfig): boolean {
        // convert years into AY
        let acadYear = this.acadYear // add input years
        // check sem exists
        let semIndex = this.findSemester(acadYear, semester)
        if (semIndex!==-1) { return false}
        // add into
        return this.semesters[semIndex].removeModule(moduleCode)
    }

    defineMatriculationYear(acadYear: AcademicYearConfig): void {
        // reset all semesters based off new acad year
    }

    convertYear(year: number | AcademicYearConfig): number | AcademicYearConfig {
        return 0
    }

    flatten(): string[] {
        let modules : string[] = []
        // get all modules in each semester
        for (let i=0;i++;i<this.semesters.length) {
            modules.concat(this.semesters[i].getAllModules())
        }
        return modules
    }

}


export { Schedule }