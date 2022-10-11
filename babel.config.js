module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
        '@babel/preset-react'
    ],
    plugins: [],
    moduleNameMapper: {
        "\\.(jpg | jpeg | png | svg | otf)$": "<rootDir>./mocks/fileMock.js",
        "\\.(css|scss)$": "<rootDir>./mocks/fileMock.js"
    }
}