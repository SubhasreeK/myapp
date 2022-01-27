import Route from '@ember/routing/route';
export default class IndexRoute extends Route{
    async model(){
        return{
            title:"RMK RajaMaligai",
            owner:"Velusamy",
            city:"Palani",
            location:{
                lat:10.457592,
                lng:77.519820,
            },
            category:"Palace",
            type:"Standalone",
            bedrooms: "25",
            image:'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        };
    }
}