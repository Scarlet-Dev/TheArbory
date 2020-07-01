import './jquery'
var fields = ['id',
    'Genus','Species', 
    'CommonName', 'Category',
    'Family', 'Kingdom', 
    'NativeStatus', 'Invasive'];

async function searchBy(fieldName, fieldValue){
    var searchData = USFloraData.find();

    return await searchData;
}

async function filterBy(fieldName, fieldValue){
    var filteredData = USFloraData.filter();

    return await filteredData;
}

function toggleStateFloraInfo(){
    //On a state select get data for 

}