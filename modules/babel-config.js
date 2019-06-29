function filter(i) {
    return Boolean(i.length);
}

export default function getBabelConfig(options) {
    const _options = options ? options : {};

    const babel = options.babel
        ? options.babel
        : {
            'preset-env': {
                targets: "last 2 version, > 1%, ie 10, not op_mini all"
            },
            'preset-react': {
                development: false,
            },
        };

    return {
        presets: [
            [
                '@babel/preset-env',
                babel['preset-env'],
            ],
            [
                '@babel/preset-react',
                babel['preset-react'],
            ],
        ].concat(_options.presets || []).filter(filter),
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-syntax-import-meta',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-json-strings',
            [
                '@babel/plugin-proposal-decorators',
                {
                    legacy: true,
                },
            ],
            '@babel/plugin-proposal-function-sent',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-numeric-separator',
            '@babel/plugin-proposal-throw-expressions',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-logical-assignment-operators',
            '@babel/plugin-proposal-optional-chaining',
            [
                '@babel/plugin-proposal-pipeline-operator',
                {
                    proposal: 'minimal',
                },
            ],
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-do-expressions',
            '@babel/plugin-proposal-function-bind',
            '@babel/plugin-transform-runtime',
            'babel-plugin-lodash',
            [
                'babel-plugin-styled-components',
                {
                    pure: true,
                    fileName: _options.isDevMode || false,
                    displayName: _options.isDevMode  || false,
                },
            ],
        ].concat(_options.plugins || []).filter(filter),
    };
}
