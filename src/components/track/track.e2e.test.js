import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Track from '../track/track.jsx';

const track = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;
const questionType = `artist`;


Enzyme.configure({adapter: new Adapter()});

describe(`Test track component`, () => {
  test(`Testing a function that is passed from the parent`, () => {
    const buttonControlClickHandler = jest.fn();

    const trackComponent = mount(<Track audioSrc = {track} isPlaying = {false} questionType = {questionType} indexTrack = {0} onPlayButtonClick = {buttonControlClickHandler} />);

    const buttonControll = trackComponent.find(`.track__button`);

    buttonControll.props().onClick();

    expect(buttonControlClickHandler.mock.calls.length).toBe(1);
  });

  test(`Testing a function that is passed from the parent`, () => {
    const trackComponent = mount(<Track audioSrc = {track} isPlaying = {false} questionType = {questionType} indexTrack = {0} onPlayButtonClick = {() => {}} />);

    const buttonControll = trackComponent.find(`.track__button`);

    buttonControll.simulate(`click`);

    expect(trackComponent.state(`isPlaying`)).toEqual(true);
  });


});
