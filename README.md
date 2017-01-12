# Part 12 - Unit Testing Filters

*TL;DR; Filters are functions that chage data from one format into another. For example a date filter might output a formatted date string. Instantiating them with the $filter service. Then test them by passing them data like any other function.*

In Angular, filters are functions that convert values from one form into another form. Angular comes with several built in filters, and you can write your own. Here's the uppercase filter in action:

```html
<p>{{"Hello Cats" | uppercase}}</p>
```

We create a filter like this:

```
angular.module('reverseFilter', [])
  .filter('reverse', () => {
    return (string) => string.split('').reverse().join('')
  });
```

See if you can guess what this filter does. To test it, we need to get the function that it returns. We can do this using the injectable $filter service to get hold of a filter by name:

```
var reverse = $filter('reverse');
```

Here's that in context:

```
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
```

## Exercise 1 - lowPass filter

In your exercise folder, you'll find a lowPass filter that removes numbers from an array if they are less than a certain value. 

Unfortunately, due to budget cuts there are no tests. Please put things to writes by filling in the spec.
