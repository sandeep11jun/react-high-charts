const BorderRadius = (Highcharts) => {
  Highcharts.wrap(
    Highcharts.seriesTypes.column.prototype,
    'translate',
    function (proceed) {
      proceed.apply(this, [].slice.call(arguments, 1));
      var series = this,
        cpw = 0.166,
        shapeArgs,
        x,
        y,
        h,
        w;

      Highcharts.each(series.points, function (point) {
        shapeArgs = point.shapeArgs;
        x = shapeArgs.x;
        y = shapeArgs.y;
        h = shapeArgs.height;
        w = shapeArgs.width;

        point.shapeType = 'path';
        if (point.negative) {
          point.shapeArgs = {
            d: [
              'M',
              x,
              y,
              'L',
              x,
              y + h - w / 2,
              'C',
              x,
              y + h + w / 5,
              x + w,
              y + h + w / 5,
              x + w,
              y + h - w / 2,
              'L',
              x + w,
              y,
              'L',
              x,
              y,
            ],
          };
        } else {
          point.shapeArgs = {
            d: [
              'M',
              x,
              y + w / 2,
              'L',
              x,
              y + h,
              'L',
              x + w,
              y + h,
              'L',
              x + w,
              y + w / 2,
              'C',
              x + w,
              y - w / 5,
              x,
              y - w / 5,
              x,
              y + w / 2,
            ],
          };
        }
      });
    }
  );
};

export default BorderRadius;
