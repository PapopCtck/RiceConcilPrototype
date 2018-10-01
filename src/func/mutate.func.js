function sendData(data){
    function splitData(dataCheck){
        let TableDes = []
        if(dataCheck['TableDes']){
            TableDes = dataCheck['TableDes']
        }
        Object.keys(dataCheck).map((data)=>{
            if(data != 'TableDes'){
                if(!dataCheck[data]){
                    dataCheck[data] = 0
                }
            }
        })
        let dumpData = dataCheck
        dumpData['TableDes'] = []
        return { dumpData : dumpData , TableDes : TableDes}
    }
    return new Promise((resolve)=>{
        fetch(`https://45c8udghcj.execute-api.ap-southeast-1.amazonaws.com/default/InsertData`,{
            method:"POST",
            body : JSON.stringify(splitData(data))
        })
        .then(res => {
            return res.json()
        }).then(data=>console.log(data))
    })
}

module.exports = {
    sendData : sendData
}