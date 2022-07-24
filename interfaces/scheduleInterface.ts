/*
 *
 *
 *
 */

import { Semester } from "../classes/semester"
import { AcademicYearConfig } from "../config/config"

interface ScheduleInterface {
    meta : {
        name : string,
        acadYear ?: AcademicYearConfig,
        description ?: string,
    },
    semesters : Semester[]
}

export {
    ScheduleInterface
}