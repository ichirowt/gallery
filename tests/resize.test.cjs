const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

test('resize preserves its input and produces both derivative sizes', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'gallery-resize-'));
    try {
        fs.mkdirSync(path.join(root, 'images'));
        const source = path.join(root, 'images', 'sample.jpg');
        execFileSync('convert', ['-size', '1200x800', 'xc:navy', source]);
        const original = fs.readFileSync(source);
        execFileSync(process.execPath, [
            require.resolve('gulp/bin/gulp.js'),
            '--gulpfile', path.resolve(__dirname, '../gulpfile.mjs'),
            '--cwd', root, 'resize',
        ], { stdio: 'pipe' });
        assert.deepEqual(fs.readFileSync(source), original);
        for (const [folder, width] of [['fulls', 1024], ['thumbs', 512]]) {
            const target = path.join(root, 'images', folder, 'sample.jpg');
            assert.equal(Number(execFileSync('identify', ['-format', '%w', target])), width);
        }
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
});
