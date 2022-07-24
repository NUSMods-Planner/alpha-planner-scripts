import { AcademicYearConfig, SemesterConfig } from "../config/config";

interface SemesterInterface {
    name : string,
    acadYear : AcademicYearConfig,
    semester : SemesterConfig,
    description : string,
    modules : string[] // Module class

    // getter-setter
    getName() : string
    setName(name : string) : void
    getAcadYear() : AcademicYearConfig
    setAcadYear(acadYear : AcademicYearConfig) : void
    getSemester() : SemesterConfig
    setSemester(semester : SemesterConfig) : void
    getDescription() : string
    setDescription(description : string) : void
    // module interface methods
    hasModule(moduleCode : string) : boolean
    addModule(moduleCode : string) : boolean
    removeModule(moduleCode : string) : boolean
    isEmpty() : boolean
    getAllModules() : string[]

}

export { SemesterInterface }