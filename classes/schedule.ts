/*
 *
 *
 *
 *
 */

import { AcademicYearConfig } from "../config/config";
import { ScheduleInterface } from "../interfaces/scheduleInterface";
import { Semester } from "./semester";

class Schedule implements ScheduleInterface {
    meta: { name: string; acadYear?: AcademicYearConfig | undefined; description?: string | undefined; };
    semesters : Semester[]

    constructor(name : string, acadYear ?: AcademicYearConfig, description ?: string) {
        // load input parameters
        this.meta = {name : name}
        this.semesters = []
        if (acadYear !== undefined) {this.meta.acadYear = acadYear}
        if (description !== undefined) {this.meta.description = description}
    }
}


export {Schedule}