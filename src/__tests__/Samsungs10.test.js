import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Samsungs10 from '../components/Android/Samsungs10/Samsungs10';


Enzyme.configure({adapter:new Adapter});

describe("Samsungs10", () =>{

test("should render a Samsungs10 device lookalike", ()=>{
    const samsungs10 = shallow(<Samsungs10/>);
    const text = samsungs10.find("p");
    expect(text.text()).toBe('Yo!')
});



})



