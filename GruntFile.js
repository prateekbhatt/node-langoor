module.exports = function(grunt) {

  var path = require('path')
    , SRC_CSS = path.join(__dirname, 'public', 'css')
    ;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          paths: [path.join(SRC_CSS, "less")],
          yuicompress: true
        },
        files: {
          "public/css/bootstrap.css": "public/css/less/bootstrap.less"
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');

};