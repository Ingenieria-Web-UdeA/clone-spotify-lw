import { PlaylistCard } from './PlaylistCard';

interface PlaylistContainerProps {
  name: string;
}

const PlaylistContainer = ({ name }: PlaylistContainerProps) => {
  return (
    <section className='flex flex-col gap-5'>
      <div className='flex justify-between'>
        <span className='text-white text-2xl font-bold'>{name}</span>
        <span>Show all</span>
      </div>
      <div className='flex gap-5'>
        <PlaylistCard
          image='/images/todays-top-hits.jpg'
          title='Todays top hits'
          description='Jung Kook is on top of the Hottest 50!'
        />
        <PlaylistCard
          image='/images/all-out-2010.jpg'
          title='All Out 2010s'
          description='The biggest songs of 2010s.'
        />
      </div>
    </section>
  );
};

export { PlaylistContainer };
