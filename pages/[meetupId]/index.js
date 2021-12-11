import MeetupDetails from '../../components/meetups/MeetupDetail';

function MeetupDetailsPage(props) {
  return (
    <MeetupDetails
      src={props.meetupData.src}
      address={props.meetupData.address}
      title={props.meetupData.title}
      details={props.meetupData.details}
    />
  );
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        src: 'https://source.unsplash.com/1600x900/?landscape',
        title: 'A Good meetup with your dog',
        id: 'm1',
        address: 'Some address in nearby state',
        details:
          'Some details that looks bigger and has some lorem ipsum metadotor content.'
      }
    }
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: 'm1' }
      },
      {
        params: { meetupId: 'm2' }
      },
      {
        params: { meetupId: 'm3' }
      },
      {
        params: { meetupId: 'm4' }
      },
      {
        params: { meetupId: 'm5' }
      },
      {
        params: { meetupId: 'm6' }
      },
      {
        params: { meetupId: 'm7' }
      },
      {
        params: { meetupId: 'm8' }
      },
      {
        params: { meetupId: 'm9' }
      },
      {
        params: { meetupId: 'm10' }
      }
    ]
  };
}
export default MeetupDetailsPage;
