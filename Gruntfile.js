module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['bower_components/jquery-overlaps/jquery.overlaps.js', 'src/**/*.js'],
				dest: 'dist/jquery.inline-footnotes.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> v<%= pkg.version %> (also contains jquery-overlaps v 1.2.3) |	<%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				src: 'dist/jquery.inline-footnotes.js',
				dest: 'dist/jquery.inline-footnotes.min.js'
	 		}
		},
		cssmin: {
			dist: {
				src: 'stylesheets/jquery.inline-footnotes.css',
				dest: 'dist/jquery.inline-footnotes.min.css'
			}
		},
		clean: {
			js: ["dist/*.js", "!dist/*.min.js"]
		},
		/*
		 * Usage (https://github.com/vojtajina/grunt-bump):
		 *
 		 * grunt bump:[major|minor|patch]
		 *
		 * grunt bump-only:[major|minor|patch]
		 * grunt commit
		 * 
		 */
		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				commitFiles: ['package.json', 'bower.json'],
				 pushTo: 'origin'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'clean']);

};