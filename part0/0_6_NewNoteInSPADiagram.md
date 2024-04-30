```mermaid

sequenceDiagram
    participant browser
    participant server

    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
       
    browser-->>server: Request Payload: {content: "bayern", date: "2024-04-30T19:12:19.815Z"}

    server-->>browser: Response {"message":"note created"}

    deactivate server


    Note right of browser: The notes that the user has created are shown
    
    Note right of browser:but if the "new_note_spa" is executed in two windows or tabs, the changes of each one will not be visible until the page is updated again.

   ```