import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer'

describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<Footer />);
    });

    test('render with default props', ()=>{
        shallow(<Footer default={true} fluid={true}/>)
    })
});