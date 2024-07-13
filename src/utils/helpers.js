export const generateElementGroup = (sectionClass, linksObject, divide = 0) => {
  const sections = document.querySelectorAll(sectionClass)
  if (divide > 0) {
    const items = linksObject.map(
      (item) => `<a href=${item.link}><img src='${item.icon.default}' /></a>`
    )
    let rows = ''
    while (items.length > 0) {
      rows += `<div class="row">${items.slice(0, divide).join('')}</div>`
      items.splice(0, divide)
    }
    sections.forEach((section) => (section.innerHTML = rows))
  } else {
    sections.forEach(
      (section) =>
        (section.innerHTML = linksObject
          .map(
            (item) =>
              `<a href=${item.link}><img src='${item.icon.default}' /></a>`
          )
          .join(''))
    )
  }
}

export const generatePosts = (sectionClass, posts) => {
  const section = document.querySelector(sectionClass)
  section.innerHTML = posts
    .map(
      (post) =>
        `<a href=${post.link}><div class="post-container"><img src=${post.icon.default} /><div class="post-content"><h5>${post.title}</h5><p>${post.data}</p></div></div></a>`
    )
    .join('')
}
