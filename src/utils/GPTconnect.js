
//https://appsail-50024371272.development.catalystappsail.in
const  completeChat = async(model, input) => {
    const response = await fetch(
      `https://appsail-50024371272.development.catalystappsail.in/run-chat`,
      {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',  // Set content type to JSON
        },
        body: JSON.stringify({ model: model, input: input }),  // Stringify the object
        
      }
    );
    const result = await response.json();
    return result;
  }
  
export  {
    completeChat
}