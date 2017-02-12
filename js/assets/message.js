function Message() {
    this.position = {
        'x': 350,
        'y': 550
    }
    this.svg = [{
        'type': 'text',
        'data': '',
        'attr': {
            fontFamily: 'Marck Script',
            fontSize: '70',
            textFillColor: '#ff6600'
        },
        'motion': function(item) {
            var str = 'Happy Valentine\'s Day';
            var tmpStr = '';
            for (var i = 0; i < str.length; i++) {
                (function(ind) {
                    setTimeout(function() {
                        tmpStr += str[ind];
                        item.attr('text', tmpStr);
                    }, 400 + (400 * ind));
                })(i);
            }
        }
    }];
};
