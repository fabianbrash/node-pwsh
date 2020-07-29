import Shell from 'node-powershell'

const myApp =  () => {

    const ps = new Shell({
        verbose: true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    
    ps.addCommand('Write-Host Hello World!!')
    ps.invoke()
    .then(output => {
        console.log(output);
        ps.dispose();
    })
    .catch(err => {
        console.log(err);
        ps.dispose();
    });

}


const myApp2 = async () => {

    const ps2 = new Shell({
        verbose: true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    
    try {

        ps2.addCommand('Write-Host Hello World 2!!')
        const output2 = await ps2.invoke()
        console.log(output2);
        ps2.dispose();
    }
    catch(err) {

         console.log(err);
         ps2.dispose();
    }
   
       


}

myApp();
myApp2();
//setTimeout(myApp2, 1000);