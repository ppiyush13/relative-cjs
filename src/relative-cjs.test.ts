import relativeCjs from './relative-cjs';

describe('testing module', () => {
    it.each([
        ['./app', './app', './.'],
        ['./a', './b', '../b'],
        ['c:/windows/nodejs/path', 'd:/windows/nodejs/path', './d:/windows/nodejs/path'],
        ['a/1', 'b/1', '../../b/1'],
        ['a', 'b', '../b'],
        ['a/b/c', 'a/b/c/d/e/f', './d/e/f'],
        ['a/b', 'a', '..'],
        ['a/b/../c', 'a/c', './.'],
        ['a/b/././././d', 'a/b/d/e/f/', './e/f'],
        ['./a/index.js', 'a', './.'],
        ['a/a.b.c/', 'a', '..'],
        ['a/b', 'a', '..'],
        ['a/b/', 'a', '..'],
        ['a/b/', 'a/', '..'],
        ['a/b', 'a/', '..'],
        ['./a/b.test/', 'a/c', '../c'],
        ['./a/b.test', 'a/c', './c'],
    ])(' "%s"  "%s" --> "%s"', (a, b, expected) => {
        expect(relativeCjs(a, b)).toEqual(expected);
    });
});
