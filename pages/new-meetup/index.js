import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';

function NewMeetupPage() {
  const router = useRouter();
  const meetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    // router.replace('/'); // Disables back button.
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Make a new meetup!" />
      </Head>
      <NewMeetupForm onAddMeetup={meetupHandler} />
    </>
  );
}

export default NewMeetupPage;
