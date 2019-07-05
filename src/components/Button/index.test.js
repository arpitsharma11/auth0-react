import Button from './'
import shallow from {}




describe('Button Component', () => {
    it('It should render correctly', () => {
        const component = shallow(<Button />);
        console.log(component.debug())
        const wrapper = component.find('.');
        expect(wrapper.length).toBe(1);
    })
})