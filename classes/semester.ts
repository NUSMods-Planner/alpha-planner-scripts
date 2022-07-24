import { AcademicYearConfig, SemesterConfig } from "../config/config";
import { SemesterInterface } from "../interfaces/semesterInterface";

class Semester implements SemesterInterface {
    name;
    acadYear;
    semester;
    description : string;
    modules : string[];

    constructor(name : string, acadYear : AcademicYearConfig, semester : SemesterConfig, description ?: string) {
        this.name = name
        this.acadYear = acadYear
        this.semester = semester
        this.modules = []
        if (description!==undefined) {this.description = description} else {this.description=''}
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

    getDescription(): string {
        return this.description
    }

    setDescription(description: string): void {
        this.description = description
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

export { Semester }