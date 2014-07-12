module.exports = function(grunt) {
        grunt.initConfig({
                nodewebkit: {
                        src: "./**/*",
                        options: {
                                build_dir: "./build",
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
                function() {
                        require("child_process").exec("rm -rf ./build");
                        grunt.task.run("nodewebkit");
                }
        );
        grunt.registerTask(
                "default",
                ""
        );
};
