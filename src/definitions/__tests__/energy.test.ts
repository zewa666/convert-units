import configureMeasurements from '../..';
import energy from '../energy';

test('Wh to Wh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('Wh').to('Wh')).toBe(1);
});

test('mWh to mWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('mWh').to('mWh')).toBe(1);
});

test('kWh to kWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('kWh').to('kWh')).toBe(1);
});

test('MWh to MWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('MWh').to('MWh')).toBe(1);
});

test('GWh to GWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('GWh').to('GWh')).toBe(1);
});

test('J to J', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('J').to('J')).toBe(1);
});

test('kJ to kJ', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('kJ').to('kJ')).toBe(1);
});

test('Wh to J', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('Wh').to('J')).toBe(3600);
});

test('Wh to mWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('Wh').to('mWh')).toBe(1000);
});

test('Wh to kWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('Wh').to('kWh')).toBe(0.001);
});

test('Wh to MWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('Wh').to('MWh')).toBe(0.000001);
});

test('Wh to GWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('Wh').to('GWh')).toBe(0.000000001);
});

test('GWh to mWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('GWh').to('mWh')).toBe(1000000000000);
});

test('GWh to J', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('GWh').to('J')).toBe(3600000000000);
});

test('MWh to mWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('MWh').to('mWh')).toBe(1000000000);
});

test('kWh to mWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('kWh').to('mWh')).toBe(1000000);
});

test('mWh to kWh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('mWh').to('kWh')).toBe(0.000001);
});

test('mWh to Wh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('mWh').to('Wh')).toBe(0.001);
});

test('kWh to Wh', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('kWh').to('Wh')).toBe(1000);
});

test('kWh to kJ', () => {
  const convert = configureMeasurements({
    energy,
  });
  expect(convert(1).from('kWh').to('kJ')).toBe(3600);
});
