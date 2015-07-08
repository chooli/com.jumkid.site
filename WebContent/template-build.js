module.exports = {

    compile: {
        options: {
        	templateCompilerPath: 'scripts/3pty-libs/emberjs/ember-template-compiler.js',
        	handlebarsPath: 'scripts/3pty-libs/emberjs/handlebars-v2.0.0.js',
        	templateNamespace: 'HTMLBars',
            templateName: function(sourceFile){
                return sourceFile.replace(/scripts\/admin\/templates\//, '');
            }
        },
        files: {
            'scripts/admin/templates.js': ['scripts/admin/templates/**/*.hbs']
        }
    }

}