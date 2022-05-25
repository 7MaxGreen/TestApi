$(document).ready(() => {
    let btn = $('#btn');
    let container = $("#new-things");
    container.hide();

    btn.on('click', () =>{
        fetch('NewThings.json')
        .then(response => response.json())
        .then(result => {

            for(let i=0; i<result.length; i++){

              let index = i;

                $('.container').append(`
                <div id="new-things">
                <table class="table table-hover">
                    <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">areaId</th>
                          <th scope="col">joinedWith</th>
                          <th scope="col">sku</th> 
                          <th scope="col">defaultSku</th>
                          <th scope="col">status</th> 
                          <th scope="col">countActive</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>${result[index].id}</td>
                          <td>${result[index].areaId}</td>
                          <td>${result[index].joinedWith}</td>
                          <td>${result[index].sku}</td>
                          <td>${result[index].defaultSku}</td>
                          <td>${result[index].status}</td>
                          <td>${result[index].countActive}</td>
                        </tr>
                      </tbody>
                  </table>
            </div>
            <br>
            <br>
            `
                )
                container.fadeIn(500);
                btn.fadeOut(500);
            }
        })
    })
    
})