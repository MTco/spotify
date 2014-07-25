module.exports = function(grunt) {
	grunt.initConfig({
		nodewebkit: {
			src: "./*.*",
			options: {
				build_dir: "./build",
				win: true,
				mac: true,
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
