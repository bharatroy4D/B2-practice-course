// const friends = ["jeet", "deba"];
// const schoolFriends = ["pankoj", "binodon"];
// const collageFriends = ["manikul", "roman"]
// friends.push(schoolFriends)
// friends.push(...collageFriends)
// console.log(friends);

// const user = {name:"Bharat", age:"24"};
// const otherInfo = {study:"intermediate", target:"web developer"}
// const userInfo = {...user, ...otherInfo};
// console.log(userInfo);

const sendInvite = (...friends: string[])=>{
friends.forEach((friend:string)=>console.log(friend))
}
sendInvite("rahul", "bokul", "molesh", "kolesh", "tapos")