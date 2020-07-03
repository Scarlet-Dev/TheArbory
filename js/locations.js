import './jquery'

var fields = ['id',
    'Genus','Species', 
    'CommonName', 'Category',
    'Family', 'Kingdom', 
    'NativeStatus', 'Invasive'];

const USFloraData = []

async function getFloraInfo(limit=10, additionalFields = [""]){
    if(additionalFields == null){
        fields.concat(...additionalFields);
    }
    
    var plantDB = `https://plantsdb.xyz/search&limit=${limit}&fields=${fields.values}`;
    USFloraData = await fetch(plantDB).then(data => {return data})
    
}

async function searchBy(fieldName, fieldValue){
    var searchData = USFloraData.find();

    return await searchData;
}

async function filterBy(fieldName, fieldValue){
    var filteredData = USFloraData.filter();

    return await filteredData;
}

function toggleStateView(stateId){
    //First get div element for state pic holder
    var stateView = $('#stateView');

    //Next change the view 
    stateView.change()
}

function toggleStateFloraInfo(){
    //On a state select get data for 

}