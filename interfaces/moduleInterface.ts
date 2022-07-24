/*
 *
 *
 *
 */

import { SemesterConfig } from "../config/config";

interface ModuleInterface {
    code : string,
    credits : number,
    semesterOffered ?: SemesterConfig,
    preclusions ?: string[],
    prerequisites ?: string[],
    corequisites ?: string[]
}

export {ModuleInterface}