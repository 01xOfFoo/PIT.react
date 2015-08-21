var src = './app';
var dest = './build';

module.exports = {

  browserSync: {
    server: {
          baseDir: dest
        }
  },

  browserify: {
    entries: src + '/js/index.js',
    dest: dest + '/js',
    outputName: 'app.js',
    proxy: "localhost:3000"
  },

  styles: {
    src: [src + '/styles/**/*.css', src + '/styles/*.*.css'],
    dest: dest + '/styles/'
  },

  markup: {
    src: src,
    dest: dest
  },

  scripts: {
    src: [src + '/js/*.js', '!' + src + '/app.js'],
    dest: dest + '/js',
  },

  clean: {
    src: src,
    dest: dest
  }
};
