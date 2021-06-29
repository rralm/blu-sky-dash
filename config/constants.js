const generator = require('random-array-generator');


export const LineArray = [
    generator.randomArray({min: 100, max: 400, elements: 5}),
    generator.randomArray({min: 100, max: 400, elements: 5}),
];

export const PieArray = generator.randomArray({min: 100, max: 400, elements: 3});