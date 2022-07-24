/*
 *
 *
 *
 */

import { Semester } from "../classes/semester"
import { AcademicYearConfig, SemesterConfig } from "../config/config"

interface ScheduleInterface {
    meta : {
        name : string,                              // name of schedule
        acadYear : AcademicYearConfig,             // academic year of matriculation
        description ?: string,                      // optional additional description
    },
    semesters : Semester[]                          // list of semesters

    // getter-setter
    getName() : string
    setName(name : string) : void
    getAcadYear() : AcademicYearConfig
    setAcadYear(acadYear : AcademicYearConfig) : void
    getDescription() : string
    setDescription(description : string) : void
    // semester methods
    initialiseSemesters( year : number | AcademicYearConfig) : void                         // initialise semesters based on number of years, or till specific AY
    hasSemester(acadYear : AcademicYearConfig, semester : SemesterConfig) : boolean         // check if specific semester already included in schedule
    addSemester(acadYear : AcademicYearConfig, semester : SemesterConfig) : boolean         // add a new semester into schedule
    removeSemester(acadYear : AcademicYearConfig, semester : SemesterConfig) : boolean      // remove a specific semester from schedule
    // module methods
    hasModule(moduleCode : string) : boolean                                                                        // check module already taken in schedule
    addModule(moduleCode : string, year : number | AcademicYearConfig, semester : SemesterConfig) : boolean         // add module to a specific semester
    removeModule(moduleCode : string, year : number | AcademicYearConfig, semester : SemesterConfig) : boolean      // remove module from a specific semester
    // intermediate methods
    defineMatriculationYear(acadYear : AcademicYearConfig) : void                           // define matriculation year
    convertYear(year : number | AcademicYearConfig) : AcademicYearConfig | number           // convert between academic years and numeric years (eg. Year 1/2/3/4)
    flatten() : string[]                                                                    // extract all module codes taken within schedule 
}

export { ScheduleInterface }