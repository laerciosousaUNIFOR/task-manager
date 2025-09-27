const { isValidTask } = require('./functions');

test('aceita texto válido', () => {
  expect(isValidTask('Comprar água')).toBe(true);
});

test('rejeita vazio', () => {
  expect(isValidTask('   ')).toBe(false);
});

test('rejeita muito longo', () => {
  const long = 'a'.repeat(141);
  expect(isValidTask(long)).toBe(false);
});
