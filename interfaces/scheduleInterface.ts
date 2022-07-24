/*
 *
 *
 *
 */

import { Semester } from "../classes/semester"
import { AcademicYearConfig, SemesterConfig } from "../config/config"

interface ScheduleInterface {
    meta : {
        name : string,
        acadYear ?: AcademicYearConfig,
        description ?: string,
    },
    semesters : Semester[]

    // getter-setter
    getName() : string
    setName(name : string) : void
    getAcadYear() : AcademicYearConfig
    setAcadYear(acadYear : AcademicYearConfig) : void
    getDescription() : string
    setDescription(description : string) : void
    // intermediate methods
    defineMatriculationYear(acadYear : AcademicYearConfig) : void
    convertYear(year : number | AcademicYearConfig) : AcademicYearConfig | number
    // semester methods
    hasSemester(acadYear : AcademicYearConfig, semester : SemesterConfig) : boolean
    addSemester(acadYear : AcademicYearConfig, semester : SemesterConfig) : boolean
    removeSemester(acadYear : AcademicYearConfig, semester : SemesterConfig) : boolean
    // module methods
    hasModule(moduleCode : string) : boolean
    addModule(moduleCode : string, year : number | AcademicYearConfig, semester : SemesterConfig) : boolean
    removeModule(moduleCode : string, year : number | AcademicYearConfig, semester : SemesterConfig) : boolean
}

export { ScheduleInterface }