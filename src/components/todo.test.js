import React from 'react'
import Todo from './Todo'
import { configure, shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe('<Todo /> component Unit Tests', () => {
    const mockFn = jest.fn();
    const props = {
        onClick: mockFn,
        completed: false,
        text: 'do something'
    }
    it('should render 1 <Todo /> component', ()=>{
        const component = shallow(<Todo {...props} />);
        expect(component).toHaveLength(1);
        expect(component.find('li')).toHaveLength(1);
    })

    it('should render props correctly', ()=>{
        const component = shallow(<Todo {...props} />);
        //console.log(component.props());
        expect(component.props().children).toEqual('do something');
      
    })

    it('should set props correctly', ()=>{
        const component = shallow(<Todo {...props} />);
        component.setProps({ text: 'changed text'})
        expect(component.props().children).toEqual('changed text');
      
    })

    it('should call onClick handler when Todo component is clicked', ()=>{
        const component = shallow(<Todo {...props} />);
        component.simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
        
      
    })
})

