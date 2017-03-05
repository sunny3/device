"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({

    browserSync: {
      server: {
        bsFiles: {
          src: [
            '*.html',
            'css/*.css',
            'js/*.js'
          ]
        },
        options: {
          server: '.',
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    autoprefixer: {
      no_dest: {
          src: "css/style.css"
    }
  },

  uglify: {
    dist: {
      files: {
        'js/script.min.js': ['js/script.js']
      }
    }
  },

  cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/output.css': ['css/normalize.css', 'css/style.css']
    }
  }
},

        imagemin: {
                  dynamic: {
                      files: [{
                          expand: true,
                          cwd: 'img/',
                          src: ['**/*.{png,jpg,gif}'],
                          dest: 'img/'
                      }]
                  }
              },

          copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [
                            'css/output.css',
                            'fonts/*',
                            'js/style.js*',
                            'README.md',
                            'catalog.html',
                            'index.html'
                        ],
                        dest: 'build/'
                    }
                ]
            }
        },

        clean: ['build/css/style.css', 'build/js/script.js'],

    watch: {
      options: {
        livereload: true
      },
      scripts: {
            files: ['js/*.js'],
            tasks: ['uglify'],
            options: {
            spawn: false
            }
        },
        images : {
            files: ['img/**/*.{png,jpg,gif}'],
            tasks: ['imagemin'],
            options : {
            spawn: false
          }
        },
      style: {
          files: ['css/**/*.css'],
          tasks: ['cssmin','autoprefixer'],
          options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('dev', ['browserSync', 'watch', 'autoprefixer', 'uglify', 'cssmin', 'imagemin']);
  grunt.registerTask('build',
  [
    'uglify',
    'cssmin',
    'imagemin',
    'copy',
    'clean'
]);

};
