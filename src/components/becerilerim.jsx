
const beceri=[
    {id:1, name:"B2 ehliyet", sahip:true},
    {id:2, name:"Silahlı güvenlik", sahip:true},
    {id:3, name:"Robot operatörü", sahip:true},
    {id:4, name:"React.js senior developer", sahip:false},
    {id:5, name:"Siber Güvenlik expert", sahip:false},
    {id:6, name:"Full stack developer", sahip:false},
    ]




function Becerilerim()  {
    return (
        <>
        <div>
            <h1>Sahip olduklarım</h1>
            {beceri

            .filter(item => item.sahip==true)
            .map(item =>
                 <li key={item.id}>
                     {item.name}
                 </li>
             )
             
             }
            
            

        </div>
        <div>
            <h1>Gelecek plan</h1>
            {beceri
            .filter(item => item.sahip==false)
            .map(item =>
                 <li key={item.id}>
                     {item.name}
                 </li>
             )
            }
        </div>

        </>
    )
}



export default Becerilerim