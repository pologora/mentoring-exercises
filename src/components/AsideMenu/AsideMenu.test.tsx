import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import AsideMenu from './AsideMenu';
import menuData from '../../data/menu';

describe('Should render AsideMenu component', () => {
  test('When all props passed component renders correctly', () => {
    render(<AsideMenu menuData={menuData} />);
    const linkName = screen.getByText(menuData[0].linkName);
    expect(linkName).toBeDefined();
  });
  test('When no props passed compoenent renders correctly', () => {
    render(<AsideMenu menuData={[]} />);
    const noMenu = screen.getByText('No menu');
    expect(noMenu).toBeDefined();
  });
});
