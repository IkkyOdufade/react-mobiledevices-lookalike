import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IPhone8 from '../components/iOS/IPhone88plus/IPhone8';

Enzyme.configure({adapter:new Adapter});

describe("should render IPhone8 device lookalike", () => {
    test("IPhone8", () => {
        const iPhone8 = shallow(<IPhone8/>)
        const text = iPhone8.find('p')
        expect(text.text()).toBe("You are not..");
    })
})