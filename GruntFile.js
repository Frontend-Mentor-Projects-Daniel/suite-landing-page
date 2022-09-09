module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      css: {
        options: {
          sourceMap: true,
        },
        src: [
          'develop/css/styles.css',
          'develop/css/header.css',
          'develop/css/hero.css',
        ],
        dest: 'develop/build/styles.css',
      },
    },
    cssmin: {
      target: {
        files: {
          'develop/build/styles.css': ['develop/build/styles.css'],
        },
      },
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: 'develop/assets/images/',
            src: ['*.{png,jpg,gif,svg,webp}'],
            dest: 'develop/build/assets/images',
          },
        ],
      },
    },
    watch: {
      css: {
        files: ['index.html', 'develop/css/*', 'package.json'],
        tasks: ['concat', 'cssmin'],
        options: {
          spawn: false,
        },
      },
    },
  });

  //  load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //  register tasks
  grunt.registerTask('all', ['concat', 'cssmin', 'imagemin', 'watch']);
};
