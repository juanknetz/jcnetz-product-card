import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://image.png" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente correctamente CON la imagen', () => {
    const wrapper = renderer.create(
      <ProductImage img={product2.img} className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
