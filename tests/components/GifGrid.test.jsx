import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba de <GifGrid/>', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('deben de mostrar item cuando se cargan las imagenes useFetchGifs', () => {
    const gits = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: 'EGF',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gits,
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
