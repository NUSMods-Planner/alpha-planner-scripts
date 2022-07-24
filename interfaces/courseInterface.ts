/*
 *
 *
 *
 */

import { AcademicYearConfig, FacultyConfig } from "../config/config";

interface CourseInterface {
    meta : {
        name : string,                          // name of course
        acadYear : AcademicYearConfig,          // academic year of course
        description ?: string,                  // additional description of course
        faculty : FacultyConfig,                // faculty which the course is offered bby
        department : string,                    // department within faculty that is offering the course
    },
    requirements : (Node | Edge)[]                     // list of nodes defining requirements tree

    // getter-setter methods
    getName() : string
    setName(name : string) : void
    getAcadYear() : AcademicYearConfig
    setAcadYear(acadYear : AcademicYearConfig) : void
    getDescription() : string
    setDescription(description : string) : void
    getFaculty() : FacultyConfig
    setFaculty(faculty : FacultyConfig) : void
    getDepartment() : string
    setDepartment(department : string) : void
    // intermediate methods
    initialise() : void         // initialise course tree
    verify() : Object           // traverse course tree to verify requirements completed
}

// Requirement Nodes

interface Node {
    module : string
    criteria ?: []
}

const enum EdgeType {
    'AND',
    'OR',
    'SECTION'
}
interface Edge { 
    type : EdgeType
    requirements : (Node | Edge)[]
    criteria ?: []
    title ?: string
}

export { 
    CourseInterface,
    Node,
    EdgeType,
    Edge
}