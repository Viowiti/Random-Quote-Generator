const quota = [
    '"We all know the truth: But in times of crisis, the wise build bridges, while the foolish build barriers." ...Tchala',
    '"Don\'t waste it. Don\'t waste your life." ... Ho Yinsen',
    '"Whatever happens tomorrow, you must promise me one thing. That you will stay who you are, not a perfect soldier, but a good man."-Dr. Abraham Erskine',
    '"I know you were only doing what you believe in, and that\'s all any of us can do, it\'s all any of us should."- Captain America',
    '" You never know. You hope for the best and make do with what you get." -Nick Fury',
    '"At some point, we all have to choose, between what the world wants you to be, and who you are." -Natasha Romanoff',
    '"The world has changed and none of us can go back. All we can do is our best, and sometimes the best that we can do is to start over." - Peggy Carter',
    '"Compromise where you can. Where you can\'t, don\'t. - Peggy Carter',
    '"Just bury me in the ocean with my ancestors that jumped from the ships, because they knew death was better than bondage." - Erk Killmonger',
    '"No man can win every battle, but no man should fall without a struggle." - Peter Parker',
    '"With great power comes great responsibility." -Stan Lee',
    '"If we can\'t protect the earth, you can be damn well sure we\'ll avenge it!" - Tony Stark',
    '"If we can\'t accept limitations, then we\'re no better than the bad guys." - Tony Stark',
    '“Part of the journey is the end.” - Tony stark',
    '“He may have been your father, boy, but he wasn’t your daddy.” - Yondu',
    '“Uneasy lies the head that wears the crown" - Nick Fury',
    '“I don\'t know if you\'ve been in a fight before but there\'s usually not this much talking.” - Sam Wilson',
    '“Anybody on our side hiding any shocking and fantastic abilities they’d like to disclose? I’m open to suggestions.” - Tony Stark',
    '“Ah, she left me. And my mom died too. And my dad got deported. But I got the van!” - Scot Lang',
    '“Finger on throat means death! Metaphor!” - Drax',
    '“Before we get started, does anyone want to get out?” -Steve Rodgers',
    '“Puny god.” -Hulk',
    '“There’s only one God, ma’am, and I’m pretty sure he doesn’t dress like that.” -Steve Rodgers',
    '“You call me ‘young lady\' again, I\'ll shove my foot up somewhere it\'s not supposed to be.” -Maria Rambeau',
    '“He just kicked your ass, full-size. You really want to find out what it\'s like when you can\'t see him coming?” -Howard Stark',
    '“You get hurt, hurt \'em back. You get killed… walk it off.” -Captain America',
    '“That’s my secret, Captain. I’m always angry.” -Bruce Banner',
    '“He will be the first in a new breed of super-soldiers. And they will personally escort Adolf Hitler to the gates of Hell.” -Colonel Philips'
];


function getQuote(){
    let i = Math.floor(Math.random() * 27);
    document.getElementById("newQuoteSection").innerHTML = quota[i];
}

let thisYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = "Copyright " + thisYear;