
#API Docs:

 >The API methods logic is listed below:
 
- IdManager(n)
    - has a pool of available ids 
    - has collection of occupied ids
    - generateIds(n)
    - generates id pool of (n) length
 
- getId 
  - gets the last id from the available id pool
 - changes the last id and adds the value to the occupiedIds collection

- freeId
    - checks if the id that is trying to be freed is actually in use
        - if so, it will remove the id from the occupiedIds collection and add the value to availableIds collection
        - else, console log a message to the User
  
- isUsed
    - checks to make sure we are selecting the correct id