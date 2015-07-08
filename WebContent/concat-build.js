module.exports = {
		
		option: {
			separator: '\n'
		},
		
		basic_and_extras: {
	      files: {
			  'scripts/admin/core.js': ['scripts/admin/core/**/*.js'],
	    	  'scripts/admin/components.js': ['scripts/admin/components/**/*.js', 'scripts/admin/views/**/*.js'],
	          'scripts/admin/controllers.js': ['scripts/admin/controllers/**/*.js'],
	          'scripts/admin/app.js': ['scripts/admin/routes/**/*.js']
	      }
		}
		
}