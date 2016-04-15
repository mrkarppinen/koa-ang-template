module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
      options: {
          sourceMap: true,
          sourceMapName: 'public/js/main.map'
        },
        files: {
          'public/js/scripts.min.js': ['public/js/scripts.js'],
        }
      }
    },
    sass: {
      build: {
        files: [{
        expand: true,
        cwd: 'src/scss/',
        src: ['*.scss'],
        dest: 'public/css',
        ext: '.css'
      }]
      }
    },
    watch: {
      testapp: {
        files: ['src/**/*', 'public/**/*.html'],
        tasks: ['browserify','uglify', 'sass'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          timeout:15000
        },
        src: ['test/**/*.js']
      }
    },
    browserify: {
    dist: {
      files: {
        'public/js/scripts.min.js': ['src/**/*.js']
      }
    }
  }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');


  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['browserify','uglify', 'sass']);

};
