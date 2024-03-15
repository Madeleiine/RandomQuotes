var quote = [
'"Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before."',
'“You’re off to great places, today is your day. Your mountain is waiting, so get on your way.”',
'“You’re braver than you believe, and stronger than you seem, and smarter than you think.”',
'“Positive thinking will let you do everything better than negative thinking will.”',
'“When you are enthusiastic about what you do, you feel this positive energy. It’s very simple.”',
'“Happiness is an attitude. We either make ourselves miserable, or happy and strong. The amount of work is the same.”',
'“Every day may not be good... but there’s something good in every day.”',
'“The more you praise and celebrate your life, the more there is in life to celebrate.',
'“The good life is a process, not a state of being. It is a direction, not a destination.',
'“A truly happy person is one who can enjoy the scenery while on a detour.”',
'“Experience is not what happens to you; it is what you do with what happens to you.”',
'“I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.”',
'“Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.”'


]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quote.length));
        document.getElementById('random').innerHTML = quote[randomNumber];
}



