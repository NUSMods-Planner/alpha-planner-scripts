import { AcademicYearConfig, SemesterConfig } from "../config/config";

interface SemesterInterface {
    name : string,
    acadYear : AcademicYearConfig,
    semester : SemesterConfig,
    description ?: string,
    modules : string[] // Module class
}

export {SemesterInterface}