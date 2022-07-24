import { AcademicYearConfig, SemesterConfig } from "../config/config";

interface SemesterInterface {
    name : string,                      // user-defined name of semester
    acadYear : AcademicYearConfig,      // academic year of given semester
    semester : SemesterConfig,          // semester index (ie. 'SEM 1', 'ST 1')
    description : string,               // user-defined additional description
    modules : string[]                  // list of all module codes taken in the semester

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
    hasModule(moduleCode : string) : boolean            // check if a module is taken in current semester
    addModule(moduleCode : string) : boolean            // add new module to current semester
    removeModule(moduleCode : string) : boolean         // remove existing module from current semester
    isEmpty() : boolean                                 // check no modules taken in current semester
    getAllModules() : string[]                          // get entire list of modules taken in current semester

}

export { SemesterInterface }