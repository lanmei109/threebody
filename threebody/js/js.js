function openDialog(){
    let dialog = document.querySelector("#dialog")
    dialog.showModal();
}

function closeDialog(){
    let dialog = document.querySelector("#dialog")
    dialog.close();
}

function openRegister(){
   let register = document.querySelector("#register")
   register.showModal();
}

function closeRegister(){
   let register = document.querySelector("#register")
   register.close();
}


function getTime()
{
   var date1 = new Date();
   var year=date1.getFullYear();
   var mon=date1.getMonth()+1;
   var day=date1.getDate();
   var hh=date1.getHours();
   var mm=date1.getMinutes();
   var ss=date1.getSeconds();
   var str=year+"年"+mon+"月"+day+"日"+hh+"时"+mm+"分"+ss+"秒";
   // console.log(str);
   document.getElementById("p_time").innerHTML=str;
   setInterval("getTime()",1000);
}
function check_form(){
   var u_name=document.getElementsByName("uname")[0].value;
   var u_password=document.getElementsByName("upword")[0].value;
   var pattern =/^[A-Za-z]+$/;
   var chk=document.getElementsByName("tongyi")[0];
   if(u_name=="")
   {
       alert("用户名不能为空")
       document.getElementsByName('uname')[0].focus();
       return false;
   }
   else if(!pattern.test('uname'))
       {
           alert("用户名只能是字母或数字，4-40的长度")
           document.getElementsByName('uname')[0].focus();
           return false;
       }
   else if(u_password=="")
   {
       alert("密码不能为空")
       document.getElementsByName('upword')[0].focus();
       return false;
   }
   else if(!chk.checked)
   {
       alert("请先同意个人隐私保护政策");
       return false;
   }
   alert("注册成功")
   
}


$(function(){
    $(".addbtn").click(function(){
        var tempNum=$(this).parent().find(".tempNum");
        var newNum=Number(tempNum.text())+1;
        if(newNum>1){
            $(this).parent().find(".delbtn").prop("disabled",false);
        }
        tempNum.text(newNum);

        var unitPrice=$(this).parent().parent().find(".unitPrice");
        var tempPrice=$(this).parent().parent().find(".tempPrice");
        var newPrice=Number(tempPrice.text())+Number(unitPrice.text())
        tempPrice.text(newPrice);

        

        if($(this).parent().parent().find("[name='ch1']").is(":checked"))
        {
            var totalNum=Number($(".totalNum").text())
            var totalPrice=Number($(".totalPrice").text())
            totalNum++;
            totalPrice+=Number(unitPrice.text());
            $(".totalNum").text(totalNum)
            $(".totalPrice").text(totalPrice)
        }



        
    })

    



    $(".delbtn").click(function(){
        var tempNum=$(this).parent().find(".tempNum");
        if(Number(tempNum.text())==1){
            $(this).prop("disabled",true)
        }
        else{
            var newNum=Number(tempNum.text())-1;
            tempNum.text(newNum);

            var unitPrice=$(this).parent().parent().find(".unitPrice")
            var tempPrice=$(this).parent().parent().find(".tempPrice")
            var newPrice=Number(tempPrice.text())-Number(unitPrice.text())
            tempPrice.text(newPrice);

            
            if($(this).parent().parent().find("[name='ch1']").is(":checked"))
            {
                var totalNum=Number($(".totalNum").text())
                var totalPrice=Number($(".totalPrice").text())
                totalNum--;
                totalPrice-=Number(unitPrice.text())
                $(".totalNum").text(totalNum)
                $(".totalPrice").text(totalPrice)
            }
            
        }

        
    })
    $("[name='ch1']").click(function(){
        
        // console.log(totalNum)
       
        var tempPrice=Number($(this).parent().parent().find(".tempPrice").text())
        var tempNum=Number($(this).parent().parent().find(".tempNum").text())

       //获得当前总计
        var totalNum=Number($(".totalNum").text())
        var totalPrice=Number($(".totalPrice").text())
        if($(this).is(":checked")){
            totalNum+=tempNum;
            totalPrice+=tempPrice;
        }
        else{
            totalNum-=tempNum;
            totalPrice-=tempPrice;
        }

        $(".totalNum").text(totalNum)
        $(".totalPrice").text(totalPrice)
    })

    $("[name='checkAll']").click(function(){
        $("[name='ch1']").prop("checked",$(this).prop("checked"))
        var totalNum = 0
        var totalPrice = 0
        if($(this).is(":checked")){
            $(".tempNum").each(function(){
                totalNum += Number($(this).text());
            })
            $(".tempPrice").each(function(){
                totalPrice += Number($(this).text());
            })
        }
        $(".totalNum").text(totalNum)
        $(".totalPrice").text(totalPrice)
    })


    $(".removebtn").click(function(){
        if($(this).parent().parent().find("[name='ch1']").is(":checked")){
            var totalNum=Number($(".totalNum").text())
            var totalPrice=Number($( ".totalPrice" ).text())
            var tempNum=Number($(this).parent().parent().find(".tempNum").text());
            var tempPrice=Number($(this).parent().parent().find(".tempPrice").text());
            totalNum-=tempNum
            totalPrice-=tempPrice
            $(".totalNum").text(totalNum)
            $(".totalPrice").text(totalPrice)
        }
        $(this).parent().parent().remove();
    }) 

    
}) 
 
 

function updateCheckAll(){
    var countAll=$("input[name='ch1']").length;
    var countChecked=$("input[name='ch1']:checked").length;

    if(countChecked==countAll&&countAll!=0){
        $("input[name='checkAll']").prop("checked",true)
    }
    else{
        $("input[name='checkAll']").prop("checked",false)
    }
}

function check_form(){
    var u_name=document.getElementsByName("uname")[0].value;
    var u_password=document.getElementsByName("upword")[0].value;
    var pattern =/^[A-Za-z]+$/;
    var chk=document.getElementsByName("tongyi")[0];
    if(u_name=="")
    {
        alert("用户名不能为空")
        document.getElementsByName('uname')[0].focus();
        return false;
    }
    else if(!pattern.test('uname'))
        {
            alert("用户名只能是字母或数字，4-40的长度")
            document.getElementsByName('uname')[0].focus();
            return false;
        }
    else if(u_password=="")
    {
        alert("密码不能为空")
        document.getElementsByName('upword')[0].focus();
        return false;
    }
    else if(!chk.checked)
    {
        alert("请先同意个人隐私保护政策");
        return false;
    }
    alert("注册成功")
    
}