const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificar se o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verificar se o argumento names retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verificar se o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Verificar se o argumento location retornar a string NW', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Verificar se o argumento popularity retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeCloseTo(5);
  });
  it('Verificar se o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const expected = ['Monday'];
    expect(handlerElephants('availability')).toEqual(expect.not.arrayContaining(expected));
  });
  it('Verificar se não passando argumentos a função retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
});
