/*
 *
 *
 *
 */

interface ModuleInterface {
    code : string,                              // module code (eg. PC2130)
    credits : number,                           // no. of MCs
    prerequisites ?: string[],                  // optional list of prerequisite modules
    corequisites ?: string[]                    // optional list of corequisite modules
    preclusions ?: string[],                    // optional list of preclusion modules

    // getter-setter methods
    getCode() : string
    setCode(code : string) : void
    getCredits() : number
    setCredits(credits : number) : void
    
}

export {ModuleInterface}