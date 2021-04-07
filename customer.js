function getAllCustomers(){

    const http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/customers');
    http.send();

    http.onreadystatechange = () =>{

        if( http.readyState === 4){
            var response = JSON.parse(http.response);
            console.log(response)
        }

        let custlist = '';

        response.forEach(customer => {
            
            custlist += `<tr><td>${customer.id}</td><td>${customer.customername}</td><td>${customer.emailid}</td></tr>`

            
        });

        document.getElementById("clist").innerHTML = `<table border=\"2\">${custlist}</table>`;


    }

}

getAllCustomers();