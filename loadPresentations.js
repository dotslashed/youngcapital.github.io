const presentations = [
  {
    title: 'The Road to Understanding Monads: Part 2',
    description: 'In this talk Remco describes what categories are, how they relate to types, and what functors and monads are.',
    slides: 'https://docs.google.com/presentation/d/153ECriBVdBWWrrgKFiBR09RY6rNb6rsGYgccpxWXiJE/edit?usp=sharing',
    video: 'https://drive.google.com/file/d/1P9oYU_JlMrhVf4AFILwnUvDv12gQEvL_/view?usp=sharing'
  },
];

function getTemplate(templateName) {
  const template = document.getElementById(templateName);
  return template.content.cloneNode(true);
}

function fillTemplate(node, key, value, attribute = 'innerHTML') {
  node.querySelector(`[data-template="${key}"]`)[attribute] = value;
  return node;
}

function renderLink(text, url) {
  const template = getTemplate('link');

  fillTemplate(template, "text", text);
  fillTemplate(template, "link", url, 'href');

  return template;
}

function renderPresentation(presentation) {
  const template = getTemplate('presentation');
  const card = template.querySelector(`[data-template="card"]`);

  fillTemplate(template, "name", presentation.title);
  fillTemplate(template, "description", presentation.description);

  if (presentation.video) {
    const link = renderLink('Link to video', presentation.video);
    card.appendChild(link);
  }

  if (presentation.slides) {
    const link = renderLink('Link to slides', presentation.slides);
    card.appendChild(link);
  }

  return template;
}

function appendPresentation(renderedTemplate) {
  const presentationsContainer = document.getElementById('presentations-container');
  presentationsContainer.appendChild(renderedTemplate);
}

function loadPresentations() {
  presentations
    .map(presentation => renderPresentation(presentation))
    .map(renderedTemplate => appendPresentation(renderedTemplate));
}

window.addEventListener('load', () => loadPresentations());
