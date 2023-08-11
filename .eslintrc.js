module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        "standard/no-callback-literal": 0,
        "import/export": "warn",
        "prettier/prettier": "error",
        "arrow-parens": ["error", "as-needed"],
        "@typescript-eslint/camelcase": "warn",
        "semi": "error",
        "prefer-destructuring": "error",
        "max-len": [
            "warn",
            {
                "code": 100,
                "ignoreUrls": true,
                "ignorePattern": "import"
            }
        ],
        "no-unused-vars": "warn",
        "operator-linebreak": "warn",

        /**
         * React hooks
         */
        "react-hooks/rules-of-hooks": "error",
        //    "react-hooks/exhaustive-deps": "error",

        /**
         * Sort imports
         */

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",

        "react/jsx-closing-tag-location": "error",
        "react/jsx-closing-bracket-location": [
            "error",
            {
                "nonEmpty": "line-aligned",
                "selfClosing": "line-aligned"
            }
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [".jsx", ".tsx"]
            }
        ],
        "jsx-quotes": ["error", "prefer-double"],
        "comma-dangle": ["error", "only-multiline"],
        "prefer-const": [
            "error",
            {
                "destructuring": "any",
                "ignoreReadBeforeAssign": false
            }
        ],
        "react/prop-types": ["warn"]
    },
};