All the functionalities mentioned in the document has been implemented.

To test the the upload functionality on post man , attach the files at Body->form-data->{key: files , value: <select files>} 

http://localhost:3000/api/v1/create-session --> Create Session --> POST

http://localhost:3000/api/v1/upload-file/<session_id>  { attach files in form data under body in postman } --> add files -->POST

http://localhost:3000/api/v1/session/<session_id> --> Delete a session -->DELETE

http://localhost:3000/api/v1/session/<session_id>/file/<file_name_with_extension> --> Delete a specific file from a given session ID -->DELETE
