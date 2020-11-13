import { getDaysArray, randomChartData } from './MetricsUtils';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('Metrics Utils', () => {
  describe('when a number is passed to randomChartData()', () => {
    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    });

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
    });

    it('should return an array of random numbers', async () => {
      expect(randomChartData(5)).toEqual([26, 26, 26, 26, 26]);
    });
  });

  describe('getDatesArray()', () => {
    const firstOfJanuary = new Date('1/1/2020');
    const seventhOfJanuary = new Date('1/7/2020');
    describe('when two dates are passed into getDaysArray and asString is false', () => {
      it('should return an array of dates between the two Dates passed in', async () => {
        expect(getDaysArray(firstOfJanuary, seventhOfJanuary, false)).toEqual([
          new Date('1/1/2020'),
          new Date('1/2/2020'),
          new Date('1/3/2020'),
          new Date('1/4/2020'),
          new Date('1/5/2020'),
          new Date('1/6/2020'),
          new Date('1/7/2020'),
        ]);
      });
    });

    describe('when two dates are passed into getDaysArray', () => {
      it('should return an array of date strings between the two Dates passed in', async () => {
        expect(getDaysArray(firstOfJanuary, seventhOfJanuary)).toEqual([
          '1/1/2020',
          '1/2/2020',
          '1/3/2020',
          '1/4/2020',
          '1/5/2020',
          '1/6/2020',
          '1/7/2020',
        ]);
      });
    });
  });
});
