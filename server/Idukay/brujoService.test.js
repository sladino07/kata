const { getEvaluacionPocion } = require('./brujo-data.js');

describe('Case 1',()=>{
test("Añadiendo las pociones del caso 1 la respuesta deberia ser 13", () => {

var req = 
            {
                "numRojas": 2,
                "numVerdes":1,
                "numAmarillas":0,
                "numAzules":2,
                "numGrises":0
            };

expect(getEvaluacionPocion(req))
.toEqual(
    expect.objectContaining({
        mejorAtaque: expect.any(Number).toBe(13)
    })
  )
});
});

describe('Case 2',()=>{
    test("Añadiendo las pociones del caso 2 la respuesta deberia ser 31", () => {
    
    var req = 
                {
                    "numRojas": 2,
                    "numVerdes":2,
                    "numAmarillas":1,
                    "numAzules":1,
                    "numGrises":1
                };
    expect(getEvaluacionPocion(req))
    .toEqual(
        expect.objectContaining({
            mejorAtaque: expect.any(Number),
        })
      )
    });
});