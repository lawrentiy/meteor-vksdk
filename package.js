Package.describe({
    summary: "Meteor wrapper for node vksdk",
    git: "https://github.com/lawrentiy/meteor-vksdk"
});
Npm.depends({vksdk: "4.6.0"});
Package.on_use(function(api){
    api.add_files('vksdk.js', 'server');
    if(api.export)
        api.export('VK');
});
