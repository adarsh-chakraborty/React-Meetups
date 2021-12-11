import MeetupDetails from '../../components/meetups/MeetupDetail';

function MeetupDetailsPage() {
  return (
    <MeetupDetails
      src="https://source.unsplash.com/1600x900/?landscape"
      address="Some address in nearby state"
      title="A Good meetup with your dog"
      details="Some details that looks bigger and has some lorem ipsum metadotor content."
    />
  );
}

export default MeetupDetailsPage;
