let user = document.getElementById("date");
user.max = new Date().toISOString().split("T")[0];
let res = document.getElementById("result");

function calculateAge() {
    if (!user.value) {
        alert("Please select your birth date!");
        return;
    }

    let bd = new Date(user.value);

    let d1 = bd.getDate();
    let m1 = bd.getMonth() + 1;
    let y1 = bd.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    res.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
