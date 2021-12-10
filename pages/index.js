import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm2',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm3',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm4',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm5',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm6',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm7',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm8',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm9',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  },
  {
    id: 'm10',
    title: 'A First Meetup',
    image: 'https://source.unsplash.com/1600x900/?landscape',
    address: 'Some address Not Native',
    description: 'This is the place decided for meetup!'
  }
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
