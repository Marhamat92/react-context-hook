import React from "react";

//firstly we used below option to create context object with default value. But after we create provider inside app.js we can remove default value from here. Because provider will give value to all child components according to our choices with our button clicks which we have created in app.js. 
// export default React.createContext("english");

export default React.createContext(""); //this is empty string because we have created provider inside app.js and we have given default value to it. So we can remove default value from here.