// Async and Await are the keywords used to create a separate thread and the concept comes from the multi-threaded programming languages
// which evantually creates a separate mini stack to do its execution by using the processor thread

// async - keyword is used to specify the function which you want to execute on separate thread
// await - keyowrd is used to fetch the information done via async function and show result on main stack
// each or multiple operations on a separate thread will be synchronous


//multi-threading

//main thread - 200 req/sec

// if it rises from 200 to 300 req/sec <responses will be slowed by 50%>

// main thread => 200 req/sec <100 req/sec start redirecting to other threads>
// thread1 => to handle 50 req/sec  --> 100-150
// thread2 => to handle 50 req/sec  --> 150-200
// thread3 => to handle 50 req/sec  --> 200-250
// thread4 => to handle 50 req/sec  --> 250-300



function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved',
                    "task" : "Learning async await"
                    });
            }, 2000);
    });
}


console.log("async Execution starts");

//async creates a new thread to execute API's that we see will take some time

async function asyncCall() {

    console.log("inside async call function")

    await resolveAfter2Seconds().then((data)=> console.log(data)) //this will be a sync call means wait to complete before moving to next line

    console.log("inside async call function - step 2")

    await resolveAfter2Seconds().then((data)=> console.log(data))

    console.log("inside async call function - done")
}

asyncCall();

console.log("async Execution ends - outer");


//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)
