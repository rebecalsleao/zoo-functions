const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verificar se não passando argumentos retorna o objeto', () => {
    const week = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toMatchObject(week);
  });
  it('Verificar se para os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Verificar para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Verificar se para os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Verificar para os argumentos Thu e 09:00-AM se deve lançar uma exceção com mensagem específica', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Verificar se para os argumentos Friday e 09:00-ZM se deve lançar uma exceção com mensagem específica', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be "AM" or "PM"'));
  });
  it('Verificar para os argumentos Saturday e C9:00-AM se deve lançar uma exceção com a mensagem específica', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem específica', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
});
