import {render, screen} from '@testing-library/react'
import Gettings from "./Gettings";
//Test Suit when we group together the test
describe("Greeting Components",()=>{
    test('To check whether specified string is showing or not',()=>{
        //Arrange
        render(<Gettings/>)
        //Act
    
        //Assert
        const check = screen.getByText('Bidyut Talukdar',{exact:true})
        expect(check).toBeInTheDocument();
    })
})
