/*
 *
 *
 *
 */

let semester = require('../dist/classes/semester')

describe("TESTING SEMESTER CLASS", () => {
    let sem;
    sem = new semester.Semester("Test Semester")

    describe("Initialising SEMESTER", ()=> {})

    describe("Getter/Setter methods", () => {})
    
    describe("Adding modules to SEMESTER", (() => {
        test("add new unique module", () => {
            expect(sem.addModule('PC2130')).toBe(true)
        })
        
        test("unique module added", () => {
            expect(sem.modules.indexOf('PC2130')).not.toBe(-1)
        })
        
        test("reject adding duplicate module", () => {
            expect(sem.addModule('PC2130')).toBe(false)
        })
        
        test("duplicate module not added", () => {
            expect(sem.modules.length).toBe(1)
        })

        test("add another unique module", () => {
            expect(sem.addModule('ESP2111')).toBe(true)
        })
        
        test("unique module added", () => {
            expect(sem.modules.indexOf('ESP2111')).not.toBe(-1)
        })
    }))

    describe("Removing modules from SEMESTER", () => {
        test("reject removal of non-existing module", () => {
            expect(sem.removeModule("MA1511")).toBe(false)
        })

        test("non-exisitng modules not removed", () => {
            expect(sem.modules.length).toBe(2)
        })
    
        test("remove existing module", () => {
            expect(sem.removeModule("PC2130")).toBe(true)
        })

        test("existing module removed", () => {
            expect(sem.modules.indexOf("PC2130")).toBe(-1)
        })
    })

})