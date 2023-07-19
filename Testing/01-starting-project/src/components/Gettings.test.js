import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
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

    test("render good to see you if the button is NOT clicked",()=>{
    //Arrange
    render(<Gettings/>)
    //Act

    //Assert
    const check = screen.getByText('good to see',{exact:false})
    expect(check).toBeInTheDocument();
    })

    test("render Changed! when button is clicked",()=>{
        //Arrange
        render(<Gettings/>)
        //Act
        const buttonElement  = screen.getByRole('button')
        userEvent.click(buttonElement)
        //Assert
        const check = screen.getByText('Changed!',{exact:false})
        const isTextChangeCheck = screen.queryByText("good to see",{exact:false}) // to check whether the specified string is present or not we should use queryByText(it will return null in case text is not present there) instead of getByText 
        expect(check).toBeInTheDocument();
        expect(isTextChangeCheck).toBeNull();
    })
})
