describe('reverseFilter', () => {
  beforeEach(module('app'));

  var reverse;
  beforeEach(inject(function($filter){
    reverse = $filter('reverse');
  }));

  it('can reverse a string', () => {
    expect(reverse('Hello World')).toEqual('dlroW olleH');
  });

});
