import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IPhone6plus7plus from '../components/iOS/IPhone6+_7+/iPhone6plus7plus';

Enzyme.configure({adapter:new Adapter});

describe("should render a IPhone6plus/7plus device lookalike", () =>{
    test("IPhone6plus7plus", () =>{
        const iPhone6plus7plus = shallow(<IPhone6plus7plus/>)
        const text = iPhone6plus7plus.find('p')
        expect(text.text()).toBe("I'm here!!");
    });
})
