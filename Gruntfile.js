module.exports = function(grunt) {
        grunt.initConfig({
                nodewebkit: {
												src: "./package.json",
                        options: {
                                build_dir: "./build",
																keep_nw: true,
                                win: false,
                                mac: false,
                                linux32: true,
                                linux64: true
                        }
                }
        });
        grunt.loadNpmTasks("grunt-node-webkit-builder");
        grunt.registerTask(
                "build",
								"nodewebkit"
        );
        grunt.registerTask(
                "default",
                ""
        );
};
