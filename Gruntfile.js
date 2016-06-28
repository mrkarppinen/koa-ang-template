
var path = require('path');

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
        tasks: ['webpack','uglify', 'sass'],
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


  webpack: {
    someName: {
    	entry: "./src/js/main.js",
    	output: {
    		path: "public/js/",
    		filename: "scripts.min.js"
    	},
      module: {
        loaders: [{
            test: path.join(__dirname, 'src/js'),
            exclude: /node_modules/,
            loader: 'babel-loader?cacheDirectory'
        }]
  	   }
    }
  }



});

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['webpack','uglify', 'sass']);

};
