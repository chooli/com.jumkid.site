function config (name) {
    return require('./'+name+'.js');
}

module.exports = function (grunt) {
    //configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: config('concat-build'),
        jshint: config('jshint-build'),
        emberTemplates: config('template-build'),
        cssmin: config('cssmin-build')
    });

    //load
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //tasks
    grunt.registerTask('default', ['concat', 'jshint', 'emberTemplates', 'cssmin']);

};