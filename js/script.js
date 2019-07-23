function switchVisible() {
    if (document.getElementById('root')) {

        if (document.getElementById('root').style.display == 'none') {
            document.getElementById('root').style.display = 'block';
            document.getElementById('sletat').style.display = 'none';
        }
        else {
            document.getElementById('root').style.display = 'none';
            document.getElementById('sletat').style.display = 'block';
        }
    }
}