//JSON
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};
console.log(JSON.stringify(xiaoming))
// function convert(key,value) {
// 	if(typeof value == 'string'){
// 		return value.toUpperCase();
// 	}
// 	return value;
// 	// body...
// }
// console.log(JSON.stringify(xiaoming,convert,' '))
console.log(JSON.parse('[1,2,3,true]')); // [1, 2, 3, true]
console.log(JSON.parse('{"name":"小明","age":14}')); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45

var a=JSON.parse('{"name":"xiaoming","age":12}',function (key,value){
	if(key=='name'){
		return value+'tongxue';
	}
	console.log(typeof(value))
	return value;
});
console.log(a)


console.log(JSON.parse('{"query":{"count":1,"created":"2016-10-16T05:32:32Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Beijing, Beijing, CN","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151330/","description":"Yahoo! Weather for Beijing, Beijing, CN","language":"en-us","lastBuildDate":"Sun, 16 Oct 2016 01:32 PM CST","ttl":"60","location":{"city":"Beijing","country":"China","region":" Beijing"},"wind":{"chill":"66","direction":"225","speed":"7"},"atmosphere":{"humidity":"65","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"6:27 am","sunset":"5:32 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Beijing, Beijing, CN at 12:00 PM CST","lat":"39.90601","long":"116.387909","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151330/","pubDate":"Sun, 16 Oct 2016 12:00 PM CST","condition":{"code":"28","date":"Sun, 16 Oct 2016 12:00 PM CST","temp":"65","text":"Mostly Cloudy"},"forecast":[{"code":"28","date":"16 Oct 2016","day":"Sun","high":"68","low":"53","text":"Mostly Cloudy"},{"code":"32","date":"17 Oct 2016","day":"Mon","high":"68","low":"51","text":"Sunny"},{"code":"32","date":"18 Oct 2016","day":"Tue","high":"68","low":"48","text":"Sunny"},{"code":"34","date":"19 Oct 2016","day":"Wed","high":"72","low":"51","text":"Mostly Sunny"},{"code":"28","date":"20 Oct 2016","day":"Thu","high":"64","low":"56","text":"Mostly Cloudy"},{"code":"26","date":"21 Oct 2016","day":"Fri","high":"61","low":"56","text":"Cloudy"},{"code":"28","date":"22 Oct 2016","day":"Sat","high":"58","low":"51","text":"Mostly Cloudy"},{"code":"30","date":"23 Oct 2016","day":"Sun","high":"56","low":"43","text":"Partly Cloudy"},{"code":"28","date":"24 Oct 2016","day":"Mon","high":"57","low":"42","text":"Mostly Cloudy"},{"code":"30","date":"25 Oct 2016","day":"Tue","high":"59","low":"47","text":"Partly Cloudy"}],"description":"<![CDATA[<img src=\\"http://l.yimg.com/a/i/us/we/52/28.gif\\"/>\\n<BR />\\n<b>Current Conditions:</b>\\n<BR />Mostly Cloudy\\n<BR />\\n<BR />\\n<b>Forecast:</b>\\n<BR /> Sun - Mostly Cloudy. High: 68Low: 53\\n<BR /> Mon - Sunny. High: 68Low: 51\\n<BR /> Tue - Sunny. High: 68Low: 48\\n<BR /> Wed - Mostly Sunny. High: 72Low: 51\\n<BR /> Thu - Mostly Cloudy. High: 64Low: 56\\n<BR />\\n<BR />\\n<a href=\\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151330/\\">Full Forecast at Yahoo! Weather</a>\\n<BR />\\n<BR />\\n(provided by <a href=\\"http://www.weather.com\\" >The Weather Channel</a>)\\n<BR />\\n]]>","guid":{"isPermaLink":"false"}}}}}}'))