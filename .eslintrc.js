module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": false,
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "@angular-eslint/eslint-plugin",
        "@typescript-eslint",
        "simple-import-sort",
        "unused-imports"
    ],
    "ignorePatterns": ["projects/demo/src/app/grpc/*.ts"],
    "rules": {
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/component-selector": [
            "error",
            {
                "type": "element",
                "prefix": [
                    "tv",
                ],
                "style": "kebab-case"
            }
        ],
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/directive-selector": [
            "error",
            {
                "type": "attribute",
                "prefix": [
                    "app",
                    "zdemo",
                    "zen",
                ],
                "style": "camelCase"
            }
        ],
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "no-public"
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "ObjectExpression": "first",
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": {
                    "memberTypes": [
                        "public-static-field",
                        "protected-static-field",
                        "private-static-field",
                        "public-instance-field",
                        "protected-instance-field",
                        "private-instance-field",
                        "public-instance-get",
                        "protected-instance-get",
                        "private-instance-get",
                        "public-constructor",
                        "public-static-method",
                        "protected-static-method",
                        "private-static-method",
                        "public-instance-method",
                        "protected-instance-method",
                        "private-instance-method"
                    ]
                }
            }
        ],
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                "ignoreParameters": true
            }
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true },
        ],
        "constructor-super": "error",
        "curly": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "import/no-deprecated": "warn",
        "import/order": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": [
            "error",
            {
                "code": 200
            }
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "log",
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-restricted-imports": [
            "error",
            "rxjs/Rx"
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "unused-imports/no-unused-imports-ts": "error",
        "unused-imports/no-unused-vars-ts": [
            "error",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
        ],
        "object-shorthand": "error",
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "radix": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "sort-imports": "off",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "use-isnan": "error",
    }
};
