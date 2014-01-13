module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: {
            build: ['build/'],
            tmp: ['build/css/tmp/']
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/css/tmp/reset.css': 'scss/reset.scss',
                    'build/css/tmp/main.css': 'scss/main.scss',
                    'build/css/tmp/solarized_dark.css': 'scss/solarized_dark.scss'
                },
            },
        },

        imageoptim: {
            main: {
                options: {
                    imageAlpha: true,
                    quitAfter: true
                },
                files: ['build/img']
            },
        },

        watch: {
            jekyll: {
                files: ['**/*', '!build/**/*', '!node_modules/**/*'],
                tasks: ['build']
            },
            livereload: {
                files: ['build/**/*'],
                options: {
                    livereload: true
                },
            },
        },

        cssmin: {
            combine: {
                files: {
                    'build/css/styles.css': ['build/css/tmp/reset.css', 'build/css/tmp/main.css', 'build/css/tmp/solarized_dark.css']
                },
            },
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/js/script.min.js': ['js/custom.js', 'js/highlight.js']
                },
            },
        },

        jekyll: {
            dev: {
                options: {
                    src: '.',
                    dest: 'build'
                },
            },
        },

        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 4000,
                    base: 'build'
                }
            }
        },

        availabletasks: {
            tasks: {
                options: {
                    filter: 'include',
                    tasks: ['build', 'default']
                }
            }
        },

        rsync: {
            dave: {
                options: {
                    src: "build/",
                    dest: "/var/www/webvie.ws/public_html",
                    host: "dave@162.243.10.212",
                    recursive: true
                }
            }
        }

    });

    grunt.registerTask('build', 'Compile a build for production.', ['jekyll:dev', 'sass', 'cssmin', 'clean:tmp', 'uglify']);
    grunt.registerTask('default', 'Compile a build for production and optimise images.', ['build', 'imageoptim']);
    grunt.registerTask('tasks', ['availabletasks'])
};
