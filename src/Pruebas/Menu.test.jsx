import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from '../Components/menú';
// import '@testing-library/jest-dom/extend-expect';


// Mock de useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../components/MyPdfViewer', () => () => <div>MyPdfViewer</div>);



describe('Menu component', () => {
  const setTokenMock = jest.fn();
  const onCloseMock = jest.fn();
  const onInstructionsClickMock = jest.fn();

  beforeEach(() => {
    setTokenMock.mockClear();
    onCloseMock.mockClear();
    onInstructionsClickMock.mockClear();
    mockedUsedNavigate.mockClear();
  });

  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Menu setToken={setTokenMock} onClose={onCloseMock} />
      </MemoryRouter>
    );

    expect(screen.getByText('Log Out')).toBeInTheDocument();
    expect(screen.getByText('Página Web Valiny')).toBeInTheDocument();
    expect(screen.getByText('Reportes')).toBeInTheDocument();
    expect(screen.getByText('Cursos')).toBeInTheDocument();
    expect(screen.getByText('Manual de instrucciones')).toBeInTheDocument();
  });

  test('handles logout correctly', () => {
    render(
      <MemoryRouter>
        <Menu setToken={setTokenMock} onClose={onCloseMock} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Log Out'));

    expect(setTokenMock).toHaveBeenCalledWith(null);
    expect(localStorage.getItem('token')).toBeNull();
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });

  test('navigates to Cursos on button click', () => {
    render(
      <MemoryRouter>
        <Menu setToken={setTokenMock} onClose={onCloseMock} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Cursos'));

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/Cursos');
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('navigates to Reportes on button click', () => {
    render(
      <MemoryRouter>
        <Menu setToken={setTokenMock} onClose={onCloseMock} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Reportes'));

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/Reportes');
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('shows PDF viewer when instructions button is clicked', () => {
    render(
      <MemoryRouter>
        <Menu setToken={setTokenMock} onClose={onCloseMock} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Manual de instrucciones'));

    expect(screen.getByText('MyPdfViewer')).toBeInTheDocument();
    expect(onCloseMock).toHaveBeenCalled();
  });


});
