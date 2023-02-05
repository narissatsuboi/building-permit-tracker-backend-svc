module.exports = {
    preset: "@shelf/jest-mongodb", 
    displayName: {
        name: "tracki",
        color: "inverse"
    },
    verbose: true, 
    collectCoverage: true,  // change to false if too slow
    rootDir: "../__tests__",
    coverageDirectory: "../__coverage__",
    moduleDirectories: ['node_modules', 'middleware'],
    clearMocks: true
}