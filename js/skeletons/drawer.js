function Drawer() {

    this.draw = function(asset, color = '#fff') {

        var ratio = getRatio();
        var container = new Group().addTo(stage);
        var item = null;

        asset.svg.forEach(function(entry) {
            // build item from svg
            if (entry.type === 'path')
                item = new Path(entry.data).attr('scale', ratio);
            else if (entry.type === 'text')
                item = new Text(entry.data).attr(entry.attr).attr('fontSize', entry.attr.fontSize * ratio);
            else
                item = new Circle(entry.centerX * ratio, entry.centerY * ratio, entry.radius * ratio);

            // assign color
            if (entry.type != 'text') {
                if (entry.color)
                    item.addTo(container).fill(entry.color);
                else
                    item.addTo(container).fill(color);
            }

            // change position
            container.animate('30ms', {
                x: asset.position.x * ratio,
                y: asset.position.y * ratio
            });

            // assign motion
            if (entry.motion) {
                entry.motion(item);
            }

            item.addTo(container);
        });

        // on resize
        stage.on('message:externalData', function(data) {
            container.destroy();
        });

        return container;
    };
};
