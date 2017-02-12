stage.on('message:externalData', function(data) {
    if (data.resize) {
        build();
    }
});

function build() {
    var drawer = new Drawer();
    var couple = new Couple();
    var message = new Message();

    drawer.draw(couple);
    drawer.draw(message);

    stage.on('tick', function(e, f) {
        if (f % 40 === 0) {
            var heart = new Heart();
            drawer.draw(heart);
        }
    });
};

build();
