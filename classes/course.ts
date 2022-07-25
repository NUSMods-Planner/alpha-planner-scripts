/*
 *
 *
 *
 */

import { AcademicYearConfig, FacultyConfig } from "../config/config";
import { CourseInterface, CourseEdgeInterface, CourseNodeInterface, CourseEdgeType } from "../interfaces/courseInterface";

class CourseNode implements CourseNodeInterface {
    module: string;
    criteria : Object[]

    constructor(module : string, criteria ?: []) {
        this.module = module
        if (criteria===undefined) {
            this.criteria = []
        } else {
            this.criteria = criteria
        }
    }

    getModule(): string {
        return this.module
    }

    setModule(module : string) : void {
        this.module = module
    }

    getCriteria(): Object[] {
        return this.criteria
    }

    setCriteria(criteria: []): void {
        this.criteria = criteria
    }

    pushCriteria(criteria: Object): void {
        this.criteria.push(criteria)
    }
}

class CourseEdge implements CourseEdgeInterface {
    type : CourseEdgeType
    requirements : (CourseNode | CourseEdge)[]
    criteria : Object[]
    title : string

    constructor(type : CourseEdgeType, requirements : (CourseNode | CourseEdge)[] = [], criteria : Object[] = [], title : string = '') {
        this.type = type
        this.requirements = requirements
        this.criteria = criteria
        this.title = title
    }

    getType() : CourseEdgeType {
        return this.type
    }

    setType(type : CourseEdgeType) : void {
        this.type = type
    }

    getRequirements() : (CourseNode | CourseEdge)[] {
        return this.requirements
    }

    setRequirements(requirements : (CourseNode | CourseEdge)[]) : void {
        this.requirements = requirements
    }

    pushRequirement(requirement : (CourseNode | CourseEdge)) : void {
        this.requirements.push(requirement)
    }

    getCriteria() : Object[] {
        return this.criteria
    }

    setCriteria(criteria : Object[]) : void {
        this.criteria = criteria
    }

    pushCriteria(criteria : Object) : void {
        this.criteria.push(criteria)
    }

    getTitle() : string {
        return this.title
    }

    setTitle(title : string) : void {
        this.title = title
    }
}

class Course implements CourseInterface {
    name : string;                                  // name of course
    acadYear : AcademicYearConfig;                  // academic year of course
    description : string;                           // additional description of course
    faculty : FacultyConfig;                        // faculty which the course is offered bby
    department : string;                            // department within faculty that is offering the course
    requirements : (CourseNode | CourseEdge)[]      // list of nodes defining requirements tree


    constructor(name : string, acadYear : AcademicYearConfig, faculty : FacultyConfig, department : string = '', description : string = '') {
        this.name = name
        this.acadYear = acadYear
        this.description = description
        this.faculty = faculty
        this.department = department
        this.requirements = []
    }

    // getter-setter methods
    getName() : string {
        return this.name
    }

    setName(name : string) : void {
        this.name = name
    }

    getAcadYear() : AcademicYearConfig {
        return this.acadYear
    }

    setAcadYear(acadYear : AcademicYearConfig) : void {
        this.acadYear = acadYear
    }

    getDescription() : string {
        return this.description
    }

    setDescription(description : string) : void {
        this.description = description
    }

    getFaculty() : FacultyConfig {
        return this.faculty
    }

    setFaculty(faculty : FacultyConfig) : void {
        this.faculty = faculty
    }

    getDepartment() : string {
        return this.department
    }

    setDepartment(department : string) : void {
        this.department = department
    }

    initialise(requirements: Object): void {
        requirements = {}
        return
    }

    verify(modules: string[]): Object {
        modules = []
        return {}
    }
}

export {
    CourseNode,
    CourseEdge,
    Course
}