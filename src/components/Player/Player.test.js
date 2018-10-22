import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const scorePassed = 1;
  const playerComponent = shallow(<Player score={scorePassed} />);

  const scoreRendered = playerComponent.find('.Player__score').text();
  const scoreRenderedNumber = Number(scoreRendered);

  expect(scoreRenderedNumber).toEqual(scorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button').at(0);

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const minusButton = playerComponent.find('.Player__button').at(1);

  minusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should remove player', () => {
  const mockedOnPlayerRemove = jest.fn();

  const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);
  const removeButton = playerComponent.find('.Player__button_Remove');

  removeButton.simulate('click');

  expect(mockedOnPlayerRemove).toBeCalled();
});