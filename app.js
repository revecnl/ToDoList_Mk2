// 항목추가하기, 생성 갯수 체크하기
function addRow() {
    let object;
    object = document.getElementById("tableshow").insertRow();

    let object_check_box = object.insertCell();
        object_check_box.innerHTML = "<input id='todo_check_box' type='checkbox' name='Work check inner' onclick='getcount()'/>";

    let object_todo_date_box = object.insertCell();
        object_todo_date_box.innerHTML = "<input id='todo_date' type='date'/>";

    let object_work_list = object.insertCell();
        object_work_list.innerHTML = "<input id='todo_work_list' type='text' name='Work list' placeholder='write your job' size='40' maxlength='50'>" 
    
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
    const query = 'input[name="Work check inner"]:checked';
    const selected = document.querySelectorAll(query);

    const selectedcount =
          selected.length;

    document.getElementById('complete-view').innerHTML
    = selectedcount;
}

//항목 삭제하기
function delRow(){
    let miuns = document.getElementById("tableshow");
    for(var i = 0; i<miuns.rows.length;i++){
        var chkbox = miuns.rows[i].cells[0].childNodes[0].checked;

    if(chkbox){
        miuns.deleteRow(i>0);
        i--;
        }
    }


    
}

//체크박스 전체선택

function checkAll(checkAll){
    let checkboxes=document.getElementsByName("Work check");
    let checkboxes2=document.getElementsByName("Work check inner");


    console.log(checkboxes);
    checkboxes.forEach((checkbox)=>{
        console.log(checkbox    );
        checkbox.checked=checkAll.checked;
    })

    
    console.log(checkboxes2);
    checkboxes2.forEach((checkbox)=>{
        console.log(checkbox    );
        checkbox.checked=checkAll.checked;
    })

    const query = 'input[name="Work check inner"]:checked';
    const selected = document.querySelectorAll(query);

    const selectedcount =
          selected.length;

    document.getElementById('complete-view').innerHTML
    = selectedcount;
}


function alertsave(){
    alert("아직 저장기능을 이용 할 수 없습니다.");
}