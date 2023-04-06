var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:1500,
    loading: true,
    content: 'Hello. This is Taylor, a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'Your message cannot be processed due to an error in the system.'
    });
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Please hold on while your message is being processed once more.'
    });
}).then(function(){
    return botui.message.add({
        delay:6000,
        loading: true,
        content:'Your response is processed. Now, could you input your order number below?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:5000,
        loading: true,
        content:'I checked your order and found that no driver was assigned to your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'We found a nearest driver, and your food can be picked up within five minutes.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'Would you like to proceed with your order? If not, we can cancel your order as well.'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:5000,
        loading: true,
        content:'I have processed your request, and the issue has been resolved. Please contact us again if you need further assistance. Bye.'
    });
    
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2]}, "*");
};
