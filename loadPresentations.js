const presentations = [
  // { 
  //   title: 'Placeholder',
  //   description: 'Lorem ipsum solor bla bla bla',
  //   presentation: '',
  //   video: ''
  // },
];

function fillTemplate(node, key, value, attribute = 'innerHTML') {
  node.querySelector(`[data-template="${key}"]`)[attribute] = value;
  return node;
}

function renderPresentation(presentation) {
  const template = document.getElementById('presentation');
  const templateContent = template.content.cloneNode(true);;

  fillTemplate(templateContent, "name", presentation.title);
  fillTemplate(templateContent, "description", presentation.description);
  fillTemplate(templateContent, "video-link", presentation.video, 'href');
  fillTemplate(templateContent, "presentation-link", presentation.presentation, 'href');

  const presentationsContainer = document.getElementById('presentations-container');

  presentationsContainer.appendChild(templateContent);
}

function loadPresentations() {
  presentations.forEach(presentation => renderPresentation(presentation));
}

window.addEventListener('load', () => loadPresentations());
