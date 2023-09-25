import { render, screen } from '@testing-library/react';
import { PlaylistCard } from '.';

describe('Playlist card test', () => {
  beforeEach(() => {
    render(
      <PlaylistCard
        title='Test title'
        description='Test description'
        image='https://ingenieria-web-spotify-media-lw.s3.amazonaws.com/todays-top-hits.jpg'
      />
    );
  });

  it('should render the title correctly', () => {
    const renderedTitle = screen.getByText('Test title');
    expect(renderedTitle).toBeInTheDocument();
  });
});
