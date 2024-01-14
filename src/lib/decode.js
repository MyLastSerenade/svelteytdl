/* export async function getData(string: string) {
    var reader = new FileReader();
    const res = await fetch(string)
    .then(response => response.arrayBuffer())
    .then(ab => {
        reader.onload = function(event) {
            var data = event.target?.result?.split(',')
             , decodedImageData = btoa(data[1]);                    // the actual conversion of data from binary to base64 format
            callback(decodedImageData);        
        };
       return reader.readAsArrayBuffer(new Blob([ab]));
    })
    return res
   
} */