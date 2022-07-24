/*
 *
 *
 *
 */

import { AcademicYearConfig, FacultyConfig } from "../config/config";

interface CourseInterface {
    meta : {
        name : string,
        acadYear : AcademicYearConfig,
        description ?: string,
        faculty : FacultyConfig,
        department : string,
    },
    requirements : Object[]
}

export {CourseInterface}