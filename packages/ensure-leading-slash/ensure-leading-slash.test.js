import ensureLeadingSlash from './ensure-leading-slash';

test('ensureLeadingSlash', () => {
  expect(ensureLeadingSlash('asdf')).toBe('/asdf');
  expect(ensureLeadingSlash('/asdf')).toBe('/asdf');
  expect(ensureLeadingSlash('//asdf')).toBe('/asdf');
});
