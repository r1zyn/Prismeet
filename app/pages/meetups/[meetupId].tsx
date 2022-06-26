import { BlitzPage, useParam, useQuery, invoke } from "blitz";
import getMeetup from "app/queries/getMeetup";
import { Suspense } from "react";
import participateInMeetup from "app/mutations/participateInMeetup";

const MeetupDetails = () => {
	const meetupId = useParam("meetupId", "number")!;
	const [meetup] = useQuery(getMeetup, meetupId);

	return (
		<main>
			<h1 className="bg-blue-500">Hello, world!</h1>
			<p>Id: {meetupId}</p>
			<p>Subject: {meetup.subject}</p>
			<p>Date: {meetup.date.toLocaleDateString()}</p>

			<button onClick={async () => {
				invoke(participateInMeetup, meetupId);
				window.alert("Success! Looking forward to seeing you there!")
			}}>
				Participate!
			</button>
		</main>
	)
}

const MeetupDetailsPage: BlitzPage = () => {
	return <Suspense fallback="Loading...">
		<MeetupDetails />
	</Suspense>
}

export default MeetupDetailsPage;