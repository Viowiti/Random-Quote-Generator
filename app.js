const quota = [
    "Part of the journey is the end",
    "Tony, trying to get you to stop has been one of the few failures of my entire life.",
    "No amount of money ever bought a second of time.",
    "You know, I keep telling everybody they should move on and grow. Some do. But not us.",
    "It's not about how much we lost. It's about how much we have left.",
    "No mistakes. No do-overs. Look out for each other. This is the fight of our lives.",
    "The hardest choices require the strongest wills.",
    "Today we don’t fight for one life, we fight for all of them.",
    "It’s not enough to be against something. You have to be for something better.",
    "I would rather be a good man than a great king.",
    "I choose to run towards my problems, and not away from them. Because’s that–because’s that what heroes do.",
    "But a thing isn’t beautiful because it lasts. It’s a privilege to be among them.",
    "The world has changed and none of us can go back. All we can do is our best, and sometimes the best that we can do is to start over.",
    "Faith is my sword. Truth is my shield. Knowledge my armor.",
    "I had my eyes opened. I came to realize that I had more to offer this world than just making things that blow up.",
    "No man can win every battle, but no man should fall without a struggle.",
    "No man can win every battle, but no man should fall without a struggle.",
    "I can do this all day.",
    "There’s no throne, there is no version of this, where you come out on top. Maybe your army comes and maybe it’s too much for us, but it’s all on you. Because if we can’t protect the Earth, you can be damned well sure we’ll avenge it."
];
console.log(quota.length)

function getQuote(){
    let i = Math.floor(Math.random() * 20);
    document.getElementById("newQuoteSection").innerHTML = quota[i];
}
