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

  //Activity 3 is done as I have already used modern technique async await rather then catch

  //Activity 4 Fetching data from api
  fetch("https://api.tvmaze.com/search/shows?q=girls",)
  .then ( response =>{
    if(!response.ok){
        console.error("the erro came ",response.statusText)
    }
    // Parse the JSON data
    return response.json();
  })
  .then(data => {
    console.log(data)
  }).catch(error => {
    // Handle any errors
    console.error('Error fetching data:', error);
  });
//using async await

const fetchData  = async () =>{
    try {
        const apiEndpoint = 'https://api.tvmaze.com/search/shows?q=girls';
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}
//Promis.all :It return value when all the promise get resolved
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
//Promise .race  first complete first win
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 4 resolved after 2 seconds');
  }, 2000);
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved after 1 second');
  }, 1000);
});
Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // "Promise 2 resolved after 1 second"
  })
  .catch((error) => {
    console.error(error);
  });