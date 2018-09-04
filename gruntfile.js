module.exports = function(grunt) {

    // grunt config options
    // add --env=dev in grunt command to output non-minified css/js paths in processhtml
    grunt.config('env', grunt.option('env') || 'prod');

    // Project configuration. Desktop base would be JS for header and footer
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        files: {
            src: {
                js: ['<%= pkg.js_src_path %>**/*.js'],
                json: ['<%= pkg.json_src_path %>**/*.json'],
                css: '<%=pkg.css_src_path%>**/*.css',
                sass:'<%=pkg.sass_src_path%>main.scss',
                html:'<%= pkg.js_src_path%>**/*.html',
                node_modules: '<%= pkg.node_modules%>',
                images: '<%= pkg.image_path%>**/*.*',
                fonts: '<%= pkg.fonts_src_path%>**/*.*',
            },
            dest: {
                jsconcat: '<%= pkg.js_bundle_path %>highmark-desktop-base.js',
                jsmin: '<%= pkg.js_bundle_path %>highmark-base.min.js',
                cssmin:'<%= pkg.js_bundle_path %>highmark-css.min.css'
            }
        },
        jasmine: {
            pivotal: {
                src: '<%= pkg.js_src_path %>**/*.js',
                options: {
                    specs: '<%= pkg.js_src_path %>**/*Spec.js'
                }
           }
        },
        html_imports: {
            all: {
                expand: true,
                src: ['<%= pkg.js_src_path%>**/*.html'],
                dest: '<%= pkg.js_bundle_path %>'
            }
        },

        jshint: {
            files: ['<%=files.src.js%>'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        watch: {
            configFiles: {
                files: [ 'gruntfile.js'],
                options: {
                    reload: true
                }
            },
            livereload:{
                files: ['temp/app/**/*js','temp/content/**/*.css', 'temp/scss/**/*.scss', 'temp/app/**/*.html' ,'index.html','temp/content/images/**'],
                options:{
                   livereload:true
                }
                
            },
            js: {
                files: ['<%=files.src.js%>*.js'],
                tasks: ['jshint', 'copy']
            },
            sass: {
                files: ['<%=files.src.sass%>'],
                tasks: ['sass','cssmin']
            },
            css:{
                files: ['<%=files.src.css%>'],
                tasks: ['cssmin']
            },
            html: {
                files: ['<%= pkg.js_src_path%>**/*.html'],
                tasks: ['clean_html', 'html_imports']
            },
        },

        // concat: {
        //     options: {
        //         stripBanners: true,
        //         banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //     },
        //     dist: {
        //         src: ['<%=files.src.js%>'],
        //         dest: '<%=files.dest.jsconcat%>'
        //     }
            // lib: {
            //     src: ['<%= pkg.node_modules%>'
            //     ],
            //     dest: '<%= pkg.js_bundle_path %>lib.js'
            // }

        copy: {
            main: {
                files: [
                    {expand: true, src: ['<%=files.src.js%>'], dest: 'temp/'},
                    {expand: true, src: ['<%=files.src.images%>'], dest: 'temp/'},
                    {expand: true, src: ['<%=files.src.json%>'], dest: 'temp/'},
                    {expand: true, src: ['<%=files.src.fonts%>'], dest: 'temp/'},
 
                ],
            },
        },

        // uglify: {
        //     options: {
        //         // report: 'min',
        //         // mangle: false,
        //         // compress: {},
        //         banner: '/* minified JS file */'
        //     },
        //     js: {
        //         files: [{
        //             expand:true,
        //             src:'<%=files.src.js%>',
        //             dest:'<%= pkg.js_bundle_path%>'
        //         }]
        //     }
        // },

        sass: {
            options: (function() {
                if (grunt.config('env') != 'dev') {
                    return {
                        sourcemap: 'none'
                    };
                }
            }()),
            dist: {
                files: {
                    'temp/highmark-scss.css':'scss/main.scss'
                },
            },
        },

        cssmin: {
            target: {
                files: {

                    ['<%= files.dest.cssmin%>']:['<%= files.src.css%>','<%=pkg.js_bundle_path%>highmark-scss.css']


                },
            },
        },

        sasslint: {
            /* options: {
                configFile: 'config/.sass-lint.yml',
            },*/
            target: ['<%=files.src.sass%>']
        },

        // connect: {
        //     server: {
        //         options: {
        //             port: 3000,
        //             hostname: 'localhost',
        //             livereload: true
        //         }
        //     }
        // },
        browserSync: {
           // dev: {
                bsFiles: {
                    src : [
                        'app/**/*.js', 'app/**/*.html', 'content/**/*.css', 'scss/**/*.scss', 'index.html','content/images/**'
                    ]
                },
                options: {
                    watch: true,
                    server: './',
                    port:3000
                }
            //}
        },

        processhtml: (function() {
            if (grunt.config('env') === 'dev') {
                return {
                    dev: {
                        files: {
                            

                        }
                    }
                };
            } else {
                return {
                    prod: {
                        files: {
                           

                        }
                    }
                };
            }
        }()),

        strip_code: {
            options: {
                blocks: [{
                    start_block: "/* start-developmentonly-block */",
                    end_block: "/* end-developmentonly-block */"
                }]
            },
            your_target: {
                src: '<%= pkg.js_bundle_path %>/*.js'
            }
        },

        clean: ['<%= pkg.js_bundle_path %>'],
        clean_html: ['<%= pkg.js_bundle_path %>**/*.html']


    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html-imports');
    grunt.loadNpmTasks('grunt-strip-code');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-browser-sync');


    // run tests
    // grunt.registerTask('jasmine', ['jasmine:pivotal']);
    grunt.registerTask('clean_html', ['clean_html']);
    grunt.registerTask('jshint', ['jshint']);


    // Build solution
    grunt.registerTask('build', [ 'clean', 'sass', 'cssmin','copy', 'html_imports']);

    // Run server and watch for changes
    grunt.registerTask('default', ['build']);
    grunt.registerTask('run', ['build', 'browserSync', 'watch']);

};