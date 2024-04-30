```mermaid


sequenceDiagram
    participant browser
    participant server

    activate server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    browser-->>server: Form Data : {note : "text_example"}
    deactivate server

    activate server
    server->>server: Execute method push 

    Note left of server: The server starts executing the JavaScript code that create a new note obtaining "content" from Form Data and asing the current date to "date"


    server-->>browser: Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "2", "date": "2024-04-30T09:29:41.262Z" }, ...  "content": "test_example", "date": "2024-04-30T16:26:14.045Z"]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes and show new note that was created when consult post method "new_note"

   ```