import {render,screen} from '@testing-library/react';
import Async from './async';

describe('Async component',()=>{
   test('renders post if request success', async ()=>{
      // fetch api call and status check 
      window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce({
         // fetch api cal get data key check
         json: async () =>[{id:'p1',title:'first post'}],
      });
      render (<Async />)
     const listElement = await screen.findAllByRole('listitem');
     expect(listElement).not.toHaveLength(0);
   })
})