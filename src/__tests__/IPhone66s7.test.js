import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IPhone66s7 from '../components/iOS/IPhone66s7/IPhone66s7';

Enzyme.configure({adapter:new Adapter});

describe("should render a IPhone6/6s/7 device lookalike", () =>{
    test("IPhone66s7", () =>{
        const iPhone66s7 = shallow(<IPhone66s7/>)
        const text = iPhone66s7.find('p')
        expect(text.text()).toBe("Meaning??");
    });
})
