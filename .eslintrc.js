module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used" }]
    }
};