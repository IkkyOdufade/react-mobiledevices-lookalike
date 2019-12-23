import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Samsungs10e from '../components/Android/Samsungs10e/Samsungs10e';


Enzyme.configure({adapter:new Adapter});

describe("should render a Samsungs10e device lookalike", () =>{

test("Samsungs10e", ()=>{
    const samsungs10e = shallow(<Samsungs10e/>)
    const text = samsungs10e.find('p')
    expect(text.text()).toBe('Mine')
})

})



