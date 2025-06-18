function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json());
  }
  
  function fetchPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json());
  }
  
  // Promise chain
  fetchUser()
    .then(user => {
      console.log('User:', user.name);
      return fetchPosts(user.id);
    })
    .then(posts => {
      console.log('User Posts:');
      posts.forEach(post => console.log(`- ${post.title}`));
    })
    .catch(error => {
      console.error('Error:', error);
    });
  