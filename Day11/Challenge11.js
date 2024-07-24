//Activity 1
//1
const delayedMessage = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is the resolved message after 2 seconds");
      }, 2000);
    });
  };
  
  const displayMessage = async () => {
    try {
      const message = await delayedMessage();
      console.log(message);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  displayMessage();

  //Activity 2
  const delayedMessage2 = () =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() =>{
            reject(new Error("This is the error message after two seconds"))
        },2000);
    })
  };
  const handleError =async () =>{
    try {
        await delayedMessage2();
    } catch(error){
        console.error(error.message)
    }
  }
  handleError();

//Chaining promise
const firstAsyncOpeation = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("The promise is resolved in 2 seconds")
        },2000)

    })
}

const secondAsyncOperation = (previousResult) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${previousResult}, and second operation completed`);
      }, 2000);
    });
  };
  
  const thirdAsyncOperation = (previousResult) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${previousResult}, and third operation completed`);
      }, 2000);
    });
  };
  //excution
  const executePromise =async () => {
    try {
        const result1 = await firstAsyncOpeation();
        console.log(result1);
        const result2 = await secondAsyncOperation();
        console.log(result2);
        const result3 = await thirdAsyncOperation(result2);
        console.log(result3);
    }catch(error){
        console.error("An error occuered ",error);
    }
  }
  executePromise();