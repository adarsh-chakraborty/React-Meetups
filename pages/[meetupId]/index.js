import MeetupDetails from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
function MeetupDetailsPage(props) {
  const meetup = props.meetupData;
  console.log(props);
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.details} />
      </Head>
      <MeetupDetails
        src={meetup.image}
        address={meetup.address}
        title={meetup.title}
        details={meetup.details}
      />
    </>
  );
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetupData = await meetupsCollection.findOne({
    _id: ObjectId(meetupId)
  });
  client.close();

  return {
    props: {
      meetupData: {
        _id: meetupData._id.toString(),
        title: meetupData.title,
        address: meetupData.address,
        image: meetupData.image,
        description: meetupData.description
      }
    }
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() }
    }))
  };
}
export default MeetupDetailsPage;
