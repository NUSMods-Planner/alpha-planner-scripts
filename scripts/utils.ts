/*
 *
 *
 *
 */

import { AcademicYearConfig } from "../config/config";

const addAcademicYears = (acadYear : AcademicYearConfig, years : number) : AcademicYearConfig => {
    years = years+1
    return acadYear
}

const nextAcademicYear = (acadYear : AcademicYearConfig) => {
    return addAcademicYears(acadYear, 1)
}

export {
    addAcademicYears,
    nextAcademicYear
}