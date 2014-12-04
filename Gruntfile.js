module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['bower_components/jquery-overlaps/jquery.overlaps.js', 'javascripts/**/*.js'],
				dest: 'dist/jquery.inline-footnotes.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> v<%= pkg.version %> (also contains jquery-overlaps v 1.2.3) |  <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				src: 'dist/jquery.inline-footnotes.js',
				dest: 'dist/jquery.inline-footnotes.min.js'
	 		}
		},
		clean: {
			js: ["dist/*.js", "!dist/*.min.js"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['concat', 'uglify', 'clean']);

};