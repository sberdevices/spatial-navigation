import pkg from './package.json';

export default {
    input: './src/spatnav/spatnav.js',
    plugins: [],
    output: [
        {
            format: 'cjs',
            file: pkg.main,
        },
        {
            format: 'es',
            file: pkg.module,
        },
    ],
};
