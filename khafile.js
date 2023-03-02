let project = new Project('New Project');

project.addLibrary('haxeui-core');
project.addLibrary('haxeui-kha');

project.addAssets('Assets/**');
project.addShaders('Shaders/**');
project.addSources('Sources');
resolve(project);
