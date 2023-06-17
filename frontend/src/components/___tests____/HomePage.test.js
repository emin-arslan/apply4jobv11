import  {render,screen} from "@testing-library/react/";
import Navi from "../Navi";
import HomePage from "../HomePage";
test('Navi renders correctly', ()=> {
    const { debug , container } =  render(<Navi/>);
    const title = screen.getByAltText("Apply4Job");
    

})