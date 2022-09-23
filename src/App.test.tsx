import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


describe('Rendering Test', () => {

  test('초기값은 0으로 시작되어야 한다.', () => {
    render(<App />);
  
    const counterElement = screen.getByTestId('counter')
    
    expect(counterElement).toHaveTextContent('0')
  });
  
  
  test('마이너스 버튼은 -를 가지고 있어야 한다', () => {
    render(<App />);
  
    const minusButton = screen.getByTestId('minus-button')
    
    expect(minusButton).toHaveTextContent('-')
  });
  
  
  test('플러스 버튼은 +를 가지고 있어야 한다', () => {
    render(<App />);
  
    const plusButton = screen.getByTestId('plus-button')
    
    expect(plusButton).toHaveTextContent('+')
  });

  test('on/off 버튼의 기본값은 on이다.', () => {
    render(<App />);

    const onAndOffButton = screen.getByTestId('on-and-off');

    expect(onAndOffButton).toHaveTextContent('on')
  })
})

describe('기능 테스트', () => {
  test('+버튼을 누르면 counter Component 값이 1 증가해야 한다.', () => {
    render(<App />);

    const plusButton = screen.getByTestId('plus-button');
    fireEvent.click(plusButton);

    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('1')
  })

  test('-버튼을 누르면 counter Component 값이 1 감소해야 한다.', () => {
    render(<App />);

    const minusButton = screen.getByTestId('minus-button');
    fireEvent.click(minusButton);

    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('-1')
  })

  test('on/off 버튼을 클릭하면, toggle이 일어나야 한다.', () => {
    render(<App />);

    const onAndOffButton = screen.getByTestId('on-and-off');
    expect(onAndOffButton).toHaveTextContent('on')
    fireEvent.click(onAndOffButton);

    expect(onAndOffButton).toHaveTextContent('off')
    fireEvent.click(onAndOffButton);

    expect(onAndOffButton).toHaveTextContent('on')
  })
  

  test('on/off 전체 레이아웃 색이 변경되어야 한다.', () => {
    render(<App />);

    const onAndOffButton = screen.getByTestId('on-and-off');
    fireEvent.click(onAndOffButton);

    const counterElement = screen.getByTestId('layout');
    expect(counterElement).toHaveClass('bg-fuchsia-200')

    fireEvent.click(onAndOffButton);
    expect(counterElement).toHaveClass('bg-white')
  })
})