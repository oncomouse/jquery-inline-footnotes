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
				banner: '/*! \n * <%= pkg.name %> v<%= pkg.version %>\n *  \n * Copyright 2015 Andrew Pilsch <apilsch@tamu.edu> (http://andrew.pilsch.com)\n * \n *   (also contains jquery-overlaps v 1.2.3, Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net))\n * \n * Built On: <%= grunt.template.today("dd-mm-yyyy") %>\n *\n */\n',
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
		usebanner: {
			taskName: {
				options: {
					position: 'top',
					banner: '/*! \n * <%= pkg.name %> v<%= pkg.version %>\n *  \n * Copyright 2015 Andrew Pilsch <apilsch@tamu.edu> (http://andrew.pilsch.com)\n * \n * Built On: <%= grunt.template.today("dd-mm-yyyy") %>\n *\n */',
					linebreak: true,
					replace: /\/\*\![\s\S]*\*\//m
				},
				files: {
					src: ['src/**/*.js']
				}
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
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
		},
		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: ['js']
			},
			css: {
				files: ['stylesheets/**/*.scss'],
				tasks: ['css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask('css', ['compass', 'cssmin']);
	grunt.registerTask('js', ['usebanner', 'concat', 'uglify', 'clean']);
	//grunt.registerTask('watch', ['watch:css', 'watch:js']);
	grunt.registerTask('default', ['js', 'css']);

};