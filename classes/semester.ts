import { AcademicYearConfig, SemesterConfig } from "../config/config";
import { SemesterInterface } from "../interfaces/semesterInterface";



class Semester implements SemesterInterface {
    name;
    acadYear;
    semester;
    modules : string[];

    constructor(name : string, acadYear : AcademicYearConfig, semester : SemesterConfig) {
        this.name = name
        this.acadYear = acadYear
        this.semester = semester
        this.modules = []
    }

    getName() : string {
        return this.name
    }

    setName(name : string) : void {
        this.name = name
    }

    getAcadYear() : AcademicYearConfig {
        return this.acadYear
    }

    setAcadYear(acadYear : AcademicYearConfig) : void {
        this.acadYear = acadYear
    }

    getSemester() : SemesterConfig {
        return this.semester
    }

    setSemester(semester : SemesterConfig) : void {
        this.semester = semester
    }

    isEmpty() : boolean {
        return this.modules===[]
    }

    hasModule(moduleCode : string) : boolean {
        return (this.modules.indexOf(moduleCode) !== -1)
    }

    getAllModules() : string[] {
        return this.modules
    }

    addModule(moduleCode : string) : boolean {
        if (!this.hasModule(moduleCode)) {
            this.modules.push(moduleCode)
            return true
        } else {
            // module alr included & is duplicate
            return false;
        }
    }

    removeModule(moduleCode : string) : boolean {
        if (this.hasModule(moduleCode)) {
            //remove module
            this.modules.splice(this.modules.indexOf(moduleCode))
            return true
        } else {
            // module not found
            return false
        }
    }
}

export {Semester}