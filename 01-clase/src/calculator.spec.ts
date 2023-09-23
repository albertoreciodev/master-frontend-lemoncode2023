import * as calculator from './calculator';

describe('Calculator specs', () => {
  describe('add', () => {
    it('should return 4 when passing A equals 2 and B equals 2', () => {
      // Arrange - Definimos los parámetros de entrada que necesitamos antes de ejecutar el test o los mock que necesitamos hacer antes de nada
      const a = 2;
      const b = 2;
      const isLowerThanFive = () => {}
      // Act - Ejecutar la funcionalidad que queremos probar
      const result = calculator.add(a, b, isLowerThanFive);

      // Assert - Verificación
      expect(result).toBe(4);
    });
    it('should call to isLowerThanFive when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // spy
      const isLowerThanFive = jest.fn();
      // Act
      const result = calculator.add(a, b, isLowerThanFive);

      // Assert
      expect(isLowerThanFive).toHaveBeenCalled();
      expect(isLowerThanFive).toHaveBeenCalledWith(4);
    });
  });
  // // describe('multiply', () => { 

  // // });

});