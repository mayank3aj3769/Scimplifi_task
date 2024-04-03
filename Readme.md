# All the functionalities mentioned in the document has been implemented.

# To test the the upload functionality on post man , attach the files at Body->form-data->{key: files , value: <select files>} 

1 - http://localhost:3000/api/v1/create-session 
    * Create Session --> POST request

2 - http://localhost:3000/api/v1/upload-file/<session_id>  
    * Attach files in form data under body in postman  --> POST request 

3 - http://localhost:3000/api/v1/session/<session_id> 
    * Delete a session -->DELETE request

4 - http://localhost:3000/api/v1/session/<session_id>/file/<file_name_with_extension>
    * Delete a specific file from a given session ID --> DELETE request
