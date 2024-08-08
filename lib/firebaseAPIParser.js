"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @string {document name} documentName
 * @string {string} collectionName collection name
 * @returns
 */
function firebaseAPIParser(documentName, collectionName) {
  return `https://firestore.googleapis.com/v1/projects/${process.env.PROJECT_ID}/databases/(default)/documents/${documentName}/${collectionName}?key=${process.env.WEB_API_KEY}`;
}
exports.default = firebaseAPIParser;
