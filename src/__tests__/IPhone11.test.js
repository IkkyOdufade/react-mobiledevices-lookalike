import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IPhone11 from '../components/iOS/IPhone11/IPhone11';
import IPhone11Pro from '../components/iOS/IPhone11/IPhone11Pro';
import IPhone11ProMax from '../components/iOS/IPhone11/IPhone11ProMax';


Enzyme.configure({adapter:new Adapter});

describe("should render IPhone11 device lookalike", () => {
    test("IPhone11", () => {
        const iPhone11 = shallow(<IPhone11/>)
        const text = iPhone11.find('p');
        expect(text.text()).toBe("You are not..");
    });

    test("IPhone11Pro", () => {
        const iPhone11Pro = shallow(<IPhone11Pro/>)
        const text = iPhone11Pro.find('p')
        expect(text.text()).toBe("Stay away..");
    });

    test("IPhone11ProMax", () => {
        const iPhone11ProMax = shallow(<IPhone11ProMax/>)
        const text = iPhone11ProMax.find('p')
        expect(text.text()).toBe("Alone..");
    });
})