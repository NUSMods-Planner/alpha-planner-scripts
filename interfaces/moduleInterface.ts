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

    // getter-setter methods
    getCode() : string
    setCode(code : string) : void
    getCredits() : number
    setCredits(credits : number) : void
    
}

export {ModuleInterface}