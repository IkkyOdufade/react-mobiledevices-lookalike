import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IPhoneX from '../components/iOS/IPhonex/IPhoneX';
import IPhoneXR from '../components/iOS/IPhonex/IPhoneXR';
import IPhoneXSMax from '../components/iOS/IPhonex/IPhoneXSMax';


Enzyme.configure({adapter:new Adapter});

describe("should render IPhoneX/IPhoneXR/IPhoneXSMax devices lookalike", () =>{
    test("IPhoneX", () =>{
        const iPhoneX = shallow(<IPhoneX/>)
        const text = iPhoneX.find('p')
        expect(text.text()).toBe("All at once.");
    });
    test("IPhoneXR", () =>{
        const iPhoneXR = shallow(<IPhoneXR/>)
        const text = iPhoneXR.find('p')
        expect(text.text()).toBe("Now fly.");
    });
    test("IPhoneXSMax", () =>{
        const iPhoneXSMax = shallow(<IPhoneXSMax/>)
        const text = iPhoneXSMax.find('p')
        expect(text.text()).toBe("Celebrate.");
    });
})
