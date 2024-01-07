import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import singleData from '../../data/singleData';

describe('Should render Card component', () => {
  test('When all props passed component renders correctly', () => {
    // render(<Card {...singleData} />);
    const nameAndSurname = screen.getByText(`${singleData.name} ${singleData.surname}`);
    expect(nameAndSurname).toBeDefined();
  });
});
