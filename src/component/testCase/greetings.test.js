import Greetings from './greetings';
import {render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greetings component',()=>{
   test('hellow world learng js ',()=>{
      render(<Greetings />);
   
      // exact match text
      const helloworldelement =  screen.getByText('Hello World');
   
      expect(helloworldelement).toBeInTheDocument();
   });
      //check after button click
   test('render changed  if button was clicked',()=>{
      render(<Greetings />);
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
      
      const ouputElement =screen.getByText('content change');
      expect(ouputElement).toBeInTheDocument();
   })
   //check before click
   test('does not render old content if button was clicked',()=>{
      render(<Greetings />);
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
      
      const ouputElement =screen.queryByText('old content',{exact:true});
      expect(ouputElement).toBeNull();
   })
});
