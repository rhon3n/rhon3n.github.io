import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsTile from './ProjectsTile';
import '../../helpers/fontawesome';

it('renders Shader Studio with live demo and source links', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectsTile />, div);

  expect(div.textContent).toContain('Shader Studio');
  expect(div.textContent).toContain(
    'Shader Studio turns uploaded images and video into animated visual treatments through a configurable stack of shader and media-processing layers.'
  );

  const links = Array.from(div.querySelectorAll('a')).map(link => link.href);
  expect(links).toContain('https://rhonen.design/shader-studio/');
  expect(links).toContain('https://github.com/rhon3n/shader-studio');

  ReactDOM.unmountComponentAtNode(div);
});
