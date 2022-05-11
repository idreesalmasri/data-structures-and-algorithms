# Hashtables
Hash Tables are a data structure that allow you to create a list of paired values. You can then retrieve a certain value by using the key for that value, which you put into the table beforehand.
## Challenge
Implement a Hashtable Class with the following methods:
### set
- Arguments: key, value
- Returns: nothing
- This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
- Should a given key already exist, replace its value from the value argument given to this method.

### get
- Arguments: key
- Returns: Value associated with that key in the table

### contains
- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.


### keys
- Returns: Collection of keys

### hash
- Arguments: key
- Returns: Index in the collection for that key

## Approach & Efficiency
- get method :Retrieving based on a key returns the value stored
 big o time :o(n)
- contains method :returns null for a key that does not exist in the hashtable and true if its exist
 big o time :o(n)
- keys method : returns a list of all unique keys that exist in the hashtable
big o time :o(n^2)
- hash:return the index of the key value obj 
big o time :o(n)
- set:set the key and value pair in the table
big o time :o(n) 

## API
used methods(built in):
split:i used this method to convert the key to array of charachters big o time =>o(n)
charCodeAt:i used it to calculate the ascii num for each char big o time =>o(1)
reduce :i used it to calcuate the suumation of the charachters ascii num  big o time =>o(n)
Object.keys( ):i use it to abtain the all keys in my array

