import db from "db";

export default async function getMeetups() {
	return await db.meetup.findMany();
}
