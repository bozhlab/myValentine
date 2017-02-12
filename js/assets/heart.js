function Heart() {
    this.position = {
        'x': 450,
        'y': 0
    }
    this.svg = [{
        'type': 'path',
        'data': 'M234.915,0c-8.238,0-15.31,4.947-18.439,12.026C213.347,4.947,206.275,0,198.037,0c-11.135,0-20.163,9.028-20.163,20.163c0,21.855,27.965,43.862,36.291,49.929c1.379,1.004,3.246,1.003,4.625-0.001c8.328-6.069,36.288-28.074,36.288-49.928C255.078,9.028,246.05,0,234.915,0z',
        'motion': function(item) {
            item.fill(color('#ff9900').randomize('lightness', 0.5));
            var directX = Math.floor(Math.random() * 200) + 100;
            var valX = Math.random() < 0.5 ? -(directX) : directX;

            item.animate('2s', {
                x: valX,
                y: -100
            }, {
                easing: 'sineInOut',
                onEnd: function() {
                    item.parent.destroy();
                }
            });
        }
    }];
};
