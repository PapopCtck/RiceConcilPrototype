function viewAllTable(){
    return new Promise((resolve)=>{
        fetch('https://45c8udghcj.execute-api.ap-southeast-1.amazonaws.com/default/GetItem')
        .then(res => res.json())
        .then(data => resolve(data))
    })
}
function checkLicense(licenseNum){
    if(licenseNum){
        return new Promise ((resolve)=>{
            Promise.all([
                fetch(`http://209.97.170.126:443/api1?code=${licenseNum}`).then(res => res.json())
                ,fetch('https://45c8udghcj.execute-api.ap-southeast-1.amazonaws.com/default/getPassCheck',{
                    method:"POST",
                    body : JSON.stringify({"LicenseID":licenseNum})
                }).then(res => res.json())]
            ).then((value)=>{
                let [a,b] = value
                if(a !== "Not Found" && a !== 'Random queryID'){
                    a = a['PaperlessDetail']
                    a = a['LicenseDetail']
                    Array.isArray(a) ? a = a : a = [a]
                    if(b){
                        let Arr = []
                        a.map((value,idx)=>{
                            let temp = {}
                            function findBalnce(value,b,idx){
                                let tempBalance = parseInt(value['NetWeightKGM'])
                                b.map((data)=>{
                                    data = data.DataTable
                                    if(idx == data['LicenseIDSlot']){
                                        tempBalance -= data['NetWeight']
                                    }
                                })
                                return tempBalance
                            }
                            temp['ID'] = idx
                            temp['LicenseId'] = licenseNum
                            temp['balance'] = findBalnce(value,b,idx)
                            Arr.push(temp)
                        })
                        resolve(Arr)
                    }else{
                        let Arr = []
                        a.map((value,idx)=>{
                            let temp = {}
                            temp['ID'] = idx
                            temp['LicenseId'] = licenseNum
                            temp['balance'] = value['NetWeightKGM']
                            Arr.push(temp)
                        })
                        resolve(Arr)
                    }
                }else{
                    console.log(0)
                }
    
            })
        }) 
    }

}

module.exports = {
    viewAllTable : viewAllTable,
    checkLicense : checkLicense
}