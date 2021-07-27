export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
)
// create

export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
)
// login

export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'delete',
  })
)
// logout

