import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  const { meetups } = props;

  if (meetups) {
    return (
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </ul>
    );
  }
  return <p>No meet ups</p>;
}

export default MeetupList;
