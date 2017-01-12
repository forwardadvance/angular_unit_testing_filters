describe('lowPassFilter', () => {
  beforeEach(module('app'));

  var lowPass;
  beforeEach(inject(function($filter){
    lowPass = $filter('lowPass');
  }));

  it('can lowPass a string', () => {
    expect(lowPass([1,2,3,4], 2)).toEqual([3,4]);
  });

});
