import * as calculator from './calculator';

describe('Calculator specs', () => {
  describe('add', () => {
    it('should return 4 when passing A equals 2 and B equals 2', () => {
      // Arrange - Definimos los parámetros de entrada que necesitamos antes de ejecutar el test o los mock que necesitamos hacer antes de nada
      const a = 2;
      const b = 2;

      // Act - Ejecutar la funcionalidad que queremos probar
      const result = calculator.add(a, b);

      // Assert - Verificación
      expect(result).toEqual(4);
    });
  })
  // // describe('multiply', () => { 

  // // });

});