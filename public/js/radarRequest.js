/*const url = "https://api.radar.io/v1/track";

let body = {
    deviceId:"C305F2DB-56DC-404F-B6C1-BC52F0B6d80D8",
    userId: "1",
    latitude: 40.78382,
    longitude: -73.97536,
    accuracy: 65
}

fetch(url,{
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'prj_test_pk_35e16f210872ff7482ff092b7d66b68de856ccbd',
    },
    body: JSON.stringify(body)
}).then(response=>{
    //should have some error handling here
    if (response.ok){
        console.log(response);
        response.json();
        console.log("nice");
    }else {
        return new Promise.reject("oopsie");
    }
    })
.then(data => {
    // user and events generated
    console.log(data);
  })
.catch(error=>console.error(error));

$.ajax({
    url: url,
    type: 'post',
    data: body,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'prj_test_pk_35e16f210872ff7482ff092b7d66b68de856ccbd'
    },
    dataType: 'json',
    crossDomain: true,
            beforeSend: function(xhr){
                xhr.withCredentials = true;
          },
    success: function (data) {
        console.info(data);
    }
});


Radar.initialize('prj_test_pk_35e16f210872ff7482ff092b7d66b68de856ccbd');
Radar.setUserId("129309");

Radar.trackOnce(function(err, result) {
    if (!err) {
      console.log("success");
    }
  });

alert("success");
*/