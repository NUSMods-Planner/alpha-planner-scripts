/*
 *
 *
 *
 */

import { CourseEdge, CourseNode } from "../classes/course";
import { AcademicYearConfig, FacultyConfig } from "../config/config";

interface CourseInterface {
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
    initialise(requirements : Object) : void         // initialise course tree
    verify(modules : string[]) : Object           // traverse course tree to verify requirements completed
}

// Requirement Nodes

interface CourseNodeInterface {
    module : string
    criteria ?: Object[]

    getModule() : string
    setModule(module : string) : void
    getCriteria() : Object[]
    setCriteria(criteria : Object[]) : void
    pushCriteria(criteria : Object) : void
}

const enum CourseEdgeType {
    'AND',
    'OR',
    'SECTION'
}
interface CourseEdgeInterface { 
    type : CourseEdgeType
    requirements : (CourseNode | CourseEdge)[]
    criteria : Object[]
    title ?: string

    getType() : CourseEdgeType
    setType(type : CourseEdgeType) : void
    getRequirements() : (CourseNode | CourseEdge)[]
    setRequirements(requirements : (CourseNode | CourseEdge)[]) : void
    pushRequirement(requirement : (CourseNode | CourseEdge)) : void
    getCriteria() : Object[]
    setCriteria(criteria : Object[]) : void
    pushCriteria(criteria : Object) : void
    getTitle() : string
    setTitle(title : string) : void
}

export { 
    CourseInterface,
    CourseNodeInterface,
    CourseEdgeType,
    CourseEdgeInterface
}