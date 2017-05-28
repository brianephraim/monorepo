module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                './public/css/sass-generated.css': './sass/app.scss'
            }
        }
    },
    libsass: {
        myTarget:{
            src: './app/sass/app.scss',
            dest: './app/css/sass-generated.css',
        }
    },
    watch: {
      css: {
        files: './sass/*',
        tasks: ['sass'],
        // options: {
        //   livereload: true,
        // },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['jshint']);

};