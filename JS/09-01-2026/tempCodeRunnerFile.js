for (let i = 0; i < json.length; i++) {
    const img = document.getElementById("image");
    const p = document.getElementById('username');
    const a = document.getElementById('url');
    img.src = json[i].avatar_url;
    p.textContent = `Username: ${json[i].login}`;
    a.textContent = "Visit Profile";
    a.href = json[i].html_url;
    a.target = '_blank';
  }