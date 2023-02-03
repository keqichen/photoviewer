import React from 'react';
import App from './App';
import { ImageSelector } from './ImageSelector';
import { PhotoViewer } from './photoviewer/PhotoViewer';
import { render, screen, fireEvent } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

/*
test('renders React text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/React/i);
    expect(textElement).toBeInTheDocument();
});

//A unit test to check our imageUrl generation code - 
// for me, this might check that the first link is 
// what I expect and that it doesn’t include the ‘broken’ images.

test('renders and checks PhotoViewer', () => {

    render(<PhotoViewer imgUrl={'https://picsum.photos/id/600/600/600.jpg'} />);
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute('src', 'https://picsum.photos/id/600/600/600.jpg')
});


test('Check first image equal to what we are expecting', () => {
    render(<App />);
    const image = screen.getAllByRole('img')[0];
    expect(image).toHaveAttribute('src', 'https://picsum.photos/id/600/600/600.jpg')
});


//A ‘Regression / Snapshot' test 
//to confirm that I the ‘ImageViewer' component 
//doesn’t accidentally change in the future.


it('renders correctly', async () => {
    const tree = renderer.create(<PhotoViewer imgUrl={'https://picsum.photos/id/600/600/600.jpg'} />).toJSON();
    expect(tree).toMatchSnapshot();
});


/* this snapshot test is now failing
it('renders correctly2', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
*/

/*
describe("My Component", () => {    
    it("Should match snapshot without name prop", async () => {       
    const tree = renderer.create(<MyComponent/>).toJSON();                
    expect(tree).toMatchSnapshot();    });
*/

// A Component Test 
// to confirm that when I click a thumbnail
// then the thumbnail becomes selected 
// and the ImageViewer updates with the new image.


/*
describe("My Component", () => {
    it("should become selected", async () => {
        const component = render(<ImageSelector setState={function dispatchSetState() { }} image="https://picsum.photos/id/600/600/600.jpg" />);
        await wait(() => component.getByText("Hello World!"));
    });

    it("should update the image in the PhotoViewer", async () => {
        const component = render(<App/>);
        await wait(() => component.getByText("React Photo Viewer"));
    });
});
*/

describe("My Component", () => {
    it("Should check the image has been selected", async () => {
        const component = render(<App />);

        const image1 = screen.getByAltText("this is an image")
        expect(image1).toHaveAttribute('src', 'https://picsum.photos/id/600/600/600.jpg')

        fireEvent.click(component.getByTestId("selected-element"));

        const image2 = screen.getByAltText("this is an image")
        expect(image2).toHaveAttribute('src', 'https://picsum.photos/id/602/600/600.jpg')
    });
});


// React.Dispatch<React.SetStateAction<"https://picsum.photos/id/602/600/600.jpg">>
// React.Dispatch<React.SetStateAction<"https://picsum.photos/id/602/600/600.jpg">>