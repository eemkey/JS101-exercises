let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

//Object.values

// [ { type: 'fruit', colors: [ 'red', 'green' ], size: 'small' },
//   { type: 'vegetable', colors: [ 'orange' ], size: 'medium' },
//   { type: 'fruit', colors: [ 'red', 'green' ], size: 'medium' },
//   { type: 'fruit', colors: [ 'orange' ], size: 'medium' },
//   { type: 'vegetable', colors: [ 'green' ], size: 'large' } ]

// [ [ 'fruit', [ 'red', 'green' ], 'small' ],
//   [ 'vegetable', [ 'orange' ], 'medium' ],
//   [ 'fruit', [ 'red', 'green' ], 'medium' ],
//   [ 'fruit', [ 'orange' ], 'medium' ],
//   [ 'vegetable', [ 'green' ], 'large' ] ]


// [ [ 'red', 'green' ],
//   'medium',
//   [ 'red', 'green' ],
//   [ 'orange' ],
//   'large' ]

let newArr = Object.values(obj).map(food => {
  return Object.values(food);
  }).map(food => {
    if (food[0] === "fruit") {
      return food[1].map(color => {
        return color[0].toUpperCase() + color.slice(1);
      })
    } else {
      return food[2].toUpperCase();
    }
  });

console.log(newArr);







