module.exports = {
		
		files: ['Gruntfile.js',
				'scripts/admin/components/*.js',
				'scripts/admin/controllers/*.js',
			    'scripts/admin/core/*.js',
			    'scripts/admin/helpers/*.js',
				'scripts/admin/locale/*.js',
				'scripts/admin/models/*.js',
				'scripts/admin/routes/*.js',
				'scripts/admin/templates/**/*.js'
		],
		
		options: {
			globals: {
				jQuery: true,
				console: true,
				modules: true
			}
			
		}

}