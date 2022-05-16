// 항목추가하기, 생성 갯수 체크하기
function addRow() {
    let object;
    object = document.getElementById("tableshow").insertRow();

    let object_check_box = object.insertCell();
        object_check_box.innerHTML = "<input id='todo_check_box' type='checkbox' name='Work check' onclick='getcount()'/>";

    let object_todo_date_box = object.insertCell();
        object_todo_date_box.innerHTML = "<input id='todo_date' type='date'/>";

    let object_work_list = object.insertCell();
        object_work_list.innerHTML = "<input id='todo_work_list' type='text' name='Work list' placeholder='write your job' size='35' maxlength='50'>" 
    
    let object_save = object.insertCell();
        object_save.innerHTML = "<input type='button' id='todo_save' name='summit' onclick='alertsave()' value='Save' ></input>"

    //let object_del = object.insertCell();
        //object_del.innerHTML = "<button id='todo_del' name='delete' onclick='delRow()'>Del</button>"

    let tmp = document.getElementById("object-view").value;
        tmp++;
    
    document.getElementById("object-view").value = tmp;
    }

//체크 갯수 올리기
function getcount(){
    const query = 'input[name="Work check"]:checked';
    const selected = document.querySelectorAll(query);

    const selectedcount =
          selected.length;

    document.getElementById('complete-view').innerHTML
    = selectedcount;
}

//항목 삭제하기
function delRow(){
    let query = document.getElementById("tableshow");
    for(var i = 0; i<query.rows.length;i++){
        var chkbox = query.rows[i].cells[0].childNodes[0].checked;

    if(chkbox){
        query.deleteRow(i);
        i--;
        }
    }
    
}

//체크박스 전체선택
function selectAll(selectAll){
    const checkboxes 
    =document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkboxes.checked  = selectAll.checked
    })
}


function alertsave(){
    console.log = ("alert");
}