angular.module('reverseFilter', [])
  .filter('reverse', () => {
    return (string) => string.split('').reverse().join('')
  });
