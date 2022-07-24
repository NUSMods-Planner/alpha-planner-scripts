/*
 *
 *
 *
 *
 */

import { ModuleInterface } from "../interfaces/moduleInterface";

class Module implements ModuleInterface {
    code: string;
    credits: number;

    constructor(moduleCode : string, moduleCredits : number) {
        this.code = moduleCode
        this.credits = moduleCredits
    }

    getCode() : string {
        return this.code
    }

    setCode(moduleCode : string) : void {
        this.code = moduleCode
    }

    getCredits() : number {
        return this.credits
    }

    setCredits(moduleCredits : number) : void {
        this.credits = moduleCredits
    }
}

export {Module}