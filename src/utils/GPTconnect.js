
const  completeChat = async(model, input) => {
    const response = await fetch(
      `http://localhost:4000/run-chat`,
      {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',  // Set content type to JSON
        },
        body: JSON.stringify({ model: model, input: input }),  // Stringify the object
        
      }
    );
    const result = await response.json();
    console.log(result)
    return result;
  }
  
export  {
    completeChat
}