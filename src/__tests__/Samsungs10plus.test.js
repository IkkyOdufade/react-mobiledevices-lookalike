import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Samsungs10plus from '../components/Android/Samsungs10plus/Samsungs10plus';


Enzyme.configure({adapter:new Adapter});

describe("should render a Samsungs10plus device lookalike", () =>{

test("Samsungs10plus", ()=>{
    const samsungs10plus = shallow(<Samsungs10plus/>)
    const text = samsungs10plus.find('p')
    expect(text.text()).toBe('Looking down')
})

})



