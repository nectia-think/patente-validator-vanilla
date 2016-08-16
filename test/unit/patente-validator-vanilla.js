import patenteValidatorVanilla from '../../src/patente-validator-vanilla';

describe('patenteValidatorVanilla', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(patenteValidatorVanilla, 'greet');
      patenteValidatorVanilla.greet();
    });

    it('should have been run once', () => {
      expect(patenteValidatorVanilla.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(patenteValidatorVanilla.greet).to.have.always.returned('hello');
    });
  });
});
