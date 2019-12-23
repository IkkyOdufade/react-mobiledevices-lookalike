import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Samsungs105G from '../components/Android/Samsungs105G/Samsungs105G';


Enzyme.configure({adapter:new Adapter});

describe("should render a Samsungs105G device lookalike", () =>{
test("Samsungs105G", ()=>{
    const samsungs105G = shallow(<Samsungs105G/>);
    const text = samsungs105G.find('p')
    expect(text.text()).toBe('Broke:(')
})

})



