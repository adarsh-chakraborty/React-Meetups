import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const meetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={meetupHandler} />;
}

export default NewMeetupPage;
