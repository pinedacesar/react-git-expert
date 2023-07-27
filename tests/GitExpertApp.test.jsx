import { render, screen } from '@testing-library/react';
import { GitExpertApp } from '../src/GitExpertApp';

describe('Prueba de <GitExpertApp/>', () => {
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GitExpertApp />);
    expect(container).toMatchSnapshot();
    screen.debug();
  });

  // test('verificar si las categorias son iguales', () => {

  //   render(<GitExpertApp />);
  // });
});
