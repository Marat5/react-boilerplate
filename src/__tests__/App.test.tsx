import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/organisms/App/App';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18nForTests';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('hello jest', () => {
  const tree = renderer
    .create(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders a message', () => {
  const { container, getByText } = render(<App />);
  expect(getByText('change language')).toBeInTheDocument();
  expect(container.firstChild?.firstChild?.firstChild).toMatchInlineSnapshot(
    `template`
  );
});
