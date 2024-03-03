import terser from '@rollup/plugin-terser';
import getBabelOutputPlugin from '@rollup/plugin-babel';

export default {
    input: 'better-xcloud.user.js',
    output: { file: '../dist/better-xcloud.user.js', format: 'iife' },
    plugins: [
        terser({
            ecma: '5',
            mangle: true,
        }),
        getBabelOutputPlugin({
            babelHelpers: 'bundled',
            presets: [
                ['@babel/preset-env', {
                    targets: 'Chrome 47',
                }],
            ],
        }),
    ]
};
