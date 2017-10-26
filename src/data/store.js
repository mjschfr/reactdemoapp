var initialData = {
	users: [
 {
    "id": "59f008912794b8161d5962b7",
    "index": 0,
    "firstName": "Sanford",
    "lastName": "Farrell",
    "company": "NSPIRE",
    "email": "sanfordfarrell@nspire.com",
    "phone": "+1 (821) 501-2519",
    "tags": [
      "labore",
      "labore",
      "nostrud",
      "dolore",
      "ut",
      "quis",
      "officia"
    ],
    "favoriteFruit": "banana"
  },
  {
    "id": "59f008916d5b9eb55852aaa2",
    "index": 1,
    "firstName": "Estelle",
    "lastName": "Sellers",
    "company": "TALKALOT",
    "email": "estellesellers@talkalot.com",
    "phone": "+1 (956) 449-2424",
    "tags": [
      "pariatur",
      "sit",
      "aliqua",
      "pariatur",
      "laborum",
      "ut",
      "duis"
    ],
    "favoriteFruit": "strawberry"
  }
	]
};

export function userData(state = initialData, action){

	switch(action.type){

		case 'SET_USER_INFO':

		//do something here
		return null

		case 'SELECT_USER':

		return null

		case 'ADD_USER':

debugger;
		return null

		default:
		return state;
	}
}

export const addUser = (value) => {
	return {
		type:'ADD_USER',
		value
	}
}