import { Queue } from "quirrel/blitz";

export default Queue("/api/reminders", async (email: string) => {
	console.log("Send an email to: " + email);
});
