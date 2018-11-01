// Getting the name of the document (including the extension)
var theDocumentName = app.doc.documentFileName;

// Getting the name of the document without the extension
// This uses regular expressions. Nobody understands why it works, just use it :)
var theDocumentNameWithoutExtension = app.doc.documentFileName.replace(/\.[^/.]+$/, "");

// Getting the extension of the document
var theDocumentExtension = app.doc.documentFileName.split('.').pop();

// Getting the full path of the document being processed (including the document name)
var theDocumentPath = app.doc.path;

// Getting the "parent folder", which is the folder the file we're processing is living in
var theDocumentParentFolder = app.doc.path.replace(/(.*?)[^/]*\..*$/,'$1');

// Getting the first 5 characters of the document name
// Adjust "0" and "5" to get a different part
var theDocumentNamePart = app.doc.documentFileName.slice(0, 5);


