/**
 *
 * @string {document name} documentName
 * @string {string} collectionName collection name
 * @returns
 */
export default function firebaseAPIParser(documentName, collectionName) {
	return `https://firestore.googleapis.com/v1/projects/${process.env.PROJECT_ID}/databases/(default)/documents/${documentName}/${collectionName}?key=${process.env.WEB_API_KEY}`;
}
