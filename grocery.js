
async function getGroceries() {
  var response = await fetch("https://yoco-students-api-server.herokuapp.com/v1/grocery-shop/");
  var data = await response.json();
  PopulateTable(data);
}

function PopulateTable(data) {
  var tab = `
                <tr>
                  <th>ID</th>
                  <th>Currency Code</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Company</th>
                </tr>`;
  for (var item in data){
    tab+= `<tr>
              <td>${data[item]['id']}</td>
                <td>${data[item]['currency_code']}</td>
                <td>${data[item]['name']}</td>
                <td>${data[item]['price']}</td>
                <td>${data[item]['company']}</td>
              </tr>`;
  }
  document.getElementById("groceries").innerHTML = tab;
}
getGroceries();