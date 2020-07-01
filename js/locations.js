import './jquery'
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