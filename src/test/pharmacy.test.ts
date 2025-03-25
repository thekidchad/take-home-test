import { Drug, Pharmacy } from '../services';

describe('Pharmacy', () => {
  describe('Doliprane', () => {
    it('should decrease benefit and expiresIn normally', () => {
      expect(new Pharmacy([new Drug('Doliprane', 20, 30)]).updateBenefitValue()).toEqual([
        new Drug('Doliprane', 19, 29),
      ]);
    });

    it('should decrease benefit twice as fast after expiry', () => {
      expect(new Pharmacy([new Drug('Doliprane', 0, 10)]).updateBenefitValue()).toEqual([
        new Drug('Doliprane', -1, 8),
      ]);
    });
  });

  describe('Herbal Tea', () => {
    it('should increase in benefit as it gets older', () => {
      expect(new Pharmacy([new Drug('Herbal Tea', 10, 5)]).updateBenefitValue()).toEqual([
        new Drug('Herbal Tea', 9, 6),
      ]);
    });

    it('should increase benefit twice as fast after expiry', () => {
      expect(new Pharmacy([new Drug('Herbal Tea', 0, 15)]).updateBenefitValue()).toEqual([
        new Drug('Herbal Tea', -1, 17),
      ]);
    });

    it('should not increase benefit above 50', () => {
      expect(new Pharmacy([new Drug('Herbal Tea', 5, 50)]).updateBenefitValue()).toEqual([
        new Drug('Herbal Tea', 4, 50),
      ]);
    });
  });

  describe('Magic Pill', () => {
    it('should never change', () => {
      expect(new Pharmacy([new Drug('Magic Pill', 15, 40)]).updateBenefitValue()).toEqual([
        new Drug('Magic Pill', 15, 40),
      ]);
    });
  });

  describe('Fervex', () => {
    it('should increase benefit by 1 when expiresIn > 10', () => {
      expect(new Pharmacy([new Drug('Fervex', 12, 35)]).updateBenefitValue()).toEqual([
        new Drug('Fervex', 11, 36),
      ]);
    });

    it('should increase benefit by 2 when expiresIn <= 10', () => {
      expect(new Pharmacy([new Drug('Fervex', 10, 35)]).updateBenefitValue()).toEqual([
        new Drug('Fervex', 9, 37),
      ]);
    });

    it('should increase benefit by 3 when expiresIn <= 5', () => {
      expect(new Pharmacy([new Drug('Fervex', 5, 35)]).updateBenefitValue()).toEqual([
        new Drug('Fervex', 4, 38),
      ]);
    });

    it('should drop benefit to 0 after expiry', () => {
      expect(new Pharmacy([new Drug('Fervex', 0, 35)]).updateBenefitValue()).toEqual([
        new Drug('Fervex', -1, 0),
      ]);
    });
  });

  describe('Dafalgan', () => {
    it('should decrease benefit twice as fast as normal drugs', () => {
      expect(new Pharmacy([new Drug('Dafalgan', 20, 30)]).updateBenefitValue()).toEqual([
        new Drug('Dafalgan', 19, 28),
      ]);
    });

    it('should decrease benefit four times as fast after expiry', () => {
      expect(new Pharmacy([new Drug('Dafalgan', 0, 10)]).updateBenefitValue()).toEqual([
        new Drug('Dafalgan', -1, 6),
      ]);
    });

    it('should not decrease benefit below 0', () => {
      expect(new Pharmacy([new Drug('Dafalgan', 5, 1)]).updateBenefitValue()).toEqual([
        new Drug('Dafalgan', 4, 0),
      ]);
    });
  });
});
