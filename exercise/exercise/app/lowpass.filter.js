angular.module('lowPassFilter', [])
  .filter('lowPass', () => {
    return (ary, min) => ary.filter((a) => a > min);
  });
