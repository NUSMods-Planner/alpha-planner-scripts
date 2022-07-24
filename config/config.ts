const enum AcademicYearConfig {
    'AY2021-2022'='AY21-22',
    'AY2022-2023'='AY22-23',
    'AY2023-2024'='AY23-24',
    'AY2024-2025'='AY24-25',
    'AY2025-2026'='AY25-26',
    'AY2026-2027'='AY26-27',
    'AY2027-2028'='AY27-28',
}

const enum SemesterConfig {
    'Semester 1' = 1,
    'Semester 2',
    'Special Term I',
    'Special Term II'
}

const enum FacultyConfig {
    'College of Humanities & Science (Faculty of Science)'='CHS (FoS)',
    'College of Humanities & Science (Faculty of Arts & Social Sciences)'='CHS (FASS)s',
    'College of Design & Engineering'='CDE',
    'School of Computing'='SoC',
    'NUS Business School'='BIZ',
}

export {
    AcademicYearConfig,
    SemesterConfig,
    FacultyConfig
}