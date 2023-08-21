interface TravellingMode{
    transport(): void;
}

class Air implements TravellingMode
{
    console.log('travelling by air')
    console.log(' ')
}
class road implements TravellingMode
{
    transport(): void {
        console.log('bus or car')
    }
}

var travle = new 