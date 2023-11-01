// https://www.youtube.com/watch?v=H8Sh9_n1MPA&ab_channel=NextframeDev
import cheerio from 'cheerio';
import axios from 'axios';
// import fs from 'fs';
const baseURL = ('https://www.booking.com/hotel/bg/sweet-home-burgas.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYAQm4ARjIAQzYAQHoAQH4AQOIAgGoAgS4AoGwgKoGwAIB0gIkZDc2YmEwM2YtZTI5Ni00MjZhLWI5OWYtMjgxZmY0MWQxMjZh2AIF4AIB&sid=f99f82e5bbee21adcf00e0510663be9a&all_sr_blocks=364127801_147181022_1_0_0;checkin=2024-08-28;checkout=2024-08-30;dest_id=-832673;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;highlighted_blocks=364127801_147181022_1_0_0;hpos=1;matching_block_id=364127801_147181022_1_0_0;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=364127801_147181022_1_0_0__24462;srepoch=1698699313;srpvid=14f89316a080031c;type=total;ucfs=1&&fbclid=IwAR2qIuRCXcfjogi0E9LMY8z8o1TvdF8YWivHxIl2A4wQPsdYlgbAJNzbnek#hotelTmpl');

// let scoredFromBooking = {}


axios.get(baseURL)
.then(res => {
    const $ = cheerio.load(res.data);

    //  $('[data-testid="review-score-right-component"]').each((i, element) => {
    //     const raiting = $(element).find('div.d86cee9b25').text();      
    // scoredFromBooking['score'] = raiting;

    $('[data-testid="featuredreview-text"]').each((i, element) => {
        const comments = $(element).find('div.b5726afd0b').text();
        console.log('li element', comments);
        // const raiting = $(element).find('li.e375bc2404').text();      
    // scoredFromBooking['score'] = raiting;
// console.log(raiting);
    // fs.writeFile('bookingRankNumber.json', JSON.stringify(scoredFromBooking), (err) => {
    // if(err) throw err;
    // console.log('File succesfully saved!');
// });
});
})
.catch((err) => {
    console.log('Maybe not correct URL addres. Server respond with:', err.errors);
});






