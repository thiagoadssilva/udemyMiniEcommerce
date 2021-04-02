import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste do componente mini ecommerce', () => {
  it('Redenrizando o componente sem erros', () => {
    render(<App />);
    const linkElement = screen.getByText('Mini Ecommerce');
    expect(linkElement).toBeInTheDocument();
  });
});

