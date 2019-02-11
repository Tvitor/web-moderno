const obj = 'https://cefis.com.br/api/v1/event'
console.log(JSON.stringify(obj)) //migra o dado convertendo para um formato texto (json)

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "data": [{}]'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))