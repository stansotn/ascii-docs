// Eslint configuration.
//
// Stanislav Sotnikov (ssotnikov@ccny.cuny.edu)

const tsExtends = [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
];

const tsRules = {
    curly: ["error", "multi-line"],
    quotes: [
        "error",
        "double",
        { allowTemplateLiterals: true, avoidEscape: true },
    ],
    "max-len": ["error", { code: 80 }],
    indent: ["error", 4, { SwitchCase: 1 }],
    "no-var": "error",
    "tsdoc/syntax": "warn",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
};

const vueRules = {
    "vue/html-indent": [
        "error",
        4,
        {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        },
    ],
};

const vueExtends = [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
];

module.exports = {
    root: true,
    ignorePatterns: ["ascii-docs-ui/dist", ".eslintrc.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        extraFileExtensions: [".vue"],
    },
    plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
    overrides: [
        {
            files: ["ascii-docs-ui/**/*.ts"],
            parser: "@typescript-eslint/parser",
            extends: ["eslint:recommended", ...tsExtends],
            rules: tsRules,
            parserOptions: {
                tsconfigRootDir: "ascii-docs-ui",
                project: ["tsconfig.app.json", "tsconfig.node.json"],
            },
        },
        {
            files: ["ascii-docs-ui/**/*.vue"],
            parser: "vue-eslint-parser",
            extends: ["eslint:recommended", ...vueExtends, ...tsExtends],
            rules: { ...vueRules, ...tsRules },
            parserOptions: {
                parser: "@typescript-eslint/parser",
                tsconfigRootDir: "ascii-docs-ui",
                project: ["tsconfig.app.json"],
            },
        },
        {
            files: ["cloud-functions/**/*.ts"],
            extends: ["eslint:recommended", ...tsExtends],
            rules: tsRules,
            parserOptions: {
                tsconfigRootDir: "cloud-functions",
                project: ["tsconfig.json"],
            },
        },
    ],
};
