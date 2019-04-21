save = () => {
    const Value = document.getElementById('Value').value;
    const title = document.getElementById('title');
    title.innerHTML = Value;
    const list = document.getElementById('list');
    const Name = '<br>' + Value;
    list.innerHTML += Name;
    const Email = document.getElementById('email').value;
    const emailList = document.getElementById('emailList');
    emailList.innerHTML += '<br>' + Email;
}