async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    header: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
    console.log(response);
  }
}

document.querySelector('#logout').addEventListener('click', logout);
