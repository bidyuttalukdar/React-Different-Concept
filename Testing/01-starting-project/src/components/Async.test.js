import {render, screen} from '@testing-library/react'

import Async from './Async'

describe("Async test",()=>{
    test("Checking Asynconously render list",async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({ //it will try to check whether we are getting that simulation output or not
            json: async() => [{
                id:"p1",
                title:"First post"
            }]
        })// we check with different out comes for different test cases
        render(<Async/>)

        //assert
        const checkListRender = await screen.findAllByRole("listitem");
        expect(checkListRender).not.toHaveLength(0)
    })
})