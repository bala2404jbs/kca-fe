import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../Navbar';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe('Navbar Component', () => {
  it('renders the brand name KCA', () => {
    render(<Navbar />);
    expect(screen.getByText('KCA')).toBeInTheDocument();
  });

  it('renders core navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('INSTITUTIONS')).toBeInTheDocument();
    expect(screen.getByText('FRANCHISE')).toBeInTheDocument();
  });

  it('renders the programs dropdown label', () => {
    render(<Navbar />);
    expect(screen.getByText('PROGRAMS')).toBeInTheDocument();
  });
});
